import './styles/globals.css';
import './styles/base.css';
import { Playlist } from './components/Playlist';
import { Player } from './components/Player';
import { BackToTopButton } from './components/BackToTopButton';
import type { FC } from 'react';

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
