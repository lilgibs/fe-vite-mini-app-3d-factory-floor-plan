import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { FactoryModel } from '../../components/FactoryModel';
import useFloorPlanViewModel from './_useFloorPlanViewModel';
import Tooltip3D from '../../components/Tooltip3D';
import Button3D from '../../components/Button3D';
import MachineInfo3D from '../../components/MachineInfo3D';
import { Expand, LoaderCircle, Minimize, Minus, Plus } from 'lucide-react';
import Select from 'react-select';

export default function FloorPlanView() {
  const model = useFloorPlanViewModel()

  return (
    <div className='p-4 md:p-6 flex flex-col gap-4 min-h-[calc(100dvh-72px-32px)] md:min-h-[calc(100dvh-72px-48px)] bg-white rounded-lg shadow-md'>
      <div className='flex flex-row items-center justify-between'>
        <h1 className='text-xl md:text-3xl font-bold'>Floor Plan</h1>
        <Select
        className='min-w-[250px]'
          isClearable={true}
          isSearchable={true}
          name="color"
          options={[]}
        />
      </div>
      <hr />
      <div className='p-2 md:p-4 flex-1 grid grid-cols-1 border border-gray-300 rounded-lg'>
        <div className='relative' ref={model.fullScreenRef} id="CanvasWrapper">
          {model.onReset &&
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center font-semibold text-2xl bg-white z-10'>Resizing...</div>}
          {!model.onReset &&
            <Canvas
              camera={{ position: [10, 10, 10], fov: 50 }}
              style={{ background: '#E0E0E0' }}
            >
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 10, 7]} intensity={0.6} />
              <Suspense
                fallback={
                  <Html center>
                    <div className='animate-spin text-blue-500'>
                      <LoaderCircle size={48} />
                    </div>
                  </Html>
                }
              >
                <FactoryModel />
                {/* Render tombol 3D */}
                {model.data.map((val) => (
                  <Button3D
                    name={val.name}
                    position={val.position}
                    setActiveTooltip={model.setActiveTooltip}
                    onFocusCamera={model.focusCameraTo}
                  />
                ))}

                {/* Render tooltip info jika aktif */}
                {model.activeTooltip &&
                  model.data.map((val) =>
                    val.name === model.activeTooltip ? (
                      <Tooltip3D
                        key={`tooltip-${val.name}`}
                        position={val.position}
                      >
                        <MachineInfo3D data={val} />
                      </Tooltip3D>
                    ) : null
                  )}
              </Suspense>
              <OrbitControls enableDamping ref={model.canvasControlsRef} />
            </Canvas>
          }
          <div className="absolute top-4 right-4 flex flex-col gap-4 md:gap-6 z-50">
            <button
              onClick={model.handleToggleFullscreen}
              className="relative h-[24px] w-[24px] bg-blue-500 hover:bg-blue-600 text-white rounded shadow cursor-pointer"
            >
              {model.isFullscreen ?
                <Minimize size={16} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
                :
                <Expand size={16} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
              }
            </button>
            <div className='flex flex-col gap-2'>
              <button
                onClick={model.handleZoomIn}
                className="relative h-[24px] w-[24px] bg-blue-500 hover:bg-blue-600 text-white rounded shadow cursor-pointer"
              >
                <Plus size={16} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
              </button>
              <button
                onClick={model.handleZoomOut}
                className="relative h-[24px] w-[24px] bg-blue-500 hover:bg-blue-600 text-white rounded shadow cursor-pointer"
              >
                <Minus size={16} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
              </button>
            </div>
          </div>
          <div className='hidden absolute md:flex flex-col gap-4 bottom-4 left-4 text-sm'>
            <p>Mouse Controls</p>
            <div>
              <p>Left - Rotate</p>
              <p>Right - Move</p>
              <p>Middle - Zoom</p>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
