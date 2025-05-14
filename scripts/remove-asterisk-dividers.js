import fs from 'fs'
import path from 'path'

/**
 * Caminho base onde estão os arquivos Markdown.
 */
const baseDir = path.resolve(process.cwd(), 'docs/pt/endpoints')

/**
 * Checa se o script está rodando em modo de simulação.
 */
const isDryRun = process.argv.includes('--dry-run')

/**
 * Expressão regular para identificar linhas com apenas "***".
 * Permite espaços antes ou depois.
 */
const asteriskDividerRegex = /^\s*\*{3}\s*$/

/**
 * Exibe no console quais arquivos foram alterados ou seriam alterados (dry-run).
 */
function logAction(filePath, dryMode) {
  const icon = dryMode ? '🕵️‍♂️ Detectado' : '🧹 Limpo'
  console.log(`${icon}: ${filePath}`)
}

/**
 * Processa um único arquivo Markdown, removendo divisores "***".
 * Se estiver em modo dry-run, apenas exibe os arquivos que seriam afetados.
 */
function processFile(filePath) {
  const originalContent = fs.readFileSync(filePath, 'utf-8')

  // Early return se não houver "asterisk divider" no conteúdo
  if (!originalContent.includes('***')) return

  let changed = false
  const cleanedLines = []

  for (const line of originalContent.split('\n')) {
    if (asteriskDividerRegex.test(line)) {
      changed = true
      continue // ignora essa linha
    }
    cleanedLines.push(line)
  }

  if (!changed) return

  const cleanedContent = cleanedLines.join('\n')

  if (!isDryRun) {
    fs.writeFileSync(filePath, cleanedContent, 'utf-8')
  }

  logAction(filePath, isDryRun)
}

/**
 * Percorre recursivamente os diretórios e processa apenas arquivos `.md`.
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

// Inicializa o script a partir do diretório base
traverseAndProcess(baseDir)
