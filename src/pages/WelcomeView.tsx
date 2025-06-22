import hero_image from '../assets/jpg/hero_image.jpg'

export default function WelcomeView() {
  return (
    <div className='p-4 md:p-6 h-[calc(100dvh-72px-32px-72px)] md:h-[calc(100dvh-72px-48px-72px)] flex flex-col gap-4 bg-white rounded-lg shadow'>
      <h1 className="text-2xl md:text-3xl font-bold text-center">Mini App 3D Factory Floor Plan</h1>
      <p className="text-center text-gray-600 text-base md:text-lg">
        An interactive 3D dashboard that visualizes a factory floor layout and displays real-time machine performance data through clickable tags.
      </p>
      <div className='flex-1 flex items-center justify-center overflow-hidden'>
        <img
          src={hero_image}
          className='h-full max-w-full object-contain'
          alt='Factory floor plan'
        />
      </div>
    </div>

  )
}
