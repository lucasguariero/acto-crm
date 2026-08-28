"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function CadastrosPage() {
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
            <span className="text-gray-900 font-medium">Cadastros</span>
          </nav>

          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Cadastros</h1>
            <p className="text-gray-500 mt-1">Dados mestres da empresa: plano de contas, organizações, contas bancárias e patrimônio.</p>
          </div>

          {/* Financeiro & Contábil */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Financeiro & contábil</h2>
            <div className="grid gap-4">
              {/* Plano de contas */}
              <Link href="/cadastros/plano-contas" className="block p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Plano de contas</h3>
                    <p className="text-sm text-gray-500 mt-1">Categorias hierárquicas de receitas e despesas operacionais.</p>
                  </div>
                  <span className="text-blue-600 font-medium text-sm">Abrir</span>
                </div>
              </Link>

              {/* Centros de custo */}
              <Link href="/cadastros/centros-custo" className="block p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Centros de custo</h3>
                    <p className="text-sm text-gray-500 mt-1">Projetos e unidades de alocação de receitas e despesas.</p>
                  </div>
                  <span className="text-blue-600 font-medium text-sm">Abrir</span>
                </div>
              </Link>

              {/* Organizações */}
              <Link href="/cadastros/organizacoes" className="block p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Organizações</h3>
                    <p className="text-sm text-gray-500 mt-1">Fornecedores, clientes e parceiros vinculados a lançamentos e contratos.</p>
                  </div>
                  <span className="text-blue-600 font-medium text-sm">Abrir</span>
                </div>
              </Link>

              {/* Contas bancárias */}
              <Link href="/financeiro/cadastros/contas-bancarias" className="block p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Contas bancárias</h3>
                    <p className="text-sm text-gray-500 mt-1">Contas da empresa para importação de extratos e conciliação.</p>
                  </div>
                  <span className="text-blue-600 font-medium text-sm">Abrir</span>
                </div>
              </Link>

              {/* Alíquotas de impostos */}
              <Link href="/financeiro/cadastros/aliquotas-imposto" className="block p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Alíquotas de impostos</h3>
                    <p className="text-sm text-gray-500 mt-1">Percentuais por tipo de imposto pago pela empresa (ISS, PIS, COFINS, CSLL, IRPJ, INSS).</p>
                  </div>
                  <span className="text-blue-600 font-medium text-sm">Abrir</span>
                </div>
              </Link>

              {/* Integrações bancárias */}
              <Link href="/settings/integracoes#integracoes-empresa" className="block p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Integrações bancárias</h3>
                    <p className="text-sm text-gray-500 mt-1">Credenciais de API (Sicredi, Bradesco, Itaú) em Configurações → Integrações.</p>
                  </div>
                  <span className="text-blue-600 font-medium text-sm">Abrir</span>
                </div>
              </Link>

              {/* Regras de classificação */}
              <Link href="/financeiro/cadastros/regras-classificacao" className="block p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Regras de classificação</h3>
                    <p className="text-sm text-gray-500 mt-1">Automação de categorias na importação de extrato e sync bancário.</p>
                  </div>
                  <span className="text-blue-600 font-medium text-sm">Abrir</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Patrimônio & Ativos */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Patrimônio & ativos</h2>
            <div className="grid gap-4">
              {/* Equipamentos */}
              <Link href="/equipamentos" className="block p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Equipamentos</h3>
                    <p className="text-sm text-gray-500 mt-1">Cadastro de equipamentos alocados a prestadores e projetos.</p>
                  </div>
                  <span className="text-blue-600 font-medium text-sm">Abrir</span>
                </div>
              </Link>

              {/* Patrimônio */}
              <Link href="/patrimonio" className="block p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Patrimônio</h3>
                    <p className="text-sm text-gray-500 mt-1">Bens patrimoniais da empresa e controle de alocação.</p>
                  </div>
                  <span className="text-blue-600 font-medium text-sm">Abrir</span>
                </div>
              </Link>

              {/* Estoque */}
              <Link href="/estoque" className="block p-4 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-medium text-gray-900">Estoque</h3>
                    <p className="text-sm text-gray-500 mt-1">Itens de estoque e movimentações.</p>
                  </div>
                  <span className="text-blue-600 font-medium text-sm">Abrir</span>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

