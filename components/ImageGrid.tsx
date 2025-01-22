import React from 'react';
import Image from 'next/image';

interface ImageGridProps {
  images: { src: string; alt: string; rowStart?: number; rowEnd?: number; colStart?: number; colEnd?: number ,fillType?: string}[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  if (images.length === 0) return null;

  return (
    <div className="image-grid grid grid-cols-3 gap-4 mt-4 w-full">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-full h-full " // Maintain aspect ratio
          style={{
            gridRow: `${image.rowStart || 'auto'} / ${image.rowEnd || 'auto'}`,
            gridColumn: `${image.colStart || 'auto'} / ${image.colEnd || 'auto'}`,
          }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit={image.fillType || 'contain'}
            className="absolute inset-0 w-full h-full"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
