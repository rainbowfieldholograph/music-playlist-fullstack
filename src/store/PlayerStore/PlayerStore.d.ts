export type SwitchTrackActions = 'NEXT' | 'PREV' | 'RANDOM';

export type NewIndexes = {
  [key in SwitchTrackActions]: number;
};
