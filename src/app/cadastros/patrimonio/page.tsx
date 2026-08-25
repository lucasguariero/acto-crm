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
  Buildings,
} from "@phosphor-icons/react";

const patrimonios = [
  {
    id: "PAT-001",
    nome: "Prédio Corporativo A",
    tipo: "Imóvel",
    departamento: "Administrativo",
    status: "Ativo",
    valor: "R$ 2.500.000,00",
    depreciacao: "R$ 500.000,00",
    aquisicao: "15/03/2020",
  },
  {
    id: "PAT-002",
    nome: "Veículo Ford Ka",
    tipo: "Veículo",
    departamento: "Logística",
    status: "Ativo",
    valor: "R$ 65.000,00",
    depreciacao: "R$ 32.500,00",
    aquisicao: "10/08/2021",
  },
  {
    id: "PAT-003",
    nome: "Maquina Copiadora Ricoh",
    tipo: "Equipamento",
    departamento: "Administrativo",
    status: "Ativo",
    valor: "R$ 28.000,00",
    depreciacao: "R$ 14.000,00",
    aquisicao: "22/11/2022",
  },
  {
    id: "PAT-004",
    nome: "Sistema de Ar Condicionado",
    tipo: "Instalações",
    Departamento: "Facilities",
    status: "Em Manutenção",
    valor: "R$ 45.000,00",
    depreciacao: "R$ 18.000,00",
    aquisicao: "05/06/2023",
  },
  {
    id: "PAT-005",
    nome: "Móvel Escritório - Conj. 01",
    tipo: "Móvel",
    departamento: "RH",
    status: "Baixado",
    valor: "R$ 12.000,00",
    depreciacao: "R$ 12.000,00",
    aquisicao: "01/02/2019",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "Ativo":
      return <Badge variant="default" className="bg-green-100 text-green-700 hover:bg-green-100">Ativo</Badge>;
    case "Em Manutenção":
      return <Badge variant="default" className="bg-yellow-100 text-yellow-700 hover:bg-yellow-100">Em Manutenção</Badge>;
    case "Baixado":
      return <Badge variant="default" className="bg-gray-100 text-gray-600 hover:bg-gray-100">Baixado</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function PatrimonioPage() {
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
            <span className="text-gray-900 font-medium">Patrimônio</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 rounded-lg">
                <Buildings size={24} className="text-green-600" weight="duotone" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Patrimônio</h1>
                <p className="text-gray-500 mt-1">Controle de bens patrimoniais</p>
              </div>
            </div>
            <Button className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8]">
              <Plus size={18} />
              Novo Bem
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar patrimônio..."
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
                  <TableHead className="font-semibold">Tipo</TableHead>
                  <TableHead className="font-semibold">Departamento</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="font-semibold">Valor</TableHead>
                  <TableHead className="font-semibold">Depreciação</TableHead>
                  <TableHead className="font-semibold">Aquisição</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {patrimonios.map((patrimonio) => (
                  <TableRow key={patrimonio.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-[#2563EB]">{patrimonio.id}</TableCell>
                    <TableCell className="font-medium">{patrimonio.nome}</TableCell>
                    <TableCell>{patrimonio.tipo}</TableCell>
                    <TableCell>{patrimonio.departamento}</TableCell>
                    <TableCell>{getStatusBadge(patrimonio.status)}</TableCell>
                    <TableCell className="font-mono">{patrimonio.valor}</TableCell>
                    <TableCell className="font-mono text-gray-500">{patrimonio.depreciacao}</TableCell>
                    <TableCell>{patrimonio.aquisicao}</TableCell>
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
