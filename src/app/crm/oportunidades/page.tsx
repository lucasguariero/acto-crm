"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Input } from "@/components/ui/input"

const oportunidades = [
  {
    id: 1,
    codigo: "CRM-PI38ZW",
    titulo: "Teste",
    organizacao: "Acto",
    origem: "Outbound",
    finder: "-",
    rep: "-",
    ldr: "-",
    sdr: "-",
    bdr: "-",
    closer: "-",
    margem: "100%",
    proximoPasso: "-",
    ultimoContato: "Sem contato",
    estagio: "Qualificação",
    forecast: "Pipeline",
    fechamento: "-",
    dependenteActo: "Não",
    receitaPonderada: "R$ 0,00",
  },
]

export default function OportunidadesPage() {
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
            <span className="text-gray-900 font-medium">Oportunidades</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Lista executiva de oportunidades</h1>
              <p className="text-gray-500 mt-1">Visão comercial com origem, equipe, margem e próximo passo.</p>
            </div>
            <div className="flex gap-3">
              <Link href="/crm/funil" className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50">
                Abrir funil
              </Link>
              <Link href="/crm/oportunidades/create" className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8]">
                Nova oportunidade
              </Link>
            </div>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-4 mb-6">
            <Input
              type="search"
              placeholder="Buscar por código ou título"
              className="flex-1 min-w-[200px] max-w-md"
            />
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>Todos os estágios</option>
              <option>Lead</option>
              <option>Qualificação</option>
              <option>Desenvolvimento</option>
              <option>Negociação</option>
              <option>Ganho</option>
              <option>Perdido</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>Todas as origens</option>
              <option>Inbound</option>
              <option>Outbound</option>
              <option>Indicação</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>Qualquer participante</option>
              <option>Com Finder</option>
              <option>Com Representante</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>Todas as categorias</option>
              <option>Pipeline</option>
              <option>Upside</option>
              <option>Commit</option>
            </select>
          </div>

          {/* Tabela */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Oportunidade</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Organização</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Origem</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Finder</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Estágio</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Forecast</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Margem</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Receita pond.</th>
                </tr>
              </thead>
              <tbody>
                {oportunidades.map((opp) => (
                  <tr key={opp.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <Link href={`/crm/oportunidades/${opp.id}`} className="text-blue-600 hover:underline">
                        <span className="font-medium">{opp.codigo}</span>
                        <span className="text-gray-500"> - {opp.titulo}</span>
                      </Link>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">{opp.organizacao}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{opp.origem}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{opp.finder}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{opp.estagio}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{opp.forecast}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{opp.margem}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{opp.receitaPonderada}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4">Mostrando {oportunidades.length} de {oportunidades.length} oportunidades</p>
        </main>
      </div>
    </div>
  )
}
