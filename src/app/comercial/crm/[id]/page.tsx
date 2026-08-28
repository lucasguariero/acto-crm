"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  Pencil,
  Trash,
  User,
  Building,
  CurrencyDollar,
  CalendarBlank,
  Clock,
  CheckCircle,
  XCircle,
  Plus,
  DotsThree,
  Envelope,
  Phone,
  FileText,
} from "@phosphor-icons/react";

// Dados de exemplo para a oportunidade
const oportunidade = {
  id: "1",
  nome: "Implementação ERP - TechCorp",
  cliente: "TechCorp Brasil",
  segmento: "Tecnologia",
  valor: 150000,
  etapa: "proposta",
  probabilidade: 60,
  responsavel: "João Silva",
  dataFechamento: "2024-03-15",
  dataCriacao: "2024-01-15",
  descricao: "Implementação de sistema ERP completo para gestão empresarial, incluindo módulos de financeiro, estoque, compras e vendas.",
  produtos: [
    { id: "1", nome: "ERP Enterprise", quantidade: 1, preco: 80000 },
    { id: "3", nome: "Suporte Premium (1 ano)", quantidade: 1, preco: 12000 },
    { id: "5", nome: "Treinamento (20h)", quantidade: 1, preco: 8000 },
  ],
  historico: [
    { id: "1", data: "2024-01-15", acao: "Oportunidade criada", usuario: "João Silva" },
    { id: "2", data: "2024-01-20", acao: "Alterada etapa para Qualificação", usuario: "João Silva" },
    { id: "3", data: "2024-02-01", acao: "Adicionado produto ERP Enterprise", usuario: "João Silva" },
    { id: "4", data: "2024-02-10", acao: "Alterada etapa para Proposta", usuario: "João Silva" },
    { id: "5", data: "2024-02-15", acao: "Enviada proposta comercial", usuario: "João Silva" },
  ],
  contatos: [
    { id: "1", nome: "Carlos Mendes", cargo: "Diretor de TI", email: "carlos@techcorp.com", telefone: "(11) 99999-0001" },
    { id: "2", nome: "Ana Paula", cargo: " CFO", email: "ana@techcorp.com", telefone: "(11) 99999-0002" },
  ],
  tarefas: [
    { id: "1", titulo: "Apresentação técnica", data: "2024-02-25", status: "concluida", responsavel: "João Silva" },
    { id: "2", titulo: "Revisar proposta comercial", data: "2024-02-28", status: "pendente", responsavel: "João Silva" },
    { id: "3", titulo: "Reunião de negociação", data: "2024-03-05", status: "pendente", responsavel: "Maria Santos" },
  ],
};

