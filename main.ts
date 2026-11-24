// One-star review written by a house cat about its human.
// Writes the review as a single line to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "One star. The bowl was empty for eleven minutes. I knocked a glass off the table to file a formal complaint. He called it an accident.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review + "\n", "utf8");
