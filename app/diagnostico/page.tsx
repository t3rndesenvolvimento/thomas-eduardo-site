"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PageAnimator } from "@/components/page-animator"
import { CONTACT, SERVICES } from "@/lib/data"
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react"
import { CtaLink } from "@/components/ui/cta"
import { Coolshape } from "coolshapes-react"

type FormData = {
  name: string
  email: string
  phone: string
  company: string
  role: string
  service: string
  painPoint: string
  budget: string
}

const PAIN_POINTS: Record<string, string[]> = {
  "Produtos Digitais e Sistemas": [
    "Preciso de um sistema do zero",
    "Sistema atual lento ou ineficiente",
    "Preciso integrar múltiplas plataformas",
    "Automatizar processos manuais",
  ],
  "Sites e Landing Pages": [
    "Design desatualizado",
    "Baixa conversão de leads",
    "Site lento ou caindo",
    "Lançamento de novo produto/campanha",
  ],
  "APIs e Back-end": [
    "Criar uma API escalável",
    "Integração com sistemas legados",
    "Problemas de segurança ou performance",
    "Migrar banco de dados",
  ],
}

const BUDGETS = [
  "Até R$ 5.000",
  "R$ 5.000 a R$ 15.000",
  "Acima de R$ 15.000",
  "Ainda não defini",
]

