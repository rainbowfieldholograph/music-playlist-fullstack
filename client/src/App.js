import './App.css'
import './defaultStyles.css'
import Player from './components/player/Player'
import Playlist from './components/playlist/Playlist'
import PlayerState from './context/playerState'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import UploadForm from './components/uploadForm/UploadForm'

const SERVER_URL = 'http://localhost:3000'
const uriPath = SERVER_URL + '/graphql'
const uploadLink = createUploadLink({ uri: uriPath })

const client = new ApolloClient({
  link: uploadLink,
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <PlayerState>
        <main className="container">
          <Player />
          <Playlist />
          <UploadForm />
        </main>
      </PlayerState>
    </ApolloProvider>
  )
}

export default App
