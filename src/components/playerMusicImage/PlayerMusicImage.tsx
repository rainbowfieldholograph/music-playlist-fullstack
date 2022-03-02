import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './PlayerMusicImage.module.css'

export const PlayerMusicImage = (): JSX.Element => {
  return (
    <div className={styles.box}>
      <FontAwesomeIcon style={{ fontSize: '1.7rem' }} icon={faMusic} color="black" />
    </div>
  )
}
