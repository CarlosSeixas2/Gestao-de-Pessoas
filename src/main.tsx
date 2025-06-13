import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { UserDashboard } from "./pages/user-dashboard.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserDashboard />
    </QueryClientProvider>
  </StrictMode>
);
