import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

type SideBarDrawerContextData = UseDisclosureReturn;

const SideBarContext = createContext({} as SideBarDrawerContextData);

type ContextChildren = {
  children: ReactNode;
};

export const SidebarContextProvider = ({ children }: ContextChildren) => {
  const disclousure = useDisclosure();
  return (
    <SideBarContext.Provider value={disclousure}>
      {children}
    </SideBarContext.Provider>
  );
};

export const useSideBarDrawer = () => useContext(SideBarContext);
