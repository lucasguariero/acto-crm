# Plano de Execução - Clonagem do CRM Acto

## Estratégia Geral

O objetivo é clonar TODAS as ~71 telas do CRM para o novo projeto (Next.js + React + Tailwind + Shadcn UI), mantendo o estilo pixel-perfect do dashboard já criado.

---

## Fases do Projeto

### Fase 1: Setup e Componentes Base
**Objetivo:** Criar a infraestrutura reused

- [ ] Criar layout base (sidebar + header) em componente React
- [ ] Criar componentes UI reused:
  - [ ] Table (genérica)
  - [ ] Card (lista/formulário)
  - [ ] Form (inputs, selects, checkboxes)
  - [ ] Modal/Drawer
  - [ ] Tabs
  - [ ] Pagination
  - [ ] Filters (busca, ordenação)
  - [ ] Status Badge
  - [ ] Avatar
  - [ ] KPI Card
  - [ ] Empty State

### Fase 2: Dashboard
**Status:** ✅ JÁ FEITO

- Dashboard completo já clonado

### Fase 3: Módulos (ordem sugerida)

#### 3.1 Meu Espaço (5 telas)
- [ ] Minhas Notas Fiscais
- [ ] Meu PET Editor
- [ ] Meu Perfil
- [ ] Minhas Solicitações
- [ ] Equipe Terceirizada

#### 3.2 Cadastros (18 telas)
- [ ] Hub de Cadastros
- [ ] Equipamentos (listagem)
- [ ] Patrimônio (listagem + formulário)
- [ ] Centros de Custo (listagem + formulário)
- [ ] Organizações (listagem + formulário)
- [ ] Plano de Contas
- [ ] Alíquotas de Impostos
- [ ] Contas Bancárias
- [ ] Regras de Classificação
- [ ] Estoque
- [ ] Configurações Integrações

#### 3.3 Projetos (3 telas)
- [ ] Governança de Projetos
- [ ] Novo Projeto (wizard 3 etapas)

#### 3.4 Comercial / CRM (9 telas)
- [ ] Funil Comercial (Kanban)
- [ ] Lista de Oportunidades
- [ ] Nova Oportunidade (wizard 2 etapas)
- [ ] Relatórios Pipeline
- [ ] Relatórios Win Rate
- [ ] Relatórios SLA

#### 3.5 Jurídico (4 telas)
- [ ] Licitações (listagem + KPIs)
- [ ] Nova Licitação (wizard 4 etapas)

#### 3.6 Financeiro (10 telas)
- [ ] Painel Gerencial
- [ ] Importar Extratos
- [ ] Classificação de Lançamentos
- [ ] Saúde Financeira
- [ ] Contratos e Projetos
- [ ] Indicadores Essenciais
- [ ] Planejamento
- [ ] Relatórios
- [ ] Notas Fiscais / Faturamento

#### 3.7 Processos (4 telas)
- [ ] Hub de Filas
- [ ] Solicitações Centro de Custo
- [ ] Solicitações Recesso
- [ ] Substituições

#### 3.8 RH (11 telas)
- [ ] Prestadores PJ
- [ ] Novo Prestador PJ (wizard 7 etapas)
- [ ] Disponibilidade Prestadores
- [ ] Fornecedores Staffing
- [ ] Contratos Fornecedores
- [ ] Compras Parceiro
- [ ] Ciclos Avaliação
- [ ] Jornada Avaliação
- [ ] Aderência Playbook
- [ ] Destaques RH

#### 3.9 Universidade (3 telas)
- [ ] Catálogo Cursos
- [ ] Gestão Cursos
- [ ] Incorporar Link Externo

#### 3.10 Inteligência (3 telas)
- [ ] Base Conhecimento
- [ ] Agentes
- [ ] Análise Dados

---

## Tipos de Telas (padrões identificados)

| Tipo | Qtd | Descrição |
|------|-----|-----------|
| Listagem | ~20 | Tabela com filtros, ordenação, paginação |
| Hub | ~5 | Dashboard com cards/links |
| Formulário | ~15 | Wizards multi-etapas |
| Kanban | ~2 | Funil comercial |
| Detalhe | ~10 | Visualização de item específico |
| Configuração | ~5 | Telas de settings |

---

## Comando de Execução

Para executar tudo de uma vez, o usuário pode usar:

```bash
# Clonar todas as telas
# (implementação automática baseada no mapeamento)
```

---

## Observações

1. **Ordem sugerida:** Do mais simples ao mais complexo
2. **Componentes reused:** Criar ANTES de começar os módulos
3. **Pixel-perfect:** Usar os prints como referência
4. **Responsividade:** Verificar mobile depois
5. **Testes:** Validar cada tela antes de avançar

---

## Progresso Atual

- [x] Estrutura de mapeamento criada
- [x] Setup componentes base (Table, Select, Tabs, Dialog, DropdownMenu)
- [x] Dashboard (já feito)
- [x] Sidebar atualizada com todos os menus
- [ ] Clonando telas (em progresso - 6 agentes trabalhando)

**Status:** 6 agentes trabalhando em paralelo para criar todas as telas automaticamente
