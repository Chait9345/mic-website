import { useEffect, useState } from "react";
import { apiGet } from "../lib/api";

type LinkItem = { key: string; label: string; url: string };

export default function JoinNowButton({ linkKey = "join_now", className = "" }: { linkKey?: string; className?: string }) {
  const [link, setLink] = useState<LinkItem | null>(null);

  useEffect(() => {
    apiGet<LinkItem[]>("/links")
      .then(all => setLink(all.find(l => l.key === linkKey) ?? null))
      .catch(() => setLink(null));
  }, [linkKey]);

  if (!link) return null; // hide if admin hasn't created it yet

  return (
    <a
      className={className || "btn"}
      href={link.url}
      target="_blank"
      rel="noreferrer"
    >
      {link.label}
    </a>
  );
}
