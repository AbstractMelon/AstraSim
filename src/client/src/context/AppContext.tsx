import React, { createContext, useState, ReactNode } from 'react';
import { GetServerSideProps } from 'next';


type App = {
  name: string;
  content: ReactNode;
};

type AppContextType = {
  apps: App[];
  setApps: React.Dispatch<React.SetStateAction<App[]>>;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

type AppProviderProps = {
  children: ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

  const loadedApps: App[] = []


  const [apps, setApps] = useState<App[]>(loadedApps);

  return (
    <AppContext.Provider value={{ apps, setApps }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;



