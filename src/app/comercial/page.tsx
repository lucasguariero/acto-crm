"use client";

import { useState } from "react";
import Link from "next/link";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Scales } from "@phosphor-icons/react";

export default function ComercialPage() {
  const [collapsed, setCollapsed] = useState(false);

  const modules = [
    {
      title: "CRM",
      description: "Gerencie oportunidades, clientes e funil de vendas",
      href: "/comercial/crm",
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

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div
        className="transition-all duration-300"
        style={{ marginLeft: collapsed ? '72px' : '260px' }}
      >
        <Header onToggleSidebar={() => setCollapsed(!collapsed)} />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Comercial</h1>
            <p className="text-gray-500 mt-1">Gerencie suas vendas e oportunidades</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Link key={module.title} href={module.href}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${module.color}`}>
                          <Icon size={24} className="text-white" weight="fill" />
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
      </div>
    </div>
  );
}
