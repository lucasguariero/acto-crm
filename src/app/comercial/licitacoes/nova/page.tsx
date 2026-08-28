"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Plus,
  Trash,
  FileText,
  Building,
  CurrencyDollar,
  CalendarBlank,
  Globe,
} from "@phosphor-icons/react";

const etapas = [
  { id: 1, titulo: "Identificação", descricao: "Dados básicos da licitação" },
  { id: 2, titulo: "Órgão", descricao: "Informações do órgão público" },
  { id: 3, titulo: "Valores", descricao: "Valor e condições" },
  { id: 4, titulo: "Revisão", descricao: "Confirme os dados" },
];

const modalidades = [
  { id: "pregao-eletronico", nome: "Pregão Eletrônico" },
  { id: "pregao-presencial", nome: "Pregão Presencial" },
  { id: "tomada-precos", nome: "Tomada de Preços" },
  { id: "concorrencia", nome: "Concorrência" },
  { id: "convite", nome: "Convite" },
  { id: "dispensa", nome: "Dispensa" },
  { id: "inexigibilidade", nome: "Inexigibilidade" },
];

const statusOptions = [
  { id: "analise", nome: "Em Análise" },
  { id: "pesquisa", nome: "Em Pesquisa" },
  { id: "preparando", nome: "Preparando Documentação" },
  { id: "participando", nome: "Participando" },
  { id: "encerrada", nome: "Encerrada" },
];

