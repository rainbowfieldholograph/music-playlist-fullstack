import { ToastContainer } from 'react-toastify';
import { BackToTopButton } from 'components';
import { Player } from 'features/player/components';
import { Playlist } from 'pages';
import { Container } from 'components/ui-kit';
import { withProviders } from './hocs';
import type { FC } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';

export const App: FC = withProviders(() => {
  return (
    <Container>
      <Player />
      <main>
        <Playlist />
      </main>
      <BackToTopButton />
      <ToastContainer />
    </Container>
  );
});
