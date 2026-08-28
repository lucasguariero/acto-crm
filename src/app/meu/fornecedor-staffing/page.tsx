"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"

export default function FornecedorStaffingPage() {
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
            <h1 className="text-2xl font-semibold text-gray-900">Equipe terceirizada e outsourcing</h1>
            <p className="text-gray-500 mt-1">Painel consolidado para gestores de equipes terceirizadas e de outsourcing.</p>
          </div>

          {/* Estado vazio */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <p className="text-gray-600">
              Você não possui colaboradores terceirizados ou de outsourcing sob sua gestão ou não tem permissão de aprovação de processos.
            </p>
          </div>
        </main>
      </div>
    </div>
  )
}

