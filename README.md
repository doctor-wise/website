# Sistema de Embaixadores - Doctor Wise

Sistema de gestão de microinfluenciadores para a empresa Doctor Wise, desenvolvido com foco em componentes reutilizáveis e design system semântico.

## 📋 Sobre o Projeto

Este é um painel de controle para gestão de embaixadores (microinfluenciadores) que permite:

- **Para Embaixadores**: Acompanhamento de métricas pessoais, indicações, conversões e publicações
- **Para Admins**: Supervisão global do programa, análise de performance e moderação de conteúdo

## 🛠️ Stack Tecnológica

- **Frontend**: Next.js 15 com TypeScript
- **Styling**: Tailwind CSS com design system semântico
- **Backend & Database**: Supabase
- **Deploy**: Vercel + Supabase

## 📁 Estrutura do Projeto

```
├── src/
│   ├── app/                # App Router (Next.js 15)
│   ├── components/         # Componentes reutilizáveis
│   ├── types/             # Tipos TypeScript
│   └── lib/               # Utilitários
├── claude.md              # Instruções de workflow
├── project-context.md     # Contexto completo do projeto
└── todo.md                # Lista de tarefas e progresso
```

## 🚀 Desenvolvimento

Este projeto está sendo desenvolvido em **micro-steps**, com cada funcionalidade implementada de forma incremental e bem documentada.

### 🌿 Estratégia de Branches

- **`main`** → Código estável pronto para produção
- **`develop`** → Desenvolvimento ativo e testes
- **`feature/*`** → Branches para features específicas (futuro)

#### Workflow:

1. **Desenvolvimento** acontece na branch `develop`
2. **Testes e validação** em `develop`
3. **Merge para `main`** apenas quando código estiver estável
4. **Deploy automático** via Vercel para ambas as branches

#### Como usar:

```bash
# Para desenvolver
git checkout develop

# Para código estável
git checkout main

# Para executar o projeto
npm run dev
```

### Status Atual

✅ **Branches configuradas** (main/develop)  
✅ **Next.js 15 + TypeScript + Tailwind CSS 4**  
✅ **Supabase conectado** (configuração básica)  
✅ **Ambiente de desenvolvimento completo**  
✅ **Aplicação limpa e funcional**  
✅ **Build otimizado** (113kB First Load JS)  
🚀 **Pronto para**: Desenvolvimento das funcionalidades

## 📝 Documentação

- **Contexto Completo**: Ver `project-context.md`
- **Workflow**: Ver `claude.md`
- **Progresso**: Ver `todo.md`

---

Desenvolvido com expertise em design de produtos digitais e sistemas de design.
