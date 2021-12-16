import { makeAutoObservable } from 'mobx'

class PlayerStore {
  url = `${process.env.REACT_APP_SERVER_URL}/graphql`
  tracks = []
  currentTrackIndex = 0
  playing = false
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  setLoading(value) {
    this.isLoading = value
  }

  setTracks(data) {
    this.tracks = data
  }

  setCurrentTrackIndex = (id, play = true) => {
    this.currentTrackIndex = id
    this.playing = play
  }

  setPlaying = (value) => {
    this.playing = value
  }

  fetchTracks() {
    this.setLoading(true)
    fetch(this.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query {
              getAllTracks {
                id
                title
                author
                src
            }
          }`,
      }),
    })
      .then((response) => response.json())
      .then(({ data }) => {
        this.setTracks(data.getAllTracks)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
      .finally(() => this.setLoading(false))
  }

  togglePlaying = () => {
    this.setPlaying(!this.playing)
  }

  prevTrack = () => {
    this.currentTrackIndex === 0
      ? this.setCurrentTrackIndex(this.tracks.length - 1)
      : this.setCurrentTrackIndex(this.currentTrackIndex - 1)
  }

  nextTrack = () => {
    this.currentTrackIndex === this.tracks.length - 1
      ? this.setCurrentTrackIndex(0)
      : this.setCurrentTrackIndex(this.currentTrackIndex + 1)
  }

  handleEnd = () => {
    this.nextTrack()
  }
}

export default new PlayerStore()
