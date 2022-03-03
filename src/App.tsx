import './globalStyles.css'
import './defaultStyles.css'
import Playlist from './components/playlist/Playlist'
import { Player } from './components/player/Player'

const App = (): JSX.Element => {
  return (
    <div className="container">
      <Player />
      <Playlist />
    </div>
  )
}

export default App
