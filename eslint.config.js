import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node // Adiciona o ambiente Node
      },
      ecmaVersion: "latest" // Define a versão do ECMAScript (opcional)
    }
  },
  pluginJs.configs.recommended,
];
