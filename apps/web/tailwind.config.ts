// tailwind config is required for editor support

import type { Config } from "tailwindcss"
import sharedConfig from "tailwind-config/tailwind.config.ts"

const config: Pick<Config, "presets" | "theme" | "important"> = {
  presets: [sharedConfig],
  theme: {
    extend: {
      colors: {
        customMyColor: "var(--cta-bg)",
        destructive: "#d82c0d",
        text: "#202223",
        textDisabled: "#8c9196",
        surfaceDisabled: "#fafbfb",
        borderDisabled: "#d2d5d8",
      },
    },
  },
  important: "#app",
}

export default config
