import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "WesleyZon",
  description: "WesleyZon's Blog",
  icon: "/signature-light.png",
  logo: {
    light: "/signature-light.png",
    dark: "/signature-dark.png",
  },
  themeConfig: {
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/wzono",
      },
      {
        icon: "x",
        mode: "link",
        content: "https://x.com/wzono1",
      },
    ],
  },
});
