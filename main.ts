// The Dog Ate My Homework: Funniest Excuse — make.fun entry.
// Writes one line (under 200 characters) to /output/entry.txt:
// a dog's excuse after being caught eating the homework, in the
// dog's own voice, with a twist of dog logic.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "/output";
const OUT_FILE = join(OUT_DIR, "entry.txt");

// The excuse: the dog did not "eat" the homework, it filed it —
// bureaucratic dog logic, no stock cat/taste/good-boy line.
const EXCUSE =
  "I didn't eat your homework — I filed it in my stomach, where all important documents go.";

function main(): void {
  const text = EXCUSE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (/\r|\n/.test(text)) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(OUT_FILE, text + "\n", "utf8");
  try {
    chmodSync(OUT_FILE, 0o644);
  } catch {
    // Grader collects outputs as another user; best effort only.
  }
}

main();
