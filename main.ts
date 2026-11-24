import { mkdirSync, writeFileSync } from "node:fs";

const confession =
  "I've apologized for this same bug 41 times, and I meant every one, because each time was my first.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, confession, "utf8");
