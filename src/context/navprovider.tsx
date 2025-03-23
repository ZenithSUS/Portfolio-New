import { createContext, useContext, useState } from "react";

interface NavContextProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

type NavProviderProps = {
  children: React.ReactNode;
};

const NavContext = createContext<NavContextProps>({
  name: "",
  setName: () => {},
} as NavContextProps);

export function NavProvider({ children }: NavProviderProps) {
  const [name, setName] = useState<string>("About");

  return (
    <NavContext.Provider value={{ name, setName }}>
      {children}
    </NavContext.Provider>
  );
}

export const useNav = () => useContext(NavContext);
