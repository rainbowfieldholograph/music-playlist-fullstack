import { useQuery } from '@apollo/client';
import { GetAllTracksDocument, GetAllTracksQuery } from 'generated';

export const useTracks = () => {
  const { data, ...rest } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);

  return { tracks: data?.tracks, ...rest };
};
