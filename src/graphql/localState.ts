import { makeVar } from "@apollo/client";
import { Track } from "../generated";

export type CurrentTrack = Track | null;
export type IsPlaying = boolean;
export type Volume = number;
export type CurrentTime = number;
export type Duration = number;

export const currentTrackVar = makeVar<CurrentTrack>(null);
export const isPlayingVar = makeVar<IsPlaying>(false);
export const volumeVar = makeVar<Volume>(0.5);
export const currentTimeVar = makeVar<CurrentTime>(0);
export const durationVar = makeVar<Duration>(0);