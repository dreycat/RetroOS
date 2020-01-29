import React, { useRef, useState, useMemo, useEffect } from 'react';

import getStorageData from '../utils/getStarogeData';

enum Keys {
  Volume = 'audio_player_volume',
  Muted = 'audio_player_is_muted'
}

export default (defaultSrc: string) => {
  const ref = useRef<HTMLAudioElement>(null);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState<number>(getStorageData(Keys.Volume, 1));
  const [isPlaying, setPlaying] = useState(false);
  const [isMuted, setMuted] = useState<boolean>(getStorageData(Keys.Muted, false));
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
    localStorage.setItem(Keys.Volume, JSON.stringify(volume));
    if (!ref.current) return;
    ref.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    localStorage.setItem(Keys.Muted, JSON.stringify(isMuted));
    if (!ref.current) return;
    ref.current.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    if (!ref.current) return;
    if (isPlaying) {
      ref.current!.play();
    } else if (!isPlaying) {
      ref.current!.pause();
    }
  }, [isPlaying, audio]);

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
