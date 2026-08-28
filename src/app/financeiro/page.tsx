"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartLine,
  UploadSimple,
  Tag,
  Heartbeat,
  FolderSimple,
  ChartPie,
  Calendar,
  FileText,
  ArrowRight,
  Wallet,
  TrendUp,
  TrendDown,
  Money,
  CreditCard,
  Bank,
  Receipt
} from "@phosphor-icons/react";

const modulos = [
  {
    titulo: "Painel Gerencial",
    descricao: "Visão geral das métricas financeiras",
    icone: ChartLine,
    href: "/financeiro/painel",
    cor: "bg-blue-500",
  },
  {
    titulo: "Importar Extratos",
    descricao: "Importação de arquivos de extrato bancário",
    icone: UploadSimple,
    href: "/financeiro/extratos",
    cor: "bg-green-500",
  },
  {
    titulo: "Classificação",
    descricao: "Classificação de lançamentos",
    icone: Tag,
    href: "/financeiro/classificacao",
    cor: "bg-purple-500",
  },
  {
    titulo: "Saúde Financeira",
    descricao: "Indicadores de saúde financeira",
    icone: Heartbeat,
    href: "/financeiro/saude",
    cor: "bg-red-500",
  },
  {
    titulo: "Contratos e Projetos",
    descricao: "Gestão de contratos e projetos",
    icone: FolderSimple,
    href: "#",
    cor: "bg-orange-500",
  },
  {
    titulo: "Indicadores",
    descricao: "KPI's e indicadores de performance",
    icone: ChartPie,
    href: "#",
    cor: "bg-teal-500",
  },
  {
    titulo: "Planejamento",
    descricao: "Planejamento orçamentário",
    icone: Calendar,
    href: "#",
    cor: "bg-indigo-500",
  },
  {
    titulo: "Relatórios",
    descricao: "Relatórios gerenciais",
    icone: FileText,
    href: "#",
    cor: "bg-gray-500",
  },
  {
    titulo: "Notas Fiscais",
    descricao: "Emissão e controle de notas fiscais",
    icone: Receipt,
    href: "/faturamento/notas-fiscais",
    cor: "bg-amber-500",
  },
];

const metricas = [
  {
    titulo: "Receita do Mês",
    valor: "R$ 487.500,00",
    variacao: "+12.5%",
    positiva: true,
    icone: TrendUp,
  },
  {
    titulo: "Despesas do Mês",
    valor: "R$ 312.000,00",
    variacao: "+5.2%",
    positiva: false,
    icone: TrendDown,
  },
  {
    titulo: "Saldo Bancário",
    valor: "R$ 1.245.780,00",
    variacao: "+8.3%",
    positiva: true,
    icone: Wallet,
  },
  {
    titulo: "Contas a Receber",
    valor: "R$ 89.450,00",
    variacao: "-2.1%",
    positiva: true,
    icone: Money,
  },
  {
    titulo: "Contas a Pagar",
    valor: "R$ 156.230,00",
    variacao: "+15.0%",
    positiva: false,
    icone: CreditCard,
  },
  {
    titulo: "Faturamento",
    valor: "R$ 523.890,00",
    variacao: "+10.8%",
    positiva: true,
    icone: Bank,
  },
];

export default function FinanceiroPage() {
  return (
    <main className="p-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Financeiro</span>
      </nav>

      {/* Título */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Financeiro</h1>
        <p className="text-gray-500 mt-1">Gerencie as finanças da sua empresa</p>
      </div>

      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {metricas.map((metrica, index) => {
          const Icon = metrica.icone;
          return (
            <Card key={index} className="bg-white">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{metrica.titulo}</p>
                    <p className="text-lg font-bold text-gray-900 mt-1">{metrica.valor}</p>
                    <p className={`text-xs mt-1 flex items-center gap-1 ${metrica.positiva ? 'text-green-600' : 'text-red-600'}`}>
                      <Icon size={12} weight="bold" />
                      {metrica.variacao}
                    </p>
                  </div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${metrica.positiva ? 'bg-blue-50' : 'bg-orange-50'}`}>
                    <Icon size={20} className={metrica.positiva ? 'text-blue-600' : 'text-orange-600'} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Grid de Módulos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modulos.map((modulo, index) => {
          const Icon = modulo.icone;
          return (
            <Link key={index} href={modulo.href}>
              <Card className="bg-white hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${modulo.cor}`}>
                      <Icon size={24} className="text-white" weight="bold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{modulo.titulo}</h3>
                      <p className="text-sm text-gray-500 mt-1">{modulo.descricao}</p>
                    </div>
                    <ArrowRight size={20} className="text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

