import { ToastContainer } from 'react-toastify';
import { Playlist } from './components/Playlist';
import { Player } from './components/Player';
import { BackToTopButton } from './components/BackToTopButton';
import type { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './styles/globals.css';
import './styles/base.css';

export const App: FC = () => {
  return (
    <div className="container">
      <Player />
      <main>
        <Playlist />
      </main>
      <BackToTopButton />
      <ToastContainer />
    </div>
  );
};
