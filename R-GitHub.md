# GitHub Comandos

# Para subir atualizações

# Verifica o status das mudanças no repositório local
git status
# Adiciona todas as mudanças para o próximo commit
git add .
# Faz o commit das mudanças com uma mensagem descritiva
git commit -m "Subindo alterações do arquivo: "
# Envia as alterações para o repositório remoto no GitHub
git push

---------------------------------------

# Criou local e precisa enviar para o repositório no GitHub?
# Inicializa um repositório Git local
git init
# Verifica o status das mudanças no repositório local
git status
# Adiciona todas as mudanças para o próximo commit
git add .
# Faz o primeiro commit das mudanças
git commit -m "Primeiro commit"
# Configura o email do usuário Git globalmente
git config --global user.email "seu-email@exemplo.com"
git config --global user.name "Seu Nome"
# Cria um novo repositório no GitHub via API
curl -u 'SEU_USUARIO' https://api.github.com/user/repos -d '{"name":"NOME_DO_REPOSITORIO"}'
# Adiciona o repositório remoto do GitHub como origem do seu repositório local
git remote add origin URL_DO_REPOSITORIO_GITHUB.git
# Cria a branch "main" localmente (certifique-se de que esta é a branch correta conforme configurado no GitHub)
git branch -M main
# Faz o primeiro commit das mudanças na branch "main" local
git push -u origin main
