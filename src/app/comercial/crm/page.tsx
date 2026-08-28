"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Funnel, List, MagnifyingGlass, CurrencyDollar, CalendarBlank, User, ArrowRight } from "@phosphor-icons/react";

// Dados de exemplo para oportunidades
const oportunidades = [
  {
    id: "1",
    nome: "Implementação ERP - TechCorp",
    cliente: "TechCorp Brasil",
    valor: 150000,
    etapa: "proposta",
    probabilidade: 60,
    responsavel: "João Silva",
    dataFechamento: "2024-03-15",
  },
  {
    id: "2",
    nome: "Consultoria TI - SaúdePlus",
    cliente: "Hospital SaúdePlus",
    valor: 85000,
    etapa: "negociacao",
    probabilidade: 80,
    responsavel: "Maria Santos",
    dataFechamento: "2024-02-28",
  },
  {
    id: "3",
    nome: "Suporte Premium - FastFood",
    cliente: "FastFood Restaurantes",
    valor: 45000,
    etapa: "fechamento",
    probabilidade: 95,
    responsavel: "Pedro Oliveira",
    dataFechamento: "2024-02-10",
  },
  {
    id: "4",
    nome: "Cloud Migration - BankData",
    cliente: "BankData Serviços",
    valor: 320000,
    etapa: "qualificacao",
    probabilidade: 40,
    responsavel: "Ana Costa",
    dataFechamento: "2024-04-20",
  },
  {
    id: "5",
    nome: "Desenvolvimento Mobile - ShopApp",
    cliente: "ShopApp E-commerce",
    valor: 78000,
    etapa: "proposta",
    probabilidade: 55,
    responsavel: "João Silva",
    dataFechamento: "2024-03-01",
  },
];

const kanbanColumns = [
  { id: "leads", titulo: "Leads", cor: "bg-gray-100" },
  { id: "qualificacao", titulo: "Qualificação", cor: "bg-blue-50" },
  { id: "proposta", titulo: "Proposta", cor: "bg-amber-50" },
  { id: "negociacao", titulo: "Negociação", cor: "bg-purple-50" },
  { id: "fechamento", titulo: "Fechamento", cor: "bg-green-50" },
];

