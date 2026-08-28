"use client"

import { useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Receipt,
  UserCircle,
  ClipboardText,
  Users,
  ArrowRight
} from "@phosphor-icons/react"

const modulos = [
  {
    titulo: "Minhas Notas Fiscais",
    descricao: "Visualize e gerencie suas notas fiscais",
    href: "/meu-espaco/notas-fiscais",
    icon: Receipt,
    cor: "bg-white text-blue-600",
  },
  {
    titulo: "Meu Perfil",
    descricao: "Gerencie suas informações pessoais",
    href: "/meu-espaco/perfil",
    icon: UserCircle,
    cor: "bg-purple-50 text-purple-600",
  },
  {
    titulo: "Minhas Solicitações",
    descricao: "Acompanhe suas solicitações",
    href: "/meu-espaco/solicitacoes",
    icon: ClipboardText,
    cor: "bg-orange-50 text-orange-600",
  },
  {
    titulo: "Equipe Terceirizada",
    descricao: "Gerencie sua equipe",
    href: "/meu-espaco/equipe",
    icon: Users,
    cor: "bg-green-50 text-green-600",
  },
]

export default function MeuEspacoPage() {
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
            <span className="text-gray-900 font-medium">Meu Espaço</span>
          </nav>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Meu Espaço</h1>
            <p className="text-gray-500 mt-1">Gerencie suas informações pessoais e solicitações</p>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {modulos.map((modulo) => {
              const Icon = modulo.icon
              return (
                <Link key={modulo.titulo} href={modulo.href}>
                  <Card className="hover:shadow-md transition-all cursor-pointer border-gray-200 hover:border-gray-300 h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className={`p-2 rounded-lg ${modulo.cor}`}>
                          <Icon size={24} weight="duotone" />
                        </div>
                        <ArrowRight size={18} className="text-gray-400" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h3 className="font-semibold text-gray-900">{modulo.titulo}</h3>
                      <p className="text-sm text-gray-500 mt-1">{modulo.descricao}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </main>
      </div>
    </div>
  )
}

