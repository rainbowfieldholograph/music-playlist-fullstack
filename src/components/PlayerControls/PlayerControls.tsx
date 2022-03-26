import styles from './PlayerControls.module.css';
import { PlayerControlsProps } from './PlayerControls.props';
import clsx from 'clsx';
import { ReactComponent as PauseIcon } from '../../img/pause-icon.svg';
import { ReactComponent as PlayIcon } from '../../img/play-icon.svg';
import { ReactComponent as ArrowIcon } from '../../img/arrow-icon.svg';
import { PlayerStore } from '../../store/PlayerStore';
import { useQuery, useReactiveVar } from '@apollo/client';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { ButtonIcon } from '../ButtonIcon';

const { prevTrack, nextTrack, toggleAudio, isPlayingVar } = PlayerStore;

export const PlayerControls = ({}: PlayerControlsProps): JSX.Element => {
  const { data } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

  const isPlaying = useReactiveVar(isPlayingVar);

  const showCorrectIcon = (isPlaying: boolean) => (isPlaying ? PauseIcon : PlayIcon);

  return (
    <>
      <ButtonIcon
        className={styles.toggle}
        onClick={() => toggleAudio()}
        SvgIcon={showCorrectIcon(isPlaying)}
      />
      <div className={styles.rewindControls}>
        <ButtonIcon
          SvgIcon={ArrowIcon}
          className={clsx(styles.arrow, styles.inverse)}
          onClick={() => prevTrack(tracks)}
        />
        <ButtonIcon
          SvgIcon={ArrowIcon}
          className={styles.arrow}
          onClick={() => nextTrack(tracks)}
        />
      </div>
    </>
  );
};
