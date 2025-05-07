import type { Linter } from "eslint";

import vitest from "@vitest/eslint-plugin";

import { defineConfig } from "./src/factory";
// import importPlugin from 'eslint-plugin-import'

export const sortObjectConfigs = [
  {
    customGroups: {
      id: "^id$",
      code: "^code$",
      message: "^message$",
      cause: "^cause$",
      status: "^status$",
      extra: "^extra$",
    },
    groups: ["id", "code", "message", "cause", "status", "extra"],
    useConfigurationIf: {
      allNamesMatchPattern: "^(?:id|code|message|cause|status|extra)$",
    },
  },
  {
    customGroups: {
      before: "^before$",
      after: "^after$",
    },
    groups: ["before", "after"],
    useConfigurationIf: {
      allNamesMatchPattern: "^(?:before|after)$",
    },
  },
];

export const config: Linter.Config = {
  files: ["**/*.ts", "**/*.tsx"],
  plugins: {
    // import: importPlugin,
    vitest,
  },
  rules: {
    "@eslint-community/eslint-comments/disable-enable-pair": [
      "error",
      { allowWholeFile: true },
    ],
    "@eslint-community/eslint-comments/require-description": "off",
    "@stylistic/padding-line-between-statements": ["off"],
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unnecessary-type-parameters": "off",
    "@typescript-eslint/only-throw-error": [
      "error",
      {
        allow: ["ZerospinError"],
      },
    ],
    "@typescript-eslint/require-await": "off",
    "class-methods-use-this": "off",
    "consistent-return": "off",
    // 'import/no-relative-parent-imports': 'error',
    "jest/require-hook": "off",
    "no-magic-numbers": "off",
    "no-param-reassign": "off",
    "no-prototype-builtins": "off",
    "perfectionist/sort-interfaces": [
      "error",
      {
        groups: ["required-property", "optional-property"],
      },
    ],
    "perfectionist/sort-object-types": [
      "error",
      { groups: ["required-property", "optional-property"] },
    ],
    "perfectionist/sort-objects": [
      "error",
      {
        customGroups: {
          r: "^r$",

          g: "^g$",

          b: "^b$",
        },
        groups: [
          // Sort colors by RGB
          "r",
          "g",
          "b",
        ],

        useConfigurationIf: {
          allNamesMatchPattern: "^r|g|b$",
        },
      },
      {
        customGroups: {
          try: "^try$",

          catch: "^catch$",
        },
        groups: [
          // Sort try/catch
          "try",
          "catch",
        ],
        useConfigurationIf: {
          allNamesMatchPattern: "^try|catch$",
        },
      },
      ...sortObjectConfigs,
      {
        type: "alphabetical", // Fallback configuration
      },
    ],
    "react-compiler/react-compiler": "off",
    "testing-library/await-async-queries": "off",
    "unicorn/prefer-event-target": "off",
    "unicorn/throw-new-error": "off",
    "vitest/no-standalone-expect": [
      "error",
      {
        additionalTestBlockFunctions: ["it.effect", "it.effect.only"],
      },
    ],
    "vitest/require-hook": "off",
  },
  // settings: {
  //   'import/resolver': {
  //     typescript: {},
  //   },
  // },
};

export default defineConfig(
  {
    react: true,
  },
  config,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "off",
      "jsdoc/check-tag-names": "off",
    },
  },
);
