import boxen from "boxen";
import f from "figlet";
import terminalLink from "terminal-link";

import config from "./config";
import { c, formatSkillsGrid } from "./utils";

const title = f.textSync(config.name, {
  font: "RubiFont",
  verticalLayout: "fitted",
}).trimEnd();

const skills = formatSkillsGrid(config.skills);

const extra = Object.entries(config.extra ?? {})
  .map(([k, v]) => `${c.green(k.charAt(0).toUpperCase() + k.slice(1))}: ${c.blue(terminalLink(v.label, v.url))}`)
  .join("\n");

const content = `
${c.magenta(title)}

${c.bold.italic.cyan(config.bio)}

${c.white(config.about)}

${boxen(skills, {
  padding: 1,
  borderStyle: "round",
  borderColor: "blueBright",
  title: "Skills",
  titleAlignment: "center",
})}


${boxen(extra, {
  title: "Extra",
  titleAlignment: "center",
  padding: 1,
  borderStyle: "round",
  borderColor: "magenta",
})}
`;

console.log(
  boxen(content.trim(), {
    padding: 1,
    margin: 0.5,
    borderStyle: "none",
    borderColor: "cyan",
  }),
);
