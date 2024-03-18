import { MercadoPagoConfig, Preference } from 'mercadopago'
import { NextResponse, type NextRequest } from 'next/server'

const client = new MercadoPagoConfig({
  accessToken: String(process.env.NEXT_PUBLIC_ACCESS_TOKEN)
})

export async function POST (request: NextRequest) {
  try {
    let items = await request.json()
    if (items.length === 0 || !Array.isArray(items)) {
      return NextResponse.json({
        status: 400,
        message: 'No items'
      })
    }
    items = items.map(item => {
      return {
        ...item,
        quantity: parseFloat(item.quantity as string),
        unit_price: parseInt(item.unit_price as string),
        currency_id: 'COL'
      }
    })
    const preference = new Preference(client)
    const result = await preference.create({
      body: {
        items,
        back_urls: {
          success: 'http://localhost:3000/',
          failure: 'http://localhost:3000/products',
          pending: 'http://localhost:3000/products?search=a'
        },
        auto_return: 'approved'
      }
    })

    return NextResponse.json({
      id: result.id
    })
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: 'error when created reference',
      error: error.message
    })
  }
}
