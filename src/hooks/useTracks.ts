import { useQuery } from '@apollo/client';
import { GetAllTracksDocument, GetAllTracksQuery } from '../generated';

export const useTracks = () => {
  return useQuery<GetAllTracksQuery>(GetAllTracksDocument);
};
