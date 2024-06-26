import React, { createContext, useState, ReactNode } from 'react';

type App = {
  name: string;
  content: string;
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
  const [apps, setApps] = useState<App[]>([
    { name: 'App 1', content: 'Content of App 1' },
    { name: 'App 2', content: 'Content of App 2' },
  ]);

  return (
    <AppContext.Provider value={{ apps, setApps }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
