/**
 * Meeting minutes are loaded from src/content/minutes/*.md at build time.
 * Add a new minute by dropping a new .md file in that folder (see _TEMPLATE.md).
 * Files whose name starts with "_" are ignored.
 */

const files = import.meta.glob("../content/minutes/*.md", { query: "?raw", import: "default", eager: true });

function parseFrontMatter(raw) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
    if (key) data[key] = value;
  }
  return { data, body: raw.slice(match[0].length) };
}

export const minutes = Object.entries(files)
  .map(([path, raw]) => ({ file: path.split("/").pop().replace(/\.md$/, ""), raw }))
  .filter(({ file }) => !file.startsWith("_"))
  .map(({ file, raw }) => {
    const { data, body } = parseFrontMatter(raw);
    const heading = /^#\s+(.+)$/m.exec(body)?.[1];
    return {
      slug: file,
      number: Number(data.number) || Number(/\d+/.exec(file)?.[0]) || 0,
      date: data.date ?? "",
      title: data.title ?? heading ?? file,
      location: data.location ?? "",
      time: data.time ?? "",
      body,
    };
  })
  .sort((a, b) => b.number - a.number || b.date.localeCompare(a.date));

export function findMinute(slug) {
  return minutes.find((m) => m.slug === slug);
}
