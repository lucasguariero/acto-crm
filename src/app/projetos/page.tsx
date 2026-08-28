"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const projetos = [
  {
    id: 1,
    codigo: "PRJ-0001",
    nome: "teste",
    saude: "Saudável",
    situacao: "Planejado",
    prazo: "Sem prazo",
    gerente: null,
  },
]

export default function ProjetosPage() {
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
          {/* Header da página */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Governança de Projetos</h1>
            <p className="text-gray-500 mt-1">Gestão centralizada de iniciativas corporativas. Acompanhe a saúde, prazos e a conformidade dos projetos com os marcos estratégicos da organização.</p>
          </div>

          {/* Botão novo */}
          <div className="mb-6">
            <Button className="bg-[#0F4C81] hover:bg-[#0d3d6b]">
              Novo projeto
            </Button>
          </div>

          {/* Filtros */}
          <div className="flex gap-4 mb-6">
            <Input
              placeholder="Buscar por código ou nome..."
              className="max-w-md"
            />
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white">
              <option>Situação: Todas</option>
              <option>Planejado</option>
              <option>Em andamento</option>
              <option>Pausado</option>
              <option>Concluído</option>
              <option>Cancelado</option>
            </select>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white">
              <option>Saúde: Todas</option>
              <option>Saudável</option>
              <option>Atenção</option>
              <option>Crítico</option>
            </select>
          </div>

          {/* Tabela */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Código</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Nome do projeto</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Saúde</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Situação</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Prazo alvo</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Gerente</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {projetos.map((projeto) => (
                  <tr key={projeto.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900">{projeto.codigo}</td>
                    <td className="px-4 py-3 text-sm">
                      <a href={`/projetos/${projeto.id}`} className="text-[#0F4C81] hover:underline">
                        {projeto.nome}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                        {projeto.saude}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{projeto.situacao}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{projeto.prazo}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {projeto.gerente ? projeto.gerente : 'Sem gerente'}
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <button className="p-1.5 hover:bg-gray-100 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                          <path d="M224,48V96a8,8,0,0,1-8,8H168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                          <path d="M168,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                          <path d="M88,168h80a8,8,0,0,0,8-8V96a8,8,0,0,0-8-8H88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Contador */}
          <p className="text-sm text-gray-500 mt-4">Mostrando {projetos.length} de {projetos.length} projetos</p>
        </main>
      </div>
    </div>
  )
}

