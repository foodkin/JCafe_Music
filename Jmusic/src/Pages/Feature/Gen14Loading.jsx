// Gen14Loading.jsx
import { useState, useEffect } from 'react';
import './Gen14Loading.css';

const Gen14Loading = ({ onLoadingComplete, imageSrc = '/images/Gen14Load.webp' }) => {
  const [loadingText, setLoadingText] = useState('Memuat JMusic...');
  const [isComplete, setIsComplete] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const loadingMessages = [
    'Memuat J Cafe Music...',
    'Menyiapkan Gen14...',
    'Bayar Uang Kas...',
    'Hampir selesai...'
  ];

  // Handle image load
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.error('Failed to load WebP image:', imageSrc);
    setImageLoaded(false);
  };

  useEffect(() => {
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
      messageIndex = (messageIndex + 1) % loadingMessages.length;
      setLoadingText(loadingMessages[messageIndex]);
    }, 750);

    // Simulasi loading time
    const loadingTimer = setTimeout(() => {
      setIsComplete(true);
      clearInterval(messageInterval);
      
      // Delay untuk animasi fade out
      setTimeout(() => {
        onLoadingComplete();
      }, 800);
    }, 3500);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(loadingTimer);
    };
  }, [onLoadingComplete]);

  return (
    <div className={`loading-container ${isComplete ? 'fade-out' : ''}`}>
      
      <div className="loading-image-container">
        {imageLoaded ? (
          <>
            {/* Base image (grayscale/redup) */}
            <div className="loading-image-base">
              <img 
                src={imageSrc} 
                alt="Loading" 
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </div>
            
            {/* Colored image yang mengisi dari bawah */}
            <div className="loading-image-fill">
              <img 
                src={imageSrc} 
                alt="Loading" 
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </div>
          </>
        ) : (
          /* Fallback jika gambar tidak load */
          <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '80px',
            color: 'rgba(255, 255, 255, 0.5)',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '10px'
          }}>
            🎵
          </div>
        )}
        
        {/* Hidden preload image */}
        <img 
          src={imageSrc} 
          alt="" 
          style={{ display: 'none' }}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>

      <div className="loading-text">
        {loadingText}
      </div>

    </div>
  );
};

export default Gen14Loading;