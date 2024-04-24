"use client";

import { appContext } from '@/contexts/app-context';
import { useMediaQuery } from "@uidotdev/usehooks";
import { FC, PropsWithChildren } from 'react';

export interface AppProviderProps {
  userAgent: any;
}

const AppProvider: FC<PropsWithChildren<AppProviderProps>> = ({
  children,
  userAgent,
}) => {

   let inMobileView = false;
  if (typeof window !== 'undefined') {
    inMobileView = useMediaQuery("only screen and (max-width : 768px)");
  }
  return (
    <appContext.Provider
      value={{
        isMobile: userAgent.device.type === 'mobile' || inMobileView,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;
