"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  UserCircle,
  CalendarCheck,
  Storefront,
  FileText,
  Star,
  Users,
} from "@phosphor-icons/react";

const modulos = [
  {
    titulo: "Prestadores PJ",
    descricao: "Gerencie prestadores de serviço PJ",
    icon: UserCircle,
    href: "/rh/prestadores",
    cor: "bg-blue-50 text-blue-600",
    quantidade: 45,
  },
  {
    titulo: "Disponibilidade",
    descricao: "Controle de disponibilidade dos prestadores",
    icon: CalendarCheck,
    href: "/rh/disponibilidade",
    cor: "bg-green-50 text-green-600",
    quantidade: 12,
  },
  {
    titulo: "Fornecedores Staffing",
    descricao: "Gerencie fornecedores de staffing",
    icon: Storefront,
    href: "/rh/fornecedores",
    cor: "bg-purple-50 text-purple-600",
    quantidade: 18,
  },
  {
    titulo: "Contratos",
    descricao: "Gerencie contratos de prestadores",
    icon: FileText,
    href: "/rh/contratos",
    cor: "bg-orange-50 text-orange-600",
    quantidade: 62,
  },
  {
    titulo: "Ciclos Avaliação",
    descricao: "Gerencie ciclos de avaliação",
    icon: Star,
    href: "/rh/avaliacao",
    cor: "bg-cyan-50 text-cyan-600",
    quantidade: 3,
  },
  {
    titulo: "Destaques RH",
    descricao: "Destaques e métricas de RH",
    icon: Users,
    href: "/rh/destaques",
    cor: "bg-red-50 text-red-600",
    quantidade: 0,
  },
];

export default function RHPage() {
  return (
    <main className="p-6">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">RH</span>
      </nav>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Recursos Humanos</h1>
        <p className="text-gray-500 mt-1">Gerencie os processos de recursos humanos</p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modulos.map((item) => {
          const Icon = item.icon;
          return (
            <Link key={item.titulo} href={item.href}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer border-gray-200">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${item.cor}`}>
                        <Icon size={22} weight="duotone" />
                      </div>
                      <CardTitle className="text-base">{item.titulo}</CardTitle>
                    </div>
                    {item.quantidade > 0 && (
                      <span className="flex items-center justify-center min-w-[24px] h-6 px-1.5 text-xs font-medium text-white bg-[#2563EB] rounded-full">
                        {item.quantidade}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{item.descricao}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
