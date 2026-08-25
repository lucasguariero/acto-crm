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
  User,
  Building,
  CurrencyDollar,
  CalendarBlank,
  Check,
  ArrowLeft,
  ArrowRight,
  Plus,
  Trash,
} from "@phosphor-icons/react";

const etapas = [
  { id: 1, titulo: "Cliente", descricao: "Informações do cliente" },
  { id: 2, titulo: "Oportunidade", descricao: "Detalhes da venda" },
  { id: 3, titulo: "Proposta", descricao: "Valores e condições" },
  { id: 4, titulo: "Revisão", descricao: "Confirme os dados" },
];

const clientes = [
  { id: "1", nome: "TechCorp Brasil", segmento: "Tecnologia" },
  { id: "2", nome: "Hospital SaúdePlus", segmento: "Saúde" },
  { id: "3", nome: "FastFood Restaurantes", segmento: "Alimentação" },
  { id: "4", nome: "BankData Serviços", segmento: "Financeiro" },
  { id: "5", nome: "ShopApp E-commerce", segmento: "Varejo" },
];

const responsaveis = [
  { id: "1", nome: "João Silva" },
  { id: "2", nome: "Maria Santos" },
  { id: "3", nome: "Pedro Oliveira" },
  { id: "4", nome: "Ana Costa" },
];

const produtos = [
  { id: "1", nome: "ERP Enterprise", preco: 80000 },
  { id: "2", nome: "ERP Professional", preco: 45000 },
  { id: "3", nome: "Suporte Premium", preco: 12000 },
  { id: "4", nome: "Consultoria", preco: 500 },
  { id: "5", nome: "Treinamento", preco: 8000 },
];

