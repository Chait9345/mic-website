// frontend/src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// --- Warm up Render API so the first real request isn't slow ---
const BASE = (import.meta as any).env?.VITE_API_BASE_URL
  ? String((import.meta as any).env.VITE_API_BASE_URL).replace(/\/$/, "")
  : "";

(async () => {
  if (!BASE) return;
  try {
    // small, no-cache health ping; don't block the UI
    const ctrl = new AbortController();
    setTimeout(() => ctrl.abort(), 8000); // give up after 8s
    await fetch(`${BASE}/health`, { cache: "no-store", signal: ctrl.signal });
    // console.log("API warmed");
  } catch {
    // silent: still proceed, user submit will retry
  }
})();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
