"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Scales } from "@phosphor-icons/react";

const modules = [
  {
    title: "CRM",
    description: "Gerencie oportunidades, clientes e funil de vendas",
    href: "/crm",
    icon: Briefcase,
    color: "bg-blue-500",
  },
  {
    title: "Licitações",
    description: "Acompanhe e gerencie licitações públicas",
    href: "/comercial/licitacoes",
    icon: Scales,
    color: "bg-amber-500",
  },
];

export default function ComercialPage() {
  return (
    <main className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Comercial</h1>
        <p className="text-gray-500 mt-1">Área comercial e vendas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <Link key={module.title} href={module.href}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${module.color}`}>
                      <Icon size={24} className="text-white" weight="bold" />
                    </div>
                    <CardTitle>{module.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">{module.description}</p>
                  <Button variant="outline" className="mt-4 w-full">
                    Acessar {module.title}
                  </Button>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

