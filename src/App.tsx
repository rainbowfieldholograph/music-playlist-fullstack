import './globalStyles.css';
import './defaultStyles.css';
import Playlist from './components/playlist/Playlist';
import { Player } from './components/player/Player';

const App = (): JSX.Element => {
  return (
    <div className="container">
      <header>
        <Player />
      </header>
      <main>
        <Playlist />
      </main>
    </div>
  );
};

export default App;
