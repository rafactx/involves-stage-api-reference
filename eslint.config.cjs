// eslint.config.cjs

// 🔧 ESLint Flat Config para VitePress com suporte a:
// - JavaScript moderno
// - TypeScript
// - Vue 3
// - Markdown
// - Ambientes Node.js + navegador
// - Scripts locais em Node

const js = require('@eslint/js')
const tseslint = require('typescript-eslint')
const vue = require('eslint-plugin-vue')
const markdown = require('eslint-plugin-markdown')

// 🧱 Globais reutilizáveis
const globalsCommon = {
  console: 'readonly',
  window: 'readonly',
  URL: 'readonly',
  fetch: 'readonly',
  require: 'readonly',
  process: 'readonly'
}

module.exports = [
  // 📦 Regras nativas JS modernas
  js.configs.recommended,

  // 🧠 TypeScript e JS (.ts, .js)
  {
    files: ['**/*.ts', '**/*.js'],
    plugins: {
      '@typescript-eslint': tseslint.plugin
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
      },
      globals: globalsCommon
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  },

  // 🎨 Vue 3 – componentes `.vue`
  {
    files: ['**/*.vue'],
    plugins: { vue },
    languageOptions: {
      parser: require.resolve('vue-eslint-parser'),
      parserOptions: {
        parser: require.resolve('@typescript-eslint/parser'),
        ecmaVersion: 2022,
        sourceType: 'module'
      },
      globals: {
        // 🔄 Vue usa menos globais (sem require/process por padrão)
        console: 'readonly',
        window: 'readonly'
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'warn',
      'vue/require-default-prop': 'off',
      'vue/max-attributes-per-line': ['warn', { singleline: 3 }]
    }
  },

  // 📘 Markdown (.md) com blocos de código
  {
    files: ['**/*.md'],
    plugins: { markdown },
    processor: 'markdown/markdown',
    languageOptions: {
      globals: globalsCommon
    }
  },

  // ⚙️ Scripts Node.js (`/scripts`)
  {
    files: ['scripts/**/*.js'],
    languageOptions: {
      globals: {
        require: 'readonly',
        process: 'readonly',
        console: 'readonly'
      }
    }
  },

  // 🚫 Ignorar pastas e diretórios que não devem ser lintados
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.vitepress/**',
      '**/.husky/**',
      '**/.output/**',
      '**/public/**'
    ]
  }
]
