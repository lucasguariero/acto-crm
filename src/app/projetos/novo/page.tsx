"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  FolderSimple,
  User,
  CalendarBlank,
  CurrencyDollar,
  ChartLine,
  CaretRight,
} from "@phosphor-icons/react";

type Etapa = 1 | 2 | 3 | 4;

const etapas = [
  { numero: 1, titulo: "Informações Gerais", icon: FolderSimple },
  { numero: 2, titulo: "Equipe", icon: User },
  { numero: 3, titulo: "Cronograma", icon: CalendarBlank },
  { numero: 4, titulo: "Orçamento", icon: CurrencyDollar },
];

const clientes = [
  { id: "1", nome: "ACTO Soluções" },
  { id: "2", nome: "PW Labs" },
  { id: "3", nome: "Logística Express" },
  { id: "4", nome: "TechCorp" },
  { id: "5", nome: "Data Insights" },
];

const responsaveis = [
  { id: "1", nome: "Maria Silva" },
  { id: "2", nome: "João Santos" },
  { id: "3", nome: "Ana Costa" },
  { id: "4", nome: "Pedro Lima" },
  { id: "5", nome: "Carla Oliveira" },
];

const areas = [
  { id: "1", nome: "Desenvolvimento" },
  { id: "2", nome: "Design" },
  { id: "3", nome: " Infraestrutura" },
  { id: "4", nome: "Consultoria" },
  { id: "5", nome: "Suporte" },
];

