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
  FileText,
  CaretRight,
  CaretDown,
} from "@phosphor-icons/react";

const planoContas = [
  {
    id: "1",
    codigo: "1",
    nome: "ATIVO",
    tipo: "Grupo",
    natureza: "Devedora",
    nivel: 1,
    permiteLancamento: false,
  },
  {
    id: "2",
    codigo: "1.1",
    nome: "ATIVO CIRCULANTE",
    tipo: "Grupo",
    natureza: "Devedora",
    nivel: 2,
    permiteLancamento: false,
  },
  {
    id: "3",
    codigo: "1.1.01",
    nome: "Caixa",
    tipo: "Conta",
    natureza: "Devedora",
    nivel: 3,
    permiteLancamento: true,
  },
  {
    id: "4",
    codigo: "1.1.02",
    nome: "Bancos",
    tipo: "Conta",
    natureza: "Devedora",
    nivel: 3,
    permiteLancamento: true,
  },
  {
    id: "5",
    codigo: "1.1.03",
    nome: "Clientes",
    tipo: "Conta",
    natureza: "Devedora",
    nivel: 3,
    permiteLancamento: true,
  },
  {
    id: "6",
    codigo: "1.2",
    nome: "ATIVO NÃO CIRCULANTE",
    tipo: "Grupo",
    natureza: "Devedora",
    nivel: 2,
    permiteLancamento: false,
  },
  {
    id: "7",
    codigo: "1.2.01",
    nome: "Imobilizado",
    tipo: "Conta",
    natureza: "Devedora",
    nivel: 3,
    permiteLancamento: true,
  },
  {
    id: "8",
    codigo: "2",
    nome: "PASSIVO",
    tipo: "Grupo",
    natureza: "Credora",
    nivel: 1,
    permiteLancamento: false,
  },
  {
    id: "9",
    codigo: "2.1",
    nome: "PASSIVO CIRCULANTE",
    tipo: "Grupo",
    natureza: "Credora",
    nivel: 2,
    permiteLancamento: false,
  },
  {
    id: "10",
    codigo: "2.1.01",
    nome: "Fornecedores",
    tipo: "Conta",
    natureza: "Credora",
    nivel: 3,
    permiteLancamento: true,
  },
  {
    id: "11",
    codigo: "3",
    nome: "RECEITAS",
    tipo: "Grupo",
    natureza: "Credora",
    nivel: 1,
    permiteLancamento: false,
  },
  {
    id: "12",
    codigo: "3.1",
    nome: "RECEITA OPERACIONAL",
    tipo: "Grupo",
    natureza: "Credora",
    nivel: 2,
    permiteLancamento: false,
  },
  {
    id: "13",
    codigo: "3.1.01",
    nome: "Vendas de Produtos",
    tipo: "Conta",
    natureza: "Credora",
    nivel: 3,
    permiteLancamento: true,
  },
  {
    id: "14",
    codigo: "4",
    nome: "DESPESAS",
    tipo: "Grupo",
    natureza: "Devedora",
    nivel: 1,
    permiteLancamento: false,
  },
  {
    id: "15",
    codigo: "4.1",
    nome: "DESPESAS OPERACIONAIS",
    tipo: "Grupo",
    natureza: "Devedora",
    nivel: 2,
    permiteLancamento: false,
  },
  {
    id: "16",
    codigo: "4.1.01",
    nome: "Despesas com Pessoal",
    tipo: "Conta",
    natureza: "Devedora",
    nivel: 3,
    permiteLancamento: true,
  },
];

export default function PlanoContasPage() {
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
            <span className="text-gray-900 font-medium">Plano de Contas</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-cyan-50 rounded-lg">
                <FileText size={24} className="text-cyan-600" weight="duotone" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Plano de Contas</h1>
                <p className="text-gray-500 mt-1">Estrutura contábil fiscal</p>
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
                placeholder="Buscar contas..."
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
                  <TableHead className="font-semibold w-12">Código</TableHead>
                  <TableHead className="font-semibold">Nome</TableHead>
                  <TableHead className="font-semibold">Tipo</TableHead>
                  <TableHead className="font-semibold">Natureza</TableHead>
                  <TableHead className="font-semibold">Nível</TableHead>
                  <TableHead className="font-semibold">Lançamento</TableHead>
                  <TableHead className="w-10"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {planoContas.map((conta) => (
                  <TableRow key={conta.id} className="hover:bg-gray-50">
                    <TableCell className="font-mono font-medium">{conta.codigo}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {conta.nivel > 1 && (
                          <CaretRight
                            size={16}
                            className="text-gray-300"
                            style={{ marginLeft: (conta.nivel - 1) * 16 }}
                          />
                        )}
                        <span className={conta.tipo === "Grupo" ? "font-semibold" : ""}>
                          {conta.nome}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="default"
                        className={conta.tipo === "Grupo"
                          ? "bg-gray-100 text-gray-700 hover:bg-gray-100"
                          : "bg-blue-100 text-blue-700 hover:bg-blue-100"
                        }
                      >
                        {conta.tipo}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className={conta.natureza === "Credora" ? "text-red-600" : "text-blue-600"}>
                        {conta.natureza}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="font-mono">
                        {conta.nivel}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {conta.permiteLancamento ? (
                        <Badge variant="default" className="bg-green-100 text-green-700 hover:bg-green-100">
                          Sim
                        </Badge>
                      ) : (
                        <Badge variant="default" className="bg-gray-100 text-gray-500 hover:bg-gray-100">
                          Não
                        </Badge>
                      )}
                    </TableCell>
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
            <span>Mostrando 16 de 16 registros</span>
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
