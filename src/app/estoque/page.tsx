"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Input } from "@/components/ui/input"

const estoque = [
  {
    id: "EST-001",
    codigo: "PROD-001",
    nome: "Notebook Dell XPS 15",
    categoria: "Eletrônicos",
    localizacao: "Almoxarifado A",
    quantidade: 15,
    unidade: "un",
    status: "Em Estoque",
  },
  {
    id: "EST-002",
    codigo: "PROD-002",
    nome: "Mouse Wireless Logitech",
    categoria: "Periféricos",
    localizacao: "Almoxarifado B",
    quantidade: 150,
    unidade: "un",
    status: "Em Estoque",
  },
  {
    id: "EST-003",
    codigo: "PROD-003",
    nome: "Monitor LG 27 polegadas",
    categoria: "Eletrônicos",
    localizacao: "Almoxarifado A",
    quantidade: 8,
    unidade: "un",
    status: "Estoque Baixo",
  },
]

export default function EstoquePage() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-white">
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
            <span className="text-gray-900 font-medium">Estoque</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Estoque</h1>
              <p className="text-gray-500 mt-1">Itens de estoque e movimentações.</p>
            </div>
            <button className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8]">
              Novo item
            </button>
          </div>

          {/* Search */}
          <div className="flex gap-4 mb-6">
            <Input
              type="search"
              placeholder="Buscar produtos..."
              className="flex-1 max-w-md"
            />
          </div>

          {/* Tabela */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Código</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Produto</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Categoria</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Localização</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Qtd</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Status</th>
                </tr>
              </thead>
              <tbody>
                {estoque.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-blue-600">{item.codigo}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.nome}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.categoria}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.localizacao}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{item.quantidade} {item.unidade}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        item.status === 'Em Estoque' ? 'bg-green-50 text-green-700' :
                        item.status === 'Estoque Baixo' ? 'bg-yellow-50 text-yellow-700' :
                        'bg-red-50 text-red-700'
                      }`}>
                        {item.status}
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

