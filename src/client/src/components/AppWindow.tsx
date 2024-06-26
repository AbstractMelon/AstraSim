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
    <DraggableBox onHeaderMouseDown={(e) => {}}>
      <div className={`${styles.window} ${isFullscreen ? styles.fullscreen : ''}`}>
        <div className={styles.boxHeader} data-header>
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
