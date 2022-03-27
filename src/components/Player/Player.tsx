import styles from './Player.module.css';
import { KeyboardEvent, useEffect, useRef } from 'react';
import { PlayerControls } from '../PlayerControls';
import { PlayerVolume } from '../PlayerVolume';
import { useQuery, useReactiveVar } from '@apollo/client';
import { PlayerMusicImage } from '../MusicBox';
import { PlayerInfo } from '../PlayerInfo';
import { PlayerStore } from '../../store/PlayerStore';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { PlayerProps } from './Player.props';
import { PlayerToggleButton } from '../PlayerToggleButton';

const { currentTrackVar, toggleAudio, initializeAudio } = PlayerStore;

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
    }
  };

  useEffect(() => {
    if (currentTrack) {
      initializeAudio(currentTrack.src, tracks);
      toggleAudio();
    }
  }, [currentTrack]);

  if (!currentTrack) return null;

  return (
    <div tabIndex={0} className={styles.player} onKeyDown={handleKeyDown}>
      <PlayerToggleButton />
      <PlayerControls />
      <PlayerMusicImage className={styles.musicImage} />
      <PlayerInfo />
      <PlayerVolume />
    </div>
  );
};
