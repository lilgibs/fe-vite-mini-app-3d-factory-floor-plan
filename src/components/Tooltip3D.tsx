import { Html } from '@react-three/drei'
import React, { useEffect, useRef, type RefObject } from 'react'

interface IProps {
  name: string
  position: [number, number, number],
  children: React.ReactNode
  setActiveTooltip: React.Dispatch<React.SetStateAction<string | null>>
  anchorRef: RefObject<HTMLDivElement | null>
}

export default function Tooltip3D({ position, setActiveTooltip, children, anchorRef }: IProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let startTime = 0
    let startX = 0
    let startY = 0

    function handleMouseDown(event: MouseEvent) {
      const target = event.target as Node
      const inTooltip = containerRef.current?.contains(target)
      const inButton = anchorRef.current?.contains(target)

      if (!inTooltip && !inButton) {
        startTime = Date.now()
        startX = event.clientX
        startY = event.clientY
      }
    }

    function handleMouseUp(event: MouseEvent) {
      const target = event.target as Node
      const inTooltip = containerRef.current?.contains(target)
      const inButton = anchorRef.current?.contains(target)

      const timeHeld = Date.now() - startTime
      const deltaX = Math.abs(event.clientX - startX)
      const deltaY = Math.abs(event.clientY - startY)
      const movedTooFar = deltaX > 5 || deltaY > 5
      const heldTooLong = timeHeld > 300

      if (!inTooltip && !inButton && !movedTooFar && !heldTooLong) {
        setActiveTooltip(null)
      }
    }

    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [anchorRef, setActiveTooltip])

  return (
    <Html
      className='translate-x-[-50%] translate-y-[-100%]'
      position={position}
      zIndexRange={[0, 100]}
    >
      <div ref={containerRef}>
        {children}
      </div>
    </Html>
  )
}
