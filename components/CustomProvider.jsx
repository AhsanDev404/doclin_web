"use client";

import store from "@/redux/store";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
export default function CustomProvider({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <Provider store={store}>{children}</Provider>
      </ChakraProvider>
    </CacheProvider>
  );
}
