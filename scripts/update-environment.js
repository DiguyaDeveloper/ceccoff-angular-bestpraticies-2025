const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

const environmentsDir = path.resolve(__dirname, '../src/environments');
const version = packageJson.version;

// Função para atualizar o environment
function updateEnvironment(envFileName) {
  const filePath = path.join(environmentsDir, envFileName);

  // Lê o conteúdo do arquivo environment
  let content = fs.readFileSync(filePath, 'utf-8');

  // Substitui a versão
  content = content.replace(/version: '.*'/, `version: '${version}'`);

  // Escreve o novo conteúdo de volta
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ Updated version in ${envFileName} to ${version}`);
}

// Atualize todos os environments necessários
updateEnvironment('environment.ts');
updateEnvironment('environment.prod.ts');
// Adicione outros environments aqui, se necessário
