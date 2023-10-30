"use client";
import React from "react";
import YouTube from "react-youtube";

function YoutubePlayer({ videoId }: { videoId: string }) {
  // Set up event handlers
  const onReady = (event: any) => {
    // Access the player instance
    const player = event.target;

    // For example, you can automatically play the video
    player.playVideo();
  };

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const onError = (error: any) => {
    console.error("YouTube Player Error:", error);
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={onReady}
      opts={opts}
      iframeClassName="w-full h-[800px] max-md:h-[500px] max-sm:h-[250px]"
      onError={onError}
    />
  );
}

export default YoutubePlayer;
