"use client";

import { useState } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function ComercialLayout({
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
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
