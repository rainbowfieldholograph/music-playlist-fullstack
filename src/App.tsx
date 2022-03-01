import './globalStyles.css'
import './defaultStyles.css'
import Player from './components/player/Player'
import Playlist from './components/playlist/Playlist'
import client from './graphql/apollo/apollo'
import { ApolloProvider } from '@apollo/client'

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Player />
        <Playlist />
      </div>
    </ApolloProvider>
  )
}

export default App
