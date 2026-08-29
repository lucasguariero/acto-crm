"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function UniversidadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div
        className="transition-all duration-300 ml-0 md:ml-[72px] lg:ml-[260px]"
      >
        <Header onToggleSidebar={() => setCollapsed(!collapsed)} collapsed={collapsed} />
        <main className="pt-6 px-6">
          {children}
        </main>
      </div>
    </div>
  );
}

