'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      {/* pointer-events-none lets wheel/touch scroll events pass through
          the WebGL canvas so Lenis can handle them without lag */}
      <div
        className="w-full h-full"
        style={{
          pointerEvents: 'none',
          /* Promote canvas to its own GPU compositing layer so 3D
             rendering doesn't block the main thread during scroll */
          willChange: 'transform',
          contain: 'strict',
        }}
      >
        <Spline
          scene={scene}
          className={className}
          style={{ pointerEvents: 'none' }}
        />
      </div>
    </Suspense>
  )
}
