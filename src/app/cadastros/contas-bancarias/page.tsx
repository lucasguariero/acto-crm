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
  CreditCard,
} from "@phosphor-icons/react";

const contasBancarias = [
  {
    id: "CC-001",
    banco: "Banco do Brasil",
    agencia: "1234-5",
    conta: "12345-6",
    tipo: "Conta Corrente",
    titular: "ACTO Soluções Ltda",
    saldo: "R$ 125.000,00",
    status: "Ativo",
  },
  {
    id: "CC-002",
    banco: "Itaú",
    agencia: "5678-9",
    conta: "98765-4",
    tipo: "Conta Corrente",
    titular: "ACTO Soluções Ltda",
    saldo: "R$ 85.500,00",
    status: "Ativo",
  },
  {
    id: "CC-003",
    banco: "Bradesco",
    agencia: "3333-1",
    conta: "44444-2",
    tipo: "Conta Poupança",
    titular: "ACTO Soluções Ltda",
    saldo: "R$ 50.000,00",
    status: "Ativo",
  },
  {
    id: "CC-004",
    banco: "Santander",
    agencia: "0102-3",
    conta: "55555-7",
    tipo: "Conta Corrente",
    titular: "ACTO Filial RJ",
    saldo: "R$ 22.300,00",
    status: "Ativo",
  },
  {
    id: "CC-005",
    banco: "Caixa",
    agencia: "1000-0",
    conta: "666666-7",
    tipo: "Conta Corrente",
    titular: "ACTO Soluções Ltda",
    saldo: "R$ 0,00",
    status: "Inativo",
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

const getBancoColor = (banco: string) => {
  switch (banco) {
    case "Banco do Brasil":
      return "bg-yellow-50 text-yellow-700";
    case "Itaú":
      return "bg-red-50 text-red-700";
    case "Bradesco":
      return "bg-orange-50 text-orange-700";
    case "Santander":
      return "bg-red-50 text-red-700";
    case "Caixa":
      return "bg-green-50 text-green-700";
    default:
      return "bg-gray-50 text-gray-700";
  }
};

export default function ContasBancariasPage() {
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
            <span className="text-gray-900 font-medium">Contas Bancárias</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-50 rounded-lg">
                <CreditCard size={24} className="text-indigo-600" weight="duotone" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Contas Bancárias</h1>
                <p className="text-gray-500 mt-1">Cadastro de contas bancárias</p>
              </div>
            </div>
            <Button className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8]">
              <Plus size={18} />
              Nova Conta
            </Button>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar contas bancárias..."
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
                  <TableHead className="font-semibold">Banco</TableHead>
                  <TableHead className="font-semibold">Agência</TableHead>
                  <TableHead className="font-semibold">Conta</TableHead>
                  <TableHead className="font-semibold">Tipo</TableHead>
                  <TableHead className="font-semibold">Titular</TableHead>
                  <TableHead className="font-semibold">Saldo</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contasBancarias.map((conta) => (
                  <TableRow key={conta.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className={`px-2 py-1 rounded text-xs font-semibold ${getBancoColor(conta.banco)}`}>
                          {conta.banco.substring(0, 3).toUpperCase()}
                        </div>
                        <span className="font-medium">{conta.banco}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono">{conta.agencia}</TableCell>
                    <TableCell className="font-mono">{conta.conta}</TableCell>
                    <TableCell>{conta.tipo}</TableCell>
                    <TableCell>{conta.titular}</TableCell>
                    <TableCell className="font-mono font-medium">{conta.saldo}</TableCell>
                    <TableCell>{getStatusBadge(conta.status)}</TableCell>
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

