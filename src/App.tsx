import './styles/globals.css';
import './styles/base.css';
import { Playlist } from './components/Playlist';
import { Player } from './components/Player';
import { BackToTopButton } from './components/BackToTopButton';

export const App = (): JSX.Element => {
  return (
    <div className="container">
      <Player />
      <main>
        <Playlist />
      </main>
      <BackToTopButton />
    </div>
  );
};
