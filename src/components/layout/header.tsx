"use client";

import { Button } from "@/components/ui/button";

const PanelLeftCloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M9 3v18" />
    <path d="m16 15-3-3 3-3" />
  </svg>
);

const PanelLeftOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M9 3v18" />
    <path d="m14 9 3 3-3 3" />
  </svg>
);

interface HeaderProps {
  onToggleSidebar: () => void;
  collapsed: boolean;
}

// SVG icons do CRM original
const Icons = {
  Search: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  ),
  Envelope: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6 12 13 2 6" />
    </svg>
  ),
  Bell: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  ),
  Question: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  Timer: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  ShieldWarning: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  List: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M9 3v18" />
      <path d="m16 15-3-3 3-3" />
    </svg>
  ),
};

interface HeaderProps {
  onToggleSidebar: () => void;
  collapsed: boolean;
}

export function Header({ onToggleSidebar, collapsed }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[#E2E8F0] bg-white px-4">
      {/* Left side - Sidebar toggle + Breadcrumb */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E293B]"
          onClick={onToggleSidebar}
        >
          {collapsed ? <PanelLeftOpenIcon /> : <PanelLeftCloseIcon />}
        </Button>
        <nav className="flex items-center gap-1 text-sm">
          <span className="text-[#0b0809] font-semibold">Dashboard</span>
        </nav>
      </div>

      {/* Center - Search */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <button className="flex items-center gap-2 rounded-lg border border-[#E2E8F0] bg-white px-3 h-9 w-[512px] shadow-sm hover:bg-[#F8FAFC] transition-colors">
          <Icons.Search />
          <span className="text-sm text-[#64748B]">Buscar no ERP...</span>
          <kbd className="inline-flex h-5 items-center gap-1 rounded border border-[#E2E8F0] bg-[#F8FAFC] px-1.5 text-[10px] text-[#94A3B8] font-medium ml-auto">
            Ctrl K
          </kbd>
        </button>
      </div>

      {/* Right side - 5 icons in a div with outline and border-radius */}
      <div className="flex items-center h-10 px-1 py-1 rounded-lg border border-[#E2E8F0] outline outline-1 outline-[#E2E8F0] gap-1">
        <Button
          variant="ghost"
          size="sm"
          className="h-10 w-10 p-0 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E293B] rounded flex-shrink-0"
          title="Caixa de entrada"
        >
          <Icons.Envelope />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="h-10 w-10 p-0 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E293B] rounded flex-shrink-0"
          title="Notificações"
        >
          <Icons.Bell />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="h-10 w-10 p-0 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E293B] rounded flex-shrink-0"
          title="Como usar"
        >
          <Icons.Question />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="h-10 w-10 p-0 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E293B] rounded flex-shrink-0"
          title="Documentação interna"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
          </svg>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="h-10 w-10 p-0 text-[#64748B] hover:bg-[#F1F5F9] hover:text-[#1E293B] rounded flex-shrink-0"
          title="Pomodoro"
        >
          <Icons.Timer />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="h-10 w-10 p-0 text-[#F97316] hover:bg-[#FFF7ED] hover:text-[#EA580C] rounded flex-shrink-0"
          title="Configurar PIN de step-up"
        >
          <Icons.ShieldWarning />
        </Button>
      </div>
    </header>
  );
}
