"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function FornecedoresPage() {
  const [collapsed, setCollapsed] = useState(false)

  const fornecedores = [
    { id: "1", nome: "Tech Solutions", servico: "Desenvolvimento", avaliacao: 4.5, contratos: 5, status: "Ativo" },
    { id: "2", nome: "Creative Agency", servico: "Design", avaliacao: 4.8, contratos: 3, status: "Ativo" },
    { id: "3", nome: "Data Insights", servico: "Dados", avaliacao: 4.2, contratos: 2, status: "Inativo" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className="transition-all duration-300" style={{ marginLeft: collapsed ? '72px' : '260px' }}>
        <Header onToggleSidebar={() => setCollapsed(!collapsed)} />
        <main className="p-6">
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-1">Início / RH / Fornecedores Staffing</p>
            <h1 className="text-2xl font-semibold text-gray-900">Fornecedores Staffing</h1>
            <p className="text-gray-500 mt-1">Gestão de fornecedores de staffing</p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Lista de Fornecedores</CardTitle>
                <Button>Novo Fornecedor</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Serviço</TableHead>
                    <TableHead>Avaliação</TableHead>
                    <TableHead>Contratos</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fornecedores.map((f) => (
                    <TableRow key={f.id}>
                      <TableCell className="font-medium">{f.nome}</TableCell>
                      <TableCell>{f.servico}</TableCell>
                      <TableCell>{f.avaliacao} ★</TableCell>
                      <TableCell>{f.contratos}</TableCell>
                      <TableCell>
                        <Badge variant={f.status === "Ativo" ? "default" : "secondary"}>
                          {f.status}
                        </Badge>
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
  )
}

