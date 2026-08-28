"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Plus, CaretRight, Warning, FileText, Users, Megaphone, Calendar, ClipboardText } from "@phosphor-icons/react";

// Icons
const ClipboardListIcon = () => (
  <ClipboardText size={20} className="text-[#64748B]" weight="regular" />
);

const WarningDiamondIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
    <path d="M10.66 6 14 12l-3.33 6" />
    <path d="m14 12 3.34-6" />
    <path d="M12 2a10 10 0 0 0-7.07 17.07l1.41-1.41A7.96 7.96 0 0 1 12 20c4.42 0 8-3.58 8-8 0-3.31-2.04-6.19-5.07-7.68l-1.41 1.41A10 10 0 1 0 12 2z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// Dados de exemplo - Notas Fiscais
const notasFiscais = [
  { fornecedor: "Tech Solutions", data: "28/08/2026", valor: "R$ 15.000,00", status: "Pendente" },
  { fornecedor: "Consultoria ABC", data: "27/08/2026", valor: "R$ 8.500,00", status: "Pago" },
  { fornecedor: "Serviços XYZ", data: "26/08/2026", valor: "R$ 22.300,00", status: "Pago" },
  { fornecedor: "Fornecedor W", data: "25/08/2026", valor: "R$ 5.750,00", status: "Pendente" },
];

// Dados de exemplo - Processos Pendentes
const processosPendentes = [
  { tipo: "Centro de custo", desc: "Aprovação para viagens, equipamentos e capacitação", count: 3, risco: "normal" },
  { tipo: "Recesso", desc: "Recessos de prestadores PJ aguardando análise", count: 2, risco: "normal" },
  { tipo: "Substituições", desc: "Troca de colaboradores em contratos de outsourcing", count: 5, risco: "alto" },
];

// Dados de exemplo - Projetos em Risco
const projetosRisco = [
  { nome: "Projeto Alpha", cliente: "Empresa X", diasAtraso: 15 },
  { nome: "Portal Y", cliente: "Empresa Y", diasAtraso: 8 },
];

// Dados de exemplo - Aniversariantes
const aniversarioHoje = { nome: "Benigno Fialho", area: "Engenharia" };

