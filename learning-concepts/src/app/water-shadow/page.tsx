import React, { Suspense } from 'react'
import WaterScene from '../components/waterShadow'
// @ts-expect-error: PartialPrerender is experimental
import { PartialPrerender } from 'next/ppr'

export default function App() {
  return (
    <div className="w-full h-screen">
      <Suspense fallback={<div>Loading water scene...</div>}>
        <PartialPrerender>
          <WaterScene />
        </PartialPrerender>
      </Suspense>
    </div>
  )
}