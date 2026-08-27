"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Book, Robot, ChartLine, Plus, Sparkle } from "@phosphor-icons/react";

const modulos = [
  {
    titulo: "Base de Conhecimento",
    descricao: "Documentos, políticas e informações institucionais",
    icon: Book,
    href: "/inteligencia/base-conhecimento",
    cor: "bg-blue-50 text-blue-600",
    estatisticas: {
      documentos: 156,
      categorias: 12,
      acessos: "2.3k",
    },
  },
  {
    titulo: "Agentes",
    descricao: "Assistentes de IA para automação de tarefas",
    icon: Robot,
    href: "/inteligencia/agentes",
    cor: "bg-purple-50 text-purple-600",
    estatisticas: {
      agentes: 8,
      ativos: 5,
      tarefas: 1247,
    },
  },
  {
    titulo: "Análise de Dados",
    descricao: "Insights e relatórios inteligentes do negócio",
    icon: ChartLine,
    href: "/inteligencia/analise",
    cor: "bg-green-50 text-green-600",
    estatisticas: {
      relatorios: 24,
      dashboards: 8,
      atualizacao: "tempo real",
    },
  },
];

const recentActivities = [
  { acao: "Novo documento adicionado", modulo: "Base de Conhecimento", tempo: "há 30 minutos", tipo: "success" },
  { acao: "Agente 'Atendimento' executou 45 tarefas", modulo: "Agentes", tempo: "há 1 hora", tipo: "info" },
  { acao: "Relatório mensal gerado", modulo: "Análise de Dados", tempo: "há 2 horas", tipo: "success" },
  { acao: "Base de conhecimento atualizada", modulo: "Base de Conhecimento", tempo: "há 3 horas", tipo: "warning" },
  { acao: "Novo agente treinado", modulo: "Agentes", tempo: "há 1 dia", tipo: "success" },
];

export default function InteligenciaPage() {
  return (
    <>
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Inteligência</span>
      </nav>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
            <Brain size={32} className="text-[#2563EB]" />
            Inteligência
          </h1>
          <p className="text-gray-500 mt-1">Potencialize decisões com IA e dados</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
            <Sparkle size={18} />
            Criar com IA
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modulos.map((modulo) => {
          const Icon = modulo.icon;
          return (
            <Link key={modulo.titulo} href={modulo.href}>
              <Card className="hover:shadow-lg transition-all cursor-pointer border-gray-200 hover:border-purple-200 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${modulo.cor}`}>
                        <Icon size={28} weight="duotone" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{modulo.titulo}</CardTitle>
                        <p className="text-sm text-gray-500 mt-1">{modulo.descricao}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    {modulo.estatisticas && Object.entries(modulo.estatisticas).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <p className="text-xl font-semibold text-gray-900">{value}</p>
                        <p className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Atividades Recentes</h2>
        <Card className="border-gray-200">
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {recentActivities.map((atividade, index) => (
                <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      atividade.tipo === 'success' ? 'bg-green-500' :
                      atividade.tipo === 'info' ? 'bg-purple-500' : 'bg-yellow-500'
                    }`} />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{atividade.acao}</p>
                      <p className="text-xs text-gray-500">{atividade.modulo}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{atividade.tempo}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Ações Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-purple-200 transition-all text-left">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Book size={20} className="text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Novo Documento</p>
              <p className="text-xs text-gray-500">Adicionar à base</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-purple-200 transition-all text-left">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Robot size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Novo Agente</p>
              <p className="text-xs text-gray-500">Criar assistente</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-purple-200 transition-all text-left">
            <div className="p-2 bg-green-50 rounded-lg">
              <ChartLine size={20} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Novo Relatório</p>
              <p className="text-xs text-gray-500">Criar análise</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md hover:border-purple-200 transition-all text-left">
            <div className="p-2 bg-yellow-50 rounded-lg">
              <Sparkle size={20} className="text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Ask AI</p>
              <p className="text-xs text-gray-500">Pergunte qualquer coisa</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
