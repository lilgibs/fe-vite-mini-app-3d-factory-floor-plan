import { Menu } from 'lucide-react'
import React from 'react'
import InputSearchRecomendation from './InputSearchRecomendation'

export default function Navbar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {

  return (
    <div className={`z-999 sticky top-0 w-full h-[72px] p-4 flex justify-between items-center gap-2 bg-blue-900 shadow-md transition-all duration-300 ease-in-out`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='text-white cursor-pointer'
      >
        <Menu />
      </button>
      <InputSearchRecomendation />
      <div className='h-[42px] w-[42px] bg-white rounded-full'>
      </div>
    </div>
  )
}
