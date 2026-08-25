"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heartbeat,
  TrendUp,
  TrendDown,
  Warning,
  CheckCircle,
  Clock,
  ArrowRight,
  CurrencyDollar,
  Bank,
  CreditCard,
  FileText,
  Calendar,
  Shield,
  PiggyBank,
} from "@phosphor-icons/react";

const indicadores = [
  {
    titulo: "Liquidez Corrente",
    valor: 2.45,
    meta: 1.5,
    status: "excelente",
    descricao: "Capacidade de pagar dívidas de curto prazo",
    icon: CurrencyDollar,
  },
  {
    titulo: "Liquidez Seca",
    valor: 1.89,
    meta: 1.0,
    status: "bom",
    descricao: "Liquidez sem considerar estoque",
    icon: Bank,
  },
  {
    titulo: "Liquidez Imediata",
    valor: 0.85,
    meta: 0.5,
    status: "excelente",
    descricao: "Disponibilidade imediata",
    icon: PiggyBank,
  },
  {
    titulo: "Endividamento Geral",
    valor: 32.5,
    meta: 40,
    status: "bom",
    descricao: "Percentual de dívida sobre ativos",
    icon: CreditCard,
  },
  {
    titulo: "Margem Bruta",
    valor: 68.5,
    meta: 60,
    status: "excelente",
    descricao: "Percentual de lucro sobre vendas",
    icon: TrendUp,
  },
  {
    titulo: "Margem Líquida",
    valor: 18.2,
    meta: 15,
    status: "excelente",
    descricao: "Lucro líquido sobre receita",
    icon: TrendUp,
  },
];

const alertas = [
  {
    id: 1,
    tipo: "critico",
    titulo: "Conta bancária negativo",
    descricao: "Conta Banco do Brasil está com saldo negativo de R$ 5.200,00",
    data: "20/08/2026",
  },
  {
    id: 2,
    tipo: "alerta",
    titulo: "Boleto vencido",
    descricao: "3 boletos de fornecedores venceu(ram) nos últimos 5 dias",
    data: "19/08/2026",
  },
  {
    id: 3,
    tipo: "alerta",
    titulo: "Conta a receber vencida",
    descrição: "R$ 45.000,00 em contas a receber vencidas",
    data: "18/08/2026",
  },
  {
    id: 4,
    tipo: "sucesso",
    titulo: "Meta de receita atingida",
    descricao: "Receita do mês atingiu 100% da meta",
    data: "17/08/2026",
  },
];

const contasPagar = [
  {
    id: 1,
    descricao: "Fornecedor ABC - Material",
    valor: 12500.00,
    vencimento: "22/08/2026",
    diasVencido: 0,
    status: "aVencer",
  },
  {
    id: 2,
    descricao: "Aluguel - Agosto/2026",
    valor: 15000.00,
    vencimento: "20/08/2026",
    diasVencido: 2,
    status: "vencido",
  },
  {
    id: 3,
    descricao: "Fornecedor XYZ - Serviços",
    valor: 8500.00,
    vencimento: "25/08/2026",
    diasVencido: 0,
    status: "aVencer",
  },
  {
    id: 4,
    descricao: "Conta de luz",
    valor: 1250.00,
    vencimento: "18/08/2026",
    diasVencido: 4,
    status: "vencido",
  },
  {
    id: 5,
    descricao: "Conta de água",
    valor: 380.00,
    vencimento: "15/08/2026",
    diasVencido: 7,
    status: "vencido",
  },
];

const contasReceber = [
  {
    id: 1,
    descricao: "Cliente ABC Ltda - NF 1234",
    valor: 28000.00,
    vencimento: "22/08/2026",
    diasVencido: 0,
    status: "aVencer",
  },
  {
    id: 2,
    descricao: "Cliente DEF S/A - NF 1235",
    valor: 15500.00,
    vencimento: "20/08/2026",
    diasVencido: 2,
    status: "vencido",
  },
  {
    id: 3,
    descricao: "Cliente GHI - NF 1236",
    valor: 8900.00,
    vencimento: "25/08/2026",
    diasVencido: 0,
    status: "aVencer",
  },
  {
    id: 4,
    descricao: "Cliente JKL - NF 1230",
    valor: 12500.00,
    vencimento: "10/08/2026",
    diasVencido: 12,
    status: "vencido",
  },
];

