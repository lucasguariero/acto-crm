"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Input } from "@/components/ui/input"

const equipamentos = [
  {
    id: "EQP-001",
    nome: "MacBook Pro 16",
    categoria: "Notebook",
    localizacao: "Sede - Andar 1",
    status: "Ativo",
  },
  {
    id: "EQP-002",
    nome: "Dell Monitor 27",
    categoria: "Monitor",
    localizacao: "Sede - Andar 2",
    status: "Ativo",
  },
  {
    id: "EQP-003",
    nome: "iPhone 14 Pro",
    categoria: "Celular",
    localizacao: "Colaborador",
    status: "Ativo",
  },
]

export default function EquipamentosPage() {
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
            <span className="text-gray-900 font-medium">Equipamentos</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Equipamentos</h1>
              <p className="text-gray-500 mt-1">Cadastro de equipamentos alocados a prestadores e projetos.</p>
            </div>
            <button className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8]">
              Novo equipamento
            </button>
          </div>

          {/* Search */}
          <div className="flex gap-4 mb-6">
            <Input
              type="search"
              placeholder="Buscar equipamentos..."
              className="flex-1 max-w-md"
            />
          </div>

          {/* Tabela */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">ID</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Nome</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Categoria</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Localização</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {equipamentos.map((eq) => (
                  <tr key={eq.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-blue-600">{eq.id}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{eq.nome}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{eq.categoria}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{eq.localizacao}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700">
                        {eq.status}
                      </span>
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
