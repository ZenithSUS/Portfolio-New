import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NavProvider } from "./context/navprovider";
import "./tailwind.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <NavProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </NavProvider>
);
