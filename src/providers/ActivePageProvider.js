import { useState, createContext } from 'react';

const ActivePageContext = createContext();

function ActivePageProvider({ children }) {
  const [activePage, setActivePage] = useState('/');

  return (
    <ActivePageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </ActivePageContext.Provider>
  );
}

export { ActivePageContext, ActivePageProvider };