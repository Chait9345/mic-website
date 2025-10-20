const API = import.meta.env.VITE_API_URL;

async function handle(res: Response) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `HTTP ${res.status}`);
  }
  return res.json();
}

export function apiGet<T>(path: string): Promise<T> {
  return fetch(`${API}${path}`).then(handle);
}

export function apiPost<T>(path: string, body: any): Promise<T> {
  return fetch(`${API}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then(handle);
}
