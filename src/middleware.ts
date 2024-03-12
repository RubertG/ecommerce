import { NextResponse, type NextRequest } from 'next/server'

export function middleware (request: NextRequest) {
  if (request.method === 'POST') {
    const apiKey = request.headers.get('api-key')?.split('-')[1]
    if (apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
      return NextResponse.json({
        success: false,
        message: 'authentication failed'
      }, { status: 401 })
    }
  }

  return NextResponse.next()
}
