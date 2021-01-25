export const formatTime = time => {
  const secs = Math.floor(time / 1000) % 60;
  const mins = Math.floor(time / 1000 / 60) % 60;
  const hrs = Math.floor(time / 1000 / 1000 / 60) % 60;
  return `${hrs}:${mins}:${secs}`;
};
