"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Plus,
  ChatCircle,
  Balloon,
  CaretRight,
  WarningDiamond,
  X,
  CaretDown,
  CaretUp,
} from "@phosphor-icons/react";

// Icons do Lucide (SVG inline)
const MegaphoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
    <path d="m3 11 18-5v12L3 14v-3z" />
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
  </svg>
);

const PartyPopperIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5.8 11.3 2 22l10.7-3.79" />
    <path d="M4 3h.01" />
    <path d="M22 8h.01" />
    <path d="M15 2h.01" />
    <path d="M22 20h.01" />
    <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
    <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" />
    <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
    <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);


// Dados reais do CRM - aniversário
const birthdayToday = {
  initials: "BF",
  name: "Benigno Fialho",
  role: "É hoje",
  area: "Engenharia · Diretor",
};

const upcomingBirthdays = [
  {
    initials: "LA",
    name: "Leticia Araujo",
    date: "28 de agosto",
    subDate: "em 4 dias",
    area: "Engenharia · Rh",
  },
];

const passedBirthdays = [
  {
    initials: "SV",
    name: "Sabrina Viana",
    date: "10 de agosto",
    subDate: "há 14 dias",
    area: "Engenharia · Diretor",
  },
  {
    initials: "RA",
    name: "Rayane Albuquerque",
    date: "12 de agosto",
    subDate: "há 12 dias",
    area: "Engenharia · Rh",
  },
  {
    name: "Vinicius",
    date: "15 de agosto",
    subDate: "há 9 dias",
    area: "Engenharia · Desenvolvedor",
  },
  {
    initials: "RS",
    name: "Rodrigo Subtil",
    date: "18 de agosto",
    subDate: "há 6 dias",
    area: "Engenharia · Desenvolvedor",
  },
  {
    initials: "L",
    name: "Luciana",
    date: "20 de agosto",
    subDate: "há 4 dias",
    area: "Engenharia · Financeiro",
  },
];

