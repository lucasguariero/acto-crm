# Análise UX/UI - Mapeamento CRM Actosfera

## Estrutura de Navegação

### Sidebar - Menu Principal

#### Principal
- **Dashboard** → `/dashboard`

- **Meu Espaço**
  - Caixa de entrada → `/meu/caixa-entrada`
  - Minhas notas fiscais → `/meu/notas-fiscais`
  - Meu perfil → `/meu/perfil`
  - Solicitações → `/meu/solicitacoes`
  - Terceirizados e outsourcing → `/meu/fornecedor-staffing`

- **Projetos**
  - Meu trabalho → `/projetos/meu-trabalho`
  - Governança → `/projetos`

- **Comercial**
  - Painel → `/crm`
  - Funil → `/crm/funil`
  - Oportunidades → `/crm/oportunidades`
  - Parceiros comerciais → `/crm/parceiros`
  - Atas de registro de preço → `/crm/atas`
  - Comissões → `/crm/comissoes`
  - Metas → `/crm/metas`
  - Parâmetros → `/crm/parametros`
  - Relatórios → `/crm/relatorios`
  - Jurídico → `/comercial/licitacoes`

- **Financeiro**
  - Operação → `/financeiro/operacao`
  - Painel Gerencial → `/financeiro`
  - Importar Extratos → `/financeiro/importar-extratos`
  - Classificação → `/financeiro/classificacao`
  - Saúde Financeira → `/financeiro/saude`
  - Contratos & Projetos → `/financeiro/contratos-projetos`
  - Indicadores → `/financeiro/indicadores`
  - Planejamento → `/financeiro/planejamento`
  - Relatórios → `/financeiro/relatorios`
  - Notas fiscais → `/financeiro/notas-fiscais`

- **RH**
  - **Prestadores** (dropdown)
    - Prestadores → `/rh/prestadores`
    - Disponibilidade → `/rh/prestadores/disponibilidade`
    - Fornecedores staffing → `/rh/prestadores/fornecedores-staffing`
    - Parceiros de compra → `/rh/prestadores/parceiros-compra`
    - Compras via parceiro → `/rh/prestadores/compras-parceiro`
  - **Desempenho** (dropdown)
    - Ciclos de avaliação → `/rh/desempenho/ciclos`
    - Aderência ao playbook → `/rh/desempenho/aderencia-playbook`
    - Configuração → `/rh/desempenho/configuracao`
  - Destaques → `/destaques-rh`

- **Inteligência**
  - Modo Agente → `/inteligencia/modo-agente`
  - Base de Conhecimento → `/inteligencia/base-conhecimento`
  - Meus agentes → `/inteligencia/agentes`
  - Análise de Dados → `/ia/analise-dados`

- **Processos** → `/processos`

- **Patrimônio**
  - Equipamentos → `/equipamentos`
  - Patrimônio → `/patrimonio`

#### Destaque (Sidebar)
- **Universidade Acto** (dropdown)
  - Catálogo → `/universidade/catalogo`
  - Gestão de cursos → `/universidade/gestao-cursos`
- Hub de cadastros → `/cadastros`
- Organizações → `/organizacoes`

---

## Componentes Globais

### Header
- Busca global (Ctrl+K)
- Caixa de entrada → `/meu/caixa-entrada`
- Notificações
- Botão "Como usar: [nome da página]"
- Documentação interna → `/documentacao`
- Pomodoro — método de foco
- Configurar PIN de step-up → `/settings/security`
- Breadcrumb automático na topbar

### Botões Flutuantes
- Abrir assistente de IA
- Abrir ferramentas Acto homologadas (abre popup/dialog)

### Popup Ferramentas Acto
**Ações rápidas:**
- Painel Gerencial → `/financeiro`
- Processos pendentes → `/processos`
- Projetos → `/projetos`
- CRM → `/crm/oportunidades`
- Cadastros → `/cadastros`
- Meu perfil → `/meu/perfil`
- Minhas notas fiscais → `/meu/notas-fiscais`
- Configurações → `/settings/profile`

**Ferramentas:**
- Docs → `/documentacao`
- Canvas → https://canvas.acto.com.br/
- Chat → https://chat.acto.com.br/
- Projetos → https://projetos.acto.com.br/

---

## Páginas Mapeadas

### Dashboard (`/dashboard`)

**NOVA ESTRUTURA PROPOSTA (2026-08-28):**

1. **Topbar**: Data atual sutil (ex: "Sexta-feira, 28 de agosto de 2026") ao lado da saudação

2. **Grid Assimétrico (2 colunas):**

**Coluna Principal (~2/3):**
- Card: **Processos Pendentes**
  - Lista com tags de status (vermelho = Alto Risco, azul = Normal)
  - Links de atalho
  - Empty state: "Nada pendente por aqui. Você está em dia com aprovações e solicitações."
- Card: **Notas Fiscais Recentes**
  - Tabela simplificada: Fornecedor, Data, Valor, Status
  - Badges visuais: "Pago" / "Pendente"

**Coluna Lateral (~1/3):**
- Card: **Projetos em Risco** (destaque vermelho, ícone de alerta)
- Feed: **Comunicados** (minimalista)
- 2 micro-widgets lado a lado: **Aniversariantes** + **Mural**

---

