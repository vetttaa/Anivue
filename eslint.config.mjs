import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
    {languageOptions: {globals: globals.browser}},
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    {
        files: ["**/*.vue"],
        languageOptions: {parserOptions: {parser: tseslint.parser}},
    },
    {
        plugins: ['prettier'],
        rules: {
            'prettier/prettier': ['error'],
            'vue/require-default-prop': 'on',
            'vue/html-indent': ['error', 4],
            'vue/singleline-html-element-content-newline': 0,
            'vue/component-name-in-template-casing': ['error', 'PascalCase'],
            'vue/no-unused-vars': 'error',
            'vue/no-new-native-non-primitive': 'error',
            'vue/no-parsing-error': 'error',
            'vue/html-self-closing': ['error', {'html': {'selfClosing': ['div']}}],
            'vue/multi-word-component-names': 'error',
            'id-naming-convention': 'camelCase'
        }
    },
];
