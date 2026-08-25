"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Book,
  File,
  FolderSimple,
  Plus,
  MagnifyingGlass,
  FunnelSimple,
  Eye,
  PencilSimple,
  Trash,
  Star,
  Clock,
  User,
  FileText,
  ClockCounterClockwise,
} from "@phosphor-icons/react";

const documentos = [
  {
    id: 1,
    titulo: "Manual de Políticas Internas",
    tipo: "Política",
    categoria: "RH",
    tamanho: "2.4 MB",
    autor: "Maria Santos",
    dataModificacao: "20/08/2025",
    visualizacoes: 456,
    status: "publicado",
  },
  {
    id: 2,
    titulo: "Procedimentos de Compliance",
    tipo: "Procedimento",
    categoria: "Compliance",
    tamanho: "1.8 MB",
    autor: "João Silva",
    dataModificacao: "18/08/2025",
    visualizacoes: 234,
    status: "publicado",
  },
  {
    id: 3,
    titulo: "Guia de Onboarding",
    tipo: "Guia",
    categoria: "RH",
    tamanho: "5.2 MB",
    autor: "Ana Costa",
    dataModificacao: "15/08/2025",
    visualizacoes: 189,
    status: "publicado",
  },
  {
    id: 4,
    titulo: "Política de LGPD",
    tipo: "Política",
    categoria: "Jurídico",
    tamanho: "890 KB",
    autor: "Carlos Lima",
    dataModificacao: "10/08/2025",
    visualizacoes: 567,
    status: "publicado",
  },
  {
    id: 5,
    titulo: "Manual de Vendas",
    tipo: "Manual",
    categoria: "Comercial",
    tamanho: "3.1 MB",
    autor: "Pedro Oliveira",
    dataModificacao: "05/08/2025",
    visualizacoes: 345,
    status: "rascunho",
  },
  {
    id: 6,
    titulo: "Processos Financeiros",
    tipo: "Procedimento",
    categoria: "Financeiro",
    tamanho: "1.2 MB",
    autor: "Juliana Alves",
    dataModificacao: "01/08/2025",
    visualizacoes: 278,
    status: "publicado",
  },
];

const categorias = [
  { nome: "RH", quantidade: 45 },
  { nome: "Compliance", quantidade: 32 },
  { nome: "Jurídico", quantidade: 28 },
  { nome: "Comercial", quantidade: 24 },
  { nome: "Financeiro", quantidade: 18 },
  { nome: "TI", quantidade: 15 },
];

export default function BaseConhecimentoPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [busca, setBusca] = useState("");

  const documentosFiltrados = documentos.filter((doc) =>
    doc.titulo.toLowerCase().includes(busca.toLowerCase()) ||
    doc.categoria.toLowerCase().includes(busca.toLowerCase())
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
            <span className="text-gray-900 font-medium">Base de Conhecimento</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <Book size={28} className="text-blue-600" />
                Base de Conhecimento
              </h1>
              <p className="text-gray-500 mt-1">Documentos e informações institucionais</p>
            </div>
            <Button className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8]">
              <Plus size={18} />
              Novo Documento
            </Button>
          </div>

          {/* Layout com Sidebar de Categorias */}
          <div className="flex gap-6">
            {/* Lista de Categorias */}
            <div className="w-64 flex-shrink-0">
              <Card className="border-gray-200">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <FolderSimple size={18} className="text-gray-400" />
                    Categorias
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-1">
                  {categorias.map((cat) => (
                    <button
                      key={cat.nome}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <span>{cat.nome}</span>
                      <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-100">
                        {cat.quantidade}
                      </Badge>
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Documentos Recentes */}
              <Card className="border-gray-200 mt-4">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center gap-2">
                    <ClockCounterClockwise size={18} className="text-gray-400" />
                    Recentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {documentos.slice(0, 3).map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    >
                      <FileText size={16} className="text-gray-400" />
                      <span className="text-sm text-gray-700 truncate flex-1">
                        {doc.titulo}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Área Principal */}
            <div className="flex-1">
              {/* Filtros */}
              <Card className="mb-4 border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="relative flex-1 max-w-md">
                      <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        placeholder="Buscar documentos..."
                        className="pl-10"
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                      />
                    </div>
                    <Button variant="outline" className="flex items-center gap-2">
                      <FunnelSimple size={18} />
                      Filtrar
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tabela de Documentos */}
              <Card className="border-gray-200">
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-gray-50 hover:bg-gray-50">
                        <TableHead className="font-semibold">Documento</TableHead>
                        <TableHead className="font-semibold">Categoria</TableHead>
                        <TableHead className="font-semibold">Tipo</TableHead>
                        <TableHead className="font-semibold">Autor</TableHead>
                        <TableHead className="font-semibold">Última Alteração</TableHead>
                        <TableHead className="font-semibold">Status</TableHead>
                        <TableHead className="font-semibold text-right">Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {documentosFiltrados.map((doc) => (
                        <TableRow key={doc.id} className="hover:bg-gray-50">
                          <TableCell>
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-blue-50 rounded-lg">
                                <File size={18} className="text-blue-600" />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{doc.titulo}</p>
                                <p className="text-xs text-gray-500">{doc.tamanho}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                              {doc.categoria}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <span className="text-gray-600">{doc.tipo}</span>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1 text-gray-600">
                              <User size={14} />
                              {doc.autor}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1 text-gray-600">
                              <Clock size={14} />
                              {doc.dataModificacao}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge
                              className={doc.status === "publicado"
                                ? "bg-green-100 text-green-700 hover:bg-green-100"
                                : "bg-yellow-100 text-yellow-700 hover:bg-yellow-100"
                              }
                            >
                              {doc.status === "publicado" ? "Publicado" : "Rascunho"}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center justify-end gap-1">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600" title="Visualizar">
                                <Eye size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600" title="Editar">
                                <PencilSimple size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-yellow-600" title="Favoritar">
                                <Star size={16} />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-red-600" title="Excluir">
                                <Trash size={16} />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