export function DashboardGrid() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).replace(/^\w/, (c) => c.toUpperCase());

  return (
    <div className="space-y-6">
      {/* Welcome Section com Data */}
      <div className="flex items-baseline justify-between flex-wrap gap-2">
        <div>
          <h2 className="text-[20px] font-semibold text-[#1E293B]">
            Olá, Admin Sistema
          </h2>
          <p className="text-[14px] text-[#64748B]">
            Resumo adaptado ao seu cargo e à sua rotina de uso.
          </p>
        </div>
        <p className="text-[14px] text-[#94A3B8]">
          {formattedDate}
        </p>
      </div>

      {/* Grid Assimétrico - 2 Colunas */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* Coluna Principal (~2/3) */}
        <div className="space-y-6 lg:col-span-2">

          {/* Card: Processos Pendentes */}
          <Card className="border-[#E2E8F0]">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <ClipboardListIcon />
                <CardTitle className="text-[16px] font-semibold text-[#1E293B]">
                  Processos Pendentes
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              {processosPendentes.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <CheckCircleIcon />
                  <p className="text-[14px] font-medium text-[#1E293B] mt-2">
                    Nada pendente por aqui
                  </p>
                  <p className="text-[12px] text-[#94A3B8] mt-1">
                    Você está em dia com aprovações e solicitações.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {processosPendentes.map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between rounded-lg border p-3 ${
                        item.risco === "alto"
                          ? "border-red-200 bg-red-50"
                          : "border-[#E2E8F0] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-[14px] font-medium text-[#1E293B]">
                            {item.tipo}
                          </p>
                          {item.risco === "alto" && (
                            <Badge className="bg-red-100 text-red-700 text-[10px] px-2 py-0 h-5">
                              Alto Risco
                            </Badge>
                          )}
                          {item.risco === "normal" && (
                            <Badge className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0 h-5">
                              Normal
                            </Badge>
                          )}
                        </div>
                        <p className="text-[12px] text-[#64748B] mt-1">{item.desc}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-bold ${
                          item.risco === "alto" ? "bg-red-200 text-red-700" : "bg-[#F1F5F9] text-[#64748B]"
                        }`}>
                          {item.count}
                        </span>
                        <CaretRight size={16} className="text-[#94A3B8]" />
                      </div>
                    </div>
                  ))}
                  <Link
                    href="/processos"
                    className="text-[14px] text-[#2563EB] hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    Ver todos os processos <CaretRight size={14} weight="bold" />
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Card: Fila de Notas Fiscais */}
          <Card className="border-[#E2E8F0]">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <FileText size={20} className="text-[#64748B]" />
                <CardTitle className="text-[16px] font-semibold text-[#1E293B]">
                  Fila de Notas Fiscais
                </CardTitle>
              </div>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-[24px] font-bold text-[#1E293B]">{notasFiscais.length}</span>
                <span className="text-[12px] text-[#64748B]">nota(s) aguardando análise</span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-[#E2E8F0]">
                      <th className="text-left py-3 text-[12px] font-medium text-[#64748B]">Fornecedor</th>
                      <th className="text-left py-3 text-[12px] font-medium text-[#64748B]">Data</th>
                      <th className="text-right py-3 text-[12px] font-medium text-[#64748B]">Valor</th>
                      <th className="text-center py-3 text-[12px] font-medium text-[#64748B]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notasFiscais.map((nota, index) => (
                      <tr key={index} className="border-b border-[#F1F5F9] hover:bg-[#F8FAFC]">
                        <td className="py-3 text-[14px] text-[#1E293B]">{nota.fornecedor}</td>
                        <td className="py-3 text-[14px] text-[#64748B]">{nota.data}</td>
                        <td className="py-3 text-[14px] text-[#1E293B] text-right font-medium">{nota.valor}</td>
                        <td className="py-3 text-center">
                          <Badge className={`text-[10px] px-2 py-0.5 h-5 ${
                            nota.status === "Pago"
                              ? "bg-green-100 text-green-700"
                              : "bg-amber-100 text-amber-700"
                          }`}>
                            {nota.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Link
                href="/financeiro/notas-fiscais"
                className="text-[14px] text-[#2563EB] hover:underline inline-flex items-center gap-1 font-medium mt-3"
              >
                Abrir <CaretRight size={14} weight="bold" />
              </Link>
            </CardContent>
          </Card>

        </div>

        {/* Coluna Lateral (~1/3) */}
        <div className="space-y-6">

          {/* Card: Projetos em Risco (destaque vermelho) */}
          <Card className="border-2 border-red-200 bg-red-50">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Warning size={20} className="text-red-600" weight="fill" />
                <CardTitle className="text-[16px] font-semibold text-red-800">
                  Projetos em Risco
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              {projetosRisco.length === 0 ? (
                <div className="text-center py-4">
                  <p className="text-[14px] text-red-700">Nenhum projeto em risco</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {projetosRisco.map((projeto, index) => (
                    <Link
                      key={index}
                      href="/projetos"
                      className="block rounded-lg border border-red-200 bg-white p-3 hover:bg-red-100 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[14px] font-medium text-red-900">{projeto.nome}</p>
                          <p className="text-[12px] text-red-700">{projeto.cliente}</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-red-200 text-red-800 text-[10px]">
                            {projeto.diasAtraso} dias
                          </Badge>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Feed: Comunicados (minimalista) */}
          <Card className="border-[#E2E8F0]">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Megaphone size={20} className="text-[#64748B]" />
                <CardTitle className="text-[16px] font-semibold text-[#1E293B]">
                  Comunicados
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="rounded-lg border border-dashed border-[#CBD5E1] bg-[#F8FAFC] p-4 text-center">
                <p className="text-[14px] text-[#64748B]">Nenhum comunicado no ar</p>
                <Link
                  href="/destaques-rh/create"
                  className="inline-flex items-center mt-2 text-[14px] text-[#2563EB] hover:underline font-medium"
                >
                  <Plus size={14} weight="bold" className="mr-1" />
                  Criar comunicado
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Dois Micro-widgets lado a lado */}
          <div className="grid grid-cols-2 gap-4">

            {/* Micro-widget: Aniversariantes */}
            <Card className="border-[#E2E8F0]">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-[#64748B]" />
                  <CardTitle className="text-[14px] font-semibold text-[#1E293B]">
                    Aniversariantes
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center py-2">
                  <div className="h-10 w-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-[14px] font-semibold mx-auto mb-2">
                    BF
                  </div>
                  <p className="text-[14px] font-medium text-[#1E293B]">
                    {aniversarioHoje.nome}
                  </p>
                  <p className="text-[12px] text-[#64748B]">{aniversarioHoje.area}</p>
                  <Badge className="bg-[#FEF3C7] text-[#B45309] text-[10px] px-2 py-0 h-5 mt-2">
                    É hoje
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Micro-widget: Mural */}
            <Card className="border-[#E2E8F0]">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Megaphone size={16} className="text-[#64748B]" />
                  <CardTitle className="text-[14px] font-semibold text-[#1E293B]">
                    Mural
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="rounded-lg border border-dashed border-[#CBD5E1] bg-[#F8FAFC] p-4 text-center mb-3">
                  <p className="text-[14px] text-[#64748B]">Nenhuma novidade ainda</p>
                  <p className="text-[12px] text-[#94A3B8] mt-1">
                    Seja o primeiro a compartilhar algo com o time.
                  </p>
                </div>
                <Button size="sm" className="w-full text-[12px] h-7 bg-[#2563EB] hover:bg-[#1D4ED8]">
                  Compartilhar
                </Button>
              </CardContent>
            </Card>

          </div>

        </div>
      </div>
    </div>
  );
}
