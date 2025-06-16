import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { MainRoutes } from "./routes/main-routes.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainRoutes />
    </QueryClientProvider>
  </StrictMode>
);