export default function SaudePage() {
  const [collapsed, setCollapsed] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excelente":
        return "text-green-600";
      case "bom":
        return "text-blue-600";
      case "atencao":
        return "text-yellow-600";
      case "critico":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusBg = (status: string) => {
    switch (status) {
      case "excelente":
        return "bg-green-50";
      case "bom":
        return "bg-blue-50";
      case "atencao":
        return "bg-yellow-50";
      case "critico":
        return "bg-red-50";
      default:
        return "bg-gray-50";
    }
  };

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
            <span className="text-gray-900 font-medium">Saúde Financeira</span>
          </nav>

          {/* Título */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Saúde Financeira</h1>
              <p className="text-gray-500 mt-1">Monitorando a saúde financeira da empresa</p>
            </div>
            <Button variant="outline">
              <Calendar size={16} className="mr-2" />
              Atualizar Dados
            </Button>
          </div>

          {/* Score Geral */}
          <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mb-6">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Score Geral</p>
                  <p className="text-4xl font-bold mt-1">BOM</p>
                  <p className="text-blue-100 text-sm mt-2">Última atualização: 20/08/2026</p>
                </div>
                <div className="w-32 h-32 rounded-full border-8 border-blue-400 flex items-center justify-center">
                  <span className="text-3xl font-bold">78</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indicadores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {indicadores.map((indicador, index) => {
              const Icon = indicador.icon;
              const statusColor = getStatusColor(indicador.status);
              const statusBg = getStatusBg(indicador.status);
              const isMetaAlcancada = indicador.valor >= indicador.meta;

              return (
                <Card key={index} className="bg-white">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                        <Icon size={20} className="text-blue-600" />
                      </div>
                      <Badge
                        variant="outline"
                        className={`${statusBg} ${statusColor} border-0`}
                      >
                        {indicador.status === "excelente" ? (
                          <CheckCircle size={12} className="mr-1" />
                        ) : indicador.status === "bom" ? (
                          <CheckCircle size={12} className="mr-1" />
                        ) : (
                          <Warning size={12} className="mr-1" />
                        )}
                        {indicador.status.charAt(0).toUpperCase() + indicador.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 mb-1">{indicador.titulo}</p>
                    <div className="flex items-end gap-2">
                      <span className="text-2xl font-bold text-gray-900">
                        {indicador.titulo.includes("Margem") ? `${indicador.valor}%` : indicador.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                      {isMetaAlcancada ? (
                        <TrendUp size={16} className="text-green-500 mb-1" />
                      ) : (
                        <TrendDown size={16} className="text-red-500 mb-1" />
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-2">{indicador.descricao}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Alertas */}
          <Card className="bg-white mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Warning size={18} className="text-gray-600" />
                Alertas e Notificações
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {alertas.map((alerta) => (
                  <div
                    key={alerta.id}
                    className={`flex items-start gap-3 p-3 rounded-lg ${
                      alerta.tipo === "critico" ? "bg-red-50" :
                      alerta.tipo === "alerta" ? "bg-yellow-50" : "bg-green-50"
                    }`}
                  >
                    {alerta.tipo === "critico" ? (
                      <Warning size={20} className="text-red-600 mt-0.5" />
                    ) : alerta.tipo === "alerta" ? (
                      <Clock size={20} className="text-yellow-600 mt-0.5" />
                    ) : (
                      <CheckCircle size={20} className="text-green-600 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className={`font-medium ${alerta.tipo === "critico" ? "text-red-800" : alerta.tipo === "alerta" ? "text-yellow-800" : "text-green-800"}`}>
                        {alerta.titulo}
                      </p>
                      <p className="text-sm text-gray-600 mt-0.5">{alerta.descricao}</p>
                    </div>
                    <span className="text-xs text-gray-400">{alerta.data}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contas a Pagar e Receber */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contas a Pagar */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center gap-2">
                    <FileText size={18} className="text-red-600" />
                    Contas a Pagar
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    Ver todas
                    <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {contasPagar.map((conta) => (
                    <div key={conta.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
                      <div>
                        <p className="font-medium text-gray-900">{conta.descricao}</p>
                        <p className="text-sm text-gray-500">Vencimento: {conta.vencimento}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${conta.status === 'vencido' ? 'text-red-600' : 'text-gray-900'}`}>
                          R$ {conta.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                        {conta.diasVencido > 0 && (
                          <Badge variant="destructive" className="text-xs mt-1">
                            {conta.diasVencido} dia(s) vencido(s)
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contas a Receber */}
            <Card className="bg-white">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center gap-2">
                    <FileText size={18} className="text-green-600" />
                    Contas a Receber
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="text-blue-600">
                    Ver todas
                    <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {contasReceber.map((conta) => (
                    <div key={conta.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-200">
                      <div>
                        <p className="font-medium text-gray-900">{conta.descricao}</p>
                        <p className="text-sm text-gray-500">Vencimento: {conta.vencimento}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-medium ${conta.status === 'vencido' ? 'text-red-600' : 'text-gray-900'}`}>
                          R$ {conta.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                        {conta.diasVencido > 0 && (
                          <Badge variant="destructive" className="text-xs mt-1">
                            {conta.diasVencido} dia(s) vencido(s)
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
