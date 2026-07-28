"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PageAnimator } from "@/components/page-animator"
import { CONTACT, SERVICES } from "@/lib/data"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { CtaLink } from "@/components/ui/cta"

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

  const nextStep = () => setStep((s) => Math.min(s + 1, 5))
  const prevStep = () => setStep((s) => Math.max(s - 1, 1))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
    } catch (error) {
      console.error("Erro ao salvar lead:", error)
    }
    
    // Format message for WhatsApp
    const text = `Olá Thomas! Acabei de preencher o diagnóstico.
    
*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Empresa:* ${formData.company}
*Serviço de Interesse:* ${formData.service}
*Principal Desafio:* ${formData.painPoint}
*Orçamento Previsto:* ${formData.budget}`

    const encodedText = encodeURIComponent(text)
    const baseUrl = CONTACT.whatsapp_real || "https://wa.me/5511977070209"
    window.location.href = `${baseUrl}?text=${encodedText}`
    setIsSubmitting(false)
  }

  const currentPainPoints = formData.service ? PAIN_POINTS[formData.service] || PAIN_POINTS["Sites e Landing Pages"] : []

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <PageAnimator />

      <div className="pt-8 sm:pt-12 px-6 flex-1 flex flex-col max-w-4xl mx-auto w-full">
        <CtaLink href="/" variant="ghost" size="sm" className="mb-8 w-fit gap-2 px-0 text-gray-600 hover:text-black hover:bg-transparent">
          <ArrowLeft className="size-4" /> Voltar para o início
        </CtaLink>

        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">Etapa {step} de 5</p>
          <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-black"
              initial={{ width: "20%" }}
              animate={{ width: `${(step / 5) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <form onSubmit={step === 5 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }} className="flex-1 pb-24">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col gap-6"
              >
                <h1 className="text-3xl sm:text-5xl font-display font-semibold text-black tracking-tight">
                  Vamos começar!
                </h1>
                <p className="text-gray-700 text-lg sm:text-xl">Me diga seu nome e formas de contato.</p>
                <div className="space-y-8 mt-4">
                  <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2 block">Seu nome completo</label>
                    <input
                      type="text"
                      required
                      autoFocus
                      placeholder="Ex: João da Silva"
                      className="w-full bg-transparent border-b-2 border-gray-200 pb-3 text-xl sm:text-3xl text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                      value={formData.name}
                      onChange={(e) => updateForm("name", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2 block">Seu melhor E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: joao@empresa.com"
                      className="w-full bg-transparent border-b-2 border-gray-200 pb-3 text-xl sm:text-3xl text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                      value={formData.email}
                      onChange={(e) => updateForm("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2 block">Seu WhatsApp</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: (11) 99999-9999"
                      className="w-full bg-transparent border-b-2 border-gray-200 pb-3 text-xl sm:text-3xl text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                      value={formData.phone}
                      onChange={(e) => updateForm("phone", e.target.value)}
                    />
                  </div>
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
                <h1 className="text-3xl sm:text-5xl font-display font-semibold text-black tracking-tight">
                  Sobre o seu negócio
                </h1>
                <p className="text-gray-700 text-lg sm:text-xl">Como posso conhecer melhor sua operação?</p>
                
                <div className="space-y-10 mt-8">
                  <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2 block">Nome da Empresa ou Site</label>
                    <input
                      type="text"
                      required
                      autoFocus
                      placeholder="Ex: Minha Empresa / www.site.com"
                      className="w-full bg-transparent border-b-2 border-gray-200 pb-3 text-xl sm:text-3xl text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                      value={formData.company}
                      onChange={(e) => updateForm("company", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-gray-600 mb-2 block">Seu cargo atual</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: CEO, Diretor de Marketing, Founder"
                      className="w-full bg-transparent border-b-2 border-gray-200 pb-3 text-xl sm:text-3xl text-black placeholder:text-gray-400 focus:outline-none focus:border-black transition-colors"
                      value={formData.role}
                      onChange={(e) => updateForm("role", e.target.value)}
                    />
                  </div>
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
                <h1 className="text-3xl sm:text-5xl font-display font-semibold text-black tracking-tight">
                  Do que você precisa?
                </h1>
                <p className="text-gray-700 text-lg sm:text-xl">Selecione o serviço que melhor atende sua necessidade hoje.</p>
                
                <div className="flex flex-col gap-3 mt-6">
                  {SERVICES.map((srv) => (
                    <button
                      key={srv.title}
                      type="button"
                      onClick={() => {
                        updateForm("service", srv.title)
                        updateForm("painPoint", "") // reset pain point
                        setTimeout(nextStep, 350)
                      }}
                      className={`text-left px-6 py-5 rounded-xl border-2 transition-all duration-200 flex flex-col justify-center shadow-sm hover:shadow-md ${
                        formData.service === srv.title 
                          ? "bg-black text-white border-black" 
                          : "bg-white border-gray-200 text-gray-800 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-lg font-bold">{srv.title}</span>
                        {formData.service === srv.title && <CheckCircle2 className="size-6 text-white" />}
                      </div>
                      <span className={`text-sm mt-1 opacity-80 ${formData.service === srv.title ? "text-gray-300" : "text-gray-500"}`}>{srv.description}</span>
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
                <h1 className="text-3xl sm:text-5xl font-display font-semibold text-black tracking-tight">
                  Qual o seu maior desafio?
                </h1>
                <p className="text-gray-700 text-lg sm:text-xl">O que te motivou a buscar essa solução?</p>
                
                <div className="flex flex-col gap-3 mt-6">
                  {currentPainPoints.map((pain) => (
                    <button
                      key={pain}
                      type="button"
                      onClick={() => {
                        updateForm("painPoint", pain)
                        setTimeout(nextStep, 350)
                      }}
                      className={`text-left px-6 py-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between shadow-sm hover:shadow-md ${
                        formData.painPoint === pain 
                          ? "bg-black text-white border-black" 
                          : "bg-white border-gray-200 text-gray-800 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-lg font-medium">{pain}</span>
                      {formData.painPoint === pain && <CheckCircle2 className="size-6 text-white" />}
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
                <h1 className="text-3xl sm:text-5xl font-display font-semibold text-black tracking-tight">
                  Para finalizarmos
                </h1>
                <p className="text-gray-700 text-lg sm:text-xl">Qual o orçamento previsto para esse projeto?</p>
                <p className="text-sm text-gray-500 mt-[-1rem]">Isso me ajuda a enviar a melhor proposta por e-mail para você.</p>
                
                <div className="flex flex-col gap-3 mt-6">
                  {BUDGETS.map((budget) => (
                    <button
                      key={budget}
                      type="button"
                      onClick={() => updateForm("budget", budget)}
                      className={`text-left px-6 py-5 rounded-xl border-2 transition-all duration-200 flex items-center justify-between shadow-sm hover:shadow-md ${
                        formData.budget === budget 
                          ? "bg-black text-white border-black" 
                          : "bg-white border-gray-200 text-gray-800 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-lg font-medium">{budget}</span>
                      {formData.budget === budget && <CheckCircle2 className="size-6 text-white" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-200 p-4 sm:p-6 z-10">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-gray-700 hover:text-black transition-colors uppercase tracking-widest text-xs font-bold flex items-center gap-2"
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
                    (step === 1 && (!formData.name || !formData.phone || !formData.email)) ||
                    (step === 2 && (!formData.company || !formData.role)) ||
                    (step === 3 && !formData.service) ||
                    (step === 4 && !formData.painPoint)
                  }
                  className="bg-black text-white px-8 py-4 rounded-xl uppercase tracking-widest text-xs font-bold flex items-center gap-2 shadow-lg transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                >
                  Próximo <ArrowRight className="size-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!formData.budget || isSubmitting}
                  className="bg-[#25D366] text-white px-8 py-4 rounded-xl uppercase tracking-widest text-xs font-bold flex items-center gap-2 shadow-lg shadow-[#25D366]/20 transition-transform hover:scale-105 hover:bg-[#20bd5a] disabled:opacity-50 disabled:hover:scale-100"
                >
                  {isSubmitting ? "Enviando..." : "Receber Proposta"} <ArrowRight className="size-4" />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
