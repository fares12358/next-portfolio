'use client'; // important if you're using Next.js 13+ app router

import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isAdminLoged, setIsAdminLoged] = useState(false);

  return (
    <UserContext.Provider value={{ isAdminLoged, setIsAdminLoged}}>
      {children}
    </UserContext.Provider>
  );
};

// Optional custom hook
export const useUser = () => useContext(UserContext);
