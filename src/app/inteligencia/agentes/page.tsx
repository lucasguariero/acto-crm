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
  Robot,
  Plus,
  Play,
  Pause,
  PencilSimple,
  Trash,
  Lightning,
  Clock,
  CheckCircle,
  ArrowSquareOut,
  DotsThree,
  Plugs,
} from "@phosphor-icons/react";

const agentes = [
  {
    id: 1,
    nome: "Assistente de Vendas",
    descricao: "Auxilia no processo de vendas e follow-up",
    status: "ativo",
    tarefasExecutadas: 456,
    taxaSucesso: 94,
    ultimaExecucao: "há 5 minutos",
    modelo: "GPT-4",
  },
  {
    id: 2,
    nome: "Atendimento Automatizado",
    descricao: "Responde perguntas frequentes de clientes",
    status: "ativo",
    tarefasExecutadas: 1247,
    taxaSucesso: 89,
    ultimaExecucao: "há 2 minutos",
    modelo: "GPT-4",
  },
  {
    id: 3,
    nome: "Agente de Qualidade",
    descricao: "Analisa e valida qualidade de processos",
    status: "inativo",
    tarefasExecutadas: 234,
    taxaSucesso: 97,
    ultimaExecucao: "há 2 dias",
    modelo: "GPT-4",
  },
  {
    id: 4,
    nome: "Assistente Financeiro",
    descricao: "Auxilia em consultas financeiras",
    status: "ativo",
    tarefasExecutadas: 189,
    taxaSucesso: 91,
    ultimaExecucao: "há 1 hora",
    modelo: "GPT-4",
  },
  {
    id: 5,
    nome: "Analista de Dados",
    descricao: "Gera insights automaticamente",
    status: "ativo",
    tarefasExecutadas: 345,
    taxaSucesso: 86,
    ultimaExecucao: "há 30 minutos",
    modelo: "GPT-4",
  },
  {
    id: 6,
    nome: "Agente de Onboarding",
    descricao: "Guia novos clientes pelo sistema",
    status: "inativo",
    tarefasExecutadas: 78,
    taxaSucesso: 92,
    ultimaExecucao: "há 1 semana",
    modelo: "GPT-4",
  },
];

const statusBadge = (status: string) => {
  switch (status) {
    case "ativo":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Ativo</Badge>;
    case "inativo":
      return <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-100">Inativo</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export default function AgentesPage() {
  const [collapsed, setCollapsed] = useState(false);

  const agentesAtivos = agentes.filter((a) => a.status === "ativo").length;
  const totalTarefas = agentes.reduce((acc, a) => acc + a.tarefasExecutadas, 0);
  const sucessoMedio = Math.round(
    agentes.reduce((acc, a) => acc + a.taxaSucesso, 0) / agentes.length
  );

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
            <span className="text-gray-900 font-medium">Agentes</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <Robot size={28} className="text-purple-600" />
                Agentes de IA
              </h1>
              <p className="text-gray-500 mt-1">Assistentes virtuais para automação de tarefas</p>
            </div>
            <Button className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8]">
              <Plus size={18} />
              Novo Agente
            </Button>
          </div>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total de Agentes</p>
                    <p className="text-2xl font-semibold text-gray-900">{agentes.length}</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <Robot size={24} className="text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Agentes Ativos</p>
                    <p className="text-2xl font-semibold text-gray-900">{agentesAtivos}</p>
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
                    <p className="text-sm text-gray-500">Tarefas Executadas</p>
                    <p className="text-2xl font-semibold text-gray-900">{totalTarefas.toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <CheckCircle size={24} className="text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Taxa de Sucesso</p>
                    <p className="text-2xl font-semibold text-gray-900">{sucessoMedio}%</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <Plugs size={24} className="text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Grid de Cards de Agentes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {agentes.map((agente) => (
              <Card key={agente.id} className="border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${agente.status === 'ativo' ? 'bg-green-50' : 'bg-gray-50'}`}>
                        <Robot size={20} className={agente.status === 'ativo' ? 'text-green-600' : 'text-gray-400'} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{agente.nome}</h3>
                        <p className="text-xs text-gray-500">{agente.descricao}</p>
                      </div>
                    </div>
                    {statusBadge(agente.status)}
                  </div>

                  <div className="flex items-center gap-4 py-3 border-t border-gray-100">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900">{agente.tarefasExecutadas}</p>
                      <p className="text-xs text-gray-500">Tarefas</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900">{agente.taxaSucesso}%</p>
                      <p className="text-xs text-gray-500">Sucesso</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-500">Última execução</p>
                      <p className="text-xs text-gray-700">{agente.ultimaExecucao}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <Button variant="outline" size="sm" className="flex-1 flex items-center justify-center gap-1">
                      <Play size={14} />
                      Executar
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600">
                      <PencilSimple size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600">
                      <ArrowSquareOut size={16} />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-red-600">
                      <Trash size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
