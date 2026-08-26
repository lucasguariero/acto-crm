"use client";

import Link from "next/link"

export default function FunilPage() {
  return (
    <main className="p-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
        <span>/</span>
        <Link href="/crm" className="hover:text-gray-700">CRM</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Funil</span>
      </nav>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Funil CRM</h1>
          <p className="text-gray-500 mt-1">Gerencie suas oportunidades comerciais</p>
        </div>
        <Link href="/crm/oportunidades/nova" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
          Nova oportunidade
        </Link>
      </div>

      {/* Funil */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-gray-500 text-center py-12">Funil de oportunidades</p>
      </div>
    </main>
  );
}
