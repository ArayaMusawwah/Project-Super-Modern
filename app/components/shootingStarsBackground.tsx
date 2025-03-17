'use client'
import React from 'react'

export default function ShootingStarsAndStarsBackground({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative flex h-[40rem] w-full flex-col items-center justify-center rounded-md bg-neutral-900">
      {children}
    </div>
  )
}
