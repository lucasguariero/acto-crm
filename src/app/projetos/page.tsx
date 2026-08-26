"use client";

import Link from "next/link";
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
];

function getStatusBadge(status: string) {
  switch (status) {
    case "em_andamento":
      return <Badge className="bg-blue-100 text-blue-700">Em Andamento</Badge>;
    case "planejamento":
      return <Badge className="bg-yellow-100 text-yellow-700">Planejamento</Badge>;
    case "concluido":
      return <Badge className="bg-green-100 text-green-700">Concluído</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
}

function getRiscoBadge(risco: string) {
  switch (risco) {
    case "baixo":
      return <Badge className="bg-green-100 text-green-700">Baixo</Badge>;
    case "medio":
      return <Badge className="bg-yellow-100 text-yellow-700">Médio</Badge>;
    case "alto":
      return <Badge className="bg-red-100 text-red-700">Alto</Badge>;
    default:
      return <Badge>{risco}</Badge>;
  }
}

export default function ProjetosPage() {
  return (
    <main className="p-6">
      <div className="space-y-6">
        <nav className="flex items-center gap-1 text-sm">
          <Link href="/dashboard" className="text-[#64748B] hover:text-[#1E293B]">
            Início
          </Link>
          <CaretRight size={14} className="text-[#94A3B8]" />
          <span className="text-[#1E293B] font-medium">Projetos</span>
        </nav>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[24px] font-bold text-[#1E293B]">Governança de Projetos</h1>
            <p className="text-[14px] text-[#64748B] mt-1">
              Gerencie e acompanhe todos os projetos da organização
            </p>
          </div>
          <Button className="bg-[#2563EB] hover:bg-[#1D4ED8]">
            <Plus size={18} weight="bold" className="mr-2" />
            Novo Projeto
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <MagnifyingGlass size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <Input
              placeholder="Buscar projetos..."
              className="pl-10 border-[#E2E8F0] bg-white"
            />
          </div>
          <Button variant="outline" className="border-[#E2E8F0] text-[#64748B]">
            <Funnel size={18} className="mr-2" />
            Filtrar
          </Button>
        </div>

        <Tabs defaultValue="todos" className="w-full">
          <TabsList className="bg-[#F1F5F9] border border-[#E2E8F0]">
            <TabsTrigger value="todos" className="data-[state=active]:bg-white">Todos (4)</TabsTrigger>
            <TabsTrigger value="em_andamento" className="data-[state=active]:bg-white">Em Andamento (2)</TabsTrigger>
            <TabsTrigger value="planejamento" className="data-[state=active]:bg-white">Planejamento (1)</TabsTrigger>
            <TabsTrigger value="concluidos" className="data-[state=active]:bg-white">Concluídos (1)</TabsTrigger>
          </TabsList>

          <TabsContent value="todos" className="mt-4">
            <Card className="border-[#E2E8F0]">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-[#F8FAFC] hover:bg-[#F8FAFC]">
                      <TableHead className="text-[#64748B] font-medium">Projeto</TableHead>
                      <TableHead className="text-[#64748B] font-medium">Status</TableHead>
                      <TableHead className="text-[#64748B] font-medium">Progresso</TableHead>
                      <TableHead className="text-[#64748B] font-medium">Responsável</TableHead>
                      <TableHead className="text-[#64748B] font-medium">Prazo</TableHead>
                      <TableHead className="text-[#64748B] font-medium">Risco</TableHead>
                      <TableHead className="text-[#64748B] font-medium"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projetos.map((projeto) => (
                      <TableRow key={projeto.id} className="hover:bg-[#F8FAFC]">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                              <FolderSimple size={20} className="text-[#2563EB]" weight="duotone" />
                            </div>
                            <div>
                              <p className="font-medium text-[#1E293B]">{projeto.nome}</p>
                              <p className="text-[12px] text-[#64748B]">{projeto.cliente}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(projeto.status)}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2 w-32">
                            <div className="flex-1 h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
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
  );
}
