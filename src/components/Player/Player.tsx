import { useEffect, useRef } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { PlayerMusicImage } from '../MusicBox';
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
  changeCurrentTime,
  changeVolume,
  currentTrackVar,
  currentTimeVar,
  volumeVar,
} = playerStore;

type KeyActions = { [key: string]: () => void };

const CURRENT_TIME_DASH_SEC = 5; // seconds
const VOLUME_DASH = 0.05;

export const Player: FC = () => {
  const currentTrack = useReactiveVar(currentTrackVar);
  const playerRef = useRef<null | HTMLDivElement>(null);

  const { data } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

  // local keys
  const handlePlayerKeyDown = (event: ReactKeyBoardEvent) => {
    switch (event.code) {
      case 'ArrowUp':
        event.preventDefault();
        changeVolume(volumeVar() + VOLUME_DASH);
        break;
      case 'ArrowDown':
        event.preventDefault();
        changeVolume(volumeVar() - VOLUME_DASH);
        break;
    }
  };

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
        ArrowRight: () =>
          changeCurrentTime(currentTimeVar() + CURRENT_TIME_DASH_SEC),
        ArrowLeft: () =>
          changeCurrentTime(currentTimeVar() - CURRENT_TIME_DASH_SEC),
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
    >
      <PlayerPlayingToggle />
      <PlayerControls />
      <PlayerMusicImage className={styles.musicImage} />
      <PlayerInfo />
      <PlayerVolume />
      <PlayerToggleRandom />
    </div>
  );
};
