"use client"

import { useState, useEffect } from "react"
import { Save, Check, Loader2 } from "lucide-react"

export default function ConfigPage() {
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saved, setSaved] = useState(false)

  const [config, setConfig] = useState({
    hourlyRate: 150,
    pixKey: "",
    whatsappPhone: "5511977070209",
    emailNotification: "contato@thomaseduardo.com.br",
  })

  useEffect(() => {
    async function loadConfig() {
      try {
        const res = await fetch("/api/config")
        const data = await res.json()
        if (data.success && data.config) {
          setConfig({
            hourlyRate: data.config.hourlyRate ?? 150,
            pixKey: data.config.pixKey ?? "",
            whatsappPhone: data.config.whatsappPhone ?? "5511977070209",
            emailNotification: data.config.emailNotification ?? "contato@thomaseduardo.com.br",
          })
        }
      } catch (err) {
        console.error("Erro ao carregar configurações:", err)
      } finally {
        setLoading(false)
      }
    }
    loadConfig()
  }, [])

  async function handleSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    try {
      const res = await fetch("/api/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      })
      const data = await res.json()
      if (data.success) {
        setSaved(true)
        setTimeout(() => setSaved(false), 3000)
      }
    } catch (err) {
      console.error("Erro ao salvar configurações:", err)
      alert("Houve um erro ao salvar as configurações.")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="size-6 animate-spin text-neutral-400" />
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Configurações</h1>
        <p className="text-sm text-neutral-400 mt-1">
          Defina os valores padrão da sua empresa que serão usados nas propostas e nos contatos.
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
              value={config.hourlyRate}
              onChange={(e) => setConfig({ ...config, hourlyRate: Number(e.target.value) })}
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10"
              placeholder="150"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-500 mb-1.5">
              Chave PIX Padrão para Recebimento
            </label>
            <input
              type="text"
              value={config.pixKey}
              onChange={(e) => setConfig({ ...config, pixKey: e.target.value })}
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10"
              placeholder="ex: chave.pix@suaempresa.com ou CPF/CNPJ"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-500 mb-1.5">
              Telefone WhatsApp (DDD + Número)
            </label>
            <input
              type="text"
              value={config.whatsappPhone}
              onChange={(e) => setConfig({ ...config, whatsappPhone: e.target.value })}
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10"
              placeholder="5511999999999"
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-500 mb-1.5">
              E-mail de Notificação de Leads
            </label>
            <input
              type="email"
              value={config.emailNotification}
              onChange={(e) => setConfig({ ...config, emailNotification: e.target.value })}
              className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-white focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10"
              placeholder="seu@email.com"
            />
          </div>

        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[13px] font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
          >
            {saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}
            {saving ? "Salvando..." : "Salvar Configurações"}
          </button>
          
          {saved && (
            <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-400 animate-in fade-in slide-in-from-left-2">
              <Check className="size-4" /> Salvo no banco de dados!
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
