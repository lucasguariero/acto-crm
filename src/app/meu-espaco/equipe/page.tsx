"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MagnifyingGlass,
  Plus,
  DotsThree,
  UserPlus,
  Briefcase,
  CurrencyDollar,
  Calendar,
  Phone,
  Envelope,
  Eye,
  PencilSimple,
  Trash,
} from "@phosphor-icons/react";

interface MembroEquipe {
  id: string;
  nome: string;
  funcao: string;
  empresa: string;
  status: "ativo" | "inativo" | "ferias" | "afastado";
  custo: string;
  inicio: string;
  telefone: string;
  email: string;
}

const equipe: MembroEquipe[] = [
  {
    id: "1",
    nome: "Carlos Silva",
    funcao: "Desenvolvedor Frontend",
    empresa: "Tech Solutions Ltda",
    status: "ativo",
    custo: "R$ 8.500,00",
    inicio: "15/01/2024",
    telefone: "(11) 99999-1111",
    email: "carlos.silva@techsolucoes.com",
  },
  {
    id: "2",
    nome: "Ana Paula Santos",
    funcao: "Designer UX/UI",
    empresa: "Creative Agency",
    status: "ativo",
    custo: "R$ 7.200,00",
    inicio: "01/03/2024",
    telefone: "(11) 99999-2222",
    email: "ana.santos@creative.com",
  },
  {
    id: "3",
    nome: "Roberto Alves",
    funcao: "Analista de Dados",
    empresa: "Data Insights",
    status: "ferias",
    custo: "R$ 9.000,00",
    inicio: "10/02/2024",
    telefone: "(11) 99999-3333",
    email: "roberto.alves@datainsights.com",
  },
  {
    id: "4",
    nome: "Juliana Costa",
    funcao: "Desenvolvedor Backend",
    empresa: "Tech Solutions Ltda",
    status: "ativo",
    custo: "R$ 8.800,00",
    inicio: "20/04/2024",
    telefone: "(11) 99999-4444",
    email: "juliana.costa@techsolucoes.com",
  },
  {
    id: "5",
    nome: "Marcos Oliveira",
    funcao: "Analista de QA",
    empresa: "Quality First",
    status: "afastado",
    custo: "R$ 6.500,00",
    inicio: "05/06/2024",
    telefone: "(11) 99999-5555",
    email: "marcos.oliveira@qualityfirst.com",
  },
  {
    id: "6",
    nome: "Patricia Lima",
    funcao: "Gerente de Projeto",
    empresa: "PMO Consulting",
    status: "inativo",
    custo: "R$ 12.000,00",
    inicio: "01/09/2023",
    telefone: "(11) 99999-6666",
    email: "patricia.lima@pmo.com",
  },
];

function getStatusBadge(status: MembroEquipe["status"]) {
  const variants: Record<MembroEquipe["status"], "default" | "secondary" | "destructive" | "outline"> = {
    ativo: "default",
    inativo: "outline",
    ferias: "secondary",
    afastado: "destructive",
  };
  const labels = {
    ativo: "Ativo",
    inativo: "Inativo",
    ferias: "Em Férias",
    afastado: "Afastado",
  };
  return <Badge variant={variants[status]}>{labels[status]}</Badge>;
}

function getInitials(nome: string) {
  return nome
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
}

