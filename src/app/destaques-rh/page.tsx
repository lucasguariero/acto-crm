"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"

export default function DestaquesRHPage() {
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
            <Link href="/rh" className="hover:text-gray-700">RH</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Destaques</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Destaques de RH</h1>
              <p className="text-gray-500 mt-1">Comunicados exibidos no carrossel da visão geral do dashboard.</p>
            </div>
            <Link href="/destaques-rh/create" className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8]">
              Novo destaque
            </Link>
          </div>

          {/* Empty State */}
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <p className="text-gray-900 font-medium">Nenhum destaque cadastrado</p>
            <p className="text-gray-500 text-sm mt-1">Cadastre comunicados com imagem e rich text para os prestadores.</p>
          </div>
        </main>
      </div>
    </div>
  )
}
