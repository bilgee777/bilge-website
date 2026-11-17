// Lists every todo("…") marker and TODO/CONFIRM comment in src/content.
import fs from "node:fs";
import path from "node:path";

const dir = path.resolve("src/content");
let count = 0;
for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".ts") && f !== "todo.ts")) {
  const lines = fs.readFileSync(path.join(dir, file), "utf8").split("\n");
  lines.forEach((line, i) => {
    const call = line.match(/todo\("([^"]+)"\)/);
    const comment = line.match(/\/\/\s*((?:TODO|CONFIRM)\b.*)$/);
    const msg = call?.[1] ?? comment?.[1];
    if (msg) {
      count++;
      console.log(`src/content/${file}:${i + 1}  ${msg}`);
    }
  });
}
console.log(`\n${count} open content item(s).`);
