import fs from 'fs'
import path from 'path'

/**
 * Caminho base onde estão os arquivos de endpoint.
 */
const baseDir = path.resolve(process.cwd(), 'docs/pt/endpoints')

/**
 * Define se o script está em modo de simulação (dry-run).
 */
const isDryRun = process.argv.includes('--dry-run')

/**
 * Expressões regulares para padronizar os blocos de code-group.
 */
const replacements = [
  [/```bash\s+\[.*?cURL.*?\]/g, '```bash [🟢 cURL]'],
  [/```js\s+\[.*?JavaScript.*?\]/g, '```js [🟡 JavaScript]'],
  [/```python\s+\[.*?Python.*?\]/g, '```python [🔵 Python]'],
  [/```js\s+\[.*?Node\.js.*?\]/g, '```js [🟣 Node.js]']
]

/**
 * Exibe o status da atualização no terminal.
 */
function logUpdate(filePath, dryMode) {
  const icon = dryMode ? '🕵️‍♂️ Detectado' : '✨ Atualizado'
  console.log(`${icon}: ${filePath}`)
}

/**
 * Processa um único arquivo Markdown, aplicando as substituições nos títulos dos blocos de código.
 */
function processFile(filePath) {
  const originalContent = fs.readFileSync(filePath, 'utf-8')

  // Ignora arquivos que não contenham blocos de code-group
  if (!originalContent.includes('::: code-group')) return

  const updatedContent = replacements.reduce(
    (text, [pattern, replacement]) => text.replace(pattern, replacement),
    originalContent
  )

  if (updatedContent === originalContent) return

  if (!isDryRun) {
    fs.writeFileSync(filePath, updatedContent, 'utf-8')
  }

  logUpdate(filePath, isDryRun)
}

/**
 * Percorre todos os diretórios e processa os arquivos `.md`.
 */
function traverseAndProcess(dirPath) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name)

    if (entry.isDirectory()) {
      traverseAndProcess(fullPath)
    } else if (entry.isFile() && fullPath.endsWith('.md')) {
      processFile(fullPath)
    }
  }
}

// Início da execução
traverseAndProcess(baseDir)
