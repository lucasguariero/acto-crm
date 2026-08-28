"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  MagnifyingGlass,
  Plus,
  Funnel,
  ArrowLineLeft,
  Star,
  Calendar,
  Users,
} from "@phosphor-icons/react";

// Dados de exemplo
const ciclos = [
  {
    id: "001",
    nome: "Avaliação 2026 - 1º Semestre",
    dataInicio: "01/01/2026",
    dataFim: "30/06/2026",
    tipo: "Semestral",
    participantes: 45,
    status: "concluido",
    notaMedia: 4.2,
  },
  {
    id: "002",
    nome: "Avaliação 2026 - 2º Semestre",
    dataInicio: "01/07/2026",
    dataFim: "31/12/2026",
    tipo: "Semestral",
    participantes: 48,
    status: "andamento",
    notaMedia: 0,
  },
  {
    id: "003",
    nome: "Avaliação Desempenho Mensal",
    dataInicio: "01/08/2026",
    dataFim: "15/08/2026",
    tipo: "Mensal",
    participantes: 50,
    status: "andamento",
    notaMedia: 0,
  },
];

const statusConfig: Record<string, { variant: "default" | "secondary" | "destructive"; label: string }> = {
  concluido: { variant: "default", label: "Concluído" },
  andamento: { variant: "secondary", label: "Em Andamento" },
  pendente: { variant: "destructive", label: "Pendente" },
};

export default function AvaliacaoPage() {
  const [collapsed, setCollapsed] = useState(false);

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
            <Link href="/rh" className="hover:text-gray-700">RH</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Ciclos Avaliação</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Link href="/rh">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                  <ArrowLineLeft size={18} />
                  Voltar
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Ciclos de Avaliação</h1>
                <p className="text-gray-500 mt-1">Gerencie os ciclos de avaliação de desempenho</p>
              </div>
            </div>
            <Button className="bg-[#2563EB] hover:bg-[#1D4ED8]">
              <Plus size={18} />
              Novo Ciclo
            </Button>
          </div>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Ciclos</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-semibold text-gray-900">12</span>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Em Andamento</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-semibold text-amber-600">2</span>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Concluídos</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-semibold text-green-600">10</span>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Nota Média Geral</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-semibold text-amber-500">4.2</span>
                  <Star size={20} weight="fill" className="text-amber-400" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filtros */}
          <Card className="border-gray-200 mb-6">
            <CardContent className="pt-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                  <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Buscar ciclos..." className="pl-9" />
                </div>
                <Button variant="outline" className="gap-2">
                  <Funnel size={18} />
                  Filtrar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tabela */}
          <Card className="border-gray-200">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead className="font-semibold">ID</TableHead>
                    <TableHead className="font-semibold">Nome do Ciclo</TableHead>
                    <TableHead className="font-semibold">Tipo</TableHead>
                    <TableHead className="font-semibold">Período</TableHead>
                    <TableHead className="font-semibold">Participantes</TableHead>
                    <TableHead className="font-semibold">Nota Média</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ciclos.map((item) => {
                    const config = statusConfig[item.status];
                    return (
                      <TableRow key={item.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">#{item.id}</TableCell>
                        <TableCell className="font-medium">{item.nome}</TableCell>
                        <TableCell>{item.tipo}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-gray-400" />
                            {item.dataInicio} - {item.dataFim}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Users size={16} className="text-gray-400" />
                            {item.participantes}
                          </div>
                        </TableCell>
                        <TableCell>
                          {item.notaMedia > 0 ? (
                            <div className="flex items-center gap-1">
                              <Star size={14} weight="fill" className="text-amber-400" />
                              <span>{item.notaMedia}</span>
                            </div>
                          ) : (
                            <span className="text-gray-400">-</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <Badge variant={config.variant}>
                            {config.label}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="text-[#2563EB] hover:text-[#1D4ED8]">
                            Ver
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}

