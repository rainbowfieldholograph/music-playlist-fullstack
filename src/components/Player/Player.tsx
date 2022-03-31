import styles from './Player.module.css';
import { KeyboardEvent, useEffect } from 'react';
import { PlayerControls } from '../PlayerControls';
import { PlayerVolume } from '../PlayerVolume';
import { useQuery, useReactiveVar } from '@apollo/client';
import { PlayerMusicImage } from '../MusicBox';
import { PlayerInfo } from '../PlayerInfo';
import { PlayerStore } from '../../store/PlayerStore';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { PlayerProps } from './Player.props';
import { PlayerToggleButton } from '../PlayerToggleButton';

const { currentTrackVar, toggleAudio, initializeAudio, changeCurrentTime, currentTimeVar } =
  PlayerStore;

export const Player = ({}: PlayerProps): JSX.Element | null => {
  const currentTrack = useReactiveVar(currentTrackVar);

  const { data } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

  const handleKeyDown = (event: KeyboardEvent) => {
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

  useEffect(() => {
    if (currentTrack) {
      initializeAudio(currentTrack.src, tracks);
    }
  }, [currentTrack]);

  if (!currentTrack) return null;

  return (
    <div
      aria-label="audio player"
      tabIndex={0}
      className={styles.player}
      onKeyDown={handleKeyDown}
    >
      <PlayerToggleButton />
      <PlayerControls />
      <PlayerMusicImage className={styles.musicImage} />
      <PlayerInfo />
      <PlayerVolume />
    </div>
  );
};
