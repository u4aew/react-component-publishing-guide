import type { StorybookConfig } from '@storybook/react-vite';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const packageJson = JSON.parse(readFileSync(resolve(__dirname, '../package.json'), 'utf8'));

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "managerHead": (head) => `
    ${head}
    <style>
      .sidebar-header {
        border-bottom: 1px solid #e3e6e8;
        padding-bottom: 8px;
        margin-bottom: 8px;
      }
      .sidebar-header::after {
        content: "v${packageJson.version}";
        display: block;
        font-size: 11px;
        color: #999;
        font-weight: normal;
        margin-top: 4px;
      }
    </style>
  `
};
export default config;