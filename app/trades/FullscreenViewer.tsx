import React, {useEffect} from 'react';
import Button from "@cloudscape-design/components/button";

export default function FullscreenViewer({ imageUrl, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.9)',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={imageUrl}
        alt="Fullscreen"
        style={{
          maxWidth: '95vw',
          maxHeight: '95vh',
          objectFit: 'contain',
        }}
      />
      <div style={{ position: 'absolute', top: 5, left: 5 }}>
        <Button variant="icon" iconName="close" onClick={onClose} />
      </div>
    </div>
  );
}
