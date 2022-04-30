import './styles/globals.css';
import './styles/base.css';
import { FC } from 'react';
import { Playlist } from './components/Playlist';
import { Player } from './components/Player';
import { BackToTopButton } from './components/BackToTopButton';

export const App: FC = () => {
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
