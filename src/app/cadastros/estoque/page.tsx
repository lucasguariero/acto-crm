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
  Package,
} from "@phosphor-icons/react";

const estoque = [
  {
    id: "EST-001",
    codigo: "PROD-001",
    nome: "Notebook Dell XPS 15",
    categoria: "Eletrônicos",
    localizacao: "Almoxarifado A",
    quantidade: 15,
    unidade: "un",
    custo: "R$ 8.500,00",
    valorTotal: "R$ 127.500,00",
    status: "Em Estoque",
  },
  {
    id: "EST-002",
    codigo: "PROD-002",
    nome: "Mouse Wireless Logitech",
    categoria: "Periféricos",
    localizacao: "Almoxarifado B",
    quantidade: 150,
    unidade: "un",
    custo: "R$ 120,00",
    valorTotal: "R$ 18.000,00",
    status: "Em Estoque",
  },
  {
    id: "EST-003",
    codigo: "PROD-003",
    nome: "Monitor LG 27 polegadas",
    categoria: "Eletrônicos",
    localizacao: "Almoxarifado A",
    quantidade: 8,
    unidade: "un",
    custo: "R$ 1.200,00",
    valorTotal: "R$ 9.600,00",
    status: "Estoque Baixo",
  },
  {
    id: "EST-004",
    codigo: "PROD-004",
    nome: "Teclado Mecânico RGB",
    categoria: "Periféricos",
    localizacao: "Almoxarifado B",
    quantidade: 0,
    unidade: "un",
    custo: "R$ 450,00",
    valorTotal: "R$ 0,00",
    status: "Sem Estoque",
  },
  {
    id: "EST-005",
    codigo: "PROD-005",
    nome: "Cabo HDMI 2m",
    categoria: "Acessórios",
    localizacao: "Almoxarifado C",
    quantidade: 500,
    unidade: "un",
    custo: "R$ 25,00",
    valorTotal: "R$ 12.500,00",
    status: "Em Estoque",
  },
  {
    id: "EST-006",
    codigo: "PROD-006",
    nome: "Webcam HD Logitech",
    categoria: "Eletrônicos",
    localizacao: "Almoxarifado A",
    quantidade: 3,
    unidade: "un",
    custo: "R$ 380,00",
    valorTotal: "R$ 1.140,00",
    status: "Estoque Baixo",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Em Estoque":
      return <Badge variant="default" className="bg-green-100 text-green-700 hover:bg-green-100">Em Estoque</Badge>;
    case "Estoque Baixo":
      return <Badge variant="default" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Estoque Baixo</Badge>;
    case "Sem Estoque":
      return <Badge variant="default" className="bg-red-100 text-red-700 hover:bg-red-100">Sem Estoque</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function EstoquePage() {
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
            <Link href="/cadastros" className="hover:text-gray-700">Cadastros</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Estoque</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-50 rounded-lg">
                <Package size={24} className="text-yellow-600" weight="duotone" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Estoque</h1>
                <p className="text-gray-500 mt-1">Gestão de inventário</p>
              </div>
            </div>
            <Button className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8]">
              <Plus size={18} />
              Novo Produto
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar produtos..."
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
                  <TableHead className="font-semibold">Produto</TableHead>
                  <TableHead className="font-semibold">Categoria</TableHead>
                  <TableHead className="font-semibold">Localização</TableHead>
                  <TableHead className="font-semibold">Qtd</TableHead>
                  <TableHead className="font-semibold">Un</TableHead>
                  <TableHead className="font-semibold">Custo Unit.</TableHead>
                  <TableHead className="font-semibold">Valor Total</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {estoque.map((item) => (
                  <TableRow key={item.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-[#2563EB]">{item.codigo}</TableCell>
                    <TableCell className="font-medium">{item.nome}</TableCell>
                    <TableCell>{item.categoria}</TableCell>
                    <TableCell>{item.localizacao}</TableCell>
                    <TableCell className="font-mono">{item.quantidade}</TableCell>
                    <TableCell>{item.unidade}</TableCell>
                    <TableCell className="font-mono">{item.custo}</TableCell>
                    <TableCell className="font-mono font-medium">{item.valorTotal}</TableCell>
                    <TableCell>{getStatusBadge(item.status)}</TableCell>
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

          {/* Summary */}
          <div className="grid grid-cols-4 gap-4 mt-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-sm text-gray-500">Total de Itens</p>
              <p className="text-2xl font-semibold text-gray-900">6</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-sm text-gray-500">Em Estoque</p>
              <p className="text-2xl font-semibold text-green-600">3</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-sm text-gray-500">Estoque Baixo</p>
              <p className="text-2xl font-semibold text-yellow-600">2</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="text-sm text-gray-500">Valor Total</p>
              <p className="text-2xl font-semibold text-gray-900">R$ 168.740,00</p>
            </div>
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

