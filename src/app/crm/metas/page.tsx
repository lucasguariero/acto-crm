"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"

export default function MetasPage() {
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
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
            <span>/</span>
            <Link href="/crm" className="hover:text-gray-700">CRM</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Metas</span>
          </nav>

          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Metas CRM</h1>
            <p className="text-gray-500 mt-1">Defina e acompanhe as metas comerciais</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <p className="text-gray-500 text-center py-12">Nenhuma meta encontrada</p>
          </div>
        </main>
      </div>
    </div>
  )
}
