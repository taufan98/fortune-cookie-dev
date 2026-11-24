// Fortune Cookie Wisdom for Developers — writes one original fortune-cookie
// line for a developer to /output/entry.txt.
// Node 22, standard library only, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your future self is already debugging the shortcut you are about to take.";

// The gate requires 1–120 characters of non-whitespace UTF-8 text, in one
// line. Count Unicode code points, not UTF-16 code units, so a line with
// astral-plane characters is measured the way the gate measures it.
const chars = [...LINE];
if (LINE.trim().length < 1 || chars.length > 120 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1 line of 1-120 characters, got ${chars.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${chars.length} characters to ${join(outDir, "entry.txt")}`);
