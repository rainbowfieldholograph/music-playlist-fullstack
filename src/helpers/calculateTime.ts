export const calculateTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  const m = minutes < 10 ? `0${minutes}` : `${minutes}`
  const s = secs < 10 ? `0${secs}` : `${secs}`
  return `${m}:${s}`
}