const etapas = [
  { id: "leads", titulo: "Lead", cor: "bg-gray-100" },
  { id: "qualificacao", titulo: "Qualificação", cor: "bg-blue-50" },
  { id: "proposta", titulo: "Proposta", cor: "bg-amber-50" },
  { id: "negociacao", titulo: "Negociação", cor: "bg-purple-50" },
  { id: "fechamento", titulo: "Fechamento", cor: "bg-green-50" },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export default function OportunidadeDetailPage() {
  const params = useParams();
  const [collapsed, setCollapsed] = useState(false);
  const [etapa, setEtapa] = useState(oportunidade.etapa);
  const [isEditStageOpen, setIsEditStageOpen] = useState(false);

  const valorTotal = oportunidade.produtos.reduce(
    (acc, prod) => acc + prod.preco * prod.quantidade,
    0
  );

  const handleChangeStage = (newStage: string) => {
    setEtapa(newStage);
    setIsEditStageOpen(false);
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
            <Link href="/comercial/crm" className="hover:text-gray-700">CRM</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{oportunidade.nome}</span>
          </nav>

          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-start gap-4">
              <Link href="/comercial/crm">
                <Button variant="outline" size="icon">
                  <ArrowLeft size={18} />
                </Button>
              </Link>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    {oportunidade.nome}
                  </h1>
                  <Badge variant="secondary">#{oportunidade.id}</Badge>
                </div>
                <div className="flex items-center gap-2 mt-2 text-gray-500">
                  <Building size={16} />
                  <span>{oportunidade.cliente}</span>
                  <span className="text-gray-300">|</span>
                  <span>{oportunidade.segmento}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Pencil size={18} className="mr-2" />
                Editar
              </Button>
              <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                <Trash size={18} className="mr-2" />
                Excluir
              </Button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CurrencyDollar size={20} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Valor</p>
                    <p className="text-xl font-semibold">{formatCurrency(valorTotal)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Clock size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Probabilidade</p>
                    <p className="text-xl font-semibold">{oportunidade.probabilidade}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <CalendarBlank size={20} className="text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Previsão Fechamento</p>
                    <p className="text-xl font-semibold">
                      {new Date(oportunidade.dataFechamento).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <User size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Responsável</p>
                    <p className="text-xl font-semibold">{oportunidade.responsavel}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Etapa Atual */}
          <Card className="mb-6">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle>Etapa do Funil</CardTitle>
                <Dialog open={isEditStageOpen} onOpenChange={setIsEditStageOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Pencil size={16} className="mr-2" />
                      Alterar Etapa
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Alterar Etapa</DialogTitle>
                      <DialogDescription>
                        Selecione a nova etapa para esta oportunidade
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-2 py-4">
                      {etapas.map((e) => (
                        <button
                          key={e.id}
                          onClick={() => handleChangeStage(e.id)}
                          className={`w-full p-3 rounded-lg text-left transition-colors ${
                            etapa === e.id
                              ? "bg-blue-50 border-2 border-blue-500"
                              : "bg-gray-50 hover:bg-gray-100 border-2 border-transparent"
                          }`}
                        >
                          <span className="font-medium">{e.titulo}</span>
                        </button>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                {etapas.map((e, index) => (
                  <div key={e.id} className="flex items-center">
                    <div
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                        etapa === e.id ? e.cor : "bg-gray-50"
                      } ${etapa === e.id ? "ring-2 ring-blue-500" : ""}`}
                    >
                      {etapas.findIndex((et) => et.id === etapa) > index ? (
                        <CheckCircle size={18} className="text-green-500" />
                      ) : etapa === e.id ? (
                        <div className="w-[18px] h-[18px] rounded-full bg-blue-500" />
                      ) : (
                        <div className="w-[18px] h-[18px] rounded-full bg-gray-300" />
                      )}
                      <span
                        className={
                          etapa === e.id ? "font-medium" : "text-gray-500"
                        }
                      >
                        {e.titulo}
                      </span>
                    </div>
                    {index < etapas.length - 1 && (
                      <ArrowRight size={16} className="mx-2 text-gray-300" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue="detalhes" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="detalhes">Detalhes</TabsTrigger>
              <TabsTrigger value="produtos">Produtos</TabsTrigger>
              <TabsTrigger value="historico">Histórico</TabsTrigger>
              <TabsTrigger value="contatos">Contatos</TabsTrigger>
              <TabsTrigger value="tarefas">Tarefas</TabsTrigger>
            </TabsList>

            {/* Tab Detalhes */}
            <TabsContent value="detalhes">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informações Gerais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-500">Descrição</p>
                      <p className="mt-1">{oportunidade.descricao}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Data de Criação</p>
                        <p className="font-medium">
                          {new Date(oportunidade.dataCriacao).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Última Atualização</p>
                        <p className="font-medium">
                          {new Date(oportunidade.historico[0].data).toLocaleDateString("pt-BR")}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Valor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">
                      {formatCurrency(valorTotal)}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Valor ponderado: {formatCurrency(valorTotal * (oportunidade.probabilidade / 100))}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Tab Produtos */}
            <TabsContent value="produtos">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Produtos/Serviços</CardTitle>
                  <Button size="sm">
                    <Plus size={16} className="mr-2" />
                    Adicionar
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Produto</TableHead>
                        <TableHead className="text-center">Quantidade</TableHead>
                        <TableHead className="text-right">Preço Unit.</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {oportunidade.produtos.map((produto) => (
                        <TableRow key={produto.id}>
                          <TableCell className="font-medium">{produto.nome}</TableCell>
                          <TableCell className="text-center">{produto.quantidade}</TableCell>
                          <TableCell className="text-right">
                            {formatCurrency(produto.preco)}
                          </TableCell>
                          <TableCell className="text-right font-semibold">
                            {formatCurrency(produto.preco * produto.quantidade)}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <tfoot>
                      <TableRow>
                        <TableCell colSpan={3} className="text-right font-semibold">
                          Total
                        </TableCell>
                        <TableCell className="text-right font-bold text-lg text-green-600">
                          {formatCurrency(valorTotal)}
                        </TableCell>
                      </TableRow>
                    </tfoot>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab Histórico */}
            <TabsContent value="historico">
              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Ações</CardTitle>
                  <CardDescription>Todas as alterações nesta oportunidade</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
                    <div className="space-y-6">
                      {oportunidade.historico.map((item, index) => (
                        <div key={item.id} className="flex gap-4 relative">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center z-10">
                            {index === 0 ? (
                              <FileText size={16} className="text-blue-600" />
                            ) : (
                              <Clock size={16} className="text-blue-600" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{item.acao}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                              <span>{new Date(item.data).toLocaleDateString("pt-BR")}</span>
                              <span>|</span>
                              <span>{item.usuario}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab Contatos */}
            <TabsContent value="contatos">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Contatos do Cliente</CardTitle>
                  <Button size="sm">
                    <Plus size={16} className="mr-2" />
                    Adicionar Contato
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {oportunidade.contatos.map((contato) => (
                      <div
                        key={contato.id}
                        className="p-4 border rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold">{contato.nome}</h4>
                            <p className="text-sm text-gray-500">{contato.cargo}</p>
                          </div>
                          <Button variant="ghost" size="icon-xs">
                            <Pencil size={14} />
                          </Button>
                        </div>
                        <div className="mt-3 space-y-1">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Envelope size={14} />
                            <span>{contato.email}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Phone size={14} />
                            <span>{contato.telefone}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Tab Tarefas */}
            <TabsContent value="tarefas">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Tarefas</CardTitle>
                  <Button size="sm">
                    <Plus size={16} className="mr-2" />
                    Nova Tarefa
                  </Button>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Tarefa</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Responsável</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {oportunidade.tarefas.map((tarefa) => (
                        <TableRow key={tarefa.id}>
                          <TableCell className="font-medium">{tarefa.titulo}</TableCell>
                          <TableCell>
                            {new Date(tarefa.data).toLocaleDateString("pt-BR")}
                          </TableCell>
                          <TableCell>{tarefa.responsavel}</TableCell>
                          <TableCell>
                            {tarefa.status === "concluida" ? (
                              <Badge variant="default" className="bg-green-100 text-green-700 hover:bg-green-100">
                                <CheckCircle size={14} className="mr-1" />
                                Concluída
                              </Badge>
                            ) : (
                              <Badge variant="secondary">
                                <Clock size={14} className="mr-1" />
                                Pendente
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon-xs">
                              <DotsThree size={16} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
