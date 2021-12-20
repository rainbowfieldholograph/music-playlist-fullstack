import './globalStyles.css'
import './defaultStyles.css'
import Player from './components/player/Player'
import Playlist from './components/playlist/Playlist'
import client from './utils/Apollo'
import { ApolloProvider } from '@apollo/client'
import { observer } from 'mobx-react-lite'

const App = observer(() => {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <Player />
        <Playlist />
      </div>
    </ApolloProvider>
  )
})

export default App
