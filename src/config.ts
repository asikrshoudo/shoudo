import type { Config } from "./type";

import { c } from "./utils";

// ? '\n' are important for the formatting of the output, so don't remove them. - @Ruhannn
const config: Config = {
  name: "Asikur Shek Shoudo",
  bio: "\n Ex-spscian • CEO of Thekami \n",
  about: `Hey, I am shoudo. btw i love traveling.
I try to make things ${c.bold.magenta("super fast")} and ${c.bold.magenta("beautiful")} as well.
In my free time, I like to watch ${c.bold.magenta("Movie")} a lot and think about my future works.
I particularly enjoy learning about something. I have a passion for ${c.bold.magenta("technologies")}.\n`,
  extra: {
    github: { label: "@asikrshoudo", url: "https://github.com/asikrshoudo" },
    email: { label: "shoudo@proton.me", url: "shoudo@proton.me" },
    website: { label: "shoudo.xyz", url: "https://www.shoudo.xyz" },
    // facebook: { label: "Facebook", url: "https://facebook.com/ruhanrouf" },
  },
  skills: ["C", "Python", "Git", "Linux"],
};

export default config;
