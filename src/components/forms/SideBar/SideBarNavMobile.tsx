import { Stack } from "@chakra-ui/react";
import NavSection from "./NavSection";
import NavLink from "./NavLink";
import {
  RiDashboard3Line,
  RiGitForkLine,
  RiInputMethodFill,
  RiUserFill,
} from "react-icons/ri";

const SideBarNavMobile = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink icon={RiDashboard3Line} text="Dashboard" />
        <NavLink icon={RiUserFill} text="Usuário" />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodFill} text="Formulários" />
        <NavLink icon={RiGitForkLine} text="Automação" />
      </NavSection>
    </Stack>
  );
};

export default SideBarNavMobile;
