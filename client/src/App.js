import './App.css'
import './defaultStyles.css'
import Player from './components/player/Player'
import Playlist from './components/playlist/Playlist'
import PlayerState from './context/playerState'
import UploadForm from './components/uploadForm/UploadForm'
import client from './utils/Apollo'
import { ApolloProvider } from '@apollo/client'

const App = () => {
  return (
    <ApolloProvider client={client}>
      <PlayerState>
        <div className="container">
          <Player />
          <Playlist />
          <UploadForm />
        </div>
      </PlayerState>
    </ApolloProvider>
  )
}

export default App
