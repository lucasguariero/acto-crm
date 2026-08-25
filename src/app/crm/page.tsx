"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"

export default function CRMPage() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div
        className="transition-all duration-300"
        style={{ marginLeft: collapsed ? '72px' : '260px' }}
      >
        <Header onToggleSidebar={() => setCollapsed(!collapsed)} />
        <main className="p-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
            <span>/</span>
            <Link href="/crm" className="hover:text-gray-700">CRM</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Painel</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Painel CRM</h1>
              <p className="text-gray-500 mt-1">Visão geral do pipeline comercial: LDR, SDR, BDR e Closer.</p>
            </div>
            <div className="flex gap-2">
              <Link href="/crm/funil" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium">
                Abrir funil
              </Link>
              <Link href="/crm/relatorios" className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 text-sm font-medium">
                Exportar relatório
              </Link>
              <Link href="/crm/oportunidades/nova" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                Nova oportunidade
              </Link>
            </div>
          </div>

          {/* Tabs e Período */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500">Visões do painel CRM</span>
                <div className="flex gap-1">
                  <button className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-medium">Visão geral</button>
                  <button className="px-3 py-1.5 text-gray-600 hover:bg-gray-50 rounded-md text-sm font-medium">Executivo</button>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Período analítico: T3/2026</span>
                <div className="flex gap-1">
                  <button className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded text-xs">Mês atual</button>
                  <button className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded text-xs">Trimestre</button>
                  <button className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded text-xs">Ano</button>
                  <button className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded text-xs">Todo o período</button>
                </div>
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-2xl font-bold text-gray-900">R$ 10 mil</p>
              <p className="text-sm text-gray-500 mt-1">Valor do pipeline</p>
              <p className="text-xs text-gray-400 mt-2">Soma das oportunidades ativas no funil comercial.</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-2xl font-bold text-gray-900">1</p>
              <p className="text-sm text-gray-500 mt-1">Oportunidades ativas</p>
              <p className="text-xs text-gray-400 mt-2">Negócios em andamento entre LDR e Closer.</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-2xl font-bold text-gray-900">52°</p>
              <p className="text-sm text-gray-500 mt-1">Temperatura média</p>
              <p className="text-xs text-gray-400 mt-2">Engajamento médio das oportunidades abertas.</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-2xl font-bold text-gray-900">0%</p>
              <p className="text-sm text-gray-500 mt-1">Win-rate</p>
              <p className="text-xs text-gray-400 mt-2">Ganhos ÷ encerradas em T3/2026.</p>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <div className="grid grid-cols-3 gap-6">
            {/* Distribuição por estágio */}
            <div className="col-span-2 bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">Distribuição por estágio</h2>
                  <p className="text-sm text-gray-500 mt-1">Snapshot do pipeline aberto: volume, valor estimado e participação por estágio.</p>
                </div>
                <Link href="/crm/funil" className="text-blue-600 hover:text-blue-700 text-sm font-medium">Abrir funil</Link>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Oportunidades abertas</p>
                  <p className="text-xl font-bold text-gray-900">1</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Valor no pipeline</p>
                  <p className="text-xl font-bold text-gray-900">R$ 10 mil</p>
                  <p className="text-xs text-gray-500">R$ 10.000,00</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500">Estágio com maior valor</p>
                  <p className="text-xl font-bold text-gray-900">Qualificação</p>
                  <p className="text-xs text-gray-500">R$ 10 mil</p>
                </div>
              </div>

              {/* Gráfico de barras simples */}
              <div className="mb-6">
                <div className="flex items-end gap-2 h-32">
                  <div className="flex-1 bg-gray-100 rounded-t h-0"></div>
                  <div className="flex-1 bg-blue-600 rounded-t" style={{ height: '10%' }}></div>
                  <div className="flex-1 bg-gray-100 rounded-t h-0"></div>
                  <div className="flex-1 bg-gray-100 rounded-t h-0"></div>
                </div>
                <div className="flex gap-2 mt-2 text-xs text-gray-500">
                  <div className="flex-1 text-center">Lead</div>
                  <div className="flex-1 text-center">Qualificação</div>
                  <div className="flex-1 text-center">Desenvolvimento</div>
                  <div className="flex-1 text-center">Negociação</div>
                </div>
              </div>

              {/* Tabela */}
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-gray-500 font-medium">Estágio</th>
                    <th className="text-right py-3 text-gray-500 font-medium">Oportunidades</th>
                    <th className="text-right py-3 text-gray-500 font-medium">Valor estimado</th>
                    <th className="text-right py-3 text-gray-500 font-medium">% do pipeline</th>
                    <th className="text-right py-3 text-gray-500 font-medium">Ticket médio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">
                      <p className="font-medium text-gray-900">Lead</p>
                      <p className="text-xs text-gray-500">LDR</p>
                    </td>
                    <td className="text-right py-3 text-gray-900">0</td>
                    <td className="text-right py-3 text-gray-900">R$ 0,00</td>
                    <td className="text-right py-3 text-gray-900">0%</td>
                    <td className="text-right py-3 text-gray-400">—</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">
                      <p className="font-medium text-gray-900">Qualificação</p>
                      <p className="text-xs text-gray-500">SDR</p>
                    </td>
                    <td className="text-right py-3 text-gray-900">1</td>
                    <td className="text-right py-3 text-gray-900">R$ 10.000,00</td>
                    <td className="text-right py-3 text-gray-900">100%</td>
                    <td className="text-right py-3 text-gray-900">R$ 10.000,00</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3">
                      <p className="font-medium text-gray-900">Desenvolvimento</p>
                      <p className="text-xs text-gray-500">BDR</p>
                    </td>
                    <td className="text-right py-3 text-gray-900">0</td>
                    <td className="text-right py-3 text-gray-900">R$ 0,00</td>
                    <td className="text-right py-3 text-gray-900">0%</td>
                    <td className="text-right py-3 text-gray-400">—</td>
                  </tr>
                  <tr>
                    <td className="py-3">
                      <p className="font-medium text-gray-900">Negociação</p>
                      <p className="text-xs text-gray-500">Closer</p>
                    </td>
                    <td className="text-right py-3 text-gray-900">0</td>
                    <td className="text-right py-3 text-gray-900">R$ 0,00</td>
                    <td className="text-right py-3 text-gray-900">0%</td>
                    <td className="text-right py-3 text-gray-400">—</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Coluna Direita */}
            <div className="space-y-6">
              {/* Conversão do funil */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Conversão do funil</h2>
                <p className="text-sm text-gray-500 mb-4">Handoffs em T3/2026: taxa entre estágios adjacentes.</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Lead → Qualificação</p>
                      <p className="text-xs text-gray-500">2 saída(s) do estágio</p>
                    </div>
                    <span className="text-lg font-bold text-green-600">50%</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-100">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Qualificação → Desenvolvimento</p>
                      <p className="text-xs text-gray-500">Nenhuma saída no período</p>
                    </div>
                    <span className="text-lg font-bold text-gray-400">—</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <div>
                      <p className="font-medium text-gray-900 text-sm">Desenvolvimento → Negociação</p>
                      <p className="text-xs text-gray-500">Nenhuma saída no período</p>
                    </div>
                    <span className="text-lg font-bold text-gray-400">—</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-900 mb-2">Tempo médio no estágio</p>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center">
                      <p className="text-gray-500">Lead</p>
                      <p className="font-medium text-gray-900">—</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">Qualificação</p>
                      <p className="font-medium text-gray-900">&lt;1 dia</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">Desenvolvimento</p>
                      <p className="font-medium text-gray-900">—</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500">Negociação</p>
                      <p className="font-medium text-gray-900">—</p>
                    </div>
                  </div>
                </div>

                <Link href="/crm/funil" className="block mt-4 text-center text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Trabalhar no funil
                </Link>
              </div>

              {/* Insights estratégicos */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Insights estratégicos</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Com win-rate em 0%, revise critérios de qualificação e propostas antes de avançar oportunidades no funil.
                </p>
                <Link href="/crm/funil" className="inline-block text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Aplicar recomendação →
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
