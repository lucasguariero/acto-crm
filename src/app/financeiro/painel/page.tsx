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
  TrendUp,
  TrendDown,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Money,
  CreditCard,
  Bank,
  ArrowRight,
  Calendar,
  DownloadSimple,
  Eye,
  ChartLine,
  ChartBar,
  ChartPie,
} from "@phosphor-icons/react";

const indicadores = [
  {
    titulo: "Receita Bruta",
    valor: "R$ 523.890,00",
    variacao: "+12.5%",
    positiva: true,
    periodo: "vs mês anterior",
  },
  {
    titulo: "Margem Bruta",
    valor: "68.5%",
    variacao: "+2.3%",
    positiva: true,
    periodo: "vs mês anterior",
  },
  {
    titulo: "Lucro Líquido",
    valor: "R$ 175.500,00",
    variacao: "+8.7%",
    positiva: true,
    periodo: "vs mês anterior",
  },
  {
    titulo: "EBITDA",
    valor: "R$ 215.000,00",
    variacao: "+5.2%",
    positiva: true,
    periodo: "vs mês anterior",
  },
];

const receitaPorCategoria = [
  { categoria: "Serviços", valor: 285000, percentual: 54.4 },
  { categoria: "Produtos", valor: 156000, percentual: 29.8 },
  { categoria: "Licenças", valor: 52890, percentual: 10.1 },
  { categoria: "Outros", valor: 30000, percentual: 5.7 },
];

const despesaPorCategoria = [
  { categoria: "Pessoal", valor: 145000, percentual: 46.5 },
  { categoria: "Infraestrutura", valor: 62000, percentual: 19.9 },
  { categoria: "Marketing", valor: 38000, percentual: 12.2 },
  { categoria: "Operacional", valor: 45000, percentual: 14.4 },
  { categoria: "Outros", valor: 22000, percentual: 7.0 },
];

const ultimasTransacoes = [
  {
    id: 1,
    descricao: "Recebimento - Cliente ABC Ltda",
    tipo: "receita",
    valor: 45000,
    data: "20/08/2026",
    status: "concluido",
  },
  {
    id: 2,
    descricao: "Fornecedor XYZ - Material",
    tipo: "despesa",
    valor: -12500,
    data: "19/08/2026",
    status: "concluido",
  },
  {
    id: 3,
    descricao: "Recebimento - Cliente DEF S/A",
    tipo: "receita",
    valor: 32000,
    data: "19/08/2026",
    status: "concluido",
  },
  {
    id: 4,
    descricao: "Aluguel - Agosto/2026",
    tipo: "despesa",
    valor: -15000,
    data: "18/08/2026",
    status: "concluido",
  },
  {
    id: 5,
    descricao: "Recebimento - Cliente GHI",
    tipo: "receita",
    valor: 28000,
    data: "18/08/2026",
    status: "pendente",
  },
];

const fluxoMensal = [
  { mes: "Jan", receita: 420000, despesa: 280000 },
  { mes: "Fev", receita: 385000, despesa: 265000 },
  { mes: "Mar", receita: 450000, despesa: 290000 },
  { mes: "Abr", receita: 410000, despesa: 275000 },
  { mes: "Mai", receita: 478000, despesa: 298000 },
  { mes: "Jun", receita: 495000, despesa: 305000 },
  { mes: "Jul", receita: 510000, despesa: 295000 },
  { mes: "Ago", receita: 523890, despesa: 312000 },
];

