import React, {ReactNode} from 'react';
import DraggableBox from './DraggableBox';
import styles from '../styles/AppWindow.module.css';

type AppWindowProps = {
  app: {
    name: string;
    content: ReactNode;
  };
};


const AppWindow: React.FC<AppWindowProps> = ({ app }) => {
  return (
    <DraggableBox>
      <div className={styles.window}>
        <h2>{app.name}</h2>
        <div className={styles.content}>
          {app.content}
        </div>
      </div>
    </DraggableBox>
  );
};

export default AppWindow;