export default function DiagnosticoPage() {
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    service: "",
    painPoint: "",
    budget: "",
  })

  const updateForm = (key: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  const nextStep = () => {
    setErrorMessage(null)
    setStep((s) => Math.min(s + 1, 5))
  }
  const prevStep = () => {
    setErrorMessage(null)
    setStep((s) => Math.max(s - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        throw new Error("Erro ao salvar lead")
      }

      setStep(6) // Step 6: Tela de Sucesso
    } catch (error) {
      console.error("Erro ao salvar lead:", error)
      setErrorMessage(
        "Houve um problema de conexão. Por favor, tente enviar novamente.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const currentPainPoints = formData.service
    ? PAIN_POINTS[formData.service] || PAIN_POINTS["Sites e Landing Pages"]
    : []

  return (
    <main className="min-h-screen bg-black text-white flex flex-col font-sans selection:bg-white selection:text-black">
      <PageAnimator />

      <div className="pt-8 sm:pt-12 px-6 flex-1 flex flex-col max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          className="pointer-events-none absolute right-10 top-20 z-0 opacity-20 mix-blend-screen"
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="size-32 sm:size-48">
            <Coolshape type="ellipse" index={2} noise={true} />
          </div>
        </motion.div>
        <CtaLink
          href="/"
          variant="ghost"
          size="sm"
          className="mb-8 w-fit gap-2 px-0 text-white/60 hover:text-white hover:bg-transparent"
        >
          <ArrowLeft className="size-4" /> Voltar para o início
        </CtaLink>

        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
            Etapa {step} de 5
          </p>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={{ width: "20%" }}
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400 shadow-sm"
          >
            <AlertCircle className="size-5 shrink-0 text-red-400" />
            <p className="text-sm font-medium">{errorMessage}</p>
          </motion.div>
        )}

        <form
          onSubmit={
            step === 5
              ? handleSubmit
              : (e) => {
                e.preventDefault()
                nextStep()
              }
          }
          className="flex-1 pb-24"
        >
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[6rem] font-display font-bold text-white tracking-tight leading-[0.9]">
                  Vamos começar!
                </h1>
                <p className="text-white/70 text-xl sm:text-3xl font-light mt-4">
                  Me diga seu nome e formas de contato.
                </p>
                <div className="space-y-8 mt-4 pb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-white/40 mb-3 block">
                      Seu nome completo
                    </label>
                    <input
                      type="text"
                      required
                      autoFocus
                      placeholder="Ex: João da Silva"
                      className="w-full bg-transparent border-b-2 border-white/15 pb-4 text-3xl sm:text-5xl md:text-[4rem] text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                      value={formData.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                    />
                  </motion.div>

                  <AnimatePresence>
                    {formData.name.trim().length > 2 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <div className="pt-4">
                          <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-white/40 mb-3 block">
                            Seu melhor E-mail
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="Ex: joao@empresa.com"
                            className="w-full bg-transparent border-b-2 border-white/15 pb-4 text-3xl sm:text-5xl md:text-[4rem] text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                            value={formData.email}
                            onChange={(e) => updateForm("email", e.target.value)}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {formData.name.trim().length > 2 && formData.email.includes("@") && formData.email.includes(".") && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <div className="pt-4">
                          <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-white/40 mb-3 block">
                            Seu WhatsApp
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="Ex: (11) 99999-9999"
                            className="w-full bg-transparent border-b-2 border-white/15 pb-4 text-3xl sm:text-5xl md:text-[4rem] text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                            value={formData.phone}
                            onChange={(e) => updateForm("phone", e.target.value)}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[6rem] font-display font-bold text-white tracking-tight leading-[0.9]">
                  Sobre o seu negócio
                </h1>
                <p className="text-white/70 text-xl sm:text-3xl font-light mt-4">
                  Como posso conhecer melhor sua operação?
                </p>

                <div className="space-y-10 mt-8 pb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-white/40 mb-3 block">
                      Nome da Empresa ou Site
                    </label>
                    <input
                      type="text"
                      required
                      autoFocus
                      placeholder="Ex: Minha Empresa"
                      className="w-full bg-transparent border-b-2 border-white/15 pb-4 text-3xl sm:text-5xl md:text-[4rem] text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                      value={formData.company}
                      onChange={(e) => updateForm("company", e.target.value)}
                    />
                  </motion.div>
                  <AnimatePresence>
                    {formData.company.trim().length > 2 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: 20 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        <div className="pt-4">
                          <label className="text-sm sm:text-base font-bold uppercase tracking-wider text-white/40 mb-3 block">
                            Seu cargo atual
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Ex: CEO, Founder"
                            className="w-full bg-transparent border-b-2 border-white/15 pb-4 text-3xl sm:text-5xl md:text-[4rem] text-white placeholder:text-white/20 focus:outline-none focus:border-white transition-colors"
                            value={formData.role}
                            onChange={(e) => updateForm("role", e.target.value)}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[6rem] font-display font-bold text-white tracking-tight leading-[0.9]">
                  Do que você precisa?
                </h1>
                <p className="text-white/70 text-xl sm:text-3xl font-light mt-4">
                  Selecione o serviço que melhor atende sua necessidade hoje.
                </p>

                <div className="flex flex-col gap-3 mt-6">
                  {SERVICES.map((srv) => (
                    <button
                      key={srv.title}
                      type="button"
                      onClick={() => {
                        updateForm("service", srv.title)
                        updateForm("painPoint", "")
                        setTimeout(nextStep, 350)
                      }}
                      className={`text-left px-6 py-6 sm:px-8 sm:py-8 rounded-3xl border transition-all duration-300 flex flex-col justify-center ${formData.service === srv.title
                          ? "bg-white text-black border-white shadow-2xl scale-[1.02]"
                          : "bg-white/[0.04] border-white/10 text-white hover:border-white/30 hover:bg-white/[0.07]"
                        }`}
                    >
                      <div className="flex items-center justify-between w-full mb-2">
                        <span className="text-2xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight">{srv.title}</span>
                        {formData.service === srv.title && (
                          <CheckCircle2 className="size-8 md:size-10 text-black shrink-0 ml-4" />
                        )}
                      </div>
                      <span
                        className={`text-sm mt-1 opacity-80 ${formData.service === srv.title
                            ? "text-black/70"
                            : "text-white/50"
                          }`}
                      >
                        {srv.description}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[6rem] font-display font-bold text-white tracking-tight leading-[0.9]">
                  Qual o seu maior desafio?
                </h1>
                <p className="text-white/70 text-xl sm:text-3xl font-light mt-4">
                  O que te motivou a buscar essa solução?
                </p>

                <div className="flex flex-col gap-3 mt-6">
                  {currentPainPoints.map((pain) => (
                    <button
                      key={pain}
                      type="button"
                      onClick={() => {
                        updateForm("painPoint", pain)
                        setTimeout(nextStep, 350)
                      }}
                      className={`text-left px-6 py-6 sm:px-8 sm:py-8 rounded-3xl border transition-all duration-300 flex items-center justify-between gap-4 ${formData.painPoint === pain
                          ? "bg-white text-black border-white shadow-2xl scale-[1.02]"
                          : "bg-white/[0.04] border-white/10 text-white hover:border-white/30 hover:bg-white/[0.07]"
                        }`}
                    >
                      <span className="text-2xl sm:text-4xl font-display font-medium tracking-tight leading-tight">{pain}</span>
                      {formData.painPoint === pain && (
                        <CheckCircle2 className="size-8 md:size-10 text-black shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <h1 className="text-4xl sm:text-6xl md:text-[5rem] lg:text-[6rem] font-display font-bold text-white tracking-tight leading-[0.9]">
                  Para finalizarmos
                </h1>
                <p className="text-white/70 text-xl sm:text-3xl font-light mt-4">
                  Qual o orçamento previsto para esse projeto?
                </p>
                <p className="text-sm text-white/40 mt-[-1rem]">
                  Isso me ajuda a enviar a melhor proposta por e-mail para você.
                </p>

                <div className="flex flex-col gap-3 mt-6">
                  {BUDGETS.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => updateForm("budget", budget)}
                      className={`text-left px-6 py-6 sm:px-8 sm:py-8 rounded-3xl border transition-all duration-300 flex items-center justify-between gap-4 ${formData.budget === budget
                          ? "bg-white text-black border-white shadow-2xl scale-[1.02]"
                          : "bg-white/[0.04] border-white/10 text-white hover:border-white/30 hover:bg-white/[0.07]"
                        }`}
                    >
                      <span className="text-2xl sm:text-4xl font-display font-medium tracking-tight leading-tight">{budget}</span>
                      {formData.budget === budget && (
                        <CheckCircle2 className="size-8 md:size-10 text-black shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center gap-6 py-12"
              >
                <div className="size-32 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-6">
                  <CheckCircle2 className="size-16 text-emerald-400" />
                </div>
                <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-display font-bold text-white tracking-tight leading-none">
                  Tudo certo!
                </h1>
                <p className="text-white/70 text-xl sm:text-3xl font-light mt-4 max-w-2xl mx-auto">
                  Recebi as informações do seu projeto. Vou analisar todos os detalhes e enviarei uma proposta personalizada em breve.
                </p>
                <div className="mt-8">
                  <CtaLink href="/" className="px-8">
                    Voltar para a página inicial
                  </CtaLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {step < 6 && (
            <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-white/10 p-4 sm:p-6 z-10">
              <div className="max-w-4xl mx-auto flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="text-white/60 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2"
                  >
                    <ArrowLeft className="size-4" /> Anterior
                  </button>
                ) : (
                  <div />
                )}

                {step < 5 ? (
                  <button
                    type="submit"
                    disabled={
                      (step === 1 &&
                        (!formData.name ||
                          !formData.phone ||
                          !formData.email)) ||
                      (step === 2 && (!formData.company || !formData.role)) ||
                      (step === 3 && !formData.service) ||
                      (step === 4 && !formData.painPoint)
                    }
                    className="bg-white text-black px-8 py-4 rounded-xl uppercase tracking-widest text-xs font-bold flex items-center gap-2 shadow-lg transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    Próximo <ArrowRight className="size-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!formData.budget || isSubmitting}
                    className="bg-white text-black px-8 py-4 rounded-xl uppercase tracking-widest text-xs font-bold flex items-center gap-2 shadow-lg transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Enviando..." : "Receber Proposta"}{" "}
                    <ArrowRight className="size-4" />
                  </button>
                )}
              </div>
            </div>
          )}
        </form>
      </div>
    </main>
  )
}
