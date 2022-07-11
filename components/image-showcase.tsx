import React from 'react';

const ImageShowcase: React.FC<{
  imageUrl: string;
  imageAlt: string;
}> = ({ imageUrl, imageAlt }) => (
  <img
    alt={imageAlt}
    src={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/images/${imageUrl}`}
    className="rounded-2xl border-4 border-gray-600"
    style={{ maxHeight: '90vh' }} />
);

export default ImageShowcase;