export default function PainelPage() {
  const [collapsed, setCollapsed] = useState(false);

  const maxReceita = Math.max(...receitaPorCategoria.map(r => r.valor));
  const maxDespesa = Math.max(...despesaPorCategoria.map(d => d.valor));

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
            <Link href="/financeiro" className="hover:text-gray-700">Financeiro</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Painel Gerencial</span>
          </nav>

          {/* Título e Ações */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Painel Gerencial</h1>
              <p className="text-gray-500 mt-1">Visão geral das métricas financeiras</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <DownloadSimple size={16} className="mr-2" />
                Exportar
              </Button>
              <Button size="sm">
                <Calendar size={16} className="mr-2" />
                Período
              </Button>
            </div>
          </div>

          {/* Cards de Indicadores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {indicadores.map((indicador, index) => {
              const Icon = indicador.positiva ? TrendUp : TrendDown;
              return (
                <Card key={index} className="bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{indicador.titulo}</span>
                      <Badge variant={indicador.positiva ? "default" : "destructive"} className="bg-green-50 text-green-700 border-green-200">
                        <Icon size={12} className="mr-1" />
                        {indicador.variacao}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{indicador.valor}</div>
                    <p className="text-xs text-gray-400 mt-1">{indicador.periodo}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Gráficos e Tabelas */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Gráfico de Receita */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <ChartLine size={18} className="text-blue-600" />
                  Receita por Categoria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {receitaPorCategoria.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{item.categoria}</span>
                        <span className="text-sm text-gray-900 font-medium">R$ {item.valor.toLocaleString('pt-BR')}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(item.valor / maxReceita) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400">{item.percentual}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gráfico de Despesas */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center gap-2">
                  <ChartBar size={18} className="text-orange-600" />
                  Despesas por Categoria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {despesaPorCategoria.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{item.categoria}</span>
                        <span className="text-sm text-gray-900 font-medium">R$ {item.valor.toLocaleString('pt-BR')}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: `${(item.valor / maxDespesa) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400">{item.percentual}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fluxo Mensal */}
          <Card className="bg-white mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <ChartPie size={18} className="text-purple-600" />
                Fluxo de Caixa Mensal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Mês</TableHead>
                      <TableHead className="text-right">Receita</TableHead>
                      <TableHead className="text-right">Despesa</TableHead>
                      <TableHead className="text-right">Saldo</TableHead>
                      <TableHead className="text-center">Tendência</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fluxoMensal.map((item, index) => {
                      const saldo = item.receita - item.despesa;
                      const tendencia = index > 0 ? saldo >= (fluxoMensal[index - 1].receita - fluxoMensal[index - 1].despesa) : true;
                      return (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.mes}</TableCell>
                          <TableCell className="text-right text-green-600">
                            R$ {item.receita.toLocaleString('pt-BR')}
                          </TableCell>
                          <TableCell className="text-right text-red-600">
                            R$ {item.despesa.toLocaleString('pt-BR')}
                          </TableCell>
                          <TableCell className={`text-right font-medium ${saldo >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                            R$ {saldo.toLocaleString('pt-BR')}
                          </TableCell>
                          <TableCell className="text-center">
                            {tendencia ? (
                              <ArrowUpRight size={20} className="text-green-500 inline" />
                            ) : (
                              <ArrowDownRight size={20} className="text-red-500 inline" />
                            )}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Últimas Transações */}
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wallet size={18} className="text-gray-600" />
                  Últimas Transações
                </div>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  Ver todas
                  <ArrowRight size={14} className="ml-1" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ultimasTransacoes.map((transacao) => (
                    <TableRow key={transacao.id}>
                      <TableCell className="font-medium">{transacao.descricao}</TableCell>
                      <TableCell className="text-gray-500">{transacao.data}</TableCell>
                      <TableCell>
                        <Badge variant={transacao.tipo === "receita" ? "default" : "destructive"}
                          className={transacao.tipo === "receita" ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"}>
                          {transacao.tipo === "receita" ? "Receita" : "Despesa"}
                        </Badge>
                      </TableCell>
                      <TableCell className={`text-right font-medium ${transacao.valor >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transacao.valor >= 0 ? '+' : ''}R$ {Math.abs(transacao.valor).toLocaleString('pt-BR')}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className={transacao.status === 'concluido' ? 'border-green-300 text-green-700' : 'border-yellow-300 text-yellow-700'}>
                          {transacao.status === 'concluido' ? 'Concluído' : 'Pendente'}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
