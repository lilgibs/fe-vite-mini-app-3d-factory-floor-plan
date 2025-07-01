import useFloorPlanViewModel from '../../floor-plan/_useFloorPlanViewModel'
import CanvasArea from '../../floor-plan/_components/CanvasArea'

export default function FloorPlanEmbed() {
  const model = useFloorPlanViewModel()

  return (
    <div className='w-full h-full bg-white'>
      <div className='relative w-full h-full' ref={model.fullScreenRef}>
        <CanvasArea model={model} />
      </div>
    </div>
  )
}
