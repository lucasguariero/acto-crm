"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
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
  Plus,
  MagnifyingGlass,
  Funnel,
  DotsThree,
  Calculator,
  CaretRight,
} from "@phosphor-icons/react";

const centrosCusto = [
  {
    id: "CC-001",
    codigo: "01.01",
    nome: "Diretoria",
    tipo: "Administrativo",
    orcamento: "R$ 500.000,00",
    realizado: "R$ 420.000,00",
    status: "Ativo",
    nivel: 1,
  },
  {
    id: "CC-002",
    codigo: "01.02",
    nome: "Financeiro",
    tipo: "Administrativo",
    orcamento: "R$ 300.000,00",
    realizado: "R$ 280.000,00",
    status: "Ativo",
    nivel: 1,
  },
  {
    id: "CC-003",
    codigo: "01.02.01",
    nome: "Contabilidade",
    tipo: "Administrativo",
    orcamento: "R$ 150.000,00",
    realizado: "R$ 135.000,00",
    status: "Ativo",
    nivel: 2,
  },
  {
    id: "CC-004",
    codigo: "02.01",
    nome: "Vendas",
    tipo: "Comercial",
    orcamento: "R$ 800.000,00",
    realizado: "R$ 750.000,00",
    status: "Ativo",
    nivel: 1,
  },
  {
    id: "CC-005",
    codigo: "03.01",
    nome: "Produção",
    tipo: "Operacional",
    orcamento: "R$ 1.200.000,00",
    realizado: "R$ 1.100.000,00",
    status: "Ativo",
    nivel: 1,
  },
  {
    id: "CC-006",
    codigo: "03.02",
    nome: "Manutenção",
    tipo: "Operacional",
    orcamento: "R$ 200.000,00",
    realizado: "R$ 180.000,00",
    status: "Inativo",
    nivel: 1,
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Ativo":
      return <Badge variant="default" className="bg-green-100 text-green-700 hover:bg-green-100">Ativo</Badge>;
    case "Inativo":
      return <Badge variant="default" className="bg-gray-100 text-gray-600 hover:bg-gray-100">Inativo</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function CentrosCustoPage() {
  const [collapsed, setCollapsed] = useState(false);

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
            <Link href="/cadastros" className="hover:text-gray-700">Cadastros</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Centros de Custo</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-50 rounded-lg">
                <Calculator size={24} className="text-purple-600" weight="duotone" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Centros de Custo</h1>
                <p className="text-gray-500 mt-1">Estrutura de custos organizacionais</p>
              </div>
            </div>
            <Button className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8]">
              <Plus size={18} />
              Novo Centro
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar centros de custo..."
                className="pl-10 bg-white"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Funnel size={18} />
              Filtrar
            </Button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold">Código</TableHead>
                  <TableHead className="font-semibold">Nome</TableHead>
                  <TableHead className="font-semibold">Tipo</TableHead>
                  <TableHead className="font-semibold">Orçamento</TableHead>
                  <TableHead className="font-semibold">Realizado</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {centrosCusto.map((centro) => (
                  <TableRow key={centro.id} className="hover:bg-gray-50">
                    <TableCell className="font-mono font-medium">{centro.codigo}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <CaretRight
                          size={16}
                          className="text-gray-300"
                          style={{ marginLeft: (centro.nivel - 1) * 20 }}
                        />
                        <span className="font-medium">{centro.nome}</span>
                      </div>
                    </TableCell>
                    <TableCell>{centro.tipo}</TableCell>
                    <TableCell className="font-mono">{centro.orcamento}</TableCell>
                    <TableCell className="font-mono">{centro.realizado}</TableCell>
                    <TableCell>{getStatusBadge(centro.status)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <DotsThree size={20} className="text-gray-400" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination info */}
          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <span>Mostrando 6 de 6 registros</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>Anterior</Button>
              <Button variant="outline" size="sm" disabled>Próximo</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
