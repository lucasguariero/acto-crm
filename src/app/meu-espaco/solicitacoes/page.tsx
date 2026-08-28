"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function MinhasSolicitacoesPage() {
  const [collapsed, setCollapsed] = useState(false)

  const solicitacoes = [
    { id: "SOL-001", tipo: "Férias", status: "Aprovado", data: "15/08/2024" },
    { id: "SOL-002", tipo: "Adiantamento", status: "Pendente", data: "18/08/2024" },
    { id: "SOL-003", tipo: "Licença", status: "Em análise", data: "20/08/2024" },
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
            <p className="text-sm text-gray-500 mb-1">Início / Meu Espaço / Minhas Solicitações</p>
            <h1 className="text-2xl font-semibold text-gray-900">Minhas Solicitações</h1>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Solicitações</CardTitle>
                <Button>Nova Solicitação</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Data</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {solicitacoes.map((sol) => (
                    <TableRow key={sol.id}>
                      <TableCell className="font-medium">{sol.id}</TableCell>
                      <TableCell>{sol.tipo}</TableCell>
                      <TableCell>
                        <Badge variant={sol.status === "Aprovado" ? "default" : "secondary"}>
                          {sol.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{sol.data}</TableCell>
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

