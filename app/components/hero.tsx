'use client'

import { AuroraBackground } from '@/components/ui/aurora-background'
import { ShootingStars } from '@/components/ui/shooting-star'
import Image from 'next/image'
import ShootingStarsAndStarsBackground from './shootingStarsBackground'
import { StarsBackground } from '@/components/ui/stars-background'
import FlipWordsComponent from './flipWordsComponent'

export default function Hero() {
  return (
    <AuroraBackground>
      <div className="grid h-[40rem] w-full grid-cols-2 flex-col items-center justify-center gap-10 rounded-md">
        <FlipWordsComponent />
        <Image
          src="/hero.png"
          alt="Hero"
          width={50}
          height={50}
          layout="responsive"
          className="h-full w-full max-w-xl"
        />
      </div>
    </AuroraBackground>
  )
}
