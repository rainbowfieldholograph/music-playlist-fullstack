import { KeyboardEvent as ReactKeyBoardEvent, useEffect, useRef } from 'react';
import { useQuery, useReactiveVar } from '@apollo/client';
import { PlayerControls } from '../PlayerControls';
import { PlayerVolume } from '../PlayerVolume';
import { PlayerMusicImage } from '../MusicBox';
import { PlayerInfo } from '../PlayerInfo';
import { PlayerStore } from '../../store/PlayerStore';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { PlayerPlayingToggle } from '../PlayerTogglePlaying';
import { PlayerToggleRandom } from '../PlayerToggleRandom';
import styles from './Player.module.css';

const {
  toggleAudio,
  initializeAudio,
  changeCurrentTime,
  changeVolume,
  currentTrackVar,
  currentTimeVar,
  volumeVar,
} = PlayerStore;

// TODO: Update styles for toggle random

export const Player = (): JSX.Element | null => {
  const currentTrack = useReactiveVar(currentTrackVar);
  const playerRef = useRef<null | HTMLDivElement>(null);

  const { data } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

  // global keys
  // TODO: Add hotkey for toggle random
  const handleWindowKeyDown = (event: KeyboardEvent) => {
    const eventTarget = event.target as HTMLElement;

    const checkIsValidKey =
      (!!currentTrackVar() && // idk why but we can't use reactive var currentTrack here
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey &&
        eventTarget.tagName === 'BODY') ||
      eventTarget === playerRef.current ||
      playerRef.current?.contains(eventTarget);

    if (!checkIsValidKey) return;

    switch (event.code) {
      case 'Space':
        event.preventDefault();
        toggleAudio();
        break;
      case 'ArrowRight':
        event.preventDefault();
        changeCurrentTime(currentTimeVar() + 5);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        changeCurrentTime(currentTimeVar() - 5);
        break;
    }
  };

  // local keys
  const handlePlayerKeyDown = (event: ReactKeyBoardEvent) => {
    switch (event.code) {
      case 'ArrowUp':
        event.preventDefault();
        changeVolume(volumeVar() + 0.05);
        break;
      case 'ArrowDown':
        event.preventDefault();
        changeVolume(volumeVar() - 0.05);
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
      tabIndex={0}
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
