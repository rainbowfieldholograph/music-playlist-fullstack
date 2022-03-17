import { useEffect } from 'react';
import styles from './Player.module.css';
import PlayerControls from '../playerControls/PlayerControls';
import { PlayerVolume } from '../playerVolume/PlayerVolume';
import { useQuery, useReactiveVar } from '@apollo/client';
import { PlayerMusicImage } from '../playerMusicImage/PlayerMusicImage';
import { PlayerInfo } from '../playerInfo/PlayerInfo';
import PlayerStore from '../../graphql/PlayerStore';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { PlayerProps } from './Player.props';

const DISABLE_TIME = 200;

const {
  audio,
  durationVar,
  currentTrackVar,
  currentTimeVar,
  canChangeTimeVar,
  nextTrack,
  toggleAudio,
} = PlayerStore;

export const Player = ({}: PlayerProps): JSX.Element | null => {
  const currentTrack = useReactiveVar(currentTrackVar);

  const { data } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!audio.src) return;
    switch (event.code) {
      case 'Space':
        event.preventDefault();
        toggleAudio();
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (currentTrack) {
      audio.src = currentTrack.src;
      audio.ontimeupdate = () => currentTimeVar(audio.currentTime);
      audio.onloadeddata = () => {
        setTimeout(() => {
          canChangeTimeVar(true);
        }, DISABLE_TIME);
        durationVar(audio.duration);
      };
      audio.onended = () => {
        canChangeTimeVar(false);
        nextTrack(tracks);
      };
      toggleAudio();
    }
  }, [currentTrack]);

  if (!currentTrack) return null;

  console.log('render player');

  return (
    <div className={styles.player}>
      <PlayerControls />
      <PlayerMusicImage className={styles.musicImage} />
      <PlayerInfo />
      <PlayerVolume />
    </div>
  );
};
