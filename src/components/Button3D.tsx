import { Html } from '@react-three/drei';
import { Info } from 'lucide-react';
import React from 'react'

export default function Button3D({ name, position, setActiveTooltip, onFocusCamera }: { name: string, position: [number, number, number], onFocusCamera?: (position: [number, number, number]) => void; setActiveTooltip: React.Dispatch<React.SetStateAction<string | null>> }) {
  return (
    <Html
      className='flex flex-col gap-1 md:gap-2 items-center'
      key={name}
      position={position}
      center
      // distanceFactor={10}
      occlude
      zIndexRange={[0, 100]}
    >
      <div className='h-[28px] md:h-[42px] w-[70px] md:w-[100px] flex items-center justify-center bg-neutral-900 text-[10px] md:text-base text-white shadow rounded-md'>{name}</div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setActiveTooltip(prev => (prev === name ? null : name));
          onFocusCamera?.(position);
        }}
        className="p-1 bg-blue-500 text-white hover:bg-blue-600 rounded-full shadow cursor-pointer"
      >
        <Info />
      </button>
    </Html>
  )
}
