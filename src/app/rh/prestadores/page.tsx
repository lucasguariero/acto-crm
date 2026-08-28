"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PrestadoresPage() {
  const [collapsed, setCollapsed] = useState(false)

  const prestadores = [
    { id: "PJ-001", nome: "Tech Solutions Ltda", cnpj: "12.345.678/0001-90", servico: "Desenvolvimento", status: "Ativo" },
    { id: "PJ-002", nome: "Creative Agency", cnpj: "23.456.789/0001-01", servico: "Design", status: "Ativo" },
    { id: "PJ-003", nome: "Data Insights", cnpj: "34.567.890/0001-12", servico: "Análise de Dados", status: "Inativo" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div
        className="transition-all duration-300"
        style={{ marginLeft: collapsed ? '72px' : '260px' }}
      >
        <Header onToggleSidebar={() => setCollapsed(!collapsed)} />
        <main className="p-6">
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-1">Início / RH / Prestadores PJ</p>
            <h1 className="text-2xl font-semibold text-gray-900">Prestadores PJ</h1>
            <p className="text-gray-500 mt-1">Gestão de prestadores de serviço PJ</p>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Lista de Prestadores</CardTitle>
                <Button>Novo Prestador</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome/Razão Social</TableHead>
                    <TableHead>CNPJ</TableHead>
                    <TableHead>Serviço</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {prestadores.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell className="font-medium">{p.nome}</TableCell>
                      <TableCell>{p.cnpj}</TableCell>
                      <TableCell>{p.servico}</TableCell>
                      <TableCell>
                        <Badge variant={p.status === "Ativo" ? "default" : "secondary"}>
                          {p.status}
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

