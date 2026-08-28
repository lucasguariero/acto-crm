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
  Monitor,
} from "@phosphor-icons/react";

const equipamentos = [
  {
    id: "EQP-001",
    nome: "MacBook Pro 16",
    categoria: "Notebook",
    localizacao: "Sede - Andar 1",
    status: "Ativo",
    valor: "R$ 15.900,00",
    aquisicao: "10/01/2024",
  },
  {
    id: "EQP-002",
    nome: "Dell Monitor 27",
    categoria: "Monitor",
    localizacao: "Sede - Andar 2",
    status: "Ativo",
    valor: "R$ 2.100,00",
    aquisicao: "15/02/2024",
  },
  {
    id: "EQP-003",
    nome: "iPhone 14 Pro",
    categoria: "Celular",
    localizacao: "Colaborador",
    status: "Ativo",
    valor: "R$ 7.500,00",
    aquisicao: "20/03/2024",
  },
  {
    id: "EQP-004",
    nome: "Impressora HP LaserJet",
    categoria: "Impressora",
    localizacao: "Sede - Andar 1",
    status: "Manutenção",
    valor: "R$ 1.800,00",
    aquisicao: "05/04/2023",
  },
  {
    id: "EQP-005",
    nome: "Desktop Dell OptiPlex",
    categoria: "Desktop",
    localizacao: "Filial - SP",
    status: "Inativo",
    valor: "R$ 4.500,00",
    aquisicao: "12/06/2022",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Ativo":
      return <Badge variant="default" className="bg-green-100 text-green-700 hover:bg-green-100">Ativo</Badge>;
    case "Manutenção":
      return <Badge variant="default" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Manutenção</Badge>;
    case "Inativo":
      return <Badge variant="default" className="bg-gray-100 text-gray-600 hover:bg-gray-100">Inativo</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function EquipamentosPage() {
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
            <span className="text-gray-900 font-medium">Equipamentos</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Monitor size={24} className="text-blue-600" weight="duotone" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Equipamentos</h1>
                <p className="text-gray-500 mt-1">Gerencie os equipamentos da empresa</p>
              </div>
            </div>
            <Button className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8]">
              <Plus size={18} />
              Novo Equipamento
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar equipamentos..."
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
                  <TableHead className="font-semibold">ID</TableHead>
                  <TableHead className="font-semibold">Nome</TableHead>
                  <TableHead className="font-semibold">Categoria</TableHead>
                  <TableHead className="font-semibold">Localização</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Valor</TableHead>
                  <TableHead className="font-semibold">Aquisição</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {equipamentos.map((equipamento) => (
                  <TableRow key={equipamento.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-[#2563EB]">{equipamento.id}</TableCell>
                    <TableCell className="font-medium">{equipamento.nome}</TableCell>
                    <TableCell>{equipamento.categoria}</TableCell>
                    <TableCell>{equipamento.localizacao}</TableCell>
                    <TableCell>{getStatusBadge(equipamento.status)}</TableCell>
                    <TableCell className="font-mono">{equipamento.valor}</TableCell>
                    <TableCell>{equipamento.aquisicao}</TableCell>
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
            <span>Mostrando 5 de 5 registros</span>
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

