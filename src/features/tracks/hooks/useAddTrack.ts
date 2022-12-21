import { useMutation } from '@apollo/client';
import { AddTrackDocument, AddTrackMutation } from 'generated';

export const useAddTrack = () => {
  return useMutation<AddTrackMutation>(AddTrackDocument);
};
