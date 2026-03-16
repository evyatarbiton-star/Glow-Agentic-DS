import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'no-restricted-imports': ['warn', {
        patterns: [
          {
            group: ['*/components/Icon/index', '*/components/Icon/icons/index'],
            message: 'Import icons directly for tree-shaking: import { SearchLine } from \'@/components/Icon/icons/line/Search\'',
          },
        ],
      }],
    },
  },
  // Allow barrel imports in the icon doc page only
  {
    files: ['**/docs/pages/IconPage.tsx'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
])
