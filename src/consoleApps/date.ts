const conf = {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  timeZoneName: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: false
};

export default () => {
  const date = new Date();
  return date.toLocaleDateString('en-US', conf);
};
