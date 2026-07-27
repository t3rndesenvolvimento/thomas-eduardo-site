"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Lock, ArrowLeft, Briefcase } from "lucide-react"
import { Shape9, Shape10 } from "@/components/ui/abstract-shapes"
import { sileo } from "sileo"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { auth } from "@/lib/firebase"
import { sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth"

export default function LoginPage() {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [isLinkSent, setIsLinkSent] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Check if we are returning from an email link
    if (isSignInWithEmailLink(auth, window.location.href)) {
      setIsLoading(true)
      let emailForSignIn = window.localStorage.getItem("emailForSignIn")
      
      if (!emailForSignIn) {
        // Se o usuário abriu em outro dispositivo ou janela anonima
        emailForSignIn = window.prompt("Por favor, digite seu e-mail para confirmação:")
      }

      if (emailForSignIn) {
        signInWithEmailLink(auth, emailForSignIn, window.location.href)
          .then((result) => {
            window.localStorage.removeItem("emailForSignIn")
            document.cookie = "admin-auth=true; path=/; max-age=86400"
            sileo.success({ title: "Autenticado com sucesso!", position: "top-right" })
            router.push("/admin")
          })
          .catch((error) => {
            console.error(error)
            sileo.error({ title: "Erro", description: "O link expirou ou é inválido.", position: "top-right" })
            setIsLoading(false)
          })
      } else {
        setIsLoading(false)
      }
    }
  }, [router])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    const actionCodeSettings = {
      url: window.location.origin + "/login",
      handleCodeInApp: true,
    }
    
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      window.localStorage.setItem("emailForSignIn", email)
      setIsLinkSent(true)
      sileo.success({ title: "Link enviado!", description: "Verifique sua caixa de entrada.", position: "top-right" })
    } catch (error: any) {
      console.error(error)
      sileo.error({ title: "Erro ao enviar", description: "Verifique o e-mail e tente novamente.", position: "top-right" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="relative flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden bg-background p-4 sm:p-6">
      {/* Hide site nav and footer via CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        header, footer, .floating-whatsapp { display: none !important; }
      `}} />

      {/* Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-grid-fade opacity-10" />
        <motion.div
          className="absolute top-10 left-10 w-40 opacity-10 sm:w-64 mix-blend-screen"
          animate={{ rotate: 180, scale: [1, 1.1, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <Shape9 />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 w-40 opacity-10 sm:w-64 mix-blend-screen"
          animate={{ rotate: -180, scale: [1, 1.05, 1] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <Shape10 />
        </motion.div>
      </div>

      <Link href="/" className="absolute top-8 left-8 z-20 text-white/50 hover:text-white transition-colors text-sm font-mono tracking-widest uppercase flex items-center gap-2">
        <ArrowLeft className="size-4" /> Voltar ao site
      </Link>

      <div className="relative z-10 w-full max-w-[400px] [perspective:1000px]">
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 25 }}
          className="relative h-[480px] w-full [transform-style:preserve-3d]"
        >
          {/* FRONT DO CARD */}
          <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#121212] p-8 text-center shadow-2xl [backface-visibility:hidden]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />
            
            <div className="relative mb-6 flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner">
              <Briefcase className="size-8 text-white/80" strokeWidth={1.5} />
            </div>

            <h1 className="font-display text-2xl font-semibold tracking-tight text-white mb-3">
              Área do Cliente
            </h1>
            <p className="mb-10 text-sm font-light leading-relaxed text-white/50">
              Acesse o seu portal restrito para visualizar o andamento dos projetos, aprovar entregáveis e consultar faturas.
            </p>

            <button
              onClick={() => setIsFlipped(true)}
              className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90"
            >
              Acessar Workspace
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* BACK DO CARD (FORMULÁRIO) */}
          <div className="absolute inset-0 flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#121212] p-8 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div className="absolute inset-0 bg-gradient-to-t from-white/[0.04] to-transparent pointer-events-none" />
            
            <div className="relative mb-8 flex items-center justify-between">
              <button 
                onClick={() => setIsFlipped(false)}
                className="flex size-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <ArrowLeft className="size-4" />
              </button>
              <div className="flex items-center gap-2">
                <Lock className="size-4 text-white/40" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Conexão Segura</span>
              </div>
            </div>

            <div className="relative">
              <h2 className="font-display text-xl font-medium tracking-tight text-white mb-1">
                Autenticação
              </h2>
              <p className="text-xs font-light text-white/50 mb-8">
                Insira as credenciais fornecidas no onboarding.
              </p>

              {!isLinkSent ? (
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium uppercase tracking-wider text-white/60">E-mail</label>
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="cliente@empresa.com"
                      className="w-full rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white placeholder:text-white/20 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="mt-4 flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 text-sm font-medium text-black transition-all hover:bg-white/90 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="size-4 rounded-full border-2 border-black/20 border-t-black"
                      />
                    ) : (
                      "Receber Link Magico"
                    )}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-6 text-center">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-white/10 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 className="mb-2 font-display text-lg font-medium text-white">Verifique seu e-mail</h3>
                  <p className="text-sm font-light text-white/50">
                    Enviamos um link mágico de acesso para<br />
                    <strong className="font-medium text-white">{email}</strong>
                  </p>
                  <button 
                    onClick={() => setIsLinkSent(false)} 
                    className="mt-6 text-xs text-white/40 underline-offset-4 hover:text-white hover:underline transition-all"
                  >
                    Tentar outro e-mail
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 font-mono text-[10px] uppercase tracking-widest text-white/20">
        © {new Date().getFullYear()} TERON Workspace
      </div>
    </main>
  )
}
