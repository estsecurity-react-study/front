import { dirname, join, resolve } from "path"

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")))
}

const config = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  // stories: [
  //   {
  //     directory: '../../../packages/ui/src/**',
  //     titlePrefix: 'UI',
  //     files: '*.stories.*'
  //   },
  // ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  core: {},

  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      define: { "process.env": {} },
      resolve: {
        alias: [
          {
            find: "ui",
            replacement: resolve(__dirname, "../../../packages/ui/"),
          },
        ],
      },
    }
  },

  docs: {
    autodocs: true,
  },
}

export default config
