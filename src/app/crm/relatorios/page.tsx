"use client"

import Link from "next/link"

export default function RelatoriosPage() {
  return (
    <>
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
        <span>/</span>
        <Link href="/crm" className="hover:text-gray-700">CRM</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Relatórios</span>
      </nav>

      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Relatórios comerciais</h1>
        <p className="text-gray-500 mt-1">Relatórios e análises do comercial</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-500 text-center py-12">Relatórios comerciais</p>
      </div>
    </>
  )
}
