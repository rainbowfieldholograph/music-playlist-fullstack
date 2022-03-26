import styles from './Player.module.css';
import { useEffect } from 'react';
import { PlayerControls } from '../PlayerControls';
import { PlayerVolume } from '../PlayerVolume';
import { useQuery, useReactiveVar } from '@apollo/client';
import { PlayerMusicImage } from '../MusicBox';
import { PlayerInfo } from '../PlayerInfo';
import { PlayerStore } from '../../store/PlayerStore';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { PlayerProps } from './Player.props';

const { audio, currentTrackVar, toggleAudio, initializeAudio } = PlayerStore;

export const Player = ({}: PlayerProps): JSX.Element | null => {
  const currentTrack = useReactiveVar(currentTrackVar);

  const { data } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!audio.src) return;
    switch (event.code) {
      case 'Space':
        // event.preventDefault();
        // toggleAudio();
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (currentTrack) {
      initializeAudio(currentTrack.src, tracks);
      toggleAudio();
    }
  }, [currentTrack]);

  if (!currentTrack) return null;

  return (
    <div className={styles.player}>
      <PlayerControls />
      <PlayerMusicImage className={styles.musicImage} />
      <PlayerInfo />
      <PlayerVolume />
    </div>
  );
};
