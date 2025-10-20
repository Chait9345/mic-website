
  // --- Force any call to "/api/*" to go to Render backend ---
const RENDER_BASE = "https://mic-website-v8bu.onrender.com";

const _origFetch = window.fetch.bind(window);
window.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
  let url = typeof input === "string" ? input : input instanceof URL ? input.toString() : input.url;

  if (url.startsWith("/api/")) {
    const rewritten = `${RENDER_BASE}${url}`;
    console.log("[fetch proxy] rewriting →", rewritten);
    input = rewritten;
  }

  return _origFetch(input as RequestInfo, init);
};
// ----------------------------------------------------------------

  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  createRoot(document.getElementById("root")!).render(<App />);
  