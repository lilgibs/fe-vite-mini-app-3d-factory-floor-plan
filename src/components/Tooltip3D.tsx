import { Html } from '@react-three/drei'
import React, { useEffect, useRef, useState, type RefObject } from 'react'

interface IProps {
  name: string
  position: [number, number, number],
  children: React.ReactNode
  setActiveTooltip: React.Dispatch<React.SetStateAction<string | null>>
  anchorRef: RefObject<HTMLDivElement | null>
}

export default function Tooltip3D({ name, position, setActiveTooltip, children, anchorRef }: IProps) {
  const [currentTooltip, setCurrentTooltip] = useState<string | null>(name);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentTooltip !== name) {
      setCurrentTooltip(name);
    }
    function handleClickOutside(event: MouseEvent) {
      const clickedTarget = event.target as Node
      const clickedOutsideTooltip = containerRef.current && !containerRef.current.contains(clickedTarget)
      const clickedOutsideButton = anchorRef.current && !anchorRef.current.contains(clickedTarget)

      if (clickedOutsideButton && clickedOutsideTooltip) {
        setActiveTooltip(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [name, currentTooltip]);

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
