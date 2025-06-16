import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Enable JSX
        },
      },
    },
    plugins: {
      "react-hooks": reactHooks, // Import the React Hooks plugin
    },
    rules: {
      semi: "warn", // Semicolons as warnings
      "prefer-const": "error", // Suggest using const where possible
      "react-hooks/rules-of-hooks": "error", // Rules for correct usage of Hooks
      "react-hooks/exhaustive-deps": "warn", // Missing dependencies in useEffect
    },
  },
  pluginReact.configs.flat.recommended,
]);
