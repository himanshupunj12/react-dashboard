import { createContext, useContext, useState } from "react";

const ColorModeContext = createContext();

const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggleColorMode = () => setMode(mode === "dark" ? "light" : "dark");
  return (
    <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};

const useColorMode = () => {
  const context = useContext(ColorModeContext);
  if (!context)
    throw new Error(
      "ColorModeContext was used outside of the ColorModeProvider"
    );
  return context;
};

export { ColorModeProvider, useColorMode };
