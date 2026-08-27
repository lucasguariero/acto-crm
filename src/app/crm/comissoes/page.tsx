"use client"

import Link from "next/link"

export default function ComissoesPage() {
  return (
    <>
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
        <span>/</span>
        <Link href="/crm" className="hover:text-gray-700">CRM</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Comissões</span>
      </nav>

      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Comissões CRM</h1>
        <p className="text-gray-500 mt-1">Gerencie comissões da equipe comercial</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-500 text-center py-12">Nenhuma comissão encontrada</p>
      </div>
    </>
  )
}
