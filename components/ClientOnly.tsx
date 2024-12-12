'use client' // Marque este componente como Client Component

import { useEffect, useState } from 'react'

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null // Evita renderizar no lado do servidor
  }

  return <>{children}</>
}

export default ClientOnly