export default function NovoProjetoPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [etapaAtual, setEtapaAtual] = useState<Etapa>(1);

  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    cliente: "",
    area: "",
    responsavel: "",
    metodologia: "",
    inicio: "",
    prazo: "",
    horasEstimadas: "",
    orcamentoTotal: "",
    orcamentoHoras: "",
    risco: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const proximaEtapa = () => {
    if (etapaAtual < 4) {
      setEtapaAtual((etapaAtual + 1) as Etapa);
    }
  };

  const etapaAnterior = () => {
    if (etapaAtual > 1) {
      setEtapaAtual((etapaAtual - 1) as Etapa);
    }
  };

  const renderEtapa1 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-[18px] font-semibold text-[#1E293B]">Informações Gerais do Projeto</h3>
        <p className="text-[14px] text-[#64748B] mt-1">
          Defina as informações básicas do projeto
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#374151]">
            Nome do Projeto <span className="text-[#DC2626]">*</span>
          </label>
          <Input
            placeholder="Ex: Modernização ERP"
            value={formData.nome}
            onChange={(e) => handleInputChange("nome", e.target.value)}
            className="h-10 border-[#E2E8F0]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#374151]">
            Cliente <span className="text-[#DC2626]">*</span>
          </label>
          <Select value={formData.cliente} onValueChange={(value) => handleInputChange("cliente", value)}>
            <SelectTrigger className="h-10 border-[#E2E8F0]">
              <SelectValue placeholder="Selecione o cliente" />
            </SelectTrigger>
            <SelectContent>
              {clientes.map((cliente) => (
                <SelectItem key={cliente.id} value={cliente.id}>
                  {cliente.nome}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#374151]">
            Área Responsável <span className="text-[#DC2626]">*</span>
          </label>
          <Select value={formData.area} onValueChange={(value) => handleInputChange("area", value)}>
            <SelectTrigger className="h-10 border-[#E2E8F0]">
              <SelectValue placeholder="Selecione a área" />
            </SelectTrigger>
            <SelectContent>
              {areas.map((area) => (
                <SelectItem key={area.id} value={area.id}>
                  {area.nome}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#374151]">
            Responsável Técnico <span className="text-[#DC2626]">*</span>
          </label>
          <Select value={formData.responsavel} onValueChange={(value) => handleInputChange("responsavel", value)}>
            <SelectTrigger className="h-10 border-[#E2E8F0]">
              <SelectValue placeholder="Selecione o responsável" />
            </SelectTrigger>
            <SelectContent>
              {responsaveis.map((resp) => (
                <SelectItem key={resp.id} value={resp.id}>
                  {resp.nome}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#374151]">
            Metodologia
          </label>
          <Select value={formData.metodologia} onValueChange={(value) => handleInputChange("metodologia", value)}>
            <SelectTrigger className="h-10 border-[#E2E8F0]">
              <SelectValue placeholder="Selecione a metodologia" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="scrum">Scrum</SelectItem>
              <SelectItem value="kanban">Kanban</SelectItem>
              <SelectItem value="waterfall">Waterfall</SelectItem>
              <SelectItem value="hybrid">Híbrido</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#374151]">
            Nível de Risco
          </label>
          <Select value={formData.risco} onValueChange={(value) => handleInputChange("risco", value)}>
            <SelectTrigger className="h-10 border-[#E2E8F0]">
              <SelectValue placeholder="Selecione o risco" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="baixo">Baixo</SelectItem>
              <SelectItem value="medio">Médio</SelectItem>
              <SelectItem value="alto">Alto</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[14px] font-medium text-[#374151]">
          Descrição do Projeto
        </label>
        <textarea
          placeholder="Descreva os objetivos e escopo do projeto..."
          value={formData.descricao}
          onChange={(e) => handleInputChange("descricao", e.target.value)}
          className="min-h-[120px] w-full rounded-lg border border-[#E2E8F0] px-3 py-2 text-sm outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
        />
      </div>
    </div>
  );

  const renderEtapa2 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-[18px] font-semibold text-[#1E293B]">Equipe do Projeto</h3>
        <p className="text-[14px] text-[#64748B] mt-1">
          Defina os membros da equipe e suas funções
        </p>
      </div>

      <Card className="border-[#E2E8F0]">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-[14px] font-semibold text-[#1E293B]">
              Membros da Equipe
            </CardTitle>
            <Button variant="outline" size="sm" className="h-8 border-[#E2E8F0]">
              <User size={16} className="mr-1" />
              Adicionar Membro
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { nome: "Maria Silva", funcao: "Gerente de Projetos", papel: "PO" },
              { nome: "João Santos", funcao: "Desenvolvedor Full Stack", papel: "Dev" },
              { nome: "Ana Costa", funcao: "Designer UI/UX", papel: "Design" },
            ].map((membro, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border border-[#E2E8F0] bg-[#F8FAFC]"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-sm font-semibold">
                    {membro.nome.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[#1E293B]">{membro.nome}</p>
                    <p className="text-[12px] text-[#64748B]">{membro.funcao}</p>
                  </div>
                </div>
                <Badge className="bg-[#DBEAFE] text-[#1D4ED8]">{membro.papel}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderEtapa3 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-[18px] font-semibold text-[#1E293B]">Cronograma</h3>
        <p className="text-[14px] text-[#64748B] mt-1">
          Defina as datas de início e término do projeto
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#374151]">
            Data de Início <span className="text-[#DC2626]">*</span>
          </label>
          <Input
            type="date"
            value={formData.inicio}
            onChange={(e) => handleInputChange("inicio", e.target.value)}
            className="h-10 border-[#E2E8F0]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#374151]">
            Prazo Final <span className="text-[#DC2626]">*</span>
          </label>
          <Input
            type="date"
            value={formData.prazo}
            onChange={(e) => handleInputChange("prazo", e.target.value)}
            className="h-10 border-[#E2E8F0]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#374151]">
            Horas Estimadas
          </label>
          <Input
            type="number"
            placeholder="Ex: 480"
            value={formData.horasEstimadas}
            onChange={(e) => handleInputChange("horasEstimadas", e.target.value)}
            className="h-10 border-[#E2E8F0]"
          />
        </div>
      </div>

      <Card className="border-[#E2E8F0]">
        <CardHeader className="pb-3">
          <CardTitle className="text-[14px] font-semibold text-[#1E293B]">
            Marcos do Projeto
          </CardTitle>
          <CardDescription className="text-[12px]">
            Adicione os principais marcos e entregas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { marco: "Kickoff", data: "15/01/2024", status: "concluido" },
              { marco: "Entrega MVP", data: "15/03/2024", status: "pendente" },
              { marco: "UAT", data: "15/05/2024", status: "pendente" },
              { marco: "Go Live", data: "30/06/2024", status: "pendente" },
            ].map((marco, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border border-[#E2E8F0]"
              >
                <div className="flex items-center gap-3">
                  <div className={`h-2 w-2 rounded-full ${marco.status === "concluido" ? "bg-[#22C55E]" : "bg-[#E2E8F0]"}`} />
                  <span className="text-[14px] text-[#1E293B]">{marco.marco}</span>
                </div>
                <span className="text-[12px] text-[#64748B]">{marco.data}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderEtapa4 = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-[18px] font-semibold text-[#1E293B]">Orçamento</h3>
        <p className="text-[14px] text-[#64748B] mt-1">
          Defina o orçamento e recursos financeiros
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#374151]">
            Orçamento Total <span className="text-[#DC2626]">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]">R$</span>
            <Input
              type="number"
              placeholder="0,00"
              value={formData.orcamentoTotal}
              onChange={(e) => handleInputChange("orcamentoTotal", e.target.value)}
              className="h-10 pl-12 border-[#E2E8F0]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[14px] font-medium text-[#374151]">
            Valor/Hora
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]">R$</span>
            <Input
              type="number"
              placeholder="0,00"
              value={formData.orcamentoHoras}
              onChange={(e) => handleInputChange("orcamentoHoras", e.target.value)}
              className="h-10 pl-12 border-[#E2E8F0]"
            />
          </div>
        </div>
      </div>

      <Card className="border-[#E2E8F0]">
        <CardHeader className="pb-3">
          <CardTitle className="text-[14px] font-semibold text-[#1E293B]">
            Distribuição de Custos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg border border-[#E2E8F0]">
              <div>
                <p className="text-[14px] font-medium text-[#1E293B]">Mão de Obra</p>
                <p className="text-[12px] text-[#64748B]">Horas de equipe</p>
              </div>
              <span className="text-[14px] font-semibold text-[#1E293B]">R$ 85.000</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-[#E2E8F0]">
              <div>
                <p className="text-[14px] font-medium text-[#1E293B]">Infraestrutura</p>
                <p className="text-[12px] text-[#64748B]">Servidores, licenças</p>
              </div>
              <span className="text-[14px] font-semibold text-[#1E293B]">R$ 25.000</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg border border-[#E2E8F0]">
              <div>
                <p className="text-[14px] font-medium text-[#1E293B]">Outros</p>
                <p className="text-[12px] text-[#64748B]">Diversos</p>
              </div>
              <span className="text-[14px] font-semibold text-[#1E293B]">R$ 15.000</span>
            </div>
            <Separator />
            <div className="flex items-center justify-between p-3 rounded-lg bg-[#F8FAFC]">
              <p className="text-[14px] font-semibold text-[#1E293B]">Total</p>
              <span className="text-[18px] font-bold text-[#2563EB]">R$ 125.000</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderConteudo = () => {
    switch (etapaAtual) {
      case 1:
        return renderEtapa1();
      case 2:
        return renderEtapa2();
      case 3:
        return renderEtapa3();
      case 4:
        return renderEtapa4();
      default:
        return null;
    }
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
          <div className="space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1 text-sm">
              <Link href="/dashboard" className="text-[#64748B] hover:text-[#1E293B]">
                Início
              </Link>
              <CaretRight size={14} className="text-[#94A3B8]" />
              <Link href="/projetos" className="text-[#64748B] hover:text-[#1E293B]">
                Projetos
              </Link>
              <CaretRight size={14} className="text-[#94A3B8]" />
              <span className="text-[#1E293B] font-medium">Novo Projeto</span>
            </nav>

            {/* Título */}
            <div>
              <h1 className="text-[24px] font-bold text-[#1E293B]">Novo Projeto</h1>
              <p className="text-[14px] text-[#64748B] mt-1">
                Crie um novo projeto seguindo o wizard de configuração
              </p>
            </div>

            {/* Wizard */}
            <Card className="border-[#E2E8F0]">
              <CardContent className="p-6">
                {/* Passos do Wizard */}
                <div className="flex items-center justify-between mb-8">
                  {etapas.map((etapa, index) => {
                    const Icon = etapa.icon;
                    const isActive = etapa.numero === etapaAtual;
                    const isCompleted = etapa.numero < etapaAtual;

                    return (
                      <div key={etapa.numero} className="flex items-center">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                              isCompleted
                                ? "bg-[#22C55E] text-white"
                                : isActive
                                ? "bg-[#2563EB] text-white"
                                : "bg-[#E2E8F0] text-[#64748B]"
                            }`}
                          >
                            {isCompleted ? (
                              <Check size={20} weight="bold" />
                            ) : (
                              <Icon size={20} />
                            )}
                          </div>
                          <span
                            className={`text-[12px] mt-2 ${
                              isActive ? "text-[#2563EB] font-medium" : "text-[#64748B]"
                            }`}
                          >
                            {etapa.titulo}
                          </span>
                        </div>
                        {index < etapas.length - 1 && (
                          <div
                            className={`w-[80px] h-0.5 mx-2 ${
                              isCompleted ? "bg-[#22C55E]" : "bg-[#E2E8F0]"
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Conteúdo da Etapa */}
                <div className="min-h-[400px]">{renderConteudo()}</div>

                {/* Botões de Navegação */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E2E8F0]">
                  <Button
                    variant="outline"
                    onClick={etapaAnterior}
                    disabled={etapaAtual === 1}
                    className="border-[#E2E8F0]"
                  >
                    <ArrowLeft size={18} className="mr-1" />
                    Anterior
                  </Button>
                  <div className="text-[12px] text-[#64748B]">
                    Etapa {etapaAtual} de {etapas.length}
                  </div>
                  {etapaAtual < 4 ? (
                    <Button
                      onClick={proximaEtapa}
                      className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
                    >
                      Próximo
                      <ArrowRight size={18} className="ml-1" />
                    </Button>
                  ) : (
                    <Button
                      className="bg-[#22C55E] hover:bg-[#16A34A] text-white"
                    >
                      <Check size={18} className="mr-1" />
                      Criar Projeto
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