**ESTRUTURA ORIGINAL (produção):**
1. Saudação: "Olá, [Nome]" + "Resumo adaptado..."
2. Seu Dia - Data + status
3. Aniversariantes
4. Processos pendentes
5. Fila de notas fiscais
6. Projetos em risco
7. Mural de novidades
8. Comunicados

### Meu Espaço
#### Caixa de entrada (`/meu/caixa-entrada`)
- Abas: Todas, Não lidas, Projetos, RH, Avisos
- Busca
- Filtro: Todas / Não lidas
- Mensagem vazia

#### Minhas notas fiscais (`/meu/notas-fiscais`)
- Título + descrição
- Mensagem de vínculo PJ

#### Meu perfil (`/meu/perfil`)
- Título + descrição
- Mensagem de vínculo PJ

#### Solicitações (`/meu/solicitacoes`)
- Título + descrição
- Mensagem de vínculo PJ

#### Terceirizados (`/meu/fornecedor-staffing`)
- Título + descrição
- Mensagem vazia

### Projetos
#### Meu trabalho (`/projetos/meu-trabalho`)
- Abas: Resumo, Atribuídos a mim, Histórico de atividades
- Visão geral: Cards atribuídos, Projetos atribuídos
- Status dos cards: Não iniciados, Em andamento, Em QA, Bloqueados
- Distribuição (gráficos)

#### Governança (`/projetos`)
- Título + descrição + botão "Novo projeto"
- Busca
- Filtros: Situação (dropdown), Saúde (dropdown)
- Tabela: Código, Nome, Saúde, Situação, Prazo alvo, Gerente, Ações
- Contador

### Comercial > CRM
#### Painel (`/crm`)
#### Funil (`/crm/funil`)
#### Oportunidades (`/crm/oportunidades`)
#### Parceiros comerciais (`/crm/parceiros`)
#### Atas de registro de preço (`/crm/atas`)
#### Comissões (`/crm/comissoes`)
#### Metas (`/crm/metas`)
#### Parâmetros (`/crm/parametros`)
#### Relatórios (`/crm/relatorios`)

### Comercial > Jurídico
#### Licitações (`/comercial/licitacoes`)

### Financeiro
#### Operação (`/financeiro/operacao`)
#### Painel Gerencial (`/financeiro`)
#### Importar Extratos (`/financeiro/importar-extratos`)
#### Classificação (`/financeiro/classificacao`)
#### Saúde Financeira (`/financeiro/saude`)
#### Contratos & Projetos (`/financeiro/contratos-projetos`)
#### Indicadores (`/financeiro/indicadores`)
#### Planejamento (`/financeiro/planejamento`)
#### Relatórios (`/financeiro/relatorios`)
#### Notas fiscais (`/financeiro/notas-fiscais`)

### RH
#### Prestadores (`/rh/prestadores`)
#### Prestadores > Disponibilidade (`/rh/prestadores/disponibilidade`)
#### Prestadores > Fornecedores staffing (`/rh/prestadores/fornecedores-staffing`)
#### Prestadores > Parceiros de compra (`/rh/prestadores/parceiros-compra`)
#### Prestadores > Compras via parceiro (`/rh/prestadores/compras-parceiro`)
#### Desempenho > Ciclos de avaliação (`/rh/desempenho/ciclos`)
#### Desempenho > Aderência ao playbook (`/rh/desempenho/aderencia-playbook`)
#### Desempenho > Configuração (`/rh/desempenho/configuracao`)
#### Destaques (`/destaques-rh`)

### Inteligência
#### Modo Agente (`/inteligencia/modo-agente`)
#### Base de Conhecimento (`/inteligencia/base-conhecimento`)
#### Meus agentes (`/inteligencia/agentes`)
#### Análise de Dados (`/ia/analise-dados`)

### Processos (`/processos`)

### Patrimônio
#### Equipamentos (`/equipamentos`)
#### Patrimônio (`/patrimonio`)

### Destaque
#### Universidade Acto > Catálogo (`/universidade/catalogo`)
#### Universidade Acto > Gestão de cursos (`/universidade/gestao-cursos`)
#### Hub de cadastros (`/cadastros`)
#### Organizações (`/organizacoes`)

---

## Regras de UI Observadas

1. **Fundo branco** - Todas as páginas têm fundo branco (não azul claro)
2. **Breadcrumb** - Apenas na topbar/header, não duplicado no conteúdo
3. **Header padrão** - Busca global, caixa de entrada, notificações, Docs, Pomodoro, Configurar PIN
4. **Popup de ferramentas** - Disponível em todas as páginas
5. **Botão "Como usar"** - Cada página tem seu guia contextual
6. **Layout** - Sidebar + Header fixo + Conteúdo principal

---

## Itens para Implementação

### Alto Prioridade
- [ ] Mural de novidades na dashboard
- [ ] Botão "Pressione e segure..." (hint reorganização)
- [ ] Botões flutuantes (IA + Ferramentas)
- [ ] Popup de ferramentas Acto
- [ ] Botão "Como usar" na header
- [ ] Header: Docs, Pomodoro, Configurar PIN

### Média Prioridade
- [ ] Implementar estrutura de páginas conforme mapeamento
- [ ] Verificar todas as páginas do CRM
- [ ] Verificar páginas do RH
- [ ] Verificar Financeiro
- [ ] Verificar Patrimônio

### Baixa Prioridade
- [ ] Página de Licitações
- [ ] Páginas de submenus
