"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const organizacoes = [
  {
    id: 2,
    nome: "Prefeitura Municipal Alpha",
    fantasia: "Prefeitura Alpha",
    cnpj: "19.131.243/0001-97",
    tipo: "Cliente público",
    status: "Ativa",
  },
  {
    id: 3,
    nome: "Prefeitura Municipal Beta",
    fantasia: "Prefeitura Beta",
    cnpj: "34.028.316/0001-03",
    tipo: "Cliente público",
    status: "Ativa",
  },
  {
    id: 4,
    nome: "Prefeitura Municipal Gamma",
    fantasia: "Prefeitura Gamma",
    cnpj: "61.695.227/0001-93",
    tipo: "Cliente público",
    status: "Ativa",
  },
]

export default function OrganizacoesPage() {
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
            <span className="text-gray-900 font-medium">Organizações</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Organizações</h1>
              <p className="text-gray-500 mt-1">Clientes públicos, parceiros e filiais.</p>
            </div>
            <Link href="/organizacoes/create" className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8]">
              Nova organização
            </Link>
          </div>

          {/* Filtros */}
          <div className="flex gap-4 mb-6">
            <Input
              type="search"
              placeholder="Buscar por razão social, fantasia ou CNPJ"
              className="flex-1 max-w-md"
            />
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>Todos os tipos</option>
              <option>Cliente público</option>
              <option>Parceiro</option>
              <option>Filial</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
              <option>Todos os status</option>
              <option>Ativa</option>
              <option>Inativa</option>
              <option>Arquivada</option>
            </select>
          </div>

          {/* Tabela */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Organização</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">CNPJ</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Tipos</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Ações</th>
                </tr>
              </thead>
              <tbody>
                {organizacoes.map((org) => (
                  <tr key={org.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <p className="text-sm font-medium text-gray-900">{org.nome}</p>
                      <p className="text-xs text-gray-500">{org.fantasia}</p>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{org.cnpj}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{org.tipo}</td>
                    <td className="px-4 py-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700">
                        {org.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-2">
                        <Link href={`/organizacoes/${org.id}`} className="text-sm text-blue-600 hover:underline">
                          Ver detalhes
                        </Link>
                        <Link href={`/organizacoes/${org.id}/edit`} className="text-sm text-gray-500 hover:text-gray-700">
                          Editar organização
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

