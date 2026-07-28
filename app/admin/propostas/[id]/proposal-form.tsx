"use client"

import { useState, useEffect } from "react"
import {
  Save,
  Link2,
  Copy,
  Check,
  Plus,
  X,
  Send,
  Loader2,
  ExternalLink,
  Calculator,
  Zap,
} from "lucide-react"

type ProposalFormData = {
  clientName: string
  clientCompany: string
  greeting: string
  projectTitle: string
  projectTag: string
  readingTime: string
  objective: string
  problem: string
  solution: string
  expectedResult: string
  included: string[]
  notIncluded: string[]
  totalValue: string
  paymentTerms: string
  deadline: string
  estimatedWeeks: number
  personalNote: string
  paymentLink: string
}

type LeadData = {
  _id: string
  name: string
  company: string
  phone: string
  email: string
  painPoint: string
  budget: string
  service: string
  role: string
  proposal?: ProposalFormData
}

/* ─── Templates ──────────────────────────────────────────────────────────── */

const TEMPLATES = [
  {
    id: "landing-page",
    name: "Landing Page de Alta Conversão",
    data: {
      projectTitle: "Landing Page de Alta Conversão",
      projectTag: "Copywriting / Landing Page",
      readingTime: "4 min",
      objective: "Desenvolver uma copy de alta persuasão focada em conversão para uma única página de vendas.",
      problem: "Baixa taxa de conversão na página atual, visitantes entram e saem sem agir ou entender o real valor do produto.",
      solution: "Estruturar uma landing page baseada em dados comportamentais, com gancho forte, quebra de objeções mapeadas e CTAs claros.",
      expectedResult: "Aumento direto na taxa de conversão, reduzindo o custo de aquisição (CAC) e gerando mais leads/vendas com o mesmo tráfego.",
      included: [
        "Pesquisa de persona e concorrentes diretos",
        "Copy completa (Headline, Corpo, Oferta, CTAs)",
        "Sugestão de estrutura visual (Wireframe em texto)",
        "2 Rodadas de revisão",
      ],
      notIncluded: [
        "Design visual (Figma)",
        "Desenvolvimento web / programação",
        "Gestão de tráfego (Anúncios)",
      ],
    }
  },
  {
    id: "funil-vendas",
    name: "Funil de Vendas Completo",
    data: {
      projectTitle: "Funil de Vendas Completo",
      projectTag: "Copywriting / Funil",
      readingTime: "5 min",
      objective: "Estruturar e escrever todas as etapas do funil de vendas para maximizar o LTV e a conversão do lead em cada passo.",
      problem: "O lead entra, mas não converte. Vazamentos no funil e falta de engajamento e relacionamento após a captura inicial.",
      solution: "Criar uma jornada persuasiva desde o anúncio/captura até a página de vendas, upsell e sequência de e-mails de recuperação.",
      expectedResult: "Jornada do cliente mais fluida, aumento da taxa de conversão geral e recuperação inteligente de vendas perdidas.",
      included: [
        "Copy da Landing Page / Captura",
        "Copy da Página de Vendas principal",
        "Copy da Página de Obrigado / Upsell",
        "Sequência de 5 E-mails (Aquecimento + Vendas)",
        "Pesquisa aprofundada de mercado",
      ],
      notIncluded: [
        "Design visual e UI das páginas",
        "Automação na ferramenta de e-mail (ActiveCampaign, etc)",
        "Gestão de tráfego pago",
      ],
    }
  },
  {
    id: "vsl",
    name: "VSL (Video Sales Letter)",
    data: {
      projectTitle: "Roteiro de VSL (Video Sales Letter)",
      projectTag: "Copywriting / VSL",
      readingTime: "3 min",
      objective: "Criar um roteiro de vídeo de vendas altamente persuasivo, focado em reter a atenção e gerar o desejo de compra no final.",
      problem: "Baixa retenção nos vídeos de vendas atuais, prospectos não chegam ao pitch ou não sentem urgência de comprar no final.",
      solution: "Desenvolver um roteiro VSL com padrão cinematográfico de copy: gancho inicial magnético, história envolvente, pitch irresistível e ancoragem de preço.",
      expectedResult: "Aumento drástico no watch-time (tempo de retenção de visualização) e pico de conversão no momento da oferta.",
      included: [
        "Pesquisa de Ângulo e Big Idea",
        "Roteiro completo do vídeo (Script formatado)",
        "Instruções de cena/edição no script",
        "2 Rodadas de revisão estratégica",
      ],
      notIncluded: [
        "Produção e edição do vídeo final",
        "Locução profissional (Voice over)",
        "Design de slides de suporte",
      ],
    }
  }
]

