export type SwitchTrackActions = 'NEXT' | 'PREV' | 'RANDOM';

export type newIndexesType = {
  [key in SwitchTrackActions]: number;
};
