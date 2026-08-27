# Análise de Usabilidade - CRM Acto

> Documento para registrar a análise de usabilidade e melhorias identificadas no CRM.

---

## Dashboard

### Pontos Positivos
- Layout limpo e organizado
- Navegação intuitiva com sidebar colapsável
- Breadcrumbs para orientação
- Busca global com atalho Ctrl+K
- Hierarquia visual clara entre blocos
- Botão "Ocultar" em seções expansíveis

### Erros Técnicos Identificados

| # | Tipo | Problema | Localização | Status |
|---|------|----------|-------------|--------|
| 1 | Erro console | Atributo `src` vazio ("") sendo passado em imagem | Dashboard - componente avatar | ✅ CORRIGIDO |
| 2 | Erro console | Mesmo erro de src vazio | Dashboard | ✅ CORRIGIDO |

### Pontos de Atenção / Melhorias

| # | Item | Problema | Sugestão | Prioridade | Status |
|---|------|----------|----------|------------|--------|
| 1 | Aniversariantes | Lista muito grande (7 pessoas) polui visualmente | Usar collapse ou mostrar só "É hoje" por padrão | Alta | ✅ CORRIGIDO (collapse nos "já passou") |
| 2 | Aniversariantes | Cards repetitivos com mesma estrutura | Unificar em lista mais compacta | Média | |
| 3 | Aniversariantes | Muitos botões de ação (parabenizar, etc) | Consolidar ações ou usar menu dropdown | Baixa | |
| 4 | Comunicados | Quando há muitos, a lista fica longa | Adicionar collapse ou "ver mais" | Alta | ✅ CORRIGIDO |
| 5 | Seu dia | Informação sobrecarregada | Bloco já está simples, ok | - | |
| 6 | Processos pendentes | Cards com texto muito longo | Resumir descrição ou usar tooltip | Média | ✅ CORRIGIDO |
| 7 | Projetos em risco | Sem destaque visual suficiente para "0 projetos" | Quando há risco, deve ter alerta mais visível | Alta | ✅ CORRIGIDO |
| 8 | Responsividade | Cards podem ficar apertados em telas menores | Ajustar grid | Média | |
| 9 | reorder | Texto "Pressione e segure..." confunde usuário | Remover ou mover para área de configurações | Baixa | ✅ CORRIGIDO |
| 10 | Mural | Input de texto muito grande | Reduzir altura ou usar placeholder menor | Baixa | ✅ CORRIGIDO |

### Screenshots/Anotações

_Ver snapshot em: `.playwright-mcp/page-2026-08-27T04-40-09-026Z.yml`_

---

## CRM (Próximas páginas)

- Funil
- Oportunidades
- Parceiros
- Atas
- Comissões
- Metas
- Parâmetros
- Relatórios

---

## Histórico de Alterações

| Data | Versão | Descrição |
|------|--------|-----------|
| 2026-08-27 | 1.0 | Versão inicial - Análise da Dashboard |
| 2026-08-27 | 1.1 | Adicionados erros técnicos encontrados no console |
