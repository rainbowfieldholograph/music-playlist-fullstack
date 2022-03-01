import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { currentTrackIdVar } from '../graphql/apollo/apollo'
import { GET_ALL_TRACKS } from '../graphql/tracks/query'
import PlayerStore from '../mobx/PlayerStore'

export const useTracksFetching = () => {
  const { tracks, setTracks } = PlayerStore
  const [loading, setLoading] = useState(true)
  const { error } = useQuery(GET_ALL_TRACKS, {
    onCompleted: ({ getAllTracks: tracksData }) => {
      setTracks(tracksData)
      setLoading(false)
    },
    onError: () => {
      setLoading(false)
    },
  })

  return { tracks, loading, error }
}
