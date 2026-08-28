"use client"

import { useState } from "react"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DisponibilidadePage() {
  const [collapsed, setCollapsed] = useState(false)

  const disponibilidade = [
    { id: "1", nome: "Carlos Silva", funcao: "Desenvolvedor", segunda: "10h", terca: "8h", quarta: "10h", quinta: "8h", sexta: "6h", total: "42h" },
    { id: "2", nome: "Ana Santos", funcao: "Designer", segunda: "8h", terca: "10h", quarta: "8h", quinta: "10h", sexta: "8h", total: "44h" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className="transition-all duration-300" style={{ marginLeft: collapsed ? '72px' : '260px' }}>
        <Header onToggleSidebar={() => setCollapsed(!collapsed)} />
        <main className="p-6">
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-1">Início / RH / Disponibilidade</p>
            <h1 className="text-2xl font-semibold text-gray-900">Disponibilidade dos Prestadores</h1>
            <p className="text-gray-500 mt-1">Controle de carga horária semanal</p>
          </div>

          <Card>
            <CardHeader><CardTitle>Carga Horária Semanal</CardTitle></CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Função</TableHead>
                    <TableHead>Seg</TableHead>
                    <TableHead>Ter</TableHead>
                    <TableHead>Qua</TableHead>
                    <TableHead>Qui</TableHead>
                    <TableHead>Sex</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {disponibilidade.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="font-medium">{item.nome}</TableCell>
                      <TableCell>{item.funcao}</TableCell>
                      <TableCell>{item.segunda}</TableCell>
                      <TableCell>{item.terca}</TableCell>
                      <TableCell>{item.quarta}</TableCell>
                      <TableCell>{item.quinta}</TableCell>
                      <TableCell>{item.sexta}</TableCell>
                      <TableCell className="font-medium">{item.total}</TableCell>
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

