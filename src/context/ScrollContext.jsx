// context/ScrollContext.jsx
import { createContext, useContext, useState } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [scrollToForm, setScrollToForm] = useState(null);
  const [shouldScrollToForm, setShouldScrollToForm] = useState(false);

  return (
    <ScrollContext.Provider
      value={{
        scrollToForm,
        setScrollToForm,
        shouldScrollToForm,
        setShouldScrollToForm,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
