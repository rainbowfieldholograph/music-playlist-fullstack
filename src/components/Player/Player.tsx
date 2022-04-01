import styles from './Player.module.css';
import { useEffect, useRef } from 'react';
import { PlayerControls } from '../PlayerControls';
import { PlayerVolume } from '../PlayerVolume';
import { useQuery, useReactiveVar } from '@apollo/client';
import { PlayerMusicImage } from '../MusicBox';
import { PlayerInfo } from '../PlayerInfo';
import { PlayerStore } from '../../store/PlayerStore';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { PlayerProps } from './Player.props';
import { PlayerToggleButton } from '../PlayerToggleButton';

const {
  currentTrackVar,
  toggleAudio,
  initializeAudio,
  changeCurrentTime,
  changeVolume,
  currentTimeVar,
  volumeVar,
} = PlayerStore;

export const Player = ({}: PlayerProps): JSX.Element | null => {
  const currentTrack = useReactiveVar(currentTrackVar);
  const playerRef = useRef<null | HTMLDivElement>(null);

  const { data } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

  const handleKeyDown = (event: KeyboardEvent) => {
    const eventTarget = event.target as HTMLElement;
    if (
      !currentTrackVar() ||
      event.ctrlKey ||
      event.metaKey ||
      event.altKey ||
      eventTarget === playerRef.current ||
      eventTarget.tagName !== 'BODY'
    ) {
      return;
    }
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
    if (currentTrack) {
      initializeAudio(currentTrack.src, tracks);
    }
  }, [currentTrack]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!currentTrack) return null;

  return (
    <div aria-label="audio player" tabIndex={0} className={styles.player} ref={playerRef}>
      <PlayerToggleButton />
      <PlayerControls />
      <PlayerMusicImage className={styles.musicImage} />
      <PlayerInfo />
      <PlayerVolume />
    </div>
  );
};
