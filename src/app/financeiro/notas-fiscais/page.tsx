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
import {
  Receipt,
  Plus,
  MagnifyingGlass,
  Funnel,
  DownloadSimple,
  Eye,
  PencilSimple,
  FilePdf,
  File,
  CheckCircle,
  Clock,
  XCircle,
  ArrowRight,
  Calendar,
  CurrencyDollar,
  SealCheck,
  SealWarning,
} from "@phosphor-icons/react";

const notasFiscais = [
  {
    id: 1,
    numero: "NF-e 1250",
    serie: "1",
    cliente: "ABC Ltda",
    cnpj: "12.345.678/0001-90",
    emissao: "20/08/2026",
    vencimento: "20/09/2026",
    valor: 28000.00,
    status: "emitida",
    situacao: "ativa",
  },
  {
    id: 2,
    numero: "NF-e 1249",
    serie: "1",
    cliente: "DEF S/A",
    cnpj: "98.765.432/0001-10",
    emissao: "19/08/2026",
    vencimento: "19/09/2026",
    valor: 15500.00,
    status: "emitida",
    situacao: "ativa",
  },
  {
    id: 3,
    numero: "NF-e 1248",
    serie: "1",
    cliente: "GHI ME",
    cnpj: "11.222.333/0001-44",
    emissao: "18/08/2026",
    vencimento: "18/09/2026",
    valor: 8900.00,
    status: "cancelada",
    situacao: "cancelada",
  },
  {
    id: 4,
    numero: "NF-e 1247",
    serie: "1",
    cliente: "JKL Com. Ltda",
    cnpj: "55.666.777/0001-88",
    emissao: "17/08/2026",
    vencimento: "17/09/2026",
    valor: 12500.00,
    status: "emitida",
    situacao: "ativa",
  },
  {
    id: 5,
    numero: "NF-e 1246",
    serie: "1",
    cliente: "MNO Serviços",
    cnpj: "77.888.999/0001-00",
    emissao: "16/08/2026",
    vencimento: "16/09/2026",
    valor: 5600.00,
    status: "emitida",
    situacao: "ativa",
  },
];

const metricas = [
  {
    titulo: "Notas Emitidas",
    valor: "145",
    periodo: "Este mês",
    icon: Receipt,
  },
  {
    titulo: "Valor Total",
    valor: "R$ 523.890,00",
    periodo: "Este mês",
    icon: CurrencyDollar,
  },
  {
    titulo: "Em Aberto",
    valor: "R$ 89.450,00",
    periodo: "12 notas",
    icon: Clock,
  },
  {
    titulo: "Canceladas",
    valor: "3",
    periodo: "Este mês",
    icon: XCircle,
  },
];

const ultimasEventos = [
  {
    id: 1,
    acao: "NF-e 1250 autorizada",
    descricao: "Autorização SEFAZ",
    data: "20/08/2026 14:32",
  },
  {
    id: 2,
    acao: "NF-e 1249 autorizada",
    descricao: "Autorização SEFAZ",
    data: "19/08/2026 10:15",
  },
  {
    id: 3,
    acao: "NF-e 1248 cancelada",
    descricao: "Cancelamento solicitado",
    data: "18/08/2026 16:45",
  },
  {
    id: 4,
    acao: "NF-e 1247 autorizada",
    descricao: "Autorização SEFAZ",
    data: "17/08/2026 11:22",
  },
];

