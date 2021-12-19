import { makeAutoObservable } from 'mobx'

class PlayerStore {
  tracks = []
  activeTrack = null
  currentTrackIndex = 0
  playing = false
  isLoading = false
  volume = 1
  currentTime = 0
  duration = 0
  url = `${process.env.REACT_APP_SERVER_URL}/graphql`

  constructor() {
    makeAutoObservable(this)
    this.setDuration = this.setDuration.bind(this)
    this.setCurrentTime = this.setCurrentTime.bind(this)
    this.setVolume = this.setVolume.bind(this)
    this.setLoading = this.setLoading.bind(this)
    this.setTracks = this.setTracks.bind(this)
    this.setPlaying = this.setPlaying.bind(this)
    this.setCurrentTrackIndex = this.setCurrentTrackIndex.bind(this)
    this.fetchTracks = this.fetchTracks.bind(this)
    //привязываем экземпляр обьекта к методам, для того, чтобы при деструктуризации не терялся контекст
  }

  setActiveTrack() {}

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

  setPlaying = (value) => {
    this.playing = value
  }

  setCurrentTrackIndex = (index, play = true) => {
    this.currentTrackIndex = index
    this.setPlaying(play)
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