/* ─── Helpers ────────────────────────────────────────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-500 mb-1.5">
      {children}
    </label>
  )
}

function Input({
  value,
  onChange,
  placeholder,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  value: string
  onChange: (v: string) => void
  className?: string
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className || "w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-white placeholder:text-neutral-600 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10 transition-colors"}
      {...props}
    />
  )
}

function Textarea({
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
  rows?: number
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-white placeholder:text-neutral-600 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10 transition-colors resize-none"
    />
  )
}

function ListEditor({
  items,
  onChange,
  placeholder,
}: {
  items: string[]
  onChange: (items: string[]) => void
  placeholder: string
}) {
  const [draft, setDraft] = useState("")

  function add() {
    const trimmed = draft.trim()
    if (!trimmed) return
    onChange([...items, trimmed])
    setDraft("")
  }

  function remove(index: number) {
    onChange(items.filter((_, i) => i !== index))
  }

  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2"
        >
          <span className="flex-1 text-[13px] text-neutral-300">{item}</span>
          <button
            type="button"
            onClick={() => remove(i)}
            className="shrink-0 rounded p-1 text-neutral-600 transition-colors hover:bg-white/[0.06] hover:text-red-400"
          >
            <X className="size-3.5" />
          </button>
        </div>
      ))}
      <div className="flex gap-2">
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), add())}
          placeholder={placeholder}
          className="flex-1 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 text-[13px] text-white placeholder:text-neutral-600 focus:border-white/15 focus:outline-none transition-colors"
        />
        <button
          type="button"
          onClick={add}
          className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[11px] font-bold text-neutral-400 transition-colors hover:bg-white/[0.08] hover:text-white"
        >
          <Plus className="size-3.5" /> Adicionar
        </button>
      </div>
    </div>
  )
}

/* ─── Steps ──────────────────────────────────────────────────────────────── */

const STEPS = [
  { id: "basics", label: "Projeto" },
  { id: "understanding", label: "Entendimento" },
  { id: "scope", label: "Escopo" },
  { id: "investment", label: "Investimento" },
  { id: "review", label: "Revisão" },
] as const

type StepId = (typeof STEPS)[number]["id"]

/* ─── Main Component ─────────────────────────────────────────────────────── */

