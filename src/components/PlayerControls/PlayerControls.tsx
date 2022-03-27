import styles from './PlayerControls.module.css';
import { PlayerControlsProps } from './PlayerControls.props';
import clsx from 'clsx';
import { ReactComponent as ArrowIcon } from '../../img/arrow-icon.svg';
import { PlayerStore } from '../../store/PlayerStore';
import { useQuery } from '@apollo/client';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { ButtonIcon } from '../ButtonIcon';

const { prevTrack, nextTrack } = PlayerStore;

export const PlayerControls = ({}: PlayerControlsProps): JSX.Element => {
  const { data } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

  return (
    <div className={styles.controls}>
      <ButtonIcon
        aria-label="previous audio"
        SvgIcon={ArrowIcon}
        className={clsx(styles.arrow, styles.inverse)}
        onClick={() => prevTrack(tracks)}
      />
      <ButtonIcon
        aria-label="next audio"
        SvgIcon={ArrowIcon}
        className={styles.arrow}
        onClick={() => nextTrack(tracks)}
      />
    </div>
  );
};
