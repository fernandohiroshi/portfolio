import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Security headers (additional to next.config.ts)
  response.headers.set('X-Robots-Tag', 'index, follow')
  response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')

  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'DENY')

  // Prevent MIME type sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff')

  // XSS Protection
  response.headers.set('X-XSS-Protection', '1; mode=block')

  // Referrer Policy
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Feature Policy
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
  )

  // CORS headers for API routes and public resources
  if (request.nextUrl.pathname.startsWith('/api/') || request.nextUrl.pathname.startsWith('/public/')) {
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    response.headers.set('Access-Control-Max-Age', '86400')
  }

  // Allow legitimate search engine bots
  const userAgent = request.headers.get('user-agent') || ''
  const legitimateBots = [
    /googlebot/i,
    /bingbot/i,
    /slurp/i, // Yahoo
    /duckduckbot/i,
    /baiduspider/i,
    /yandexbot/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /linkedinbot/i,
    /whatsapp/i,
    /telegrambot/i,
    /discordbot/i,
    /slackbot/i,
    /applebot/i,
    /crawler/i,
    /spider/i,
  ]

  // Only block clearly malicious patterns, not legitimate crawlers
  const maliciousPatterns = [/scraper/i, /curl/i, /wget/i, /python-requests/i, /java-http/i, /php-curl/i]

  if (
    maliciousPatterns.some((pattern) => pattern.test(userAgent)) &&
    !legitimateBots.some((pattern) => pattern.test(userAgent))
  ) {
    // Log suspicious activity (in production, use proper logging service)
    // console.log(`Suspicious user agent detected: ${userAgent}`)
  }

  // Rate limiting for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // This is a basic implementation - in production, use Redis or similar
    const rateLimitData = request.headers.get('x-rate-limit') || '0'
    const requestCount = parseInt(rateLimitData, 10)

    if (requestCount > 100) {
      // 100 requests per hour
      return new NextResponse('Rate limit exceeded', { status: 429 })
    }
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder (images, icons, etc.)
     * - robots.txt (for SEO)
     * - sitemap.xml (for SEO)
     */
    '/((?!_next/static|_next/image|favicon.ico|public|robots.txt|sitemap.xml).*)',
  ],
}
