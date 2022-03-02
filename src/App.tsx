import './globalStyles.css'
import './defaultStyles.css'
import Player from './components/player/Player'
import Playlist from './components/playlist/Playlist'

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Player />
      <Playlist />
    </div>
  )
}

export default App
