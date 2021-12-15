import { makeAutoObservable } from 'mobx'

class PlayerStore {
  url = `${process.env.REACT_APP_SERVER_URL}/graphql`
  tracks = []
  currentTrack = 0
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
      .then((res) => res.json())
      .then((res) => {
        this.setTracks(res.data.getAllTracks)
      })
      .catch((error) => {
        console.log('error: ', error)
      })
      .finally(() => this.setLoading(false))
  }

  togglePlaying = () => {
    this.playing = !this.playing
  }

  setCurrentTrack = (id, play = true) => {
    this.currentTrack = id
    this.playing = play
  }

  prevTrack = () => {
    this.currentTrack === 0
      ? this.setCurrentTrack(this.tracks.length - 1)
      : this.setCurrentTrack(this.currentTrack - 1)
  }

  nextTrack = () => {
    this.currentTrack === this.tracks.length - 1
      ? this.setCurrentTrack(0)
      : this.setCurrentTrack(this.currentTrack + 1)
  }

  handleEnd = () => {
    this.nextTrack()
  }
}

export default new PlayerStore()
