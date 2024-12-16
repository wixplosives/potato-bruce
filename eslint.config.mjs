import pluginJs from '@eslint/js';
import configPrettier from 'eslint-config-prettier';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginTypescript from 'typescript-eslint';

for (const config of pluginTypescript.configs.recommendedTypeChecked) {
  config.files = ['**/*.{ts,tsx,mts,cts}']; // ensure config only targets TypeScript files
}

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: ['**/dist/', 'st-types/'] },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'],
  { settings: { react: { version: 'detect' } } },
  { plugins: { 'react-hooks': pluginReactHooks } },
  {
    rules: {
      'no-console': 'error',
      'no-undef': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
    },
  },
  ...pluginTypescript.configs.recommendedTypeChecked,
  { languageOptions: { parserOptions: { projectService: true } } },
  {
    files: ['**/*.{ts,tsx,mts,cts}'],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-empty-object-type': 'off',
    },
  },
  configPrettier,
];
