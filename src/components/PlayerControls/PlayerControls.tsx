import clsx from 'clsx';
import { useQuery } from '@apollo/client';
import { ReactComponent as ArrowIcon } from '../../img/arrow-icon.svg';
import { PlayerStore } from '../../store/PlayerStore';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { ButtonIcon } from '../ButtonIcon';
import { PlayerControlsProps } from './PlayerControls.props';
import styles from './PlayerControls.module.css';

const { prevTrack, nextTrack } = PlayerStore;

export const PlayerControls = ({}: PlayerControlsProps): JSX.Element => {
  const { data } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

  return (
    <div className={styles.controls}>
      <ButtonIcon
        aria-label="Previous audio"
        title="Previous audio"
        SvgIcon={ArrowIcon}
        className={clsx(styles.arrow, styles.inverse)}
        onClick={() => prevTrack(tracks)}
      />
      <ButtonIcon
        aria-label="Next audio"
        title="Next audio"
        SvgIcon={ArrowIcon}
        className={styles.arrow}
        onClick={() => nextTrack(tracks)}
      />
    </div>
  );
};
