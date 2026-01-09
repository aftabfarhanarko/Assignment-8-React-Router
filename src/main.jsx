import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./Router/Router";
import ContextProvider from "./context/ContextProvider";
import { ToastContainer } from "react-toastify";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

/* =======================
   TanStack Query Client
======================= */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </ContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
