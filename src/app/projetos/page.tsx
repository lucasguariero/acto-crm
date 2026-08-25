"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Plus,
  Funnel,
  MagnifyingGlass,
  FolderSimple,
  Clock,
  CheckCircle,
  WarningDiamond,
  CaretRight,
  DotsThree,
} from "@phosphor-icons/react";

const projetos = [
  {
    id: 1,
    nome: "Modernização ERP",
    cliente: "ACTO Soluções",
    status: "em_andamento",
    progresso: 65,
    responsavel: "Maria Silva",
    inicio: "15/01/2024",
    prazo: "30/06/2024",
    orcamento: "R$ 180.000",
    risco: "baixo",
  },
  {
    id: 2,
    nome: "Portal do Cliente v2",
    cliente: "PW Labs",
    status: "em_andamento",
    progresso: 42,
    responsavel: "João Santos",
    inicio: "01/03/2024",
    prazo: "15/09/2024",
    orcamento: "R$ 95.000",
    risco: "medio",
  },
  {
    id: 3,
    nome: "App Mobile - Entregas",
    cliente: "Logística Express",
    status: "planejamento",
    progresso: 15,
    responsavel: "Ana Costa",
    inicio: "01/08/2024",
    prazo: "31/12/2024",
    orcamento: "R$ 250.000",
    risco: "alto",
  },
  {
    id: 4,
    nome: "Migração Cloud",
    cliente: "TechCorp",
    status: "concluido",
    progresso: 100,
    responsavel: "Pedro Lima",
    inicio: "10/10/2023",
    prazo: "28/02/2024",
    orcamento: "R$ 320.000",
    risco: "baixo",
  },
  {
    id: 5,
    nome: "Dashboard Analytics",
    cliente: "Data Insights",
    status: "em_andamento",
    progresso: 78,
    responsavel: "Carla Oliveira",
    inicio: "05/02/2024",
    prazo: "20/05/2024",
    orcamento: "R$ 67.000",
    risco: "baixo",
  },
  {
    id: 6,
    nome: "API Gateway",
    cliente: "Financeira Pro",
    status: "bloqueado",
    progresso: 30,
    responsavel: "Roberto Alves",
    inicio: "20/01/2024",
    prazo: "10/04/2024",
    orcamento: "R$ 145.000",
    risco: "alto",
  },
];

const metricas = [
  {
    titulo: "Total de Projetos",
    valor: "24",
    icon: FolderSimple,
    cor: "blue",
  },
  {
    titulo: "Em Andamento",
    valor: "12",
    icon: Clock,
    cor: "yellow",
  },
  {
    titulo: "Concluídos",
    valor: "8",
    icon: CheckCircle,
    cor: "green",
  },
  {
    titulo: "Em Risco",
    valor: "4",
    icon: WarningDiamond,
    cor: "red",
  },
];

