import { iconConfig } from "@/lib/react-icon";
import { queryClient } from "@/lib/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { IconContext } from "react-icons";
import { QueryClientProvider } from "react-query";

export const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <IconContext.Provider value={iconConfig}>{children}</IconContext.Provider>
    </ChakraProvider>
  </QueryClientProvider>
);
