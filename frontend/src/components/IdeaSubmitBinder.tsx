import { useEffect } from "react";

interface Props {
  formId: string;
  successSelector?: string;
  errorSelector?: string;
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

    if (!form) {
      console.error(`[IdeaSubmitBinder] Form with ID '${formId}' not found.`);
      return;
    }

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

      // ✅ Direct backend URL to bypass Vercel rewrite issues
      const url = "https://mic-website-v8bu.onrender.com/api/ideas";
      console.log("[POST]", url, payload);

      try {
        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error(`Failed with status ${res.status}`);

        if (successEl) successEl.textContent = "✅ Your idea was submitted successfully!";
        form.reset();
      } catch (err) {
        console.error("❌ Submission error:", err);
        if (errorEl) errorEl.textContent = "❌ Something went wrong. Please try again.";
      }
    };

    form.addEventListener("submit", handleSubmit);
    return () => form.removeEventListener("submit", handleSubmit);
  }, [formId, successSelector, errorSelector]);

  return null;
}
