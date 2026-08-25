# Páginas que precisam ser revisadas

**ATENÇÃO**: Estas páginas foram criadas com base em prints/enviadas pelo usuário e precisam ser revisadas pixel-perfect contra o CRM real.

---

## 🔴 Pendentes de Correção

### Menu Sidebar - Financeiro
- [ ] Menu Financeiro está incompleto - precisa ter:
  - Operação (submenuexpandido por padrão):
    - Painel Gerencial → /financeiro
    - Importar Extratos → /financeiro/importar-extratos
    - Classificação → /financeiro/classificacao
    - Saúde Financeira → /financeiro/centros-custo
    - Contratos & Projetos → /financeiro/contratos-projetos
    - Indicadores → /financeiro/indicadores
    - Planejamento → /financeiro/planejamento
  - Relatórios → /financeiro/relatorios
  - Notas fiscais → /faturamento/notas-fiscais

### Menu Sidebar
- [ ] "Prestadores" no RH não deve ser link (texto apenas)
- [ ] "Desempenho" no RH não deve ser link (texto apenas)
- [ ] "Operação" no Financeiro não deve ser link (texto apenas)
- [ ] "Universidade Acto" no Destaque não deve ser link (botão)
- [ ] Adicionar botão "Abrir assistente de IA" no canto inferior direito
- [ ] Adicionar botão "Abrir ferramentas Acto homologadas" no canto inferior direito
- [ ] Adicionar diálogo "Ferramentas Acto" com atalhos rápidos

### Dashboard
- [ ] Cards "Processos pendentes", "Fila de notas fiscais", "Projetos em risco" estão corretos após última correção

### /cadastros
- [ ] Título deve ser h2 (não h1)
- [ ] Itens devem ter título, descrição e link "Abrir" separados (não tudo em um link)
- [ ] Adicionar breadcrumb "Cadastros" (sem "Início /")
- [ ] Adicionar item "Perfis de importação" desabilitado com "Em breve"

### /crm
- [ ] Breadcrumb deve ser "CRM / Painel" (sem "Início /")
- [ ] Botão "Como usar" deve ter texto completo "Como usar: Dashboard executivo CRM"

### /processos
- [ ] Título deve ser h2 (não h1)
- [ ] Breadcrumb deve ser "Processos" (sem "Início /")
- [ ] Itens devem ter badge "Em dia", título, descrição e link "Abrir fila" separados

---

## ✅ Páginas criadas a partir do CRM real (novas - não precisam de revisão):

- [x] `/crm` - Painel CRM - src/app/crm/page.tsx
- [x] `/crm/funil` - Funil CRM - src/app/crm/funil/page.tsx
- [x] `/crm/parceiros` - Parceiros comerciais - src/app/crm/parceiros/page.tsx
- [x] `/crm/atas` - Atas de registro de preço - src/app/crm/atas/page.tsx
- [x] `/crm/comissoes` - Comissões - src/app/crm/comissoes/page.tsx
- [x] `/crm/metas` - Metas - src/app/crm/metas/page.tsx
- [x] `/crm/parametros` - Parâmetros - src/app/crm/parametros/page.tsx
- [x] `/crm/relatorios` - Relatórios CRM - src/app/crm/relatorios/page.tsx
- [x] `/meu/caixa-entrada` - Caixa de entrada - src/app/meu/caixa-entrada/page.tsx
- [x] `/financeiro/relatorios` - Relatórios financeiros - src/app/financeiro/relatorios/page.tsx
- [x] `/faturamento/notas-fiscais` - Notas fiscais - src/app/faturamento/notas-fiscais/page.tsx
- [x] `/destaques-rh` - Destaques RH - src/app/destaques-rh/page.tsx
- [x] `/ia/conhecimento` - Base de Conhecimento - src/app/ia/conhecimento/page.tsx
- [x] `/ia/agentes-userspace` - Meus agentes - src/app/ia/agentes-userspace/page.tsx
- [x] `/ia/analise-dados` - Análise de Dados - src/app/ia/analise-dados/page.tsx
- [x] `/equipamentos` - Equipamentos - src/app/equipamentos/page.tsx
- [x] `/documentacao` - Documentação - src/app/documentacao/page.tsx
- [x] `/settings/profile` - Configurações perfil - src/app/settings/profile/page.tsx
- [x] `/meu/fornecedor-staffing` - Equipe terceirizada - src/app/meu/fornecedor-staffing/page.tsx
- [x] `/projetos/meu-trabalho` - Meu trabalho - src/app/projetos/meu-trabalho/page.tsx

---

## ⚠️ Páginas criadas com base em prints (precisam revisão):

## Revisar (pixel perfect)
- [x] `/dashboard` - src/app/dashboard/page.tsx ✅ REVISADO
- [x] `/cadastros` - src/app/cadastros/page.tsx ✅ REVISADO
- [x] `/cadastros/organizacoes` - src/app/cadastros/organizacoes/page.tsx ✅ REVISADO
- [x] `/processos` - src/app/processos/page.tsx ✅ REVISADO
- [x] `/destaques-rh` - src/app/destaques-rh/page.tsx ✅ REVISADO
- [x] `/universidade` - src/app/universidade/page.tsx ✅ REVISADO
- [x] `/comercial/licitacoes` - src/app/comercial/licitacoes/page.tsx ✅ REVISADO

