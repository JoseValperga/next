import type { StorybookConfig } from "@storybook/nextjs";
//import path from "path"; para webpackFinal

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["..\\public"],

  /*Por si no funcionan las rutas:

  webpackFinal: async (config: any) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "../src");
    config.resolve.alias["@components"] = path.resolve(
      __dirname,
      "../src/components"
    );
    return config;
  },
  */
};
export default config;
