import './globalStyles.css';
import './defaultStyles.css';
import Playlist from './components/playlist/Playlist';
import { Player } from './components/player/Player';

export const App = (): JSX.Element => {
  return (
    <div className="container">
      <Player />
      <main>
        <Playlist />
      </main>
    </div>
  );
};
