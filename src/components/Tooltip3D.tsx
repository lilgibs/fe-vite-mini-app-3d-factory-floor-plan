import { Html } from '@react-three/drei'
import React from 'react'

interface IProps {
  position: [number, number, number],
  children: React.ReactNode
}

export default function Tooltip3D({ position, children }: IProps) {
  return (
    <Html
      className='translate-x-[-50%] translate-y-[-100%]'
      position={position}
      zIndexRange={[0, 100]}
    >
      <div>
        {children}
      </div>
    </Html>
  )
}