export function DashboardGrid() {
  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).replace(/^\w/, (c) => c.toUpperCase());

  // Estado para collapse das seções
  const [showPassedBirthdays, setShowPassedBirthdays] = useState(false);
  const [showAllComunicados, setShowAllComunicados] = useState(false);

  // Dados de exemplo - comunicados
  const comunicados = [
    {
      id: 1,
      titulo: "Nova política de viagens corporativas",
      descricao: "Comunicamos que a partir de agora as viagens corporativas precisam ser aprovadas com antecedência mínima de 5 dias úteis.",
      data: "27 ago",
      autor: "RH",
    },
    {
      id: 2,
      titulo: "Manutenção sistemas sábado",
      descricao: "Manutenção programada nos sistemas no próximo sábado das 22h às 02h. Serviços podem ficar indisponíveis.",
      data: "26 ago",
      autor: "TI",
    },
    {
      id: 3,
      titulo: "Feriado Dia do Cliente",
      descricao: "Lembramos que dia 15/09 não haverá atendimento ao público em razão do Dia do Cliente.",
      data: "25 ago",
      autor: "Comercial",
    },
    {
      id: 4,
      titulo: "Treinamento segurança do trabalho",
      descricao: "Novo treinamento obrigatório para todos os colaboradores. Acessem a Universidade Acto.",
      data: "24 ago",
      autor: "RH",
    },
  ];

  const comunicadosExibir = showAllComunicados ? comunicados : comunicados.slice(0, 2);

  // Dados de exemplo - projetos em risco
  const projetosRisco = [
    {
      id: 1,
      nome: "Projeto Alpha",
      cliente: "Empresa X",
      risco: "Alto",
      diasAtraso: 15,
    },
    {
      id: 2,
      nome: "Portal Y",
      cliente: "Empresa Y",
      risco: "Alto",
      diasAtraso: 8,
    },
  ];

  // Dados de exemplo - processos pendentes (versão curta)
  const processItems = [
    {
      title: "Centro de custo",
      desc: "Aprovação para viagens, equipamentos e capacitação.",
      count: 0,
      href: "/backoffice/solicitacoes-centro-custo",
    },
    {
      title: "Recesso",
      desc: "Recessos de prestadores PJ.",
      count: 0,
      href: "/backoffice/solicitacoes-recesso",
    },
    {
      title: "Substituições",
      desc: "Troca de colaboradores em contratos.",
      count: 0,
      href: "/backoffice/substituicoes-colaborador",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h2 className="text-[20px] font-semibold text-[#1E293B]">
          Olá, Admin Sistema
        </h2>
        <p className="text-[14px] text-[#64748B]">
          Resumo adaptado ao seu cargo e à sua rotina de uso.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Main Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Comunicação RH + Seu Dia - Side by Side */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Comunicação RH */}
            <Card className="border-[#E2E8F0]">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <MegaphoneIcon />
                  <CardTitle className="text-[16px] font-semibold text-[#1E293B]">
                    Comunicados
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                {comunicados.length === 0 ? (
                  <div className="rounded-lg border border-dashed border-[#CBD5E1] bg-[#F8FAFC] p-4">
                    <p className="text-[14px] text-[#64748B]">Nenhum comunicado no ar</p>
                    <p className="mt-1 text-[12px] text-[#94A3B8]">
                      Avisos institucionais publicados pelo RH aparecem aqui para toda a equipe.
                    </p>
                    <Link
                      href="/destaques-rh/create"
                      className="inline-flex items-center mt-2 text-[14px] text-[#2563EB] hover:underline font-medium"
                    >
                      <Plus size={14} weight="bold" className="mr-1" />
                      Criar comunicado
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {comunicadosExibir.map((item) => (
                      <div key={item.id} className="rounded-lg border border-[#E2E8F0] p-3 hover:bg-[#F8FAFC] transition-colors">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-[14px] font-medium text-[#1E293B]">{item.titulo}</p>
                          <span className="text-[12px] text-[#94A3B8] whitespace-nowrap">{item.data}</span>
                        </div>
                        <p className="text-[12px] text-[#64748B] mt-1 line-clamp-2">{item.descricao}</p>
                        <p className="text-[11px] text-[#94A3B8] mt-2">Por {item.autor}</p>
                      </div>
                    ))}
                    {comunicados.length > 2 && (
                      <button
                        onClick={() => setShowAllComunicados(!showAllComunicados)}
                        className="text-[14px] text-[#2563EB] hover:underline font-medium w-full text-center py-2"
                      >
                        {showAllComunicados ? "Ver menos" : `Ver todos (${comunicados.length})`}
                      </button>
                    )}
                    <Link
                      href="/destaques-rh"
                      className="inline-flex items-center text-[14px] text-[#2563EB] hover:underline font-medium"
                    >
                      <Plus size={14} weight="bold" className="mr-1" />
                      Criar comunicado
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Seu Dia */}
            <Card className="border-[#E2E8F0]">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <CalendarIcon />
                  <CardTitle className="text-[14px] font-semibold text-[#1E293B]">
                    {today}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <p className="text-[14px] font-medium text-[#1E293B]">Nada pendente por aqui</p>
                  <p className="text-[12px] text-[#94A3B8] mt-1">
                    Você está em dia com aprovações e solicitações.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Aniversariantes */}
          <Card className="border-[#E2E8F0]">
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <PartyPopperIcon />
                <CardTitle className="text-[16px] font-semibold text-[#1E293B]">
                  Aniversariantes de agosto
                </CardTitle>
              </div>
              <span className="text-[24px] font-bold text-[#1E293B]">7</span>
            </CardHeader>
            <CardContent className="pt-0 space-y-4">
              {/* É hoje */}
              <div>
                <p className="mb-3 text-[12px] font-medium text-[#64748B] uppercase">
                  É hoje
                </p>
                <div className="flex items-center gap-3 rounded-lg border border-[#E2E8F0] p-3">
                  <div className="h-10 w-10 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-[14px] font-semibold">
                    {birthdayToday.initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-[14px] font-medium text-[#1E293B]">
                        {birthdayToday.name}
                      </p>
                      <Badge className="bg-[#FEF3C7] text-[#B45309] text-[10px] px-2 py-0 h-5">
                        {birthdayToday.role}
                      </Badge>
                    </div>
                    <p className="text-[12px] text-[#64748B]">{birthdayToday.area}</p>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="outline"
                      size="icon-sm"
                      className="h-8 w-8 border-[#E2E8F0] hover:bg-[#F1F5F9]"
                    >
                      <Balloon size={16} className="text-[#22C55E]" weight="fill" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon-sm"
                      className="h-8 w-8 border-[#E2E8F0] hover:bg-[#F1F5F9]"
                    >
                      <ChatCircle size={16} className="text-[#64748B]" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Próximos 7 dias */}
              <div>
                <p className="mb-3 text-[12px] font-medium text-[#64748B] uppercase">
                  Próximos 7 dias
                </p>
                <div className="space-y-2">
                  {upcomingBirthdays.map((person) => (
                    <div
                      key={`upcoming-${person.name}`}
                      className="flex items-center gap-3 rounded-lg border border-[#E2E8F0] p-3"
                    >
                      <div className="h-10 w-10 rounded-full bg-[#E2E8F0] flex items-center justify-center text-[#64748B] text-[14px] font-semibold">
                        {person.initials}
                      </div>
                      <div className="flex-1">
                        <p className="text-[14px] font-medium text-[#1E293B]">
                          {person.name}
                        </p>
                        <p className="text-[12px] text-[#64748B]">
                          {person.date} · {person.subDate} · {person.area}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <Button
                          variant="outline"
                          size="icon-sm"
                          className="h-8 w-8 border-[#E2E8F0] hover:bg-[#F1F5F9]"
                        >
                          <Balloon size={16} className="text-[#64748B]" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon-sm"
                          className="h-8 w-8 border-[#E2E8F0] hover:bg-[#F1F5F9]"
                        >
                          <ChatCircle size={16} className="text-[#64748B]" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Já passou - com collapse */}
              <div>
                <button
                  onClick={() => setShowPassedBirthdays(!showPassedBirthdays)}
                  className="mb-3 text-[12px] font-medium text-[#64748B] uppercase flex items-center gap-1 hover:text-[#2563EB] transition-colors"
                >
                  {showPassedBirthdays ? <CaretUp size={12} /> : <CaretDown size={12} />}
                  Já passou ({passedBirthdays.length})
                </button>
                {showPassedBirthdays && (
                  <div className="space-y-2">
                    {passedBirthdays.map((person, index) => (
                      <div
                        key={`passed-${index}`}
                        className="flex items-center gap-3 rounded-lg border border-[#E2E8F0] p-3"
                      >
                        {person.name === "Vinicius" ? (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={undefined} alt="Vinicius" />
                            <AvatarFallback className="bg-[#F1F5F9] text-[#64748B] text-[12px]">
                              Vinicius
                            </AvatarFallback>
                          </Avatar>
                        ) : person.name === "Rodrigo Subtil" ? (
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={undefined} alt="Rodrigo" />
                            <AvatarFallback className="bg-[#F1F5F9] text-[#64748B] text-[12px]">
                              RS
                            </AvatarFallback>
                          </Avatar>
                        ) : (
                          <div className="h-10 w-10 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#64748B] text-[14px] font-semibold">
                            {person.initials}
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="text-[14px] font-medium text-[#1E293B]">
                            {person.name}
                          </p>
                          <p className="text-[12px] text-[#64748B]">
                            {person.date} · {person.subDate} · {person.area}
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="outline"
                            size="icon-sm"
                            className="h-8 w-8 border-[#E2E8F0] hover:bg-[#F1F5F9]"
                          >
                            <Balloon size={16} className="text-[#64748B]" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon-sm"
                            className="h-8 w-8 border-[#E2E8F0] hover:bg-[#F1F5F9]"
                          >
                            <ChatCircle size={16} className="text-[#64748B]" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button
                variant="outline"
                className="w-full border-[#E2E8F0] text-[#64748B] hover:bg-[#F1F5F9]"
              >
                Parabenizar todos (7)
              </Button>
            </CardContent>
          </Card>

          {/* Mural de Novidades */}
          <Card className="border-[#E2E8F0]">
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <MegaphoneIcon />
                <CardTitle className="text-[16px] font-semibold text-[#1E293B]">
                  Mural de novidades
                </CardTitle>
              </div>
              <span className="text-[14px] font-medium text-[#64748B]">0</span>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              {/* Input - mais compacto */}
              <div className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5">
                <div className="h-6 w-6 rounded-full bg-[#2563EB] flex items-center justify-center text-white text-[10px] font-semibold shrink-0">
                  AS
                </div>
                <input
                  type="text"
                  placeholder="Compartilhe uma novidade com o time..."
                  className="flex-1 bg-transparent text-[14px] text-[#64748B] placeholder-[#94A3B8] outline-none"
                />
              </div>
              {/* Empty State */}
              <div className="rounded-lg border border-dashed border-[#CBD5E1] bg-[#F8FAFC] p-6 text-center">
                <p className="text-[14px] text-[#64748B]">Nenhuma novidade ainda</p>
                <p className="text-[12px] text-[#94A3B8] mt-1">
                  Seja o primeiro a compartilhar algo com o time.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-6">
          {/* Processos Pendentes */}
          <Card className="border-[#E2E8F0]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-[16px] font-semibold text-[#1E293B]">
                    Processos pendentes
                  </CardTitle>
                  <span className="text-[24px] font-bold text-[#1E293B]">0</span>
                </div>
                <Button variant="ghost" size="sm" className="text-[12px] text-[#64748B] h-6 px-2 hover:bg-[#F1F5F9]">
                  Ocultar
                </Button>
              </div>
              <p className="text-[12px] text-[#64748B]">
                Filas de aprovação aguardando sua ação.
              </p>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              {processItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block rounded-lg border border-[#E2E8F0] p-3 hover:bg-[#F8FAFC] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-[14px] font-medium text-[#1E293B]">
                      {item.title}
                    </p>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F1F5F9] text-[12px] font-bold text-[#64748B]">
                      {item.count}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#64748B] mt-1">{item.desc}</p>
                </Link>
              ))}
              <Link
                href="/processos"
                className="text-[14px] text-[#2563EB] hover:underline inline-flex items-center gap-1 font-medium"
              >
                Ver processos <CaretRight size={14} weight="bold" />
              </Link>
            </CardContent>
          </Card>

          {/* Fila de Notas Fiscais */}
          <Card className="border-[#E2E8F0]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowUpRightIcon />
                  <CardTitle className="text-[16px] font-semibold text-[#1E293B]">
                    Fila de notas fiscais
                  </CardTitle>
                </div>
                <Button variant="ghost" size="sm" className="text-[12px] text-[#64748B] h-6 px-2 hover:bg-[#F1F5F9]">
                  Ocultar
                </Button>
              </div>
              <p className="text-[12px] text-[#64748B]">
                Notas fiscais aguardando análise no financeiro.
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="rounded-lg border border-dashed border-[#CBD5E1] bg-[#F8FAFC] p-6 text-center">
                <p className="text-[32px] font-bold text-[#1E293B]">0</p>
                <p className="text-[12px] text-[#64748B] mt-1">nota(s) aguardando análise</p>
                <Link
                  href="/faturamento/notas-fiscais"
                  className="inline-flex items-center mt-3 text-[14px] text-[#2563EB] hover:underline font-medium"
                >
                  Abrir <CaretRight size={14} weight="bold" className="ml-1" />
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Projetos em Risco */}
          <Card className="border-[#E2E8F0]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowUpRightIcon />
                  <CardTitle className="text-[16px] font-semibold text-[#1E293B]">
                    Projetos em risco
                  </CardTitle>
                </div>
                <Button variant="ghost" size="sm" className="text-[12px] text-[#64748B] h-6 px-2 hover:bg-[#F1F5F9]">
                  Ocultar
                </Button>
              </div>
              <p className="text-[12px] text-[#64748B]">
                Projetos com score de risco elevado.
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              {projetosRisco.length === 0 ? (
                <div className="rounded-lg border border-[#E2E8F0] bg-[#F8FAFC] p-6 text-center">
                  <WarningDiamond
                    size={32}
                    className="mx-auto text-[#22C55E]"
                    weight="fill"
                  />
                  <p className="text-[32px] font-bold text-[#1E293B] mt-2">0</p>
                  <p className="text-[12px] text-[#64748B] mt-1">
                    Nenhum projeto em risco
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  {projetosRisco.map((projeto) => (
                    <Link
                      key={projeto.id}
                      href="/projetos"
                      className="block rounded-lg border border-[#FECACA] bg-[#FEF2F2] p-3 hover:bg-[#FEE2E2] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[14px] font-medium text-[#1E293B]">{projeto.nome}</p>
                          <p className="text-[12px] text-[#64748B]">{projeto.cliente}</p>
                        </div>
                        <div className="text-right">
                          <Badge className="bg-[#FEE2E2] text-[#DC2626] text-[10px]">{projeto.risco}</Badge>
                          <p className="text-[11px] text-[#DC2626] mt-1">{projeto.diasAtraso} dias</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

    </div>
  );
}
