// New
import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import Replciate from 'replicate'
const replicate = new Replciate({
  auth: process.env.REPLICATE_API_TOKEN
})

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { prompt } = body
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!prompt) {
      return new NextResponse('Prompt is required', { status: 400 })
    }

    const response = await replicate.run(
      'lucataco/animate-diff:beecf59c4aee8d81bf04f0381033dfa10dc16e845b4ae00d281e2fa377e48a9f',
      {
        input: {
          motion_module: 'mm_sd_v14',
          prompt: prompt,
          n_prompt:
            'badhandv4, easynegative, ng_deepnegative_v1_75t, verybadimagenegative_v1.3, bad-artist, bad_prompt_version2-neg, teeth'
        }
      }
    )
    return NextResponse.json(response)
  } catch (error) {
    console.log('[VIDEO_ERROR]', error)
    return new NextResponse('Internal error', { status: 500 })
  }
}
