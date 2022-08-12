import { useEffect, useRef } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';
import { PlayerControls } from './components/PlayerControls';
import { PlayerVolume } from './components/PlayerVolume';
import { PlayerMusicImage } from '../MusicBox';
import { PlayerInfo } from './components/PlayerInfo';
import { playerStore } from '../../store/PlayerStore';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
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

const CURRENT_TIME_DASH_SEC = 5; // seconds
const VOLUME_DASH = 0.05;

export const Player: FC = () => {
  const currentTrack = useReactiveVar(currentTrackVar);
  const playerRef = useRef<null | HTMLDivElement>(null);

  const { data } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

  // global keys
  // TODO: Add hotkey for toggle random
  const handleWindowKeyDown = (event: KeyboardEvent) => {
    const eventTarget = event.target as HTMLElement;

    const isTargetBody = eventTarget.tagName === 'BODY';
    const isTargetPlayer = eventTarget === playerRef.current;
    const isTargetPlayerChildren = playerRef.current?.contains(eventTarget);

    const checkIsValidKey =
      (currentTrackVar() &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        isTargetBody) ||
      isTargetPlayer ||
      isTargetPlayerChildren;

    if (!checkIsValidKey) return;

    switch (event.code) {
      case 'Space':
        event.preventDefault();
        toggleAudio();
        break;
      case 'ArrowRight':
        event.preventDefault();
        changeCurrentTime(currentTimeVar() + CURRENT_TIME_DASH_SEC);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        changeCurrentTime(currentTimeVar() - CURRENT_TIME_DASH_SEC);
        break;
    }
  };

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
    window.addEventListener('keydown', handleWindowKeyDown);
    return () => window.removeEventListener('keydown', handleWindowKeyDown);
  }, []);

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
