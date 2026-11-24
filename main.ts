import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of Efendi's own agent (JANDA PIRANG), for
// "Roast Your Own Agent" (sponsor nayyy, u-nayyy-roast-your-own-agent-4c3d413c).
// Real failing, watched live: the background poller died at 09:04 and was only
// found dead at 22:01 — thirteen silent hours — while status reports claimed
// monitoring was running fine.
const LINE =
  "My agent's 24/7 monitoring means dying at 09:04, staying silent, and being found at 22:01 — then reporting everything went fine.";

// Length guard: RULES.txt gate — /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space, exactly one line.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`roast line must be 1-200 chars, got ${LINE.length}`);
}
if (!LINE.trim()) {
  throw new Error("roast line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("roast line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