const getEtapaBadge = (etapa: string) => {
  const badges: Record<string, { variant: "default" | "secondary" | "outline"; label: string }> = {
    leads: { variant: "secondary", label: "Lead" },
    qualificacao: { variant: "default", label: "Qualificação" },
    proposta: { variant: "default", label: "Proposta" },
    negociacao: { variant: "default", label: "Negociação" },
    fechamento: { variant: "secondary", label: "Fechamento" },
    ganho: { variant: "default", label: "Ganho" },
    perdido: { variant: "outline", label: "Perdido" },
  };
  return badges[etapa] || { variant: "outline", label: etapa };
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export default function CRMPage() {
  const [collapsed, setCollapsed] = useState(false);

  const getOportunidadesPorEtapa = (etapa: string) => {
    return oportunidades.filter((opp) => opp.etapa === etapa);
  };

  const totalValor = oportunidades.reduce((acc, opp) => acc + opp.valor, 0);
  const valorPonderado = oportunidades.reduce(
    (acc, opp) => acc + opp.valor * (opp.probabilidade / 100),
    0
  );

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
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
            <span>/</span>
            <Link href="/comercial" className="hover:text-gray-700">Comercial</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">CRM</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">CRM</h1>
              <p className="text-gray-500 mt-1">Gerencie suas oportunidades de vendas</p>
            </div>
            <Link href="/comercial/crm/nova">
              <Button>
                <Plus size={18} weight="bold" className="mr-2" />
                Nova Oportunidade
              </Button>
            </Link>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <CurrencyDollar size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Pipeline</p>
                    <p className="text-xl font-semibold">{formatCurrency(totalValor)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CurrencyDollar size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Valor Ponderado</p>
                    <p className="text-xl font-semibold">{formatCurrency(valorPonderado)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Funnel size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Oportunidades</p>
                    <p className="text-xl font-semibold">{oportunidades.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <CalendarBlank size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Média por Opp</p>
                    <p className="text-xl font-semibold">{formatCurrency(totalValor / oportunidades.length)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="kanban" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="kanban" className="gap-2">
                <Funnel size={16} />
                Funil Kanban
              </TabsTrigger>
              <TabsTrigger value="lista" className="gap-2">
                <List size={16} />
                Lista
              </TabsTrigger>
            </TabsList>

            {/* Kanban View */}
            <TabsContent value="kanban">
              <div className="flex gap-4 overflow-x-auto pb-4">
                {kanbanColumns.map((column) => {
                  const oportunidadesColuna = getOportunidadesPorEtapa(column.id);
                  const valorColuna = oportunidadesColuna.reduce((acc, opp) => acc + opp.valor, 0);

                  return (
                    <div key={column.id} className="flex-shrink-0 w-72">
                      <Card>
                        <CardHeader className={`pb-2 ${column.cor} rounded-t-xl`}>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-sm">{column.titulo}</CardTitle>
                            <Badge variant="secondary">{oportunidadesColuna.length}</Badge>
                          </div>
                          <p className="text-xs text-gray-500">{formatCurrency(valorColuna)}</p>
                        </CardHeader>
                        <CardContent className="p-2">
                          <div className="space-y-2 max-h-[500px] overflow-y-auto">
                            {oportunidadesColuna.map((opp) => (
                              <Link key={opp.id} href={`/comercial/crm/${opp.id}`}>
                                <div className="p-3 bg-white border rounded-lg hover:shadow-md transition-shadow cursor-pointer">
                                  <h4 className="font-medium text-sm text-gray-900">{opp.nome}</h4>
                                  <p className="text-xs text-gray-500 mt-1">{opp.cliente}</p>
                                  <div className="flex items-center justify-between mt-2">
                                    <span className="text-sm font-semibold text-green-600">
                                      {formatCurrency(opp.valor)}
                                    </span>
                                    <Badge variant="outline" className="text-xs">
                                      {opp.probabilidade}%
                                    </Badge>
                                  </div>
                                </div>
                              </Link>
                            ))}
                            {oportunidadesColuna.length === 0 && (
                              <p className="text-center text-gray-400 text-sm py-4">
                                Nenhuma oportunidade
                              </p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/* Lista View */}
            <TabsContent value="lista">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Todas as Oportunidades</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input placeholder="Buscar..." className="pl-9 w-64" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Oportunidade</TableHead>
                        <TableHead>Cliente</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Etapa</TableHead>
                        <TableHead>Prob.</TableHead>
                        <TableHead>Responsável</TableHead>
                        <TableHead>Previsão</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {oportunidades.map((opp) => {
                        const badge = getEtapaBadge(opp.etapa);
                        return (
                          <TableRow key={opp.id}>
                            <TableCell className="font-medium">
                              <Link href={`/comercial/crm/${opp.id}`} className="hover:text-blue-600">
                                {opp.nome}
                              </Link>
                            </TableCell>
                            <TableCell>{opp.cliente}</TableCell>
                            <TableCell className="font-semibold">{formatCurrency(opp.valor)}</TableCell>
                            <TableCell>
                              <Badge variant={badge.variant}>{badge.label}</Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-blue-500 rounded-full"
                                    style={{ width: `${opp.probabilidade}%` }}
                                  />
                                </div>
                                <span className="text-sm">{opp.probabilidade}%</span>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <User size={14} className="text-gray-400" />
                                {opp.responsavel}
                              </div>
                            </TableCell>
                            <TableCell>{new Date(opp.dataFechamento).toLocaleDateString("pt-BR")}</TableCell>
                            <TableCell>
                              <Link href={`/comercial/crm/${opp.id}`}>
                                <Button variant="ghost" size="icon-xs">
                                  <ArrowRight size={16} />
                                </Button>
                              </Link>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}

