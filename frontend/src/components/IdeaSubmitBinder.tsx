import { useEffect } from "react";

interface Props {
  formId: string;
  successSelector?: string;
  errorSelector?: string;
}

function withTimeout<T>(p: Promise<T>, ms: number, abort?: AbortController) {
  return new Promise<T>((resolve, reject) => {
    const t = setTimeout(() => {
      abort?.abort();
      reject(new Error("Timeout"));
    }, ms);
    p.then(v => { clearTimeout(t); resolve(v); })
     .catch(e => { clearTimeout(t); reject(e); });
  });
}

export default function IdeaSubmitBinder({
  formId,
  successSelector,
  errorSelector
}: Props) {
  useEffect(() => {
    const form = document.getElementById(formId) as HTMLFormElement | null;
    const successEl = successSelector ? document.querySelector(successSelector) : null;
    const errorEl = errorSelector ? document.querySelector(errorSelector) : null;

    if (!form) return;

    const handleSubmit = async (e: Event) => {
      e.preventDefault();
      if (successEl) successEl.textContent = "";
      if (errorEl) errorEl.textContent = "";

      const formData = new FormData(form);
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        idea: formData.get("idea"),
      };

      const base = (import.meta as any).env?.VITE_API_BASE_URL || "";
      const url = `${String(base).replace(/\/$/, "")}/api/ideas`;

      // helper to do one attempt with timeout
      const doPost = async () => {
        const ctrl = new AbortController();
        const req = fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          signal: ctrl.signal,
        });
        return withTimeout(req, 15000, ctrl); // 15s cap
      };

      try {
        // Try once; if it times out or 502/504, wait a bit and retry (cold start)
        let res = await doPost();

        if (!res.ok && [502, 503, 504].includes(res.status)) {
          await new Promise(r => setTimeout(r, 1500));
          res = await doPost();
        }

        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new Error(`Request failed: ${res.status} ${text}`);
        }

        if (successEl) successEl.textContent = "✅ Your idea was submitted successfully!";
        form.reset();
      } catch (err) {
        console.error("Submit failed:", err);
        if (errorEl) {
          errorEl.textContent =
            "❌ Server is waking up or busy. Please try again in a moment.";
        }
      }
    };

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, [formId, successSelector, errorSelector]);

  return null;
}
