import { createContext, ReactNode, useState } from "react";

type Theme = "dark" | "";

interface AppContextProps {
  theme?: Theme;
  changeTheme?: () => void;
}
const defaultContextValue: AppContextProps = {
  theme: "",
  changeTheme: () => {},
};

const AppContext = createContext<AppContextProps>(defaultContextValue);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [theme, setTheme] = useState<Theme>();
  function changeTheme() {
    setTheme(theme === "" ? "dark" : "");
  }
  return (
    <AppContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;
