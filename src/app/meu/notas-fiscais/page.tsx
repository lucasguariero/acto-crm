"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function NotasFiscaisPage() {
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
          {/* Header da página */}
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Minhas notas fiscais</h1>
            <p className="text-gray-500 mt-1">Envie e acompanhe suas notas fiscais mensais.</p>
          </div>

          {/* Estado vazio */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <p className="text-gray-600">
              Sua conta ainda não está vinculada a um cadastro de prestador PJ. Entre em contato com o RH para concluir o vínculo.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

