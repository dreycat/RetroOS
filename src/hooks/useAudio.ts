import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';

import getStorageData from '../utils/getStarogeData';

enum Keys {
  Volume = 'audio_player_volume',
  Muted = 'audio_player_is_muted',
  Track = 'audio_player_track_id'
}

type Track = {
  id: number;
  name: string;
  url: string;
  title: string;
};

const checkTrack = (playlist: Track[], getTrackId: () => number) => () => {
  const trackId = getTrackId();
  if (typeof trackId !== 'number') return 0;
  const index = playlist.findIndex(({ id }) => id === trackId);
  return index === -1 ? 0 : trackId;
};

export default (playlist: Track[]) => {
  const ref = useRef<HTMLAudioElement>(null);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState<number>(getStorageData(Keys.Volume, 1));
  const [isPlaying, setPlaying] = useState(false);
  const [isMuted, setMuted] = useState<boolean>(getStorageData(Keys.Muted, false));
  const [trackId, setTrack] = useState<number>(checkTrack(playlist, getStorageData(Keys.Track, 0)));

  const audio = useMemo(() => {
    console.log('create audio element');
    const src = playlist.find(({ id }) => id === trackId)?.url ?? playlist[0].url;
    return React.createElement('audio', {
      ref,
      src,
      controls: false,
      preload: 'metadata',
      onTimeUpdate: () => setTime(ref.current!.currentTime),
      onDurationChange: () => setDuration(ref.current!.duration)
    });
  }, [trackId, playlist]);

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
    localStorage.setItem(Keys.Track, JSON.stringify(trackId));
  }, [trackId]);

  useEffect(() => {
    if (!ref.current) return;
    if (isPlaying) {
      ref.current!.play();
    } else if (!isPlaying) {
      ref.current!.pause();
    }
  }, [isPlaying, audio]);

  // TODO: rewrite
  const nextTrack = useCallback(() => {
    const len = playlist.length;
    if (len === 0) return;
    if (trackId < len - 1) {
      console.log('next');
      setTrack(trackId + 1);
    }
  }, [playlist, trackId]);

  const prevTrack = useCallback(() => {
    const len = playlist.length;
    if (len === 0) return;
    if (trackId > 0) {
      console.log('prev');
      setTrack(trackId - 1);
    }
  }, [playlist, trackId]);

  const seek = useCallback(
    (time: number) => {
      const element = ref.current;
      if (!element || duration === Infinity || duration === undefined || duration === null) {
        return;
      }
      time = Math.min(duration, Math.max(0, time));
      element.currentTime = time;
    },
    [duration]
  );

  return {
    audio,
    state: {
      time,
      duration,
      volume,
      isPlaying,
      isMuted,
      trackId,
      curentTrack: playlist[trackId]
    },
    controlls: {
      setPlaying,
      setVolume,
      setMuted,
      setTrack,
      nextTrack,
      prevTrack,
      seek
    }
  };
};
