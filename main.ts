// Fortune Cookie Wisdom for Developers — writes one original fortune-cookie
// line for a developer to /output/entry.txt.
// Node 22, standard library only, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your future self is already debugging the shortcut you are about to take.";

// The gate requires 1–120 characters of non-whitespace UTF-8 text.
if (LINE.trim().length < 1 || LINE.length > 120) {
  throw new Error(`entry line must be 1-120 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
