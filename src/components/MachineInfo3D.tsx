import { useEffect, useState } from 'react'
import type { IMachineProps } from '../domain/models/machine'

export default function MachineInfo3D({ data }: { data: IMachineProps }) {
  const [onDetails, setOnDetails] = useState(false)
  const [isOpened, setIsOpened] = useState(false)
  const [dummyRealtimeData, setDummyRealtimeData] = useState({
    cycleTime: "0 s",
    oee: "0%",
    firstTimeYield: "0 pcs",
    scrap: "0%",
    energy: "0 kWh",
  })

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOpened(true)
    }, 100)
    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setDummyRealtimeData({
        cycleTime: (Math.random() * 10 + 5).toFixed(2) + ' s',
        oee: (Math.random() * 100).toFixed(1) + '%',
        firstTimeYield: (Math.random() * 100).toFixed(1) + ' pcs',
        scrap: Math.floor(Math.random() * 20) + '%',
        energy: (Math.random() * 100).toFixed(1) + ' kWh',
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`p-2 md:p-4 flex flex-col gap-1 md:gap-4 w-[350px] md:w-[500px] bg-black/75 rounded-lg scale-0 ${isOpened ? 'scale-100' : ''} transition-all duration-300 ease-in-out`}>
      <p className='text-sm md:text-base text-white font-semibold'>{data.name}</p>
      <div className='w-full grid grid-cols-4 gap-1 md:gap-2'>
        <div className='rounded-lg overflow-hidden text-center'>
          <div className='text-[10px] md:text-xs bg-black text-white px-2 md:px-4 py-2 truncate'>Cycle Time</div>
          <div className='text-[10px] md:text-base font-semibold bg-neutral-700 text-white py-2'>{dummyRealtimeData.cycleTime}</div>
        </div>
        <div className='rounded-lg overflow-hidden text-center'>
          <div className='text-[10px] md:text-xs bg-black text-white px-2 md:px-4 py-2 truncate'>OEE</div>
          <div className='text-[10px] md:text-base font-semibold bg-neutral-700 text-white py-2'>{dummyRealtimeData.oee}</div>
        </div>
        <div className='rounded-lg overflow-hidden text-center'>
          <div className='text-[10px] md:text-xs bg-black text-white px-2 md:px-4 py-2 truncate'>First Time Yield</div>
          <div className='text-[10px] md:text-base font-semibold bg-neutral-700 text-white py-2'>{dummyRealtimeData.firstTimeYield}</div>
        </div>
        <div className='rounded-lg overflow-hidden text-center'>
          <div className='text-[10px] md:text-xs bg-black text-white px-2 md:px-4 py-2 truncate'>Scrap</div>
          <div className='text-[10px] md:text-base font-semibold bg-neutral-700 text-white py-2'>{dummyRealtimeData.scrap}</div>
        </div>
      </div>
      {onDetails && <div className={'grid grid-cols-4 gap-1 md:gap-2'}>
        <div className='rounded-lg overflow-hidden text-center'>
          <div className='text-[10px] md:text-xs bg-black text-white px-2 md:px-4 py-2 truncate'>Downtime</div>
          <div className='text-[10px] md:text-base font-semibold bg-neutral-700 text-white py-2'>{data.downtime}</div>
        </div>
        <div className='rounded-lg overflow-hidden text-center'>
          <div className='text-[10px] md:text-xs bg-black text-white px-2 md:px-4 py-2 truncate'>Changeover Time</div>
          <div className='text-[10px] md:text-base font-semibold bg-neutral-700 text-white py-2'>{data.changeover}</div>
        </div>
        <div className='rounded-lg overflow-hidden text-center'>
          <div className='text-[10px] md:text-xs bg-black text-white px-2 md:px-4 py-2 truncate'>Energy Consumption</div>
          <div className='text-[10px] md:text-base font-semibold bg-neutral-700 text-white py-2'>{dummyRealtimeData.energy}</div>
        </div>
        <div className='rounded-lg overflow-hidden text-center'>
          <div className='text-[10px] md:text-xs bg-black text-white px-2 md:px-4 py-2 truncate'>Status</div>
          <div className='text-[10px] md:text-base font-semibold bg-neutral-700 text-white py-2'>{data.status}</div>
        </div>
      </div>}
      <div
        className='flex items-center justify-center font-semibold text-white text-[10px] md:text-sm underline cursor-pointer'
        onClick={() => setOnDetails(!onDetails)}
      >
        {onDetails ? 'Hide Details' : 'Show Details'}
      </div>
    </div>
  )
}
