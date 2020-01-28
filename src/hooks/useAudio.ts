import React, { useRef, useState, useMemo, useCallback, useEffect } from 'react';

export default (defaultSrc: string) => {
  const ref = useRef<HTMLAudioElement>(null);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isPlaying, setPlaying] = useState(false);
  const [isMuted, setMuted] = useState(false);
  const [src, setSrc] = useState(defaultSrc);

  const audio = useMemo(() => {
    console.log('create audio element');
    return React.createElement('audio', {
      ref,
      src,
      controls: false,
      preload: 'metadata',
      onTimeUpdate: () => setTime(ref.current!.currentTime),
      onDurationChange: () => setDuration(ref.current!.duration)
    });
  }, [src]);

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
      ref.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (isPlaying && ref.current) {
      ref.current.play();
    } else if (!isPlaying && ref.current) {
      ref.current.pause();
    }
  }, [src, isPlaying]);

  return {
    audio,
    state: {
      time,
      duration,
      volume,
      isPlaying,
      isMuted
    },
    controlls: {
      setPlaying,
      setVolume,
      setMuted,
      setSrc
    }
  };
};
