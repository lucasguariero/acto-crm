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
  Check,
  X,
  Clock,
} from "@phosphor-icons/react";

// Dados de exemplo
const solicitacoes = [
  {
    id: "001",
    centroCusto: "Desenvolvimento",
    tipo: "Criação",
    solicitante: "João Silva",
    data: "20/08/2026",
    status: "pendente",
    valor: "R$ 15.000,00",
  },
  {
    id: "002",
    centroCusto: "Marketing",
    tipo: "Alteração",
    solicitante: "Maria Santos",
    data: "19/08/2026",
    status: "aprovado",
    valor: "R$ 8.500,00",
  },
  {
    id: "003",
    centroCusto: "Vendas",
    tipo: "Inativação",
    solicitante: "Pedro Oliveira",
    data: "18/08/2026",
    status: "rejeitado",
    valor: "R$ 0,00",
  },
  {
    id: "004",
    centroCusto: "Financeiro",
    tipo: "Criação",
    solicitante: "Ana Costa",
    data: "17/08/2026",
    status: "pendente",
    valor: "R$ 22.000,00",
  },
  {
    id: "005",
    centroCusto: "Recursos Humanos",
    tipo: "Alteração",
    solicitante: "Carlos Lima",
    data: "16/08/2026",
    status: "aprovado",
    valor: "R$ 5.200,00",
  },
];

const statusConfig: Record<string, { variant: "secondary" | "default" | "destructive"; icon: typeof Check }> = {
  pendente: { variant: "secondary", icon: Clock },
  aprovado: { variant: "default", icon: Check },
  rejeitado: { variant: "destructive", icon: X },
};

export default function CentroCustoPage() {
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
            <Link href="/processos" className="hover:text-gray-700">Processos</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Centro de Custo</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Link href="/processos">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                  <ArrowLineLeft size={18} />
                  Voltar
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Solicitações de Centro de Custo</h1>
                <p className="text-gray-500 mt-1">Gerencie as solicitações de centros de custo</p>
              </div>
            </div>
            <Button className="bg-[#2563EB] hover:bg-[#1D4ED8]">
              <Plus size={18} />
              Nova Solicitação
            </Button>
          </div>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-semibold text-gray-900">24</span>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Pendentes</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-semibold text-amber-600">12</span>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Aprovados</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-semibold text-green-600">8</span>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Rejeitados</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-semibold text-red-600">4</span>
              </CardContent>
            </Card>
          </div>

          {/* Filtros */}
          <Card className="border-gray-200 mb-6">
            <CardContent className="pt-4">
              <div className="flex items-center gap-3">
                <div className="relative flex-1 max-w-sm">
                  <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input placeholder="Buscar solicitações..." className="pl-9" />
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
                    <TableHead className="font-semibold">Centro de Custo</TableHead>
                    <TableHead className="font-semibold">Tipo</TableHead>
                    <TableHead className="font-semibold">Solicitante</TableHead>
                    <TableHead className="font-semibold">Data</TableHead>
                    <TableHead className="font-semibold">Valor</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {solicitacoes.map((item) => {
                    const config = statusConfig[item.status];
                    const StatusIcon = config.icon;
                    return (
                      <TableRow key={item.id} className="hover:bg-gray-50">
                        <TableCell className="font-medium">#{item.id}</TableCell>
                        <TableCell>{item.centroCusto}</TableCell>
                        <TableCell>{item.tipo}</TableCell>
                        <TableCell>{item.solicitante}</TableCell>
                        <TableCell>{item.data}</TableCell>
                        <TableCell>{item.valor}</TableCell>
                        <TableCell>
                          <Badge variant={config.variant} className="gap-1">
                            <StatusIcon size={12} />
                            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
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

