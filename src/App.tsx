import './globalStyles.css';
import './defaultStyles.css';
import { Playlist } from './components/Playlist';
import { Player } from './components/Player';

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
