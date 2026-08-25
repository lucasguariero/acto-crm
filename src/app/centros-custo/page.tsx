"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const centrosCusto = [
  {
    id: 1,
    codigo: "CC-001",
    nome: "Operações",
    pai: "-",
    status: "Ativo",
  },
  {
    id: 2,
    codigo: "CC-002",
    nome: "Tecnologia",
    pai: "CC-001: Operações",
    status: "Ativo",
  },
]

export default function CentrosCustoPage() {
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
            <span className="text-gray-900 font-medium">Centros de custo</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Centros de custo</h1>
              <p className="text-gray-500 mt-1">Estrutura hierárquica de rastreamento de custos.</p>
            </div>
            <Link href="/centros-custo/create" className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8]">
              Novo centro de custo
            </Link>
          </div>

          {/* Tabela */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Código</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Nome</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Pai</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Ações</th>
                </tr>
              </thead>
              <tbody>
                {centrosCusto.map((cc) => (
                  <tr key={cc.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">{cc.codigo}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{cc.nome}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{cc.pai}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700">
                        {cc.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-3">
                        <Link href={`/centros-custo/${cc.id}`} className="text-sm text-blue-600 hover:underline">
                          Ver detalhes
                        </Link>
                        <Link href={`/centros-custo/${cc.id}/edit`} className="text-sm text-gray-500 hover:text-gray-700">
                          Editar centro de custo
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}
