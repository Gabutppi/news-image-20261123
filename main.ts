// main.ts — entrypoint for the news-image-20261123 bounty.
//
// The front page is drawn ahead of time by draw.py (Python 3 + Pillow) and
// shipped as entry.png: a newspaper front page for Monday 23 November 2026
// with 37 stories across 9 regions. This program only copies those bytes
// to the output directory, so two runs always write byte-identical output.
// The image is 1024x1024 PNG, 133,535 bytes (limit: 1 MiB, 1024x1024).
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
