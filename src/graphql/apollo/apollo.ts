import { ApolloClient, InMemoryCache, NormalizedCacheObject, makeVar } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { ITrack } from '../../interfaces/track.interface'

export type CurrentTrack = ITrack | null
export type IsPlaying = boolean
export type Volume = number
export type CurrentTime = number
export type Duration = number

export const currentTrackVar = makeVar<CurrentTrack>(null)
export const isPlayingVar = makeVar<IsPlaying>(false)
export const volumeVar = makeVar<Volume>(1.0)
export const currentTimeVar = makeVar<CurrentTime>(0)
export const durationVar = makeVar<Duration>(0)

const uri = `${import.meta.env.VITE_SERVER_URL}/graphql`
const link = createUploadLink({ uri })
const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        currentTrack: {
          read: () => currentTrackVar(),
        },
        isPlaying: {
          read: () => isPlayingVar(),
        },
        volume: {
          read: () => volumeVar(),
        },
        currentTime: {
          read: () => currentTimeVar(),
        },
        duration: {
          read: () => durationVar(),
        },
      },
    },
  },
})

const client = new ApolloClient<NormalizedCacheObject>({
  link,
  cache,
})

export default client