## ✅ Rotas criadas na raiz (batch 1 - Opção 1)
- [x] `/organizacoes` - src/app/organizacoes/page.tsx ✅ NOVO
- [x] `/centros-custo` - src/app/centros-custo/page.tsx ✅ NOVO
- [x] `/plano-contas` - src/app/plano-contas/page.tsx ✅ NOVO
- [x] `/equipamentos` - src/app/equipamentos/page.tsx ✅ NOVO
- [x] `/patrimonio` - src/app/patrimonio/page.tsx ✅ NOVO
- [x] `/estoque` - src/app/estoque/page.tsx ✅ NOVO
- [x] `/crm/oportunidades` - src/app/crm/oportunidades/page.tsx ✅ NOVO

## 🔄 Rotas restantes (batch 2 - Opção 2)

---

## ✅ Revisões feitas nesta sessão:
- Dashboard ✅
- Cadastros ✅
- Processos ✅
- Destaques RH ✅
- Universidade ✅
- Organizações ✅
- Licitações ✅
- CRM (nova página) ✅
- Caixa de Entrada ✅
- Equipe Terceirizada ✅
- Notas Fiscais ✅
- Equipamentos ✅
- Documentação ✅
- Configurações ✅

**Faltam**: (~30 páginas ainda para revisar)
- [ ] `/cadastros/centros-custo` - src/app/cadastros/centros-custo/page.tsx
- [ ] `/cadastros/centros-custo` - src/app/cadastros/centros-custo/page.tsx
- [ ] `/cadastros/patrimonio` - src/app/cadastros/patrimonio/page.tsx
- [ ] `/cadastros/equipamentos` - src/app/cadastros/equipamentos/page.tsx
- [ ] `/cadastros/plano-contas` - src/app/cadastros/plano-contas/page.tsx
- [ ] `/cadastros/contas-bancarias` - src/app/cadastros/contas-bancarias/page.tsx
- [ ] `/cadastros/estoque` - src/app/cadastros/estoque/page.tsx
- [ ] `/comercial` - src/app/comercial/page.tsx
- [ ] `/comercial/crm` - src/app/comercial/crm/page.tsx
- [ ] `/comercial/crm/[id]` - src/app/comercial/crm/[id]/page.tsx
- [ ] `/comercial/crm/nova` - src/app/comercial/crm/nova/page.tsx
- [ ] `/comercial/licitacoes` - src/app/comercial/licitacoes/page.tsx
- [ ] `/comercial/licitacoes/nova` - src/app/comercial/licitacoes/nova/page.tsx
- [ ] `/financeiro` - src/app/financeiro/page.tsx
- [ ] `/financeiro/painel` - src/app/financeiro/painel/page.tsx
- [ ] `/financeiro/saude` - src/app/financeiro/saude/page.tsx
- [ ] `/financeiro/extratos` - src/app/financeiro/extratos/page.tsx
- [ ] `/financeiro/classificacao` - src/app/financeiro/classificacao/page.tsx
- [ ] `/financeiro/notas-fiscais` - src/app/financeiro/notas-fiscais/page.tsx
- [ ] `/inteligencia` - src/app/inteligencia/page.tsx
- [ ] `/inteligencia/base-conhecimento` - src/app/inteligencia/base-conhecimento/page.tsx
- [ ] `/inteligencia/agentes` - src/app/inteligencia/agentes/page.tsx
- [ ] `/inteligencia/analise` - src/app/inteligencia/analise/page.tsx
- [ ] `/meu-espaco` - src/app/meu-espaco/page.tsx
- [ ] `/meu-espaco/perfil` - src/app/meu-espaco/perfil/page.tsx
- [ ] `/meu-espaco/solicitacoes` - src/app/meu-espaco/solicitacoes/page.tsx
- [ ] `/meu-espaco/notas-fiscais` - src/app/meu-espaco/notas-fiscais/page.tsx
- [ ] `/meu-espaco/equipe` - src/app/meu-espaco/equipe/page.tsx
- [x] `/processos` - src/app/processos/page.tsx ✅ REVISADO
- [ ] `/processos/centro-custo` - src/app/processos/centro-custo/page.tsx
- [ ] `/processos/recesso` - src/app/processos/recesso/page.tsx
- [ ] `/processos/substituicoes` - src/app/processos/substituicoes/page.tsx
- [ ] `/projetos` - src/app/projetos/page.tsx
- [ ] `/projetos/novo` - src/app/projetos/novo/page.tsx
- [ ] `/rh` - src/app/rh/page.tsx
- [ ] `/rh/prestadores` - src/app/rh/prestadores/page.tsx
- [ ] `/rh/fornecedores` - src/app/rh/fornecedores/page.tsx
- [ ] `/rh/avaliacao` - src/app/rh/avaliacao/page.tsx
- [ ] `/rh/destaques` - src/app/rh/destaques/page.tsx
- [ ] `/rh/disponibilidade` - src/app/rh/disponibilidade/page.tsx
- [ ] `/universidade` - src/app/universidade/page.tsx
- [ ] `/universidade/cursos` - src/app/universidade/cursos/page.tsx
- [ ] `/universidade/gestao` - src/app/universidade/gestao/page.tsx
