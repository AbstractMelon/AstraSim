import React, { ReactNode, useRef, useState } from 'react';
import DraggableBox from './DraggableBox';
import styles from '../styles/AppWindow.module.css';
import { FaTimes, FaMinus, FaExpand } from 'react-icons/fa';

type AppWindowProps = {
  app: {
    name: string;
    content: ReactNode;
  };
};

const AppWindow: React.FC<AppWindowProps> = ({ app }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

    const handleClose = () => {
    };

  return (
    <DraggableBox onMouseDown={(e) => {
      if (headerRef.current && headerRef.current.contains(e.target as Node)) {
        e.stopPropagation();
      }
    }}>
      <div className={`${styles.window} ${isFullscreen ? styles.fullscreen : ''}`}>
        <div ref={headerRef} className={styles.boxHeader}>
          <h2>{app.name}</h2>
          <div className={styles.windowControls}>
            <FaMinus onClick={handleMinimize} />
            <FaExpand onClick={handleFullscreen} />
            <FaTimes onClick={handleClose} />
          </div>
        </div>
        {!isMinimized && <div className={styles.content}>{app.content}</div>}
      </div>
    </DraggableBox>
  );
};

export default AppWindow;