export default function EquipePage() {
  const [collapsed, setCollapsed] = useState(false);

  // Calculate totals
  const totalMembros = equipe.filter((m) => m.status === "ativo").length;
  const custoTotal = equipe
    .filter((m) => m.status === "ativo")
    .reduce((acc, m) => {
      const value = m.custo.replace("R$ ", "").replace(".", "").replace(",", ".");
      return acc + parseFloat(value);
    }, 0);

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div
        className="transition-all duration-300"
        style={{ marginLeft: collapsed ? '72px' : '260px' }}
      >
        <Header onToggleSidebar={() => setCollapsed(!collapsed)} />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Equipe Terceirizada</h1>
            <p className="text-sm text-gray-500 mt-1">
              Gerencie equipes de outsourcing e prestadores de serviço
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card className="border-gray-200">
              <CardContent className="pt-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Briefcase size={20} className="text-[#2563EB]" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-gray-900">{totalMembros}</p>
                    <p className="text-sm text-gray-500">Membros Ativos</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="pt-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <CurrencyDollar size={20} className="text-[#22C55E]" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-gray-900">
                      {custoTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </p>
                    <p className="text-sm text-gray-500">Custo Mensal</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="pt-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <UserPlus size={20} className="text-[#9333EA]" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-gray-900">3</p>
                    <p className="text-sm text-gray-500">Empresas Parceiras</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Membros da Equipe</CardTitle>
                <Button size="sm" className="h-8 bg-[#2563EB] hover:bg-[#1d4ed8]">
                  <Plus size={16} className="mr-1" />
                  Adicionar Membro
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {/* Search Bar */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative flex-1 max-w-md">
                  <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Buscar membros..."
                    className="pl-9 h-9 bg-white"
                  />
                </div>
                <Select defaultValue="todos">
                  <SelectTrigger className="w-[160px] h-9">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os status</SelectItem>
                    <SelectItem value="ativo">Ativo</SelectItem>
                    <SelectItem value="inativo">Inativo</SelectItem>
                    <SelectItem value="ferias">Em Férias</SelectItem>
                    <SelectItem value="afastado">Afastado</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="todos">
                  <SelectTrigger className="w-[180px] h-9">
                    <SelectValue placeholder="Empresa" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todas as empresas</SelectItem>
                    <SelectItem value="techsolucoes">Tech Solutions Ltda</SelectItem>
                    <SelectItem value="creative">Creative Agency</SelectItem>
                    <SelectItem value="datainsights">Data Insights</SelectItem>
                    <SelectItem value="qualityfirst">Quality First</SelectItem>
                    <SelectItem value="pmo">PMO Consulting</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Table */}
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 hover:bg-gray-50">
                    <TableHead className="font-semibold text-gray-600">Membro</TableHead>
                    <TableHead className="font-semibold text-gray-600">Função</TableHead>
                    <TableHead className="font-semibold text-gray-600">Empresa</TableHead>
                    <TableHead className="font-semibold text-gray-600">Status</TableHead>
                    <TableHead className="font-semibold text-gray-600">Custo Mensal</TableHead>
                    <TableHead className="font-semibold text-gray-600">Início</TableHead>
                    <TableHead className="font-semibold text-gray-600 text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {equipe.map((membro) => (
                    <TableRow key={membro.id} className="hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback className="text-xs bg-blue-100 text-[#2563EB]">
                              {getInitials(membro.nome)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-900">{membro.nome}</p>
                            <p className="text-xs text-gray-500">{membro.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{membro.funcao}</TableCell>
                      <TableCell>{membro.empresa}</TableCell>
                      <TableCell>{getStatusBadge(membro.status)}</TableCell>
                      <TableCell className="font-medium">{membro.custo}</TableCell>
                      <TableCell>{membro.inicio}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon-xs" className="h-7 w-7 text-gray-500 hover:text-[#2563EB]">
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="icon-xs" className="h-7 w-7 text-gray-500 hover:text-[#2563EB]">
                            <PencilSimple size={16} />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon-xs" className="h-7 w-7 text-gray-500">
                                <DotsThree size={16} weight="bold" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Phone size={14} className="mr-2" />
                                Ligar
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Envelope size={14} className="mr-2" />
                                Enviar E-mail
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Calendar size={14} className="mr-2" />
                                Agendar Reunião
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash size={14} className="mr-2" />
                                Remover
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">
                  Mostrando 1-6 de 6 resultados
                </span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled className="h-8">
                    Anterior
                  </Button>
                  <Button variant="outline" size="sm" disabled className="h-8">
                    Próximo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
