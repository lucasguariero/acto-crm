"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"

export default function MeuTrabalhoPage() {
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
            <h1 className="text-2xl font-semibold text-gray-900">Meu trabalho</h1>
            <p className="text-gray-500 mt-1">Acompanhe cards e projetos sob sua responsabilidade em um só lugar.</p>
          </div>

          {/* Abas */}
          <div className="flex items-center gap-6 mb-6 border-b border-gray-200">
            <button className="pb-3 px-1 border-b-2 border-[#0F4C81] text-[#0F4C81] font-medium text-sm">
              Resumo
            </button>
            <button className="pb-3 px-1 text-gray-500 hover:text-gray-700 text-sm">
              Atribuídos a mim
            </button>
            <button className="pb-3 px-1 text-gray-500 hover:text-gray-700 text-sm">
              Histórico de atividades
            </button>
          </div>

          {/* Conteúdo - Resumo */}
          <div className="space-y-6">
            {/* Visão geral */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Visão geral</h2>
              <p className="text-gray-500 mb-4">Cards e projetos em que você é responsável.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-[#0F4C81]">0</p>
                  <p className="text-sm text-gray-600">Cards abertos sob sua responsabilidade</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-[#0F4C81]">0</p>
                  <p className="text-sm text-gray-600">Projetos com cards abertos atribuídos a você</p>
                </div>
              </div>
            </div>

            {/* Status dos cards */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Status dos cards</h2>
              <p className="text-gray-500 mb-4">Distribuição dos seus cards abertos pelo estágio no quadro.</p>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-gray-700">0</p>
                  <p className="text-sm text-gray-600">Não iniciados</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-gray-700">0</p>
                  <p className="text-sm text-gray-600">Em andamento</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-gray-700">0</p>
                  <p className="text-sm text-gray-600">Em QA</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-gray-700">0</p>
                  <p className="text-sm text-gray-600">Bloqueados</p>
                </div>
              </div>
            </div>

            {/* Distribuição */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Distribuição</h2>
              <p className="text-gray-500 mb-4">Prioridade e progresso dos cards atribuídos a você.</p>
              <div className="text-center py-8">
                <p className="text-gray-500">Nenhum card atribuído</p>
                <p className="text-sm text-gray-400 mt-2">Quando houver cards sob sua responsabilidade, os gráficos de prioridade e status aparecem aqui.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

