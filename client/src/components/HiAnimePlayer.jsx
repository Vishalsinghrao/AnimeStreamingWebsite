import React, { useRef, useState, useEffect } from 'react';
import {
  FaPlay, FaPause, FaVolumeUp, FaExpand, FaForward, FaBackward
} from 'react-icons/fa';
import './HiAnimePlayer.css';

const HiAnimePlayer = ({ src }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');

 const formatTime = (secs) => {
  const h = Math.floor(secs / 3600);
  const m = Math.floor((secs % 3600) / 60);
  const s = Math.floor(secs % 60);

  return [
    String(h).padStart(2, '0'),
    String(m).padStart(2, '0'),
    String(s).padStart(2, '0')
  ].join(':');
};


  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const value = parseFloat(e.target.value);
    videoRef.current.volume = value;
    setVolume(value);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    setProgress((video.currentTime / video.duration) * 100);
    setCurrentTime(formatTime(video.currentTime));
  };

  const handleSeek = (e) => {
    const width = e.target.clientWidth;
    const offsetX = e.nativeEvent.offsetX;
    const duration = videoRef.current.duration;
    videoRef.current.currentTime = (offsetX / width) * duration;
  };

  const handleLoadedMetadata = () => {
    setDuration(formatTime(videoRef.current.duration));
  };

  const skipForward = () => {
    videoRef.current.currentTime += 10;
  };

  const skipBackward = () => {
    videoRef.current.currentTime -= 10;
  };

  const toggleFullscreen = () => {
    const container = videoRef.current.parentElement;
    if (!document.fullscreenElement) {
      container.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="hianime-wrapper">
      <video
        ref={videoRef}
        className="hianime-video"
        src={src}
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />

      <div className="hianime-controls">
        <div className="hianime-progress" onClick={handleSeek}>
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="control-row">
          <button onClick={skipBackward}><FaBackward /></button>
          <button onClick={togglePlay}>{isPlaying ? <FaPause /> : <FaPlay />}</button>
          <button onClick={skipForward}><FaForward /></button>


          <FaVolumeUp />
          <input type="range" min="0" max="1" step="0.05" value={volume} onChange={handleVolumeChange} />
          <div className="time-info">{currentTime} / {duration}</div>

          <button onClick={toggleFullscreen}><FaExpand /></button>
        </div>
      </div>
    </div>
  );
};

export default HiAnimePlayer;
