"use client"

import Link from "next/link"

export default function MeuTrabalhoPage() {
  return (
    <main>
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
        <span>/</span>
        <Link href="/projetos" className="hover:text-gray-700">Projetos</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Meu trabalho</span>
      </nav>

      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Meu trabalho</h1>
        <p className="text-gray-500 mt-1">Suas tarefas e projetos</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-500 text-center py-12">Suas tarefas e projetos</p>
      </div>
    </main>
  )
}
