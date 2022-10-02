import { useEffect, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { MusicBoxMemo } from '../MusicBox';
import { playerStore } from '../../stores';
import { PlayerControls } from './components/PlayerControls';
import { PlayerVolume } from './components/PlayerVolume';
import { PlayerInfo } from './components/PlayerInfo';
import { PlayerPlayingToggle } from './components/PlayerTogglePlaying';
import { PlayerToggleRandom } from './components/PlayerToggleRandom';
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

  const playerRef = useRef<null | HTMLDivElement>(null);

  const { data } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

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
        keyActions[code]();
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
      <PlayerPlayingToggle />
      <PlayerControls />
      <MusicBoxMemo className={styles.musicImage} />
      <PlayerInfo />
      <PlayerVolume />
      <PlayerToggleRandom />
    </div>
  );
};
