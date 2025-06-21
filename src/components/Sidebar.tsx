
import { LandPlot } from 'lucide-react'
import logo from '../assets/png/logo.png'
import useGlobalHooks from '../hooks/_useGlobalHooks'

export default function Sidebar({ isOpen,

}: { isOpen: boolean }) {
  const globalHooks = useGlobalHooks()
  return (
    <div className={`z-50 absolute md:sticky left-0 top-0 ${isOpen ? ' w-full md:w-[300px]' : 'hidden md:block w-full md:w-[72px]'} shadow md:shadow-none md:h-screen md:flex flex-col transition-all duration-300 ease-in-out`}>
      <div className='h-[72px] flex items-center justify-center gap-2 bg-white shadow-md'>
        <img
          src={logo}
          alt="LIL GIBRAN Logo"
          width={42}
          height={42}
        />
        <p className={`${isOpen ? 'hidden md:block' : 'hidden'} text-nowrap overflow-hidden font-bold text-2xl`}>GONSTERS</p>
      </div>
      <div className={`-z-10 flex-1 ${isOpen ? 'p-4' : 'py-4 px-2 md:items-center'} flex flex-col gap-4 bg-white font-semibold transition-all duration-300 ease-in-out`}>
        <p>Menu</p>
        <div className='flex flex-col gap-4'>
          <button
            className={`p-2 flex gap-4 hover:bg-blue-50 ${window.location.pathname === '/floor-plan' ? 'bg-blue-50' : ''} rounded-md cursor-pointer`}
            onClick={() => globalHooks.navigate('/floor-plan')}
          >
            <LandPlot />
            <span className={`${isOpen ? 'block' : 'hidden'} text-nowrap overflow-hidden`}>Floor Plan</span>
          </button>
        </div>
      </div>
    </div>
  )
}
