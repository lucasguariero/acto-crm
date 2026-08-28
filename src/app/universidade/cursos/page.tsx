"use client";

import { useState } from "react";
import Link from "next/link";
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
  BookOpen,
  GraduationCap,
  Plus,
  MagnifyingGlass,
  Funnel,
  Eye,
  PencilSimple,
  Trash,
  Clock,
  Users,
  VideoCamera,
} from "@phosphor-icons/react";

const cursos = [
  {
    id: 1,
    titulo: "Gestão de Projetos PMBOK",
    categoria: "Gestão",
    duracao: "40h",
    modulos: 8,
    alunos: 45,
    status: "publicado",
    nivel: "Intermediário",
  },
  {
    id: 2,
    titulo: "Introdução ao ERP Acto",
    categoria: "Produtos",
    duracao: "20h",
    modulos: 5,
    alunos: 120,
    status: "publicado",
    nivel: "Básico",
  },
  {
    id: 3,
    titulo: "Excel Avançado para Gestores",
    categoria: "Ferramentas",
    duracao: "30h",
    modulos: 6,
    alunos: 0,
    status: "rascunho",
    nivel: "Avançado",
  },
  {
    id: 4,
    titulo: "Compliance e LGPD",
    categoria: "Compliance",
    duracao: "25h",
    modulos: 4,
    alunos: 32,
    status: "publicado",
    nivel: "Básico",
  },
  {
    id: 5,
    titulo: "Vendas Consultivas",
    categoria: "Vendas",
    duracao: "35h",
    modulos: 7,
    alunos: 67,
    status: "publicado",
    nivel: "Intermediário",
  },
  {
    id: 6,
    titulo: "Atendimento ao Cliente",
    categoria: "Serviços",
    duracao: "15h",
    modulos: 3,
    alunos: 0,
    status: "rascunho",
    nivel: "Básico",
  },
];

const categorias = ["Todos", "Gestão", "Produtos", "Ferramentas", "Compliance", "Vendas", "Serviços"];

export default function CursosPage() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");
  const [busca, setBusca] = useState("");

  const cursosFiltrados = cursos.filter((curso) => {
    const matchesCategoria = categoriaAtiva === "Todos" || curso.categoria === categoriaAtiva;
    const matchesBusca = curso.titulo.toLowerCase().includes(busca.toLowerCase());
    return matchesCategoria && matchesBusca;
  });

  return (
    <>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
            <span>/</span>
            <Link href="/universidade" className="hover:text-gray-700">Universidade Acto</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Catálogo de Cursos</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <BookOpen size={28} className="text-blue-600" />
                Catálogo de Cursos
              </h1>
              <p className="text-gray-500 mt-1">Gerencie os cursos da plataforma</p>
            </div>
            <Button className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8]">
              <Plus size={18} />
              Novo Curso
            </Button>
          </div>

          {/* Filtros */}
          <Card className="mb-6 border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                  <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="Buscar cursos..."
                    className="pl-10"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Funnel size={18} className="text-gray-400" />
                  <div className="flex gap-1">
                    {categorias.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setCategoriaAtiva(cat)}
                        className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                          categoriaAtiva === cat
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabela de Cursos */}
          <Card className="border-gray-200">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 hover:bg-gray-50">
                    <TableHead className="font-semibold">Curso</TableHead>
                    <TableHead className="font-semibold">Categoria</TableHead>
                    <TableHead className="font-semibold">Duração</TableHead>
                    <TableHead className="font-semibold">Módulos</TableHead>
                    <TableHead className="font-semibold">Alunos</TableHead>
                    <TableHead className="font-semibold">Nível</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cursosFiltrados.map((curso) => (
                    <TableRow key={curso.id} className="hover:bg-gray-50">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-50 rounded-lg">
                            <GraduationCap size={20} className="text-blue-600" />
                          </div>
                          <span className="font-medium text-gray-900">{curso.titulo}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">{curso.categoria}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Clock size={16} />
                          {curso.duracao}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">{curso.modulos}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Users size={16} />
                          {curso.alunos}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">{curso.nivel}</span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={curso.status === "publicado"
                            ? "bg-green-100 text-green-700 hover:bg-green-100"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-100"
                          }
                        >
                          {curso.status === "publicado" ? "Publicado" : "Rascunho"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600">
                            <Eye size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600">
                            <PencilSimple size={16} />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-red-600">
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

          {/* Resumo */}
          <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
            <p>Mostrando {cursosFiltrados.length} de {cursos.length} cursos</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>Anterior</Button>
              <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600 border-blue-200">1</Button>
              <Button variant="outline" size="sm" disabled>Próximo</Button>
            </div>
          </div>
    </>
  );
}

