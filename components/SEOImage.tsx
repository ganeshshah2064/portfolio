import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

interface SEOImageProps extends Omit<ImageProps, 'alt' | 'title'> {
  alt: string;
  title?: string;
  className?: string;
  priority?: boolean;
}

export default function SEOImage({
  alt,
  title,
  className = '',
  priority = false,
  ...props
}: SEOImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        {...props}
        alt={alt}
        title={title || alt}
        priority={priority}
        className={`transition-opacity duration-300 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
      )}
    </div>
  );
}