function getStatusBadge(status: string) {
  switch (status) {
    case "em_andamento":
      return <Badge className="bg-[#FEF3C7] text-[#B45309]">Em Andamento</Badge>;
    case "planejamento":
      return <Badge className="bg-[#DBEAFE] text-[#1D4ED8]">Planejamento</Badge>;
    case "concluido":
      return <Badge className="bg-[#DCFCE7] text-[#15803D]">Concluído</Badge>;
    case "bloqueado":
      return <Badge className="bg-[#FEE2E2] text-[#B91C1C]">Bloqueado</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
}

function getRiscoBadge(risco: string) {
  switch (risco) {
    case "baixo":
      return <Badge className="bg-[#DCFCE7] text-[#15803D]">Baixo</Badge>;
    case "medio":
      return <Badge className="bg-[#FEF3C7] text-[#B45309]">Médio</Badge>;
    case "alto":
      return <Badge className="bg-[#FEE2E2] text-[#B91C1C]">Alto</Badge>;
    default:
      return <Badge>{risco}</Badge>;
  }
}

export default function ProjetosPage() {
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
          <div className="space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1 text-sm">
              <Link href="/dashboard" className="text-[#64748B] hover:text-[#1E293B]">
                Início
              </Link>
              <CaretRight size={14} className="text-[#94A3B8]" />
              <span className="text-[#1E293B] font-medium">Projetos</span>
            </nav>

            {/* Título e Botão */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[24px] font-bold text-[#1E293B]">Governança de Projetos</h1>
                <p className="text-[14px] text-[#64748B] mt-1">
                  Gerencie e acompanhe todos os projetos da organização
                </p>
              </div>
              <Link href="/projetos/novo">
                <Button className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white">
                  <Plus size={18} weight="bold" className="mr-1" />
                  Novo Projeto
                </Button>
              </Link>
            </div>

            {/* Cards de Métricas */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {metricas.map((metrica, index) => {
                const Icon = metrica.icon;
                const cores: Record<string, string> = {
                  blue: "bg-[#DBEAFE] text-[#1D4ED8]",
                  yellow: "bg-[#FEF3C7] text-[#B45309]",
                  green: "bg-[#DCFCE7] text-[#15803D]",
                  red: "bg-[#FEE2E2] text-[#B91C1C]",
                };
                return (
                  <Card key={index} className="border-[#E2E8F0]">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[12px] text-[#64748B] uppercase font-medium">
                            {metrica.titulo}
                          </p>
                          <p className="text-[28px] font-bold text-[#1E293B] mt-1">
                            {metrica.valor}
                          </p>
                        </div>
                        <div className={`p-3 rounded-lg ${cores[metrica.cor]}`}>
                          <Icon size={24} weight="fill" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Abas */}
            <Tabs defaultValue="todos" className="w-full">
              <TabsList className="bg-white border border-[#E2E8F0]">
                <TabsTrigger value="todos" className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white">
                  Todos
                </TabsTrigger>
                <TabsTrigger value="em_andamento" className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white">
                  Em Andamento
                </TabsTrigger>
                <TabsTrigger value="planejamento" className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white">
                  Planejamento
                </TabsTrigger>
                <TabsTrigger value="concluidos" className="data-[state=active]:bg-[#2563EB] data-[state=active]:text-white">
                  Concluídos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="todos" className="mt-4">
                <Card className="border-[#E2E8F0]">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-[16px] font-semibold text-[#1E293B]">
                        Lista de Projetos
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
                          <Input
                            placeholder="Buscar projetos..."
                            className="pl-9 w-[240px] h-9 bg-white border-[#E2E8F0]"
                          />
                        </div>
                        <Button variant="outline" size="sm" className="h-9 border-[#E2E8F0]">
                          <Funnel size={16} className="mr-1" />
                          Filtros
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-[#F8FAFC] hover:bg-[#F8FAFC]">
                          <TableHead className="font-semibold text-[#64748B]">Projeto</TableHead>
                          <TableHead className="font-semibold text-[#64748B]">Cliente</TableHead>
                          <TableHead className="font-semibold text-[#64748B]">Status</TableHead>
                          <TableHead className="font-semibold text-[#64748B]">Progresso</TableHead>
                          <TableHead className="font-semibold text-[#64748B]">Responsável</TableHead>
                          <TableHead className="font-semibold text-[#64748B]">Prazo</TableHead>
                          <TableHead className="font-semibold text-[#64748B]">Risco</TableHead>
                          <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {projetos.map((projeto) => (
                          <TableRow key={projeto.id} className="hover:bg-[#F8FAFC]">
                            <TableCell>
                              <div>
                                <p className="font-medium text-[#1E293B]">{projeto.nome}</p>
                                <p className="text-[12px] text-[#64748B]">{projeto.orcamento}</p>
                              </div>
                            </TableCell>
                            <TableCell className="text-[#64748B]">{projeto.cliente}</TableCell>
                            <TableCell>{getStatusBadge(projeto.status)}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                <div className="w-[100px] h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-[#2563EB] rounded-full"
                                    style={{ width: `${projeto.progresso}%` }}
                                  />
                                </div>
                                <span className="text-[12px] text-[#64748B]">{projeto.progresso}%</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-[#64748B]">{projeto.responsavel}</TableCell>
                            <TableCell className="text-[#64748B]">{projeto.prazo}</TableCell>
                            <TableCell>{getRiscoBadge(projeto.risco)}</TableCell>
                            <TableCell>
                              <Button variant="ghost" size="icon-sm" className="h-8 w-8">
                                <DotsThree size={20} className="text-[#64748B]" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="em_andamento" className="mt-4">
                <Card className="border-[#E2E8F0]">
                  <CardContent className="p-6">
                    <p className="text-[14px] text-[#64748B]">
                      Exibindo projetos em andamento...
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="planejamento" className="mt-4">
                <Card className="border-[#E2E8F0]">
                  <CardContent className="p-6">
                    <p className="text-[14px] text-[#64748B]">
                      Exibindo projetos em planejamento...
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="concluidos" className="mt-4">
                <Card className="border-[#E2E8F0]">
                  <CardContent className="p-6">
                    <p className="text-[14px] text-[#64748B]">
                      Exibindo projetos concluídos...
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
}
