# 🚀 Guia de Configuração do GitHub

## 📋 Pré-requisitos

### 1. Instalar Git
- Baixe em: https://git-scm.com/download/win
- Execute o instalador e siga as instruções padrão
- Reinicie o terminal após a instalação

### 2. Criar conta no GitHub
- Acesse: https://github.com
- Clique em "Sign up" se não tiver conta
- Escolha um nome de usuário profissional

## 🔧 Configuração Inicial

### 1. Configurar Git (execute no terminal)
```bash
git config --global user.name "Seu Nome"
git config --global user.email "contatohenrymath@hotmail.com"
```

### 2. Verificar instalação
```bash
git --version
```

## 📂 Subindo o Projeto para GitHub

### 1. Inicializar repositório
```bash
git init
```

### 2. Adicionar todos os arquivos
```bash
git add .
```

### 3. Fazer primeiro commit
```bash
git commit -m "🚀 Initial commit: Portfolio moderno com Next.js, TypeScript e Tailwind"
```

### 4. Criar repositório no GitHub
1. Acesse: https://github.com/new
2. Nome do repositório: `portfolio-modern`
3. Descrição: `Portfolio profissional - Analista de Dados & BI`
4. Marque como **Public**
5. NÃO marque "Add a README file" (já temos um)
6. Clique em "Create repository"

### 5. Conectar repositório local ao GitHub
```bash
git remote add origin https://github.com/SEU_USUARIO/portfolio-modern.git
git branch -M main
git push -u origin main
```

## 🌐 Deploy na Vercel (Recomendado)

### 1. Acessar Vercel
- Site: https://vercel.com
- Fazer login com conta GitHub

### 2. Importar Projeto
1. Clique em "New Project"
2. Selecione seu repositório `portfolio-modern`
3. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### 3. Deploy
1. Clique em "Deploy"
2. Aguarde o build (2-3 minutos)
3. Seu site estará disponível em: `https://portfolio-modern-SEU_USUARIO.vercel.app`

## 🔄 Workflow de Desenvolvimento

### Para fazer mudanças:
```bash
# 1. Fazer suas alterações no código

# 2. Adicionar mudanças
git add .

# 3. Commit com mensagem descritiva
git commit -m "✨ Adicionar nova funcionalidade"

# 4. Enviar para GitHub
git push
```

**🎉 Deploy automático**: A Vercel fará deploy automaticamente a cada push!

## 🎯 URLs Importantes

Após configurar, você terá:
- **Repositório**: `https://github.com/SEU_USUARIO/portfolio-modern`
- **Site**: `https://portfolio-modern-SEU_USUARIO.vercel.app`

## 🆘 Troubleshooting

### Git não encontrado
- Reinstale o Git
- Adicione ao PATH do Windows
- Reinicie o terminal

### Erro de permissão no GitHub
- Configure SSH keys ou use token pessoal
- Documentação: https://docs.github.com/en/authentication

### Erro no deploy da Vercel
- Verifique se não há erros no código
- Confira o build logs na Vercel

## 📞 Suporte

Se precisar de ajuda:
1. Confira a documentação oficial do Git/GitHub
2. Use o GitHub Desktop como alternativa visual
3. Entre em contato para assistência técnica

---

⭐ **Boa sorte com seu portfólio!** ⭐
