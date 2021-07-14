import React from 'react'
import { useRouter } from 'next/router'
export default function Layout({ children }) {
  const { isPreview } = useRouter()
  return (
    <div>
      {children}
      {isPreview ? (
        <a href="/api/exit-preview">Exit Preview</a>
      ) : null}
    </div>
  )
}