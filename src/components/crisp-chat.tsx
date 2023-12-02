'use client'
import { useEffect } from 'react'
import { Crisp } from 'crisp-sdk-web'
export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('a21ce8c6-25c2-4ba6-92e4-a115f5e29e96')
  }, [])
  return null
}
