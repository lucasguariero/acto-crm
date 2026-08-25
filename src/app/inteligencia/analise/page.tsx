"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
  ChartLine,
  Plus,
  ArrowSquareOut,
  PencilSimple,
  Trash,
  Clock,
  Eye,
  DownloadSimple,
  TrendUp,
  TrendDown,
  ArrowsDownUp,
  ChartBar,
  ChartPie,
  Table as TableIcon,
  Lightning,
} from "@phosphor-icons/react";

const relatorios = [
  {
    id: 1,
    nome: "Vendas por Região",
    tipo: "Gráfico",
    formato: "Barras",
    atualizacao: "diária",
    ultimaGeracao: "22/08/2025 14:30",
    status: "ativo",
    visualizacoes: 234,
    tendencia: "up",
  },
  {
    id: 2,
    nome: "Financeiro Mensal",
    tipo: "Relatório",
    formato: "Tabela",
    atualizacao: "mensal",
    ultimaGeracao: "01/08/2025 09:00",
    status: "ativo",
    visualizacoes: 567,
    tendencia: "up",
  },
  {
    id: 3,
    nome: "Performance de Vendas",
    tipo: "Dashboard",
    formato: "Misto",
    atualizacao: "tempo real",
    ultimaGeracao: "22/08/2025 15:00",
    status: "ativo",
    visualizacoes: 892,
    tendencia: "down",
  },
  {
    id: 4,
    nome: "Conversão de Leads",
    tipo: "Gráfico",
    formato: "Linha",
    atualizacao: "semanal",
    ultimaGeracao: "18/08/2025 10:00",
    status: "ativo",
    visualizacoes: 345,
    tendencia: "up",
  },
  {
    id: 5,
    nome: "Análise de Concorrentes",
    tipo: "Relatório",
    formato: "Tabela",
    atualizacao: "mensal",
    ultimaGeracao: "15/08/2025 08:00",
    status: "rascunho",
    visualizacoes: 0,
    tendencia: "neutral",
  },
  {
    id: 6,
    nome: "Satisfação do Cliente",
    tipo: "Dashboard",
    formato: "Misto",
    atualizacao: "semanal",
    ultimaGeracao: "20/08/2025 16:00",
    status: "ativo",
    visualizacoes: 156,
    tendencia: "up",
  },
];

const dashboards = [
  { nome: "Comercial", descricao: "Visão geral das vendas", acessos: 1234 },
  { nome: "Financeiro", descricao: "Indicadores financeiros", acessos: 892 },
  { nome: "Marketing", descricao: "Campanhas e leads", acessos: 567 },
  { nome: "Operacional", descricao: "Processos e produtividade", acessos: 345 },
];

const formatoIcon = (formato: string) => {
  switch (formato) {
    case "Barras":
      return <ChartBar size={16} className="text-blue-500" />;
    case "Linha":
      return <ChartLine size={16} className="text-green-500" />;
    case "Tabela":
      return <TableIcon size={16} className="text-gray-500" />;
    case "Misto":
      return <ChartPie size={16} className="text-purple-500" />;
    default:
      return <ChartLine size={16} className="text-gray-500" />;
  }
};

const tendenciaIcon = (tendencia: string) => {
  switch (tendencia) {
    case "up":
      return <TrendUp size={16} className="text-green-500" />;
    case "down":
      return <TrendDown size={16} className="text-red-500" />;
    default:
      return <ArrowsDownUp size={16} className="text-gray-400" />;
  }
};

export default function AnalisePage() {
  const [collapsed, setCollapsed] = useState(false);

  const relatoriosAtivos = relatorios.filter((r) => r.status === "ativo").length;
  const totalVisualizacoes = relatorios.reduce((acc, r) => acc + r.visualizacoes, 0);

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
            <Link href="/inteligencia" className="hover:text-gray-700">Inteligência</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Análise de Dados</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <ChartLine size={28} className="text-green-600" />
                Análise de Dados
              </h1>
              <p className="text-gray-500 mt-1">Relatórios e insights inteligentes do negócio</p>
            </div>
            <Button className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8]">
              <Plus size={18} />
              Novo Relatório
            </Button>
          </div>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total de Relatórios</p>
                    <p className="text-2xl font-semibold text-gray-900">{relatorios.length}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <ChartLine size={24} className="text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Relatórios Ativos</p>
                    <p className="text-2xl font-semibold text-gray-900">{relatoriosAtivos}</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Lightning size={24} className="text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total de Visualizações</p>
                    <p className="text-2xl font-semibold text-gray-900">{totalVisualizacoes.toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <Eye size={24} className="text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Dashboards</p>
                    <p className="text-2xl font-semibold text-gray-900">{dashboards.length}</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <ChartBar size={24} className="text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dashboards em Destaque */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Dashboards em Destaque</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {dashboards.map((dashboard) => (
                <Card key={dashboard.nome} className="border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <ChartBar size={18} className="text-green-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900">{dashboard.nome}</h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-2">{dashboard.descricao}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">{dashboard.acessos} acessos</span>
                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-500 hover:text-blue-600">
                        <ArrowSquareOut size={14} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tabela de Relatórios */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Relatórios</h2>
            <Card className="border-gray-200">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 hover:bg-gray-50">
                      <TableHead className="font-semibold">Nome</TableHead>
                      <TableHead className="font-semibold">Tipo</TableHead>
                      <TableHead className="font-semibold">Formato</TableHead>
                      <TableHead className="font-semibold">Atualização</TableHead>
                      <TableHead className="font-semibold">Última Geração</TableHead>
                      <TableHead className="font-semibold">Visualizações</TableHead>
                      <TableHead className="font-semibold">Status</TableHead>
                      <TableHead className="font-semibold text-right">Ações</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {relatorios.map((relatorio) => (
                      <TableRow key={relatorio.id} className="hover:bg-gray-50">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-50 rounded-lg">
                              {formatoIcon(relatorio.formato)}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{relatorio.nome}</p>
                              <p className="text-xs text-gray-500">{relatorio.tendencia}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-gray-600">{relatorio.tipo}</span>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-gray-600">
                            {formatoIcon(relatorio.formato)}
                            {relatorio.formato}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                            {relatorio.atualizacao}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-gray-600">
                            <Clock size={14} />
                            {relatorio.ultimaGeracao}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1 text-gray-600">
                            {tendenciaIcon(relatorio.tendencia)}
                            {relatorio.visualizacoes.toLocaleString()}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={relatorio.status === "ativo"
                              ? "bg-green-100 text-green-700 hover:bg-green-100"
                              : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                            }
                          >
                            {relatorio.status === "ativo" ? "Ativo" : "Rascunho"}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center justify-end gap-1">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600" title="Visualizar">
                              <Eye size={16} />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600" title="Baixar">
                              <DownloadSimple size={16} />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600" title="Editar">
                              <PencilSimple size={16} />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-red-600" title="Excluir">
                              <Trash size={16} />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
