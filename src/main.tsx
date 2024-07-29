import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./styles/theme.ts";
import { SidebarContextProvider } from "./context/ContextSideBar.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SidebarContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </SidebarContextProvider>
  </React.StrictMode>
);
