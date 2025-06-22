
import { LandPlot } from 'lucide-react'
import logo from '../assets/png/logo.png'
import useGlobalHooks from '../hooks/_useGlobalHooks'
import { useEffect, useRef } from 'react';

export default function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const globalHooks = useGlobalHooks()
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`z-999 fixed md:sticky left-0 top-[72px] md:top-0 ${isOpen ? ' w-full md:w-[300px]' : 'hidden md:block w-full md:w-[72px]'} shadow md:shadow-none md:h-screen md:flex flex-col transition-all duration-300 ease-in-out`}
      ref={containerRef}
    >
      <div className='h-[72px] flex items-center justify-center gap-2 bg-white shadow-md border-b border-gray-300'>
        <button
          onClick={() => globalHooks.navigate('/')}
          className='cursor-pointer'
        >
          <img
            src={logo}
            alt="LIL GIBRAN Logo"
            width={42}
            height={42}
          />
        </button>
        <p className={`${isOpen ? 'block' : 'hidden'} text-nowrap overflow-hidden font-bold text-2xl`}>GONSTERS</p>
      </div>
      <div className={`-z-10 flex-1 ${isOpen ? 'p-4' : 'py-4 px-2 md:items-center'} flex flex-col gap-4 bg-white font-semibold transition-all duration-300 ease-in-out`}>
        <p>Menu</p>
        <div className='flex flex-col gap-4'>
          <button
            className={`p-2 flex gap-4 hover:bg-blue-50 ${window.location.pathname === '/floor-plan' ? 'bg-blue-50' : ''} rounded-md cursor-pointer`}
            onClick={() => {
              globalHooks.navigate('/floor-plan')
              window.innerWidth <= 768 && setIsOpen(false)
            }}
          >
            <LandPlot />
            <span className={`${isOpen ? 'block' : 'hidden'} text-nowrap overflow-hidden`}>Floor Plan</span>
          </button>
        </div>
      </div>
    </div >
  )
}
