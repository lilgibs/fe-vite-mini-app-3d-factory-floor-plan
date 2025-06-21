import { Html } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

interface IProps {
  position: [number, number, number],
  children: React.ReactNode
  setActiveTooltip: React.Dispatch<React.SetStateAction<string | null>>
}

export default function Tooltip3D({ position, setActiveTooltip, children }: IProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setActiveTooltip(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
