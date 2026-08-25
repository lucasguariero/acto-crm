# Surface Brief - Dashboard

## Target
- Route: `/dashboard`
- Mode: Operate (task-focused dashboard)

## Reference
- Original: https://actosfera-dev.acto.com.br/dashboard
- Credentials: admin@acto.dev / password

## Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  SIDEBAR (260px)  │           HEADER (56px)                │
│                   │  ┌─────────────────────────────────┐  │
│  - Logo           │  │  ☰  [Buscar no ERP...    Ctrl+K]│  │
│  - Menu Principal│  │  [Caixa] [Notificações] [Perfil]│  │
│  - Destaque      │  └─────────────────────────────────┘  │
│  - User Profile  │                                           │
│                   │  ┌─────────────────────────────────┐  │
│                   │  │Olá, Admin Sistema               │  │
│                   │  │Resumo adaptado ao seu cargo...  │  │
│                   │  └─────────────────────────────────┘  │
│                   │                                           │
│                   │  ┌──────────────┐ ┌─────────────────┐  │
│                   │  │ COMUNICAÇÃO  │ │ PROCESSOS       │  │
│                   │  │ SEU DIA      │ │ PENDENTES       │  │
│                   │  │ ANIVERSARI.  │ │ FILA NOTAS      │  │
│                   │  │ MURAL        │ │ PROJETOS RISCO  │  │
│                   │  └──────────────┘ └─────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

## Components Required

1. **Sidebar** - Logo, menu items, user profile, toggle
2. **Header** - Menu toggle, search bar, notifications, profile
3. **Welcome Section** - Heading + subtitle
4. **Cards Grid** - 2 columns (left: main content, right: sidebar)

## Content Sections

### Left Column
1. Comunicação RH - Nenhum comunicado no ar
2. Seu dia - Data + status pendências
3. Aniversariantes - Lista com avatares
4. Mural de novidades - Input + lista vazia

### Right Column  
1. Processos pendentes - Lista de filas
2. Fila de notas fiscais - Contador
3. Projetos em risco - Contador

## Interactions
- Sidebar collapse/expand
- Search bar with Ctrl+K shortcut
- Card actions (Ocultar)
- Navigation links
