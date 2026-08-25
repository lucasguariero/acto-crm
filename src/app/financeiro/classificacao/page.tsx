"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  Tag,
  MagnifyingGlass,
  Funnel,
  CheckCircle,
  ArrowRight,
  Plus,
  PencilSimple,
  Trash,
  Clock,
} from "@phosphor-icons/react";

const categorias = [
  { id: 1, nome: "Receita de Serviços", tipo: "receita", cor: "bg-green-100 text-green-700", quantidade: 245 },
  { id: 2, nome: "Receita de Produtos", tipo: "receita", cor: "bg-green-100 text-green-700", quantidade: 156 },
  { id: 3, nome: "Receita de Licenças", tipo: "receita", cor: "bg-green-100 text-green-700", quantidade: 45 },
  { id: 4, nome: "Pessoal", tipo: "despesa", cor: "bg-red-100 text-red-700", quantidade: 89 },
  { id: 5, nome: "Infraestrutura", tipo: "despesa", cor: "bg-red-100 text-red-700", quantidade: 67 },
  { id: 6, nome: "Marketing", tipo: "despesa", cor: "bg-red-100 text-red-700", quantidade: 34 },
  { id: 7, nome: "Fornecedores", tipo: "despesa", cor: "bg-red-100 text-red-700", quantidade: 123 },
  { id: 8, nome: "Tarifas Bancárias", tipo: "despesa", cor: "bg-red-100 text-red-700", quantidade: 28 },
];

const lancamentosPendentes = [
  {
    id: 1,
    data: "20/08/2026",
    descricao: "Transferência TED - Cliente ABC",
    valor: 15000.00,
    conta: "Banco do Brasil",
    status: "pendente",
  },
  {
    id: 2,
    data: "20/08/2026",
    descricao: "Pagamento fornecedor - Material",
    valor: -8500.00,
    conta: "Itaú",
    status: "pendente",
  },
  {
    id: 3,
    data: "19/08/2026",
    descricao: "Depósito dinheiro",
    valor: 5200.00,
    conta: "Bradesco",
    status: "pendente",
  },
  {
    id: 4,
    data: "19/08/2026",
    descricao: "Boleto aluguel",
    valor: -12000.00,
    conta: "Banco do Brasil",
    status: "pendente",
  },
  {
    id: 5,
    data: "18/08/2026",
    descricao: "Recebimento NF 1250",
    valor: 28000.00,
    conta: "Santander",
    status: "classificado",
    categoria: "Receita de Serviços",
  },
];

const regras = [
  {
    id: 1,
    nome: "Clientes ABC",
    condicao: "Descrição contém 'ABC'",
    acao: "Classificar como Receita de Serviços",
    ativa: true,
  },
  {
    id: 2,
    nome: "Fornecedor XYZ",
    condicao: "Descrição contém 'XYZ'",
    acao: "Classificar como Fornecedores",
    ativa: true,
  },
  {
    id: 3,
    nome: "Tarifas",
    condicao: "Descrição contém 'Tarifa'",
    acao: "Classificar como Tarifas Bancárias",
    ativa: true,
  },
];

export default function ClassificacaoPage() {
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
            <Link href="/financeiro" className="hover:text-gray-700">Financeiro</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Classificação</span>
          </nav>

          {/* Título e Ações */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Classificação</h1>
              <p className="text-gray-500 mt-1">Classifique seus lançamentos automaticamente</p>
            </div>
            <Button>
              <Plus size={16} className="mr-2" />
              Nova Categoria
            </Button>
          </div>

          {/* Categorias */}
          <Card className="bg-white mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Tag size={18} className="text-gray-600" />
                Categorias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {categorias.map((categoria) => (
                  <div
                    key={categoria.id}
                    className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${categoria.tipo === 'receita' ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span className="text-sm font-medium text-gray-700">{categoria.nome}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {categoria.quantidade}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Lançamentos Pendentes */}
          <Card className="bg-white mb-6">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">
                  Lançamentos Pendentes de Classificação
                </CardTitle>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <MagnifyingGlass size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <Input placeholder="Buscar..." className="pl-9 w-64" />
                  </div>
                  <Button variant="outline" size="sm">
                    <Funnel size={16} className="mr-2" />
                    Filtrar
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Conta</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead className="text-center">Ação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lancamentosPendentes.map((lancamento) => (
                    <TableRow key={lancamento.id}>
                      <TableCell className="text-gray-500">{lancamento.data}</TableCell>
                      <TableCell className="font-medium">{lancamento.descricao}</TableCell>
                      <TableCell className="text-gray-500">{lancamento.conta}</TableCell>
                      <TableCell className={`text-right font-medium ${lancamento.valor >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {lancamento.valor >= 0 ? '+' : ''}R$ {Math.abs(lancamento.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={lancamento.status === 'classificado' ? 'border-green-300 text-green-700' : 'border-yellow-300 text-yellow-700'}
                        >
                          {lancamento.status === 'classificado' ? (
                            <CheckCircle size={12} className="mr-1" />
                          ) : (
                            <Clock size={12} className="mr-1" />
                          )}
                          {lancamento.status === 'classificado' ? 'Classificado' : 'Pendente'}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {lancamento.categoria ? (
                          <Badge variant="outline" className="bg-gray-50">
                            {lancamento.categoria}
                          </Badge>
                        ) : (
                          <Button variant="ghost" size="sm" className="text-blue-600">
                            Classificar
                            <ArrowRight size={14} className="ml-1" />
                          </Button>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Button variant="ghost" size="icon-xs" title="Editar">
                            <PencilSimple size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Regras de Classificação Automática */}
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">
                  Regras de Classificação Automática
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Plus size={16} className="mr-2" />
                  Nova Regra
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Condição</TableHead>
                    <TableHead>Ação</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {regras.map((regra) => (
                    <TableRow key={regra.id}>
                      <TableCell className="font-medium">{regra.nome}</TableCell>
                      <TableCell className="text-gray-500">{regra.condicao}</TableCell>
                      <TableCell className="text-gray-500">{regra.acao}</TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant="outline"
                          className={regra.ativa ? 'border-green-300 text-green-700' : 'border-gray-300 text-gray-500'}
                        >
                          {regra.ativa ? 'Ativa' : 'Inativa'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Button variant="ghost" size="icon-xs" title="Editar">
                            <PencilSimple size={14} />
                          </Button>
                          <Button variant="ghost" size="icon-xs" title="Excluir" className="text-red-500 hover:text-red-700">
                            <Trash size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
