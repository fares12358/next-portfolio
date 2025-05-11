'use client'; // important if you're using Next.js 13+ app router

import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // or any default
  const [isAdminLoged, setIsAdminLoged] = useState(false); // or any default

  return (
    <UserContext.Provider value={{ user, setUser ,isAdminLoged, setIsAdminLoged}}>
      {children}
    </UserContext.Provider>
  );
};

// Optional custom hook
export const useUser = () => useContext(UserContext);
