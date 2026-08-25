"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  Funnel,
  DotsThree,
  Eye,
  DownloadSimple,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

interface NotaFiscal {
  id: string;
  numero: string;
  serie: string;
  emissao: string;
  valor: string;
  status: "aprovada" | "pendente" | "rejeitada" | "cancelada";
  cliente: string;
  arquivo: string;
}

const notasFiscais: NotaFiscal[] = [
  {
    id: "1",
    numero: "0001",
    serie: "1",
    emissao: "22/08/2026",
    valor: "R$ 1.500,00",
    status: "aprovada",
    cliente: "Prefeitura Municipal de São Paulo",
    arquivo: "NF_0001_2026.pdf",
  },
  {
    id: "2",
    numero: "0002",
    serie: "1",
    emissao: "21/08/2026",
    valor: "R$ 2.300,00",
    status: "pendente",
    cliente: "Governo do Estado de Minas Gerais",
    arquivo: "NF_0002_2026.pdf",
  },
  {
    id: "3",
    numero: "0003",
    serie: "1",
    emissao: "20/08/2026",
    valor: "R$ 850,00",
    status: "aprovada",
    cliente: "Prefeitura Municipal de Curitiba",
    arquivo: "NF_0003_2026.pdf",
  },
  {
    id: "4",
    numero: "0004",
    serie: "1",
    emissao: "19/08/2026",
    valor: "R$ 5.200,00",
    status: "rejeitada",
    cliente: "Prefeitura Municipal de Belo Horizonte",
    arquivo: "NF_0004_2026.pdf",
  },
  {
    id: "5",
    numero: "0005",
    serie: "1",
    emissao: "18/08/2026",
    valor: "R$ 1.100,00",
    status: "cancelada",
    cliente: "Governo do Estado do Rio Grande do Sul",
    arquivo: "NF_0005_2026.pdf",
  },
];

function getStatusBadge(status: NotaFiscal["status"]) {
  const variants: Record<NotaFiscal["status"], "default" | "secondary" | "destructive" | "outline"> = {
    aprovada: "default",
    pendente: "secondary",
    rejeitada: "destructive",
    cancelada: "outline",
  };
  const labels = {
    aprovada: "Aprovada",
    pendente: "Pendente",
    rejeitada: "Rejeitada",
    cancelada: "Cancelada",
  };
  return <Badge variant={variants[status]}>{labels[status]}</Badge>;
}

export default function NotasFiscaisPage() {
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
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Minhas Notas Fiscais</h1>
            <p className="text-sm text-gray-500 mt-1">
              Gerencie e acompanhe suas notas fiscais
            </p>
          </div>

          <Card className="border-gray-200">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Lista de Notas Fiscais</CardTitle>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="h-8">
                    <Funnel size={16} className="mr-1" />
                    Filtrar
                  </Button>
                  <Button size="sm" className="h-8 bg-[#2563EB] hover:bg-[#1d4ed8]">
                    + Nova Nota Fiscal
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Search Bar */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative flex-1 max-w-md">
                  <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Buscar notas fiscais..."
                    className="pl-9 h-9 bg-white"
                  />
                </div>
                <Select defaultValue="todos">
                  <SelectTrigger className="w-[160px] h-9">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todos">Todos os status</SelectItem>
                    <SelectItem value="aprovada">Aprovada</SelectItem>
                    <SelectItem value="pendente">Pendente</SelectItem>
                    <SelectItem value="rejeitada">Rejeitada</SelectItem>
                    <SelectItem value="cancelada">Cancelada</SelectItem>
                  </SelectContent>
                </Select>
                <Select defaultValue="30">
                  <SelectTrigger className="w-[140px] h-9">
                    <SelectValue placeholder="Período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Últimos 7 dias</SelectItem>
                    <SelectItem value="30">Últimos 30 dias</SelectItem>
                    <SelectItem value="90">Últimos 90 dias</SelectItem>
                    <SelectItem value="ano">Este ano</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Table */}
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 hover:bg-gray-50">
                    <TableHead className="font-semibold text-gray-600">Número</TableHead>
                    <TableHead className="font-semibold text-gray-600">Série</TableHead>
                    <TableHead className="font-semibold text-gray-600">Emissão</TableHead>
                    <TableHead className="font-semibold text-gray-600">Cliente</TableHead>
                    <TableHead className="font-semibold text-gray-600">Valor</TableHead>
                    <TableHead className="font-semibold text-gray-600">Status</TableHead>
                    <TableHead className="font-semibold text-gray-600 text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {notasFiscais.map((nota) => (
                    <TableRow key={nota.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium text-gray-900">
                        {nota.numero}
                      </TableCell>
                      <TableCell>{nota.serie}</TableCell>
                      <TableCell>{nota.emissao}</TableCell>
                      <TableCell className="max-w-[200px] truncate">
                        {nota.cliente}
                      </TableCell>
                      <TableCell className="font-medium">{nota.valor}</TableCell>
                      <TableCell>{getStatusBadge(nota.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="icon-xs" className="h-7 w-7 text-gray-500 hover:text-[#2563EB]">
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="icon-xs" className="h-7 w-7 text-gray-500 hover:text-[#2563EB]">
                            <DownloadSimple size={16} />
                          </Button>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon-xs" className="h-7 w-7 text-gray-500">
                                <DotsThree size={16} weight="bold" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <PaperPlaneTilt size={14} className="mr-2" />
                                Enviar por e-mail
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <DownloadSimple size={14} className="mr-2" />
                                Baixar XML
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                Cancelar Nota
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
                  Mostrando 1-5 de 5 resultados
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
