"use client";

import React from "react";

interface VideoPlayerProps {
  src: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, className }) => {
  return <video src={src} controls className={className} />;
};

export default VideoPlayer;
