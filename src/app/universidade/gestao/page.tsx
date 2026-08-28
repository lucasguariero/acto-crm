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
  PenNib,
  GraduationCap,
  Plus,
  MagnifyingGlass,
  Funnel,
  FunnelSimple,
  CalendarBlank,
  Users,
  Clock,
  CheckCircle,
  XCircle,
  ArrowSquareOut,
} from "@phosphor-icons/react";

const turmas = [
  {
    id: 1,
    nome: "Gestão de Projetos - Turma A",
    curso: "Gestão de Projetos PMBOK",
    inicio: "15/09/2025",
    termino: "15/11/2025",
    vagas: 30,
    matriculados: 28,
    status: "andamento",
    progresso: 65,
  },
  {
    id: 2,
    nome: "Gestão de Projetos - Turma B",
    curso: "Gestão de Projetos PMBOK",
    inicio: "01/10/2025",
    termino: "01/12/2025",
    vagas: 30,
    matriculados: 15,
    status: "andamento",
    progresso: 40,
  },
  {
    id: 3,
    nome: "ERP Acto - Turma A",
    curso: "Introdução ao ERP Acto",
    inicio: "20/08/2025",
    termino: "20/09/2025",
    vagas: 50,
    matriculados: 50,
    status: "concluida",
    progresso: 100,
  },
  {
    id: 4,
    nome: "Excel Avançado - Turma A",
    curso: "Excel Avançado para Gestores",
    inicio: "01/11/2025",
    termino: "01/12/2025",
    vagas: 25,
    matriculados: 0,
    status: "prevista",
    progresso: 0,
  },
  {
    id: 5,
    nome: "Compliance - Turma A",
    curso: "Compliance e LGPD",
    inicio: "10/09/2025",
    termino: "10/10/2025",
    vagas: 40,
    matriculados: 32,
    status: "andamento",
    progresso: 80,
  },
];

const statusBadge = (status: string) => {
  switch (status) {
    case "andamento":
      return <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Em Andamento</Badge>;
    case "concluida":
      return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Concluída</Badge>;
    case "prevista":
      return <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-100">Prevista</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export default function GestaoPage() {
  const [busca, setBusca] = useState("");

  const turmasFiltradas = turmas.filter((turma) =>
    turma.nome.toLowerCase().includes(busca.toLowerCase()) ||
    turma.curso.toLowerCase().includes(busca.toLowerCase())
  );

  const totalAlunos = turmas.reduce((acc, t) => acc + t.matriculados, 0);
  const turmasAtivas = turmas.filter((t) => t.status === "andamento").length;
  const turmasConcluidas = turmas.filter((t) => t.status === "concluida").length;

  return (
    <>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
            <span>/</span>
            <Link href="/universidade" className="hover:text-gray-700">Universidade Acto</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Gestão de Cursos</span>
          </nav>

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
                <PenNib size={28} className="text-green-600" />
                Gestão de Cursos
              </h1>
              <p className="text-gray-500 mt-1">Administre turmas e acompanhamento de alunos</p>
            </div>
            <Button className="flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8]">
              <Plus size={18} />
              Nova Turma
            </Button>
          </div>

          {/* Cards de Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total de Turmas</p>
                    <p className="text-2xl font-semibold text-gray-900">{turmas.length}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <GraduationCap size={24} className="text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Alunos Matriculados</p>
                    <p className="text-2xl font-semibold text-gray-900">{totalAlunos}</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <Users size={24} className="text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Turmas Ativas</p>
                    <p className="text-2xl font-semibold text-gray-900">{turmasAtivas}</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <Clock size={24} className="text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Turmas Concluídas</p>
                    <p className="text-2xl font-semibold text-gray-900">{turmasConcluidas}</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <CheckCircle size={24} className="text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filtros */}
          <Card className="mb-6 border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                  <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="Buscar turmas..."
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

          {/* Tabela de Turmas */}
          <Card className="border-gray-200">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 hover:bg-gray-50">
                    <TableHead className="font-semibold">Turma</TableHead>
                    <TableHead className="font-semibold">Curso</TableHead>
                    <TableHead className="font-semibold">Período</TableHead>
                    <TableHead className="font-semibold">Vagas</TableHead>
                    <TableHead className="font-semibold">Matriculados</TableHead>
                    <TableHead className="font-semibold">Progresso</TableHead>
                    <TableHead className="font-semibold">Status</TableHead>
                    <TableHead className="font-semibold text-right">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {turmasFiltradas.map((turma) => (
                    <TableRow key={turma.id} className="hover:bg-gray-50">
                      <TableCell>
                        <span className="font-medium text-gray-900">{turma.nome}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">{turma.curso}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-gray-600">
                          <CalendarBlank size={16} />
                          {turma.inicio} - {turma.termino}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">{turma.vagas}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Users size={16} />
                          {turma.matriculados}/{turma.vagas}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500 rounded-full"
                              style={{ width: `${turma.progresso}%` }}
                            />
                          </div>
                          <span className="text-sm text-gray-600">{turma.progresso}%</span>
                        </div>
                      </TableCell>
                      <TableCell>{statusBadge(turma.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center justify-end gap-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600" title="Ver detalhes">
                            <ArrowSquareOut size={16} />
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
            <p>Mostrando {turmasFiltradas.length} de {turmas.length} turmas</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>Anterior</Button>
              <Button variant="outline" size="sm" className="bg-blue-50 text-blue-600 border-blue-200">1</Button>
              <Button variant="outline" size="sm" disabled>Próximo</Button>
            </div>
          </div>
    </>
  );
}

