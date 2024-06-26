import React, { createContext, useState, ReactNode } from 'react';
import { GetServerSideProps } from 'next';

import * as fs from 'fs'

type App = {
  name: string;
  content: ReactNode;
};

type AppContextType = {
  apps: App[];
  setApps: React.Dispatch<React.SetStateAction<App[]>>;
};

export const AppContext = createContext<AppContextType>({} as AppContextType);

export const getServerSideProps: GetServerSideProps = async () => {
  const apps: App[] = [
    {name: 'App 1', content: 'Content for App 1'},
  ];
  //this never gets called for some reason akjsdasdas
  //maybe the prop isnt actually getting passed
  console.log("Hello")

  return { props: { apps } };
};

type AppProviderProps = {
  children: ReactNode;
  apps: App[];
};

const AppProvider: React.FC<AppProviderProps> = ({ children, apps }) => {


  const [appsLoaded, setApps] = useState<App[]>(apps);
  console.log(apps)

  return (
    <AppContext.Provider value={{ apps: appsLoaded, setApps }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;



