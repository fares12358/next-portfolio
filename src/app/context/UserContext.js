'use client'; // important if you're using Next.js 13+ app router

import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // or any default
  const [isAdminLoged, setIsAdminLoged] = useState(false); // or any default
  const [heardFrom, setHeardFrom] = useState('');
  const [role, setRole] = useState('');
  const [onClose, setOnClose] = useState(false);
  const [vistors, setVisitors] = useState(null);
  const [V_loading, setV_Loading] = useState(false)
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);


  return (
    <UserContext.Provider value={{ loader, setLoader,data, setData,user, setUser, isAdminLoged, setIsAdminLoged, heardFrom, setHeardFrom, role, setRole, onClose, setOnClose, vistors, setVisitors, V_loading, setV_Loading }}>
      {children}
    </UserContext.Provider>
  );
};

// Optional custom hook
export const useUser = () => useContext(UserContext);