export default function NovaOportunidadePage() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [etapaAtual, setEtapaAtual] = useState(1);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<{ id: string; nome: string; preco: number } | null>(null);
  const [quantidade, setQuantidade] = useState(1);

  const [formData, setFormData] = useState({
    clienteId: "",
    nome: "",
    descricao: "",
    responsavelId: "",
    dataFechamento: "",
    probabilidade: 30,
    produtosSelecionados: [] as { id: string; nome: string; preco: number; quantidade: number }[],
    desconto: 0,
    observacoes: "",
  });

  const totalprodutos = formData.produtosSelecionados.reduce(
    (acc, prod) => acc + prod.preco * prod.quantidade,
    0
  );
  const descontoValor = totalprodutos * (formData.desconto / 100);
  const valorTotal = totalprodutos - descontoValor;

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

  const handleAddProduto = () => {
    if (produtoSelecionado) {
      const existente = formData.produtosSelecionados.find(
        (p) => p.id === produtoSelecionado.id
      );
      if (existente) {
        setFormData({
          ...formData,
          produtosSelecionados: formData.produtosSelecionados.map((p) =>
            p.id === produtoSelecionado.id
              ? { ...p, quantidade: p.quantidade + quantidade }
              : p
          ),
        });
      } else {
        setFormData({
          ...formData,
          produtosSelecionados: [
            ...formData.produtosSelecionados,
            { ...produtoSelecionado, quantidade },
          ],
        });
      }
      setIsDialogOpen(false);
      setProdutoSelecionado(null);
      setQuantidade(1);
    }
  };

  const handleRemoveProduto = (id: string) => {
    setFormData({
      ...formData,
      produtosSelecionados: formData.produtosSelecionados.filter((p) => p.id !== id),
    });
  };

  const handleSubmit = () => {
    console.log("Dados da oportunidade:", formData);
    router.push("/comercial/crm");
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const renderEtapa = () => {
    switch (etapaAtual) {
      case 1:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building size={20} />
                  Dados do Cliente
                </CardTitle>
                <CardDescription>Selecione ou cadastre um novo cliente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Cliente
                  </label>
                  <Select
                    value={formData.clienteId}
                    onValueChange={(value) => {
                      setFormData({ ...formData, clienteId: value });
                      const cliente = clientes.find((c) => c.id === value);
                      if (cliente && !formData.nome) {
                        setFormData({
                          ...formData,
                          clienteId: value,
                          nome: `Proposta - ${cliente.nome}`,
                        });
                      }
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um cliente" />
                    </SelectTrigger>
                    <SelectContent>
                      {clientes.map((cliente) => (
                        <SelectItem key={cliente.id} value={cliente.id}>
                          {cliente.nome} - {cliente.segmento}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {formData.clienteId && (
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm font-medium text-blue-900">
                      Cliente selecionado:{" "}
                      {clientes.find((c) => c.id === formData.clienteId)?.nome}
                    </p>
                  </div>
                )}
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
                  <User size={20} />
                  Detalhes da Oportunidade
                </CardTitle>
                <CardDescription>Informações sobre a oportunidade de venda</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Nome da Oportunidade
                  </label>
                  <Input
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    placeholder="Ex: Implementação ERP - Empresa X"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Descrição
                  </label>
                  <textarea
                    className="w-full min-h-[100px] rounded-lg border border-input bg-transparent px-3 py-2 text-sm focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    value={formData.descricao}
                    onChange={(e) =>
                      setFormData({ ...formData, descricao: e.target.value })
                    }
                    placeholder="Descreva os detalhes da oportunidade..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Responsável
                    </label>
                    <Select
                      value={formData.responsavelId}
                      onValueChange={(value) =>
                        setFormData({ ...formData, responsavelId: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione" />
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

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Previsão de Fechamento
                    </label>
                    <Input
                      type="date"
                      value={formData.dataFechamento}
                      onChange={(e) =>
                        setFormData({ ...formData, dataFechamento: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Probabilidade de Fechamento: {formData.probabilidade}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    step="5"
                    value={formData.probabilidade}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        probabilidade: parseInt(e.target.value),
                      })
                    }
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
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
                  Produtos e Valores
                </CardTitle>
                <CardDescription>
                  Adicione os produtos/serviços desta oportunidade
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-end">
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline">
                        <Plus size={18} className="mr-2" />
                        Adicionar Produto
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Adicionar Produto</DialogTitle>
                        <DialogDescription>
                          Selecione um produto e informe a quantidade
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Produto
                          </label>
                          <Select
                            value={produtoSelecionado?.id || ""}
                            onValueChange={(value) => {
                              const prod = produtos.find((p) => p.id === value);
                              setProdutoSelecionado(prod || null);
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um produto" />
                            </SelectTrigger>
                            <SelectContent>
                              {produtos.map((prod) => (
                                <SelectItem key={prod.id} value={prod.id}>
                                  {prod.nome} - {formatCurrency(prod.preco)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-700 mb-2 block">
                            Quantidade
                          </label>
                          <Input
                            type="number"
                            min="1"
                            value={quantidade}
                            onChange={(e) =>
                              setQuantidade(parseInt(e.target.value) || 1)
                            }
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                          Cancelar
                        </Button>
                        <Button onClick={handleAddProduto} disabled={!produtoSelecionado}>
                          Adicionar
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                {formData.produtosSelecionados.length > 0 ? (
                  <div className="border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="text-left px-4 py-2 text-sm font-medium text-gray-600">
                            Produto
                          </th>
                          <th className="text-center px-4 py-2 text-sm font-medium text-gray-600">
                            Qtd
                          </th>
                          <th className="text-right px-4 py-2 text-sm font-medium text-gray-600">
                            Preço Unit.
                          </th>
                          <th className="text-right px-4 py-2 text-sm font-medium text-gray-600">
                            Total
                          </th>
                          <th className="w-10"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.produtosSelecionados.map((prod) => (
                          <tr key={prod.id} className="border-t">
                            <td className="px-4 py-2">{prod.nome}</td>
                            <td className="px-4 py-2 text-center">{prod.quantidade}</td>
                            <td className="px-4 py-2 text-right">
                              {formatCurrency(prod.preco)}
                            </td>
                            <td className="px-4 py-2 text-right font-medium">
                              {formatCurrency(prod.preco * prod.quantidade)}
                            </td>
                            <td className="px-4 py-2">
                              <Button
                                variant="ghost"
                                size="icon-xs"
                                onClick={() => handleRemoveProduto(prod.id)}
                              >
                                <Trash size={16} className="text-red-500" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot className="bg-gray-50 border-t">
                        <tr>
                          <td colSpan={3} className="px-4 py-2 text-right font-medium">
                            Subtotal:
                          </td>
                          <td className="px-4 py-2 text-right font-semibold">
                            {formatCurrency(totalprodutos)}
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td colSpan={3} className="px-4 py-2 text-right">
                            Desconto (%):
                          </td>
                          <td className="px-4 py-2 text-right">
                            <Input
                              type="number"
                              min="0"
                              max="100"
                              className="w-20 h-8 text-right"
                              value={formData.desconto}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  desconto: parseFloat(e.target.value) || 0,
                                })
                              }
                            />
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td colSpan={3} className="px-4 py-2 text-right font-semibold">
                            Total:
                          </td>
                          <td className="px-4 py-2 text-right font-bold text-green-600 text-lg">
                            {formatCurrency(valorTotal)}
                          </td>
                          <td></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <p>Nenhum produto adicionado ainda.</p>
                    <p className="text-sm">Clique em "Adicionar Produto" para começar.</p>
                  </div>
                )}
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
                    <p className="text-xs text-gray-500 uppercase">Cliente</p>
                    <p className="font-medium">
                      {clientes.find((c) => c.id === formData.clienteId)?.nome || "-"}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase">Responsável</p>
                    <p className="font-medium">
                      {responsaveis.find((r) => r.id === formData.responsavelId)?.nome ||
                        "-"}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase">Nome da Oportunidade</p>
                  <p className="font-medium">{formData.nome || "-"}</p>
                </div>

                {formData.descricao && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase">Descrição</p>
                    <p className="font-medium">{formData.descricao}</p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase">Previsão de Fechamento</p>
                    <p className="font-medium">
                      {formData.dataFechamento
                        ? new Date(formData.dataFechamento).toLocaleDateString("pt-BR")
                        : "-"}
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-500 uppercase">Probabilidade</p>
                    <p className="font-medium">{formData.probabilidade}%</p>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-sm font-semibold text-green-800 mb-2">
                    Valor Total da Oportunidade
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    {formatCurrency(valorTotal)}
                  </p>
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
    <div className="min-h-screen bg-[#F1F5F9]">
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
            <Link href="/comercial/crm" className="hover:text-gray-700">CRM</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Nova Oportunidade</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Nova Oportunidade
              </h1>
              <p className="text-gray-500 mt-1">
                Preencha os dados para criar uma nova oportunidade
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
                Criar Oportunidade
              </Button>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
