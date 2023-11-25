// New
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
})

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { prompt, amount = 1, resolution = '1024x1024' } = body
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }
    if (!openai.apiKey) {
      return new NextResponse('Openai API Key Required', { status: 500 })
    }

    if (!prompt) {
      return new NextResponse('Prompt is required', { status: 400 })
    }
    if (!amount) {
      return new NextResponse('Amount is required', { status: 400 })
    }
    if (!resolution) {
      return new NextResponse('Resolution is required', { status: 400 })
    }

    const response = await openai.images.generate({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
      model: 'dall-e-3'

      //   : [{ role: 'user', content: 'Hello!' }]
    })
    return NextResponse.json(response.data)
  } catch (error) {
    console.log('[IMAGE_ERROR]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
