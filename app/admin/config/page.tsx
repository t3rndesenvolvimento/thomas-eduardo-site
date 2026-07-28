"use client"

import { useState } from "react"
import { Save, Check } from "lucide-react"

export default function ConfigPage() {
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  // Em produção, isso seria carregado do banco de dados (ex: model Settings)
  // Como é uma demo/v1, vamos mockar a interface para mostrar o módulo funcionando
  const [config, setConfig] = useState({
    defaultHourlyRate: "150",
    defaultPixKey: "123.456.789-00",
    defaultPaymentTerms: "50% na aprovação · 50% na entrega",
    webhookUrl: "",
  })

  function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }, 800)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Configurações</h1>
        <p className="text-sm text-neutral-400 mt-1">
          Defina os valores padrão que serão usados nas suas propostas.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 space-y-5">
          
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-500 mb-1.5">
              Valor da Hora Padrão (R$)
            </label>
            <input
              type="number"
              value={config.defaultHourlyRate}
              onChange={(e) => setConfig({ ...config, defaultHourlyRate: e.target.value })}
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-500 mb-1.5">
              Chave PIX Padrão
            </label>
            <input
              type="text"
              value={config.defaultPixKey}
              onChange={(e) => setConfig({ ...config, defaultPixKey: e.target.value })}
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-500 mb-1.5">
              Condições de Pagamento Padrão
            </label>
            <input
              type="text"
              value={config.defaultPaymentTerms}
              onChange={(e) => setConfig({ ...config, defaultPaymentTerms: e.target.value })}
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10"
            />
          </div>

        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[13px] font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
          >
            <Save className="size-4" />
            {saving ? "Salvando..." : "Salvar Configurações"}
          </button>
          
          {saved && (
            <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-400 animate-in fade-in slide-in-from-left-2">
              <Check className="size-4" /> Salvo com sucesso!
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
