"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"

export default function UniversidadePage() {
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
            <span className="text-gray-900 font-medium">Universidade Acto</span>
          </nav>

          {/* Links */}
          <div className="flex gap-4 mb-8">
            <Link href="/universidade/gestao" className="text-blue-600 font-medium text-sm hover:underline">
              Gerenciar cursos
            </Link>
            <Link href="/universidade/gestao/create" className="text-blue-600 font-medium text-sm hover:underline">
              Incorporar link
            </Link>
          </div>

          {/* Aprendizado contínuo */}
          <div className="mb-8">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Aprendizado contínuo</h2>

            <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
              <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                Olá, Admin. <span className="font-normal">Evolua no seu ritmo.</span>
              </h1>
              <p className="text-gray-500 mb-4">Conteúdos selecionados para fortalecer competências, compartilhar conhecimento e apoiar seu desenvolvimento na Acto.</p>
              <Link href="#catalogo-cursos" className="inline-block px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8]">
                Explorar cursos
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <p className="text-3xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-500">Cursos</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <p className="text-3xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-500">Destaques</p>
              </div>
              <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
                <p className="text-3xl font-bold text-gray-900">0</p>
                <p className="text-sm text-gray-500">Categorias</p>
              </div>
            </div>

            {/* Empty State */}
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <p className="text-gray-900 font-medium">Nenhum curso publicado ainda</p>
              <p className="text-gray-500 text-sm mt-1">Incorpore um link externo ou publique um curso em gestão para exibir aqui.</p>
              <Link href="/universidade/gestao/create" className="inline-block mt-4 text-blue-600 font-medium text-sm hover:underline">
                Incorporar link
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
