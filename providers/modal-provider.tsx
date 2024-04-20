"use client";

import UserDataModal from '@/components/shared/modals/user-data-modal';
import React, { useEffect, useState } from 'react'

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
     <>
       <UserDataModal/>
     </>
  )
}

export default ModalProvider
