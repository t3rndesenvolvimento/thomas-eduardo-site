import connectToDatabase from "@/lib/db"
import Lead from "@/models/Lead"
import Link from "next/link"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  await connectToDatabase()
  const leads = await Lead.find({}).sort({ createdAt: -1 })

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-semibold tracking-tight">Leads Capturados</h1>
          <p className="text-gray-500 mt-1">Acompanhe e gerencie os formulários de diagnóstico preenchidos.</p>
        </div>
        <div className="bg-black text-white rounded-full px-4 py-1 text-sm font-bold">
          {leads.length} leads
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-widest text-gray-500">
            <tr>
              <th className="px-6 py-4 font-bold">Data</th>
              <th className="px-6 py-4 font-bold">Nome & Empresa</th>
              <th className="px-6 py-4 font-bold">Desafio & Orçamento</th>
              <th className="px-6 py-4 font-bold">Status</th>
              <th className="px-6 py-4 font-bold text-right">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {leads.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                  Nenhum lead capturado ainda.
                </td>
              </tr>
            )}
            {leads.map((lead) => (
              <tr key={lead._id.toString()} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-500">
                  {format(new Date(lead.createdAt), "dd MMM yyyy, HH:mm", { locale: ptBR })}
                </td>
                <td className="px-6 py-4">
                  <div className="font-bold text-black">{lead.name}</div>
                  <div className="text-sm text-gray-500">{lead.company} • {lead.role}</div>
                  <div className="text-sm text-blue-600 mt-1">{lead.phone}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{lead.painPoint}</div>
                  <div className="text-sm text-gray-500">{lead.budget}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    lead.status === "novo" ? "bg-green-100 text-green-800" :
                    lead.status === "proposta" ? "bg-blue-100 text-blue-800" :
                    "bg-gray-100 text-gray-800"
                  }`}>
                    {lead.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <Link 
                    href={`/admin/propostas/${lead._id.toString()}`}
                    className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-gray-100 hover:text-black shadow-sm"
                  >
                    Gerar Proposta
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
