import { makeAutoObservable } from 'mobx'

class PlayerStore {
  tracks = []
  currentTrack = null
  playing = false
  isLoading = true
  volume = 1
  currentTime = 0
  duration = 0
  url = `${process.env.REACT_APP_SERVER_URL}/graphql`

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  setDuration(value) {
    this.duration = value
  }

  setCurrentTime(value) {
    this.currentTime = value
  }

  setVolume(value) {
    this.volume = value
  }

  setLoading(value) {
    this.isLoading = value
  }

  setTracks(data) {
    this.tracks = data
  }

  setPlaying(value) {
    this.playing = value
  }

  setCurrentTrack(track, play = true) {
    this.currentTrack = track
    this.setPlaying(play)
    console.log('setcurtrack:', this.currentTrack)
  }

  async fetchTracks() {
    this.setLoading(true)
    try {
      const response = await fetch(this.url, {
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
      const {
        data: { getAllTracks: tracks },
      } = await response.json()
      this.setTracks(tracks)
      return tracks
    } catch (error) {
      console.log('error: ', error)
    } finally {
      this.setLoading(false)
    }
  }

  prevTrack() {
    const currentIndex = this.tracks.indexOf(this.currentTrack)
    currentIndex === 0
      ? this.setCurrentTrack(this.tracks[this.tracks.length - 1])
      : this.setCurrentTrack(this.tracks[currentIndex - 1])
  }

  nextTrack() {
    const currentIndex = this.tracks.indexOf(this.currentTrack)
    currentIndex === this.tracks.length - 1
      ? this.setCurrentTrack(this.tracks[0])
      : this.setCurrentTrack(this.tracks[currentIndex + 1])
  }

  handleEnd() {
    this.nextTrack()
  }
}

export default new PlayerStore()
