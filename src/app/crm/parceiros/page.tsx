"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, MagnifyingGlass, Funnel } from "@phosphor-icons/react"

export default function ParceirosPage() {
  const [collapsed, setCollapsed] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  // Dados de exemplo
  const stats = [
    { label: "Total", value: "0" },
    { label: "Ativos", value: "0" },
    { label: "Pendentes", value: "0" },
    { label: "Inativos", value: "0" },
  ]

  interface Parceiro {
    id: string
    codigo: string
    nome: string
    status: string
    criadoEm: string
    responsavel: string
  }

  const parceiros: Parceiro[] = [
    // Dados exemplo vazio - para quando API não retornar
  ]

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
            <span className="text-gray-900 font-medium">Parceiros</span>
          </nav>

          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Parceiros</h1>
              <p className="text-gray-500 mt-1">Cadastro de parceiros — fornecedores, alianças, entidades.</p>
            </div>
            <Button className="inline-flex items-center gap-2">
              <Plus size={18} />
              Novo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tabela */}
          <Card className="overflow-hidden">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="search"
                      placeholder="Filtrar..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="bg-gray-50 border border-gray-200 rounded-md pl-9 pr-3 py-2 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">Todos os status</option>
                    <option value="active">Ativo</option>
                    <option value="pending">Pendente</option>
                    <option value="inactive">Inativo</option>
                  </select>
                </div>
                <p className="text-xs text-gray-500">{parceiros.length} registros</p>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Código</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Criado em</TableHead>
                    <TableHead>Responsável</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {parceiros.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center text-gray-500 py-12">
                        Sem registros — aguardando integração com o ERP.
                      </TableCell>
                    </TableRow>
                  ) : (
                    parceiros.map((parceiro) => (
                      <TableRow key={parceiro.id}>
                        <TableCell className="font-medium">{parceiro.codigo}</TableCell>
                        <TableCell>{parceiro.nome}</TableCell>
                        <TableCell>
                          <Badge variant={parceiro.status === "Ativo" ? "default" : parceiro.status === "Pendente" ? "secondary" : "outline"}>
                            {parceiro.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{parceiro.criadoEm}</TableCell>
                        <TableCell>{parceiro.responsavel}</TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
