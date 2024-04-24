import { appContext } from '@/contexts/app-context';
import { useContext } from 'react';

export const useAppContext = () => useContext(appContext);
