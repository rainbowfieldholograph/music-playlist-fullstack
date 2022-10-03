import { useEffect, useRef } from 'react';
import { MusicBoxMemo } from '../MusicBox';
import { playerStore } from '../../stores';
import { useTracks } from '../../hooks/useTracks';
import { Controls } from './components/Controls';
import { Volume } from './components/Volume';
import { Info } from './components/Info';
import { TogglePlaying } from './components/TogglePlaying';
import { ToggleRandom } from './components/ToggleRandom';
import styles from './Player.module.scss';
import type { KeyboardEvent as ReactKeyBoardEvent, FC } from 'react';

const {
  toggleAudio,
  initializeAudio,
  useCurrentTrack,
  updateVolume,
  updateCurrentTime,
} = playerStore;

type KeyActions = { [key: string]: () => void };

const CURRENT_TIME_DASH_SEC = 5; // seconds
const VOLUME_DASH = 0.05;

export const Player: FC = () => {
  const currentTrack = useCurrentTrack();

  const playerRef = useRef<HTMLDivElement>(null);

  const { data: tracks } = useTracks();

  // local keys
  const handlePlayerKeyDown = (event: ReactKeyBoardEvent) => {
    switch (event.code) {
      case 'ArrowUp':
        event.preventDefault();
        updateVolume(VOLUME_DASH);
        break;
      case 'ArrowDown':
        event.preventDefault();
        updateVolume(-VOLUME_DASH);
        break;
    }
  };

  // TODO: Add playlist store logic
  useEffect(() => {
    if (currentTrack && tracks) {
      initializeAudio(currentTrack.src, tracks);
    }
  }, [currentTrack, tracks]);

  useEffect(() => {
    // global keys
    // TODO: Add hotkey for toggle random
    const handleWindowKeyDown = (event: KeyboardEvent) => {
      const eventTarget = event.target as HTMLElement;
      const bodyName = window.document.body.tagName;

      const isTargetBody = eventTarget.tagName === bodyName;
      const isTargetPlayer = eventTarget === playerRef.current;
      const isTargetPlayerChildren = playerRef.current?.contains(eventTarget);

      const isValidKey =
        (currentTrack &&
          !event.ctrlKey &&
          !event.metaKey &&
          !event.altKey &&
          isTargetBody) ||
        isTargetPlayer ||
        isTargetPlayerChildren;

      if (!isValidKey) return;

      const keyActions: KeyActions = {
        Space: () => toggleAudio(),
        ArrowRight: () => updateCurrentTime(CURRENT_TIME_DASH_SEC),
        ArrowLeft: () => updateCurrentTime(-CURRENT_TIME_DASH_SEC),
      };

      const { code } = event;

      if (Object.hasOwn(keyActions, code)) {
        event.preventDefault();

        const action = keyActions[code];

        action();
      }
    };

    window.addEventListener('keydown', handleWindowKeyDown);

    return () => window.removeEventListener('keydown', handleWindowKeyDown);
  }, [currentTrack]);

  if (!currentTrack) return null;

  return (
    <div
      onKeyDown={handlePlayerKeyDown}
      aria-label="Audio player"
      className={styles.player}
      ref={playerRef}
      tabIndex={0}
    >
      <TogglePlaying />
      <Controls />
      <MusicBoxMemo className={styles.musicImage} />
      <Info />
      <Volume />
      <ToggleRandom />
    </div>
  );
};
