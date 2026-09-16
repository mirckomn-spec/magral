import { site } from "./data/site";

export function composeMailto(subject: string, lines: string[]) {
  const body = encodeURIComponent(lines.filter(Boolean).join("\n"));
  const topic = encodeURIComponent(subject);
  return `mailto:${site.email}?subject=${topic}&body=${body}`;
}
