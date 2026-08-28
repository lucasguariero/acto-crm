"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"

export default function CaixaEntradaPage() {
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
          {/* Abas */}
          <div className="flex items-center gap-6 mb-6 border-b border-gray-200">
            <button className="pb-3 px-1 border-b-2 border-[#0F4C81] text-[#0F4C81] font-medium text-sm">
              Todas
            </button>
            <button className="pb-3 px-1 text-gray-500 hover:text-gray-700 text-sm">
              Não lidas
            </button>
            <button className="pb-3 px-1 text-gray-500 hover:text-gray-700 text-sm">
              Projetos
            </button>
            <button className="pb-3 px-1 text-gray-500 hover:text-gray-700 text-sm">
              RH
            </button>
            <button className="pb-3 px-1 text-gray-500 hover:text-gray-700 text-sm">
              Avisos
            </button>
          </div>

          {/* Busca */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Buscar mensagens"
              className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent"
            />
          </div>

          {/* Filtro */}
          <div className="flex gap-4 mb-6">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="radio" name="filter" defaultChecked className="text-[#0F4C81]" />
              Todas
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="radio" name="filter" className="text-[#0F4C81]" />
              Não lidas
            </label>
          </div>

          {/* Mensagem vazia */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <p className="text-gray-500">Nenhuma mensagem nesta pasta.</p>
            <p className="text-gray-400 text-sm mt-2">Selecione uma mensagem para ler.</p>
          </div>
        </main>
      </div>
    </div>
  )
}

