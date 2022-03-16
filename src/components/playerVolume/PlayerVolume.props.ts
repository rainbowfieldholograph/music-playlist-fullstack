import { Volume } from '../../graphql/localState';

export interface PlayerVolumeProps {
  volumeState: Volume;
  handleVolume: Function;
}
