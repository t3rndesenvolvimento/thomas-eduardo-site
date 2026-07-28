import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const hostname = req.headers.get('host') || ''
  
  // Extrai o subdomínio considerando o ambiente local e de produção
  const currentHost = process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'
    ? hostname.replace(`.thomaseduardo.com.br`, '')
    : hostname.split(':')[0].replace('.localhost', '')

  // 1. Subdomínio ADMIN
  if (currentHost === 'admin') {
    if (!url.pathname.startsWith('/admin')) {
      url.pathname = `/admin${url.pathname === '/' ? '' : url.pathname}`
      const authCookie = req.cookies.get('admin-auth')
      if (authCookie?.value !== 'true' && url.pathname !== '/admin/login') {
         url.pathname = '/admin/login'
      }
      return NextResponse.rewrite(url)
    }
  }

  // 2. Subdomínio CLIENTE
  if (currentHost === 'cliente') {
    if (!url.pathname.startsWith('/cliente')) {
      url.pathname = `/cliente${url.pathname === '/' ? '' : url.pathname}`
      return NextResponse.rewrite(url)
    }
  }

  // 3. Compatibilidade para acessos diretos no domínio principal
  if (url.pathname.startsWith('/admin')) {
    const authCookie = req.cookies.get('admin-auth')
    if (authCookie?.value === 'true') {
      return NextResponse.next()
    }
    const loginUrl = new URL('/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
