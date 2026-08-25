"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLineLeft,
  Users,
  UserCircle,
  CalendarCheck,
  TrendUp,
  Star,
  Clock,
} from "@phosphor-icons/react";

// Dados de exemplo
const Destaques = [
  {
    id: "001",
    titulo: "Maior nota na avaliação",
    descricao: "Colaborador com melhor desempenho no ciclo atual",
    colaborador: "Maria Santos",
    nota: 4.9,
    tipo: "avaliacao",
  },
  {
    id: "002",
    titulo: "Horas extras destaque",
    descricao: "Colaborador com mais horas trabalhadas no mês",
    colaborador: "Pedro Oliveira",
    horas: 48,
    tipo: "horas",
  },
  {
    id: "003",
    titulo: "Novo prestador",
    descricao: "Novo prestador PJ aprovado este mês",
    collaborator: "Tech Solutions Ltda",
    tipo: "novo",
  },
  {
    id: "004",
    titulo: "Aniversariantes",
    descricao: "Colaboradores que fazem aniversário este mês",
    quantidade: 5,
    tipo: "aniversario",
  },
];

const metricas = {
  totalPrestadores: 45,
  prestadoresAtivos: 38,
  horasTrabalhadas: 12450,
  avaliacaoMedia: 4.2,
  contratosAtivos: 62,
  novosContratos: 8,
};

export default function DestaquesPage() {
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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
            <span>/</span>
            <Link href="/rh" className="hover:text-gray-700">RH</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Destaques RH</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Link href="/rh">
                <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
                  <ArrowLineLeft size={18} />
                  Voltar
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Destaques RH</h1>
                <p className="text-gray-500 mt-1">Visão geral e métricas de recursos humanos</p>
              </div>
            </div>
          </div>

          {/* Cards de Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Total Prestadores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Users size={20} className="text-[#2563EB]" />
                  <span className="text-2xl font-semibold text-gray-900">{metricas.totalPrestadores}</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Ativos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <UserCircle size={20} className="text-green-600" />
                  <span className="text-2xl font-semibold text-gray-900">{metricas.prestadoresAtivos}</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Horas Trabalhadas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-purple-600" />
                  <span className="text-2xl font-semibold text-gray-900">{metricas.horasTrabalhadas}</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Avaliação Média</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-semibold text-amber-500">{metricas.avaliacaoMedia}</span>
                  <Star size={20} weight="fill" className="text-amber-400" />
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Contratos Ativos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <CalendarCheck size={20} className="text-orange-600" />
                  <span className="text-2xl font-semibold text-gray-900">{metricas.contratosAtivos}</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">Novos Contratos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <TrendUp size={20} className="text-green-600" />
                  <span className="text-2xl font-semibold text-green-600">+{metricas.novosContratos}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Seção de Destaques */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Destaques do Mês</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Destaques.map((destaque) => (
                <Card key={destaque.id} className="border-gray-200 hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit mb-2">
                      {destaque.titulo}
                    </Badge>
                    <CardTitle className="text-base">{destaque.descricao}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {destaque.tipo === 'avaliacao' && (
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-gray-900">{destaque.colaborador}</span>
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star size={16} weight="fill" />
                          <span>{destaque.nota}</span>
                        </div>
                      </div>
                    )}
                    {destaque.tipo === 'horas' && (
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold text-gray-900">{destaque.colaborador}</span>
                        <span className="text-sm text-gray-500">{destaque.horas}h</span>
                      </div>
                    )}
                    {destaque.tipo === 'novo' && (
                      <span className="text-lg font-semibold text-green-600">{destaque.collaborator}</span>
                    )}
                    {destaque.tipo === 'aniversario' && (
                      <span className="text-lg font-semibold text-gray-900">{destaque.quantidade} colaboradores</span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Card com informações adicionais */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle>Resumo Mensal</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-blue-900 mb-2">Entrada de Novos Prestadores</h3>
                  <p className="text-2xl font-bold text-blue-600">3</p>
                  <p className="text-sm text-blue-700">Este mês</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-medium text-green-900 mb-2">Contratos Renovados</h3>
                  <p className="text-2xl font-bold text-green-600">5</p>
                  <p className="text-sm text-green-700">Este mês</p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h3 className="font-medium text-amber-900 mb-2">Avaliações Pendentes</h3>
                  <p className="text-2xl font-bold text-amber-600">12</p>
                  <p className="text-sm text-amber-700">Aguardando conclusão</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