export function ProposalForm({ lead }: { lead: LeadData }) {
  const firstName = lead.name?.split(" ")[0] ?? "Cliente"

  const [form, setForm] = useState<ProposalFormData>(
    lead.proposal ?? {
      clientName: firstName,
      clientCompany: lead.company || "",
      greeting: `Olá, ${firstName}.`,
      projectTitle: "",
      projectTag: "",
      readingTime: "5 min",
      objective: "",
      problem: lead.painPoint || "",
      solution: "",
      expectedResult: "",
      included: [],
      notIncluded: [
        "Identidade visual (logo, cores, tipografia)",
        "Criação de conteúdo e textos",
        "Fotografia e produção de vídeo",
        "Domínio e hospedagem (custo mensal)",
      ],
      totalValue: "",
      paymentTerms: "50% na aprovação · 50% na entrega",
      deadline: "Proposta válida por 7 dias",
      estimatedWeeks: 4,
      personalNote: "",
      paymentLink: "",
    },
  )

  const [step, setStep] = useState<StepId>("basics")
  const [saving, setSaving] = useState(false)
  const [savedLink, setSavedLink] = useState<string | null>(
    lead.proposal ? `/proposta/${lead._id}` : null,
  )
  const [copied, setCopied] = useState(false)

  // Calculator State
  const [calcMode, setCalcMode] = useState(false)
  const [hourlyRate, setHourlyRate] = useState(150)
  const [estimatedHours, setEstimatedHours] = useState(20)
  const [urgencyMult, setUrgencyMult] = useState(1)

  useEffect(() => {
    if (calcMode) {
      const total = hourlyRate * estimatedHours * urgencyMult
      const formattedTotal = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(total)
      update("totalValue", formattedTotal)

      // Estimate 20 dedicated hours per week for this project
      const weeks = Math.ceil((estimatedHours / 20) / urgencyMult)
      update("estimatedWeeks", weeks < 1 ? 1 : weeks)
    }
  }, [calcMode, hourlyRate, estimatedHours, urgencyMult])

  function update<K extends keyof ProposalFormData>(
    key: K,
    value: ProposalFormData[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function applyTemplate(data: Partial<ProposalFormData>) {
    setForm((prev) => ({ 
      ...prev, 
      ...data,
      // Preserve original painPoint if it's there, but concatenate the template's suggested problem.
      problem: prev.problem 
        ? `${prev.problem}\n\n[Sugerido]: ${data.problem || ""}`
        : data.problem || prev.problem
    }))
    // Highlight UI briefly by jumping to understanding step if already in basics
    if (step === "basics") {
      setStep("understanding")
      setTimeout(() => setStep("basics"), 200)
    }
  }

  async function save() {
    setSaving(true)
    try {
      const res = await fetch(`/api/propostas/${lead._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ proposal: form }),
      })
      const data = await res.json()
      if (data.success) {
        setSavedLink(data.link)
        setStep("review")
      }
    } catch (err) {
      console.error(err)
    } finally {
      setSaving(false)
    }
  }

  function copyLink() {
    if (!savedLink) return
    const fullUrl = `${window.location.origin}${savedLink}`
    navigator.clipboard.writeText(fullUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const currentIndex = STEPS.findIndex((s) => s.id === step)

  return (
    <div className="space-y-6">
      {/* ─── Templates Quick Apply ───────────────────────────── */}
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
        <div className="flex items-center gap-1.5 shrink-0 px-2 py-1 bg-white/[0.04] border border-white/[0.06] rounded-md">
          <Zap className="size-3.5 text-amber-400" />
          <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-amber-400/80">
            Templates:
          </span>
        </div>
        {TEMPLATES.map((tpl) => (
          <button
            key={tpl.id}
            type="button"
            onClick={() => applyTemplate(tpl.data)}
            className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium text-neutral-300 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            {tpl.name}
          </button>
        ))}
      </div>

      {/* ─── Step Indicator ──────────────────────────────────── */}
      <div className="flex items-center gap-1">
        {STEPS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setStep(s.id)}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 text-[11px] font-bold uppercase tracking-[0.08em] transition-colors ${
              step === s.id
                ? "bg-white/[0.08] text-white"
                : i < currentIndex
                  ? "text-emerald-400/70 hover:bg-white/[0.04]"
                  : "text-neutral-600 hover:bg-white/[0.04] hover:text-neutral-400"
            }`}
          >
            <span
              className={`flex size-5 items-center justify-center rounded-full text-[10px] ${
                i < currentIndex
                  ? "bg-emerald-500/20 text-emerald-400"
                  : step === s.id
                    ? "bg-white/10 text-white"
                    : "bg-white/[0.04] text-neutral-600"
              }`}
            >
              {i < currentIndex ? <Check className="size-3" /> : i + 1}
            </span>
            <span className="hidden sm:inline">{s.label}</span>
          </button>
        ))}
      </div>

      {/* ─── Step Content ────────────────────────────────────── */}
      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300">
        {step === "basics" && (
          <div className="space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <h2 className="text-lg font-bold">Dados do Projeto</h2>
            <p className="text-sm text-neutral-500">
              Defina o título, tag e saudação que o cliente verá na proposta.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label>Título do Projeto</Label>
                <Input
                  value={form.projectTitle}
                  onChange={(v) => update("projectTitle", v)}
                  placeholder="Ex: Landing Page de Alta Conversão"
                />
              </div>
              <div>
                <Label>Tag do Projeto</Label>
                <Input
                  value={form.projectTag}
                  onChange={(v) => update("projectTag", v)}
                  placeholder="Ex: Copywriting / Funil"
                />
              </div>
              <div>
                <Label>Saudação Personalizada</Label>
                <Input
                  value={form.greeting}
                  onChange={(v) => update("greeting", v)}
                  placeholder="Olá, João."
                />
              </div>
              <div>
                <Label>Tempo de Leitura</Label>
                <Input
                  value={form.readingTime}
                  onChange={(v) => update("readingTime", v)}
                  placeholder="5 min"
                />
              </div>
            </div>
          </div>
        )}

        {step === "understanding" && (
          <div className="space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <h2 className="text-lg font-bold">Entendimento do Projeto</h2>
            <p className="text-sm text-neutral-500">
              Descreva o que você entendeu do projeto e a solução que vai propor.
            </p>

            <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.05] p-4 mb-4">
              <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-amber-500 mb-3 flex items-center gap-2">
                <Zap className="size-3.5" />
                Respostas do Cliente no Diagnóstico
              </div>
              <div className="grid gap-3 sm:grid-cols-2 text-sm text-amber-500/80">
                <div>
                  <strong className="block text-xs uppercase opacity-70 mb-0.5">Serviço de Interesse</strong>
                  {lead.service || "Não informado"}
                </div>
                <div>
                  <strong className="block text-xs uppercase opacity-70 mb-0.5">Orçamento</strong>
                  {lead.budget || "Não informado"}
                </div>
                <div className="sm:col-span-2">
                  <strong className="block text-xs uppercase opacity-70 mb-0.5">Dor / Desafio (Problema)</strong>
                  {lead.painPoint || "Não informado"}
                </div>
              </div>
            </div>

            <div>
              <Label>Objetivo</Label>
              <Textarea
                value={form.objective}
                onChange={(v) => update("objective", v)}
                placeholder="O que o projeto busca resolver ou alcançar..."
              />
            </div>
            <div>
              <Label>Problema Identificado</Label>
              <Textarea
                value={form.problem}
                onChange={(v) => update("problem", v)}
                placeholder="A dor que o cliente descreveu..."
              />
            </div>
            <div>
              <Label>Solução Proposta</Label>
              <Textarea
                value={form.solution}
                onChange={(v) => update("solution", v)}
                placeholder="O que você vai entregar para resolver..."
              />
            </div>
            <div>
              <Label>Resultado Esperado</Label>
              <Textarea
                value={form.expectedResult}
                onChange={(v) => update("expectedResult", v)}
                placeholder="O impacto concreto que o cliente pode esperar..."
              />
            </div>
          </div>
        )}

        {step === "scope" && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <h2 className="text-lg font-bold">Escopo da Entrega</h2>
            <p className="text-sm text-neutral-500">
              Liste o que está incluído e o que NÃO está incluído nesta proposta.
            </p>
            <div>
              <Label>Incluído na proposta</Label>
              <ListEditor
                items={form.included}
                onChange={(v) => update("included", v)}
                placeholder="Ex: Copy da Landing Page, 2 revisões..."
              />
            </div>
            <div>
              <Label>Não incluído</Label>
              <ListEditor
                items={form.notIncluded}
                onChange={(v) => update("notIncluded", v)}
                placeholder="Ex: Design visual (Figma), Hospedagem..."
              />
            </div>
          </div>
        )}

        {step === "investment" && (
          <div className="space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold">Investimento e Cronograma</h2>
                <p className="text-sm text-neutral-500 mt-1">
                  Defina o valor, condições de pagamento e prazo estimado.
                </p>
              </div>

              {/* Calculator Toggle */}
              <div className="flex items-center gap-1 rounded-lg border border-white/[0.06] bg-black/20 p-1 shrink-0">
                <button
                  type="button"
                  onClick={() => setCalcMode(false)}
                  className={`rounded-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors ${!calcMode ? "bg-white/[0.08] text-white" : "text-neutral-500 hover:text-neutral-300"}`}
                >
                  Manual
                </button>
                <button
                  type="button"
                  onClick={() => setCalcMode(true)}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors ${calcMode ? "bg-emerald-500/20 text-emerald-400" : "text-neutral-500 hover:text-neutral-300"}`}
                >
                  <Calculator className="size-3.5" /> Automático
                </button>
              </div>
            </div>

            {/* Calculator Panel */}
            {calcMode && (
              <div className="grid gap-4 sm:grid-cols-3 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.03] p-5 animate-in slide-in-from-top-2">
                <div>
                  <Label>Valor da Hora (R$)</Label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-[13px] text-emerald-500 font-bold">R$</span>
                    <input
                      type="number"
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(Number(e.target.value))}
                      className="w-full rounded-lg border border-emerald-500/30 bg-emerald-500/[0.05] pl-9 pr-3.5 py-2.5 text-[13px] text-emerald-100 font-medium focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <Label>Horas Estimadas</Label>
                  <div className="relative">
                    <input
                      type="number"
                      value={estimatedHours}
                      onChange={(e) => setEstimatedHours(Number(e.target.value))}
                      className="w-full rounded-lg border border-emerald-500/30 bg-emerald-500/[0.05] px-3.5 py-2.5 text-[13px] text-emerald-100 font-medium focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-colors"
                    />
                    <span className="absolute right-3 top-2.5 text-[13px] text-emerald-500/60 font-bold">hrs</span>
                  </div>
                </div>
                <div>
                  <Label>Taxa de Urgência</Label>
                  <select
                    value={urgencyMult}
                    onChange={(e) => setUrgencyMult(Number(e.target.value))}
                    className="w-full rounded-lg border border-emerald-500/30 bg-emerald-500/[0.05] px-3.5 py-2.5 text-[13px] text-emerald-100 font-medium focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 transition-colors appearance-none"
                  >
                    <option value={1} className="bg-neutral-900 text-white">Normal (1x)</option>
                    <option value={1.5} className="bg-neutral-900 text-white">Prioridade (1.5x)</option>
                    <option value={2} className="bg-neutral-900 text-white">Urgente/Para ontem (2x)</option>
                  </select>
                </div>
              </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2 mt-2">
              <div>
                <Label>Valor Total</Label>
                <Input
                  value={form.totalValue}
                  onChange={(v) => update("totalValue", v)}
                  placeholder="R$ 3.500"
                  disabled={calcMode}
                  className={`w-full rounded-lg px-3.5 py-2.5 text-[13px] transition-colors focus:outline-none ${calcMode ? "border border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-400 font-bold opacity-100 cursor-not-allowed" : "border border-white/[0.08] bg-white/[0.03] text-white focus:border-white/20 focus:ring-1 focus:ring-white/10"}`}
                />
              </div>
              <div>
                <Label>Semanas Estimadas</Label>
                <div className="relative">
                  <input
                    type="number"
                    min={1}
                    max={52}
                    value={form.estimatedWeeks}
                    disabled={calcMode}
                    onChange={(e) =>
                      update("estimatedWeeks", Number(e.target.value))
                    }
                    className={`w-full rounded-lg px-3.5 py-2.5 text-[13px] transition-colors focus:outline-none ${calcMode ? "border border-emerald-500/30 bg-emerald-500/[0.08] text-emerald-400 font-bold opacity-100 cursor-not-allowed" : "border border-white/[0.08] bg-white/[0.03] text-white focus:border-white/20 focus:ring-1 focus:ring-white/10"}`}
                  />
                  {calcMode && <span className="absolute right-3 top-2.5 text-[13px] text-emerald-500/60 font-bold text-xs uppercase tracking-wider">Auto</span>}
                </div>
              </div>
              <div>
                <Label>Forma de Pagamento</Label>
                <Input
                  value={form.paymentTerms}
                  onChange={(v) => update("paymentTerms", v)}
                  placeholder="50% na aprovação · 50% na entrega"
                />
              </div>
              <div>
                <Label>Validade da Proposta</Label>
                <Input
                  value={form.deadline}
                  onChange={(v) => update("deadline", v)}
                  placeholder="Proposta válida por 7 dias"
                />
              </div>
            </div>
            <div>
              <Label>Link de Pagamento (Checkout ou Chave PIX) - Opcional</Label>
              <Input
                value={form.paymentLink || ""}
                onChange={(v) => update("paymentLink", v)}
                placeholder="Ex: https://pay.kiwify.com.br/... ou chave PIX"
                className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-[13px] text-white placeholder:text-neutral-600 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/10 transition-colors mb-4"
              />
            </div>
            <div>
              <Label>Nota Pessoal para o Cliente</Label>
              <Textarea
                value={form.personalNote}
                onChange={(v) => update("personalNote", v)}
                placeholder="Uma mensagem pessoal para fechar a proposta..."
                rows={4}
              />
            </div>
          </div>
        )}

        {step === "review" && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <h2 className="text-lg font-bold">Revisão e Link</h2>

            {savedLink ? (
              <div className="space-y-4">
                <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.05] p-5">
                  <div className="flex items-center gap-2 text-emerald-400 mb-3">
                    <Check className="size-4" />
                    <span className="text-sm font-bold">
                      Proposta salva com sucesso!
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 mb-4">
                    Copie o link abaixo e envie para{" "}
                    <strong className="text-white">{lead.name}</strong>:
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 rounded-lg border border-white/[0.08] bg-black/40 px-4 py-3 font-mono text-[13px] text-neutral-300 truncate">
                      {typeof window !== "undefined"
                        ? `${window.location.origin}${savedLink}`
                        : savedLink}
                    </div>
                    <button
                      type="button"
                      onClick={copyLink}
                      className="flex items-center gap-1.5 rounded-lg bg-white px-4 py-3 text-[12px] font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {copied ? (
                        <Check className="size-4" />
                      ) : (
                        <Copy className="size-4" />
                      )}
                      {copied ? "Copiado!" : "Copiar"}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={savedLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.04] px-5 py-3 text-[13px] font-medium text-neutral-300 transition-colors hover:bg-white/[0.08] hover:text-white"
                  >
                    <ExternalLink className="size-4" /> Visualizar proposta
                  </a>
                  <a
                    href={`https://wa.me/${(lead.phone ?? "").replace(/\D/g, "")}?text=${encodeURIComponent(`Olá ${firstName}! Preparei uma proposta personalizada para você. Confira aqui: ${typeof window !== "undefined" ? window.location.origin : ""}${savedLink}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 text-[13px] font-bold text-white transition-colors hover:bg-[#20b858]"
                  >
                    <Send className="size-4" /> Enviar link via WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-neutral-400">
                  Revise os dados preenchidos e clique em salvar para gerar o
                  link da proposta.
                </p>

                {/* Summary */}
                <div className="grid gap-3 sm:grid-cols-2">
                  <SummaryCard label="Projeto" value={form.projectTitle || "—"} />
                  <SummaryCard label="Tag" value={form.projectTag || "—"} />
                  <SummaryCard label="Valor" value={form.totalValue || "—"} />
                  <SummaryCard
                    label="Prazo"
                    value={`${form.estimatedWeeks} semanas`}
                  />
                  <SummaryCard
                    label="Itens incluídos"
                    value={`${form.included.length} itens`}
                  />
                  <SummaryCard
                    label="Pagamento"
                    value={form.paymentTerms || "—"}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* ─── Bottom Actions ──────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            const i = currentIndex - 1
            if (i >= 0) setStep(STEPS[i].id)
          }}
          disabled={currentIndex === 0}
          className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-[12px] font-bold text-neutral-400 transition-colors hover:bg-white/[0.06] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Voltar
        </button>

        {step === "review" || step === "investment" ? (
          <button
            type="button"
            onClick={step === "review" ? save : () => setStep("review")}
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[12px] font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Save className="size-4" />
            )}
            {step === "review" ? "Salvar e Gerar Link" : "Revisar"}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              const i = currentIndex + 1
              if (i < STEPS.length) setStep(STEPS[i].id)
            }}
            className="rounded-lg bg-white px-5 py-2.5 text-[12px] font-bold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Próximo
          </button>
        )}
      </div>
    </div>
  )
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-4">
      <div className="text-[10px] font-bold uppercase tracking-[0.1em] text-neutral-600 mb-1">
        {label}
      </div>
      <div className="text-[14px] font-medium text-white">{value}</div>
    </div>
  )
}
