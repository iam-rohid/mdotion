import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import "./styles/main.scss";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./libs/queryClient";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  </React.StrictMode>
);
