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
  UploadSimple,
  File,
  CheckCircle,
  XCircle,
  Clock,
  DownloadSimple,
  MagnifyingGlass,
  Funnel,
  Bank,
  FileCsv,
  FilePdf,
  Trash,
  Eye,
} from "@phosphor-icons/react";

const extratosImportados = [
  {
    id: 1,
    banco: "Banco do Brasil",
    conta: "12345-6",
    arquivo: "extrato_bb_082026.csv",
    dataImportacao: "20/08/2026",
    quantidade: 145,
    status: "processado",
    valorTotal: 89500.00,
  },
  {
    id: 2,
    banco: "Itaú",
    conta: "98765-3",
    arquivo: "extrato_itau_082026.ofx",
    dataImportacao: "19/08/2026",
    quantidade: 89,
    status: "processado",
    valorTotal: 45620.50,
  },
  {
    id: 3,
    banco: "Bradesco",
    conta: "54321-8",
    arquivo: "extrato_bradesco_082026.csv",
    dataImportacao: "18/08/2026",
    quantidade: 112,
    status: "processado",
    valorTotal: 78340.00,
  },
  {
    id: 4,
    banco: "Santander",
    conta: "11122-4",
    arquivo: "extrato_santander_082026.xlsx",
    dataImportacao: "17/08/2026",
    quantidade: 67,
    status: "erro",
    valorTotal: 0,
  },
];

const lancamentos = [
  {
    id: 1,
    data: "20/08/2026",
    descricao: "Transferência recebida - Cliente ABC",
    documento: "DOC 123456",
    tipo: "credito",
    valor: 15000.00,
    categoria: "Receita de Serviços",
  },
  {
    id: 2,
    data: "20/08/2026",
    descricao: "Pagamento fornecedor XYZ",
    documento: "TED 789012",
    tipo: "debito",
    valor: -8500.00,
    categoria: "Fornecedores",
  },
  {
    id: 3,
    data: "19/08/2026",
    descricao: "Tarifa bancária",
    documento: " TARIFA",
    tipo: "debito",
    valor: -45.90,
    categoria: "Tarifas Bancárias",
  },
  {
    id: 4,
    data: "19/08/2026",
    descricao: "Depósito",
    documento: "DEP",
    tipo: "credito",
    valor: 5200.00,
    categoria: "Receita de Serviços",
  },
  {
    id: 5,
    data: "18/08/2026",
    descricao: "Boleto pago - Aluguel",
    documento: "BOLETO",
    tipo: "debito",
    valor: -12000.00,
    categoria: "Aluguel",
  },
  {
    id: 6,
    data: "18/08/2026",
    descricao: "Recebimento NF 1234",
    documento: "NF 1234",
    tipo: "credito",
    valor: 28000.00,
    categoria: "Receita de Produtos",
  },
];

export default function ExtratosPage() {
  const [collapsed, setCollapsed] = useState(false);

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
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
            <span>/</span>
            <Link href="/financeiro" className="hover:text-gray-700">Financeiro</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Importar Extratos</span>
          </nav>

          {/* Título e Ações */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Importar Extratos</h1>
              <p className="text-gray-500 mt-1">Importe e analise extratos bancários</p>
            </div>
          </div>

          {/* Área de Upload */}
          <Card className="bg-white mb-6">
            <CardContent className="p-6">
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UploadSimple size={32} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Arraste arquivos aqui ou clique para selecionar
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Formatos aceitos: OFX, CSV, XLSX, PDF
                </p>
                <Button>
                  <UploadSimple size={16} className="mr-2" />
                  Selecionar Arquivos
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Extratos Importados Recentemente */}
          <Card className="bg-white mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Bank size={18} className="text-gray-600" />
                Extratos Importados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Banco</TableHead>
                    <TableHead>Conta</TableHead>
                    <TableHead>Arquivo</TableHead>
                    <TableHead>Data Importação</TableHead>
                    <TableHead className="text-right">Lançamentos</TableHead>
                    <TableHead className="text-right">Valor Total</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {extratosImportados.map((extrato) => (
                    <TableRow key={extrato.id}>
                      <TableCell className="font-medium">{extrato.banco}</TableCell>
                      <TableCell className="text-gray-500">{extrato.conta}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <File size={16} className="text-gray-400" />
                          {extrato.arquivo}
                        </div>
                      </TableCell>
                      <TableCell className="text-gray-500">{extrato.dataImportacao}</TableCell>
                      <TableCell className="text-right">{extrato.quantidade}</TableCell>
                      <TableCell className="text-right font-medium">
                        R$ {extrato.valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge
                          variant="outline"
                          className={extrato.status === 'processado' ? 'border-green-300 text-green-700' : 'border-red-300 text-red-700'}
                        >
                          {extrato.status === 'processado' ? (
                            <CheckCircle size={12} className="mr-1" />
                          ) : (
                            <XCircle size={12} className="mr-1" />
                          )}
                          {extrato.status === 'processado' ? 'Processado' : 'Erro'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <Button variant="ghost" size="icon-xs" title="Visualizar">
                            <Eye size={14} />
                          </Button>
                          <Button variant="ghost" size="icon-xs" title="Baixar">
                            <DownloadSimple size={14} />
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

          {/* Filtros e Lançamentos */}
          <Card className="bg-white">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base flex items-center gap-2">
                  <File size={18} className="text-gray-600" />
                  Lançamentos do Extrato
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
                    <TableHead>Documento</TableHead>
                    <TableHead>Categoria</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lancamentos.map((lancamento) => (
                    <TableRow key={lancamento.id}>
                      <TableCell className="text-gray-500">{lancamento.data}</TableCell>
                      <TableCell className="font-medium">{lancamento.descricao}</TableCell>
                      <TableCell className="text-gray-500">{lancamento.documento}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-gray-50">
                          {lancamento.categoria}
                        </Badge>
                      </TableCell>
                      <TableCell className={`text-right font-medium ${lancamento.valor >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {lancamento.valor >= 0 ? '+' : ''}R$ {Math.abs(lancamento.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
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

