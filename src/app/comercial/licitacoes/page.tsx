"use client"

import Link from "next/link"

const licitacoes = [
  {
    id: 3,
    referencia: "LIC-2026/003",
    orgao: "Prefeitura Alpha",
    proposta: "R$ *******",
    status: "Participando",
  },
  {
    id: 2,
    referencia: "LIC-2026/002",
    orgao: "Prefeitura Beta",
    proposta: "R$ *******",
    status: "Perdida",
  },
  {
    id: 1,
    referencia: "LIC-2026/001",
    orgao: "Prefeitura Alpha",
    proposta: "R$ *******",
    status: "Vencida",
  },
]

export default function LicitacoesPage() {
  return (
    <>
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/dashboard" className="hover:text-gray-700">Início</Link>
        <span>/</span>
        <Link href="/comercial" className="hover:text-gray-700">Comercial</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">Licitações</span>
      </nav>

      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Licitações</h1>
          <p className="text-gray-500 mt-1">Pipeline comercial, viabilidade financeira e taxa de sucesso.</p>
        </div>
        <Link href="/comercial/licitacoes/create" className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-sm font-medium hover:bg-[#1D4ED8]">
          Nova licitação
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase mb-1">Pipeline ativo</p>
          <p className="text-2xl font-bold text-gray-900">1</p>
          <p className="text-sm text-gray-500">R$ 210.000,00</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase mb-1">Taxa de sucesso</p>
          <p className="text-2xl font-bold text-gray-900">50%</p>
          <p className="text-xs text-gray-500">1 vencida(s) · 1 perdida(s)</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase mb-1">Custo de participação</p>
          <p className="text-2xl font-bold text-gray-900">R$ 26.500,00</p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-xs font-medium text-gray-500 uppercase mb-1">Margem estimada média</p>
          <p className="text-2xl font-bold text-gray-900">20%</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Referência</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Órgão</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Proposta</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Status</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-gray-500">Ações</th>
            </tr>
          </thead>
          <tbody>
            {licitacoes.map((licitacao) => (
              <tr key={licitacao.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">{licitacao.referencia}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{licitacao.orgao}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{licitacao.proposta}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                    licitacao.status === 'Participando' ? 'bg-blue-50 text-blue-700' :
                    licitacao.status === 'Perdida' ? 'bg-red-50 text-red-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {licitacao.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <Link href={`/comercial/licitacoes/${licitacao.id}`} className="text-sm text-blue-600 hover:underline">
                      Ver detalhes
                    </Link>
                    <Link href={`/comercial/licitacoes/${licitacao.id}/edit`} className="text-sm text-gray-500 hover:text-gray-700">
                      Editar licitação
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