export default function NotasFiscaisPage() {
  const [collapsed, setCollapsed] = useState(false);

  const getStatusBadge = (status: string, situacao: string) => {
    if (situacao === "cancelada") {
      return <Badge variant="destructive" className="bg-red-50 text-red-700 border-red-200"><XCircle size={12} className="mr-1" />Cancelada</Badge>;
    }
    return <Badge variant="outline" className="border-green-300 text-green-700"><CheckCircle size={12} className="mr-1" />Ativa</Badge>;
  };

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
            <Link href="/financeiro" className="hover:text-gray-700">Financeiro</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Notas Fiscais</span>
          </nav>

          {/* Título e Ações */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Notas Fiscais</h1>
              <p className="text-gray-500 mt-1">Gerencie suas notas fiscais eletrônicas</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <DownloadSimple size={16} className="mr-2" />
                Exportar
              </Button>
              <Button>
                <Plus size={16} className="mr-2" />
                Nova Nota Fiscal
              </Button>
            </div>
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {metricas.map((metrica, index) => {
              const Icon = metrica.icon;
              return (
                <Card key={index} className="bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500">{metrica.titulo}</p>
                        <p className="text-xl font-bold text-gray-900 mt-1">{metrica.valor}</p>
                        <p className="text-xs text-gray-400 mt-1">{metrica.periodo}</p>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Icon size={20} className="text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Lista de Notas Fiscais */}
          <Card className="bg-white mb-6">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <Receipt size={18} className="text-gray-600" />
                  Notas Fiscais Emitidas
                </CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input placeholder="Buscar nota..." className="pl-9 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Funnel size={16} className="mr-2" />
                    Filtrar
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Número</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>CNPJ</TableHead>
                    <TableHead>Emissão</TableHead>
                    <TableHead>Vencimento</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Situação</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {notasFiscais.map((nota) => (
                    <TableRow key={nota.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <File size={16} className="text-gray-400" />
                          {nota.numero}
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">{nota.cliente}</TableCell>
                      <TableCell className="text-gray-500 text-sm">{nota.cnpj}</TableCell>
                      <TableCell className="text-gray-500">{nota.emissao}</TableCell>
                      <TableCell className="text-gray-500">{nota.vencimento}</TableCell>
                      <TableCell className="text-right font-medium">
                        R$ {nota.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                          {nota.status.charAt(0).toUpperCase() + nota.status.slice(1)}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        {getStatusBadge(nota.status, nota.situacao)}
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Button variant="ghost" size="icon-xs" title="Visualizar">
                            <Eye size={14} />
                          </Button>
                          <Button variant="ghost" size="icon-xs" title="Baixar PDF">
                            <FilePdf size={14} />
                          </Button>
                          <Button variant="ghost" size="icon-xs" title="Editar">
                            <PencilSimple size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Eventos Recentes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Timeline de Eventos */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <Clock size={18} className="text-gray-600" />
                  Eventos Recentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ultimasEventos.map((evento) => (
                    <div key={evento.id} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-blue-500" />
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{evento.acao}</p>
                        <p className="text-sm text-gray-500">{evento.descricao}</p>
                        <p className="text-xs text-gray-400 mt-1">{evento.data}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Configurações Fiscais */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <SealCheck size={18} className="text-gray-600" />
                  Configurações Fiscais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
                    <div>
                      <p className="font-medium text-gray-900">Certificado Digital</p>
                      <p className="text-sm text-gray-500">Válido até 15/12/2026</p>
                    </div>
                    <Badge variant="outline" className="border-green-300 text-green-700">
                      <SealCheck size={12} className="mr-1" />
                      Válido
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
                    <div>
                      <p className="font-medium text-gray-900">NF-e</p>
                      <p className="text-sm text-gray-500">Série 1, Modelo 55</p>
                    </div>
                    <Badge variant="outline" className="border-green-300 text-green-700">
                      <SealCheck size={12} className="mr-1" />
                      Ativo
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
                    <div>
                      <p className="font-medium text-gray-900">NFC-e</p>
                      <p className="text-sm text-gray-500">Série 1, Modelo 65</p>
                    </div>
                    <Badge variant="outline" className="border-green-300 text-green-700">
                      <SealCheck size={12} className="mr-1" />
                      Ativo
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
                    <div>
                      <p className="font-medium text-gray-900">ISS</p>
                      <p className="text-sm text-gray-500">Nota fiscal de serviço</p>
                    </div>
                    <Badge variant="outline" className="border-yellow-300 text-yellow-700">
                      <SealWarning size={12} className="mr-1" />
                      Pendente
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  <PencilSimple size={16} className="mr-2" />
                  Configurar
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

