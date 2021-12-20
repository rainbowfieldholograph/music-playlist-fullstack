import './globalStyles.css'
import './defaultStyles.css'
import Player from './components/player/Player'
import Playlist from './components/playlist/Playlist'
import client from './utils/Apollo'
import { ApolloProvider } from '@apollo/client'
import PlayerStore from './mobx/PlayerStore'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'

const App = observer(() => {
  const { currentTrack, fetchTracks } = PlayerStore

  useEffect(() => {
    fetchTracks()
  }, [])

  return (
    <ApolloProvider client={client}>
      <div className="container">
        {currentTrack && <Player />}
        <Playlist />
      </div>
    </ApolloProvider>
  )
})

export default App
