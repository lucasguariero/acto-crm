"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const planoContas = [
  { id: 1, codigo: "1", nome: "ATIVO", tipo: "Grupo", natureza: "Devedora" },
  { id: 2, codigo: "1.1", nome: "ATIVO CIRCULANTE", tipo: "Grupo", natureza: "Devedora" },
  { id: 3, codigo: "1.1.01", nome: "Caixa", tipo: "Conta", natureza: "Devedora" },
  { id: 4, codigo: "1.1.02", nome: "Bancos", tipo: "Conta", natureza: "Devedora" },
  { id: 5, codigo: "2", nome: "PASSIVO", tipo: "Grupo", natureza: "Credora" },
  { id: 6, codigo: "2.1", nome: "PASSIVO CIRCULANTE", tipo: "Grupo", natureza: "Credora" },
  { id: 7, codigo: "3", nome: "RECEITAS", tipo: "Grupo", natureza: "Credora" },
  { id: 8, codigo: "4", nome: "DESPESAS", tipo: "Grupo", natureza: "Devedora" },
]

export default function PlanoContasPage() {
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Plano de contas</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Plano de contas</h1>
              <p className="text-gray-500 mt-1">Categorias hierárquicas de receitas e despesas operacionais.</p>
            </div>
            <button className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8]">
              Nova conta
            </button>
          </div>

          {/* Search */}
          <div className="flex gap-4 mb-6">
            <Input
              type="search"
              placeholder="Buscar contas..."
              className="flex-1 max-w-md"
            />
          </div>

          {/* Tabela */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Código</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Nome</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Tipo</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Natureza</th>
                </tr>
              </thead>
              <tbody>
                {planoContas.map((conta) => (
                  <tr key={conta.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm font-mono text-gray-900">{conta.codigo}</td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{conta.nome}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        conta.tipo === "Grupo" ? "bg-gray-100 text-gray-700" : "bg-blue-100 text-blue-700"
                      }`}>
                        {conta.tipo}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">{conta.natureza}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

