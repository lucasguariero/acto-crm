"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function ProcessosPage() {
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
            <span className="text-gray-900 font-medium">Processos</span>
          </nav>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Processos</h1>
            <p className="text-gray-500 mt-1">Filas de aprovação: centro de custo, recesso e substituições.</p>
          </div>

          {/* Processos */}
          <div className="space-y-4">
            {/* Solicitações de centro de custo */}
            <Link href="/backoffice/solicitacoes-centro-custo" className="block p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">Em dia</span>
                    <h3 className="text-base font-medium text-gray-900">Solicitações de centro de custo</h3>
                  </div>
                  <p className="text-sm text-gray-500">Aprovação do gestor e do RH para viagens, equipamentos e capacitação.</p>
                </div>
                <span className="text-blue-600 font-medium text-sm">Abrir fila</span>
              </div>
            </Link>

            {/* Solicitações de recesso */}
            <Link href="/backoffice/solicitacoes-recesso" className="block p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">Em dia</span>
                    <h3 className="text-base font-medium text-gray-900">Solicitações de recesso</h3>
                  </div>
                  <p className="text-sm text-gray-500">Recessos de prestadores PJ aguardando análise.</p>
                </div>
                <span className="text-blue-600 font-medium text-sm">Abrir fila</span>
              </div>
            </Link>

            {/* Substituições staffing */}
            <Link href="/backoffice/substituicoes-colaborador" className="block p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded">Em dia</span>
                    <h3 className="text-base font-medium text-gray-900">Substituições staffing</h3>
                  </div>
                  <p className="text-sm text-gray-500">Troca de colaboradores em contratos de outsourcing.</p>
                </div>
                <span className="text-blue-600 font-medium text-sm">Abrir fila</span>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
