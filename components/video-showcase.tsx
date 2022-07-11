import React from 'react';

const VideoShowcase: React.FC<{
  url: string;
}> = ({ url }) => (
  <video controls className="rounded-2xl border-4 border-gray-600">
    <source src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/videos/${url}`} type="video/mp4" />
  </video>
);

export default VideoShowcase;
