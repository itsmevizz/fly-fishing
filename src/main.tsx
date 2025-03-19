import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AppLayout from "./layouts/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppLayout>
      <App />
    </AppLayout>
  </StrictMode>
);