export default function NovaLicitacaoPage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [etapaAtual, setEtapaAtual] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formData, setFormData] = useState({
    numero: "",
    objeto: "",
    orgao: "",
    municipio: "",
    uf: "",
    site: "",
    modalidade: "",
    numeroProcesso: "",
    dataPublicacao: "",
    dataAbertura: "",
    horaAbertura: "",
    valorEstimado: "",
    valorProposta: "",
    status: "analise",
    observacoes: "",
    segmento: "",
  });

  const handleNext = () => {
    if (etapaAtual < 4) {
      setEtapaAtual(etapaAtual + 1);
    }
  };

  const handleBack = () => {
    if (etapaAtual > 1) {
      setEtapaAtual(etapaAtual - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Dados da licitação:", formData);
    router.push("/comercial/licitacoes");
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const estados = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"
  ];

  const renderEtapa = () => {
    switch (etapaAtual) {
      case 1:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText size={20} />
                  Identificação da Licitação
                </CardTitle>
                <CardDescription>Informe os dados básicos da licitação</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Número da Licitação
                    </label>
                    <Input
                      value={formData.numero}
                      onChange={(e) =>
                        setFormData({ ...formData, numero: e.target.value })
                      }
                      placeholder="Ex: 2024/001"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Modalidade
                    </label>
                    <Select
                      value={formData.modalidade}
                      onValueChange={(value) =>
                        setFormData({ ...formData, modalidade: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {modalidades.map((mod) => (
                          <SelectItem key={mod.id} value={mod.id}>
                            {mod.nome}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Objeto
                  </label>
                  <textarea
                    className="w-full min-h-[100px] rounded-lg border border-input bg-transparent px-3 py-2 text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    value={formData.objeto}
                    onChange={(e) =>
                      setFormData({ ...formData, objeto: e.target.value })
                    }
                    placeholder="Descreva o objeto da licitação..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Número do Processo
                    </label>
                    <Input
                      value={formData.numeroProcesso}
                      onChange={(e) =>
                        setFormData({ ...formData, numeroProcesso: e.target.value })
                      }
                      placeholder="Ex: 01234.56789/2024"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Status Inicial
                    </label>
                    <Select
                      value={formData.status}
                      onValueChange={(value) =>
                        setFormData({ ...formData, status: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {statusOptions.map((s) => (
                          <SelectItem key={s.id} value={s.id}>
                            {s.nome}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building size={20} />
                  Órgão Público
                </CardTitle>
                <CardDescription>Informações sobre o órgão responsável</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Nome do Órgão
                  </label>
                  <Input
                    value={formData.orgao}
                    onChange={(e) =>
                      setFormData({ ...formData, orgao: e.target.value })
                    }
                    placeholder="Ex: Prefeitura Municipal de São Paulo"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Município
                    </label>
                    <Input
                      value={formData.municipio}
                      onChange={(e) =>
                        setFormData({ ...formData, municipio: e.target.value })
                      }
                      placeholder="Ex: São Paulo"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Estado (UF)
                    </label>
                    <Select
                      value={formData.uf}
                      onValueChange={(value) =>
                        setFormData({ ...formData, uf: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        {estados.map((uf) => (
                          <SelectItem key={uf} value={uf}>
                            {uf}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Site/Portal
                  </label>
                  <Input
                    value={formData.site}
                    onChange={(e) =>
                      setFormData({ ...formData, site: e.target.value })
                    }
                    placeholder="Ex: comprasnet.gov.br"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CurrencyDollar size={20} />
                  Valores e Prazos
                </CardTitle>
                <CardDescription>Defina o valor estimado e datas importantes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Valor Estimado (R$)
                    </label>
                    <Input
                      type="number"
                      value={formData.valorEstimado}
                      onChange={(e) =>
                        setFormData({ ...formData, valorEstimado: e.target.value })
                      }
                      placeholder="0,00"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Valor da Proposta (R$)
                    </label>
                    <Input
                      type="number"
                      value={formData.valorProposta}
                      onChange={(e) =>
                        setFormData({ ...formData, valorProposta: e.target.value })
                      }
                      placeholder="0,00"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Data de Publicação
                    </label>
                    <Input
                      type="date"
                      value={formData.dataPublicacao}
                      onChange={(e) =>
                        setFormData({ ...formData, dataPublicacao: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Data de Abertura
                    </label>
                    <Input
                      type="date"
                      value={formData.dataAbertura}
                      onChange={(e) =>
                        setFormData({ ...formData, dataAbertura: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Hora de Abertura
                  </label>
                  <Input
                    type="time"
                    value={formData.horaAbertura}
                    onChange={(e) =>
                      setFormData({ ...formData, horaAbertura: e.target.value })
                    }
                    placeholder="HH:MM"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Segmento/Área
                  </label>
                  <Select
                    value={formData.segmento}
                    onValueChange={(value) =>
                      setFormData({ ...formData, segmento: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o segmento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ti">Tecnologia da Informação</SelectItem>
                      <SelectItem value="construcao">Construção Civil</SelectItem>
                      <SelectItem value="servicos">Serviços Gerais</SelectItem>
                      <SelectItem value="saude">Saúde</SelectItem>
                      <SelectItem value="educacao">Educação</SelectItem>
                      <SelectItem value="outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Check size={20} />
                  Revisão dos Dados
                </CardTitle>
                <CardDescription>
                  Revise todas as informações antes de salvar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase">Número</p>
                    <p className="font-medium">{formData.numero || "-"}</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase">Modalidade</p>
                    <p className="font-medium">
                      {modalidades.find((m) => m.id === formData.modalidade)?.nome || "-"}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase">Objeto</p>
                  <p className="font-medium">{formData.objeto || "-"}</p>
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs text-blue-600 uppercase">Órgão</p>
                  <p className="font-medium">{formData.orgao || "-"}</p>
                  <p className="text-sm text-blue-600">
                    {formData.municipio} - {formData.uf}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase">Valor Estimado</p>
                    <p className="font-medium text-lg">
                      {formData.valorEstimado
                        ? formatCurrency(parseFloat(formData.valorEstimado))
                        : "-"}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase">Data de Abertura</p>
                    <p className="font-medium">
                      {formData.dataAbertura
                        ? new Date(formData.dataAbertura).toLocaleDateString("pt-BR")
                        : "-"}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Observações
                  </label>
                  <textarea
                    className="w-full min-h-[80px] rounded-lg border border-input bg-transparent px-3 py-2 text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    value={formData.observacoes}
                    onChange={(e) =>
                      setFormData({ ...formData, observacoes: e.target.value })
                    }
                    placeholder="Adicione observações relevantes..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        );

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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
            <span>/</span>
            <Link href="/comercial" className="hover:text-gray-700">Comercial</Link>
            <span>/</span>
            <Link href="/comercial/licitacoes" className="hover:text-gray-700">Licitações</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Nova Licitação</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Nova Licitação
              </h1>
              <p className="text-gray-500 mt-1">
                Cadastre uma nova oportunidade de licitação
              </p>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
              {etapas.map((etapa, index) => (
                <div key={etapa.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        etapaAtual > etapa.id
                          ? "bg-green-500 text-white"
                          : etapaAtual === etapa.id
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {etapaAtual > etapa.id ? <Check size={20} /> : etapa.id}
                    </div>
                    <span
                      className={`text-xs mt-2 ${
                        etapaAtual >= etapa.id
                          ? "text-gray-900 font-medium"
                          : "text-gray-500"
                      }`}
                    >
                      {etapa.titulo}
                    </span>
                  </div>
                  {index < etapas.length - 1 && (
                    <div
                      className={`w-16 h-0.5 mx-2 ${
                        etapaAtual > etapa.id ? "bg-green-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="max-w-3xl mx-auto">{renderEtapa()}</div>

          {/* Navigation Buttons */}
          <div className="flex justify-between max-w-3xl mx-auto mt-6">
            <Button
              variant="outline"
              onClick={handleBack}
              disabled={etapaAtual === 1}
            >
              <ArrowLeft size={18} className="mr-2" />
              Voltar
            </Button>

            {etapaAtual < 4 ? (
              <Button onClick={handleNext}>
                Próximo
                <ArrowRight size={18} className="ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
                <Check size={18} className="mr-2" />
                Criar Licitação
              </Button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

