/**
 * Resolves the `file` field of entries in `documents` (src/data/site.js) to the
 * final URL emitted by Vite. Every PDF/PNG under src/content is picked up at
 * build time, so adding a document only needs the file plus a data entry.
 */

import { documents, documentGroups } from "../data/site.js";

const files = import.meta.glob("../content/**/*.{pdf,png}", { eager: true, query: "?url", import: "default" });

const urls = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.replace("../content/", ""), url])
);

/** URL for a path relative to src/content, or null if the file doesn't exist. */
export function getDocUrl(file) {
  if (!file) return null;
  const url = urls[file];
  if (!url && import.meta.env.DEV) console.warn(`[documents] File not found in src/content: ${file}`);
  return url ?? null;
}

// Documents with their resolved URL. A missing file means the document is unavailable.
export const resolvedDocuments = documents.map((doc) => {
  const url = getDocUrl(doc.file);
  return { ...doc, url, status: doc.status === "available" && !url ? "upcoming" : doc.status };
});

export function docsForMilestone(id) {
  return resolvedDocuments.filter((d) => d.milestone === id);
}

/** Anchor id used on the Documentation page, e.g. "MS2" -> "ms2". */
export function groupAnchor(id) {
  return String(id).toLowerCase();
}

export { documentGroups };
