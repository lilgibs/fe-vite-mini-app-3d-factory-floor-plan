import hero_image from '../assets/jpg/hero_image.jpg'

export default function WelcomeView() {
  return (
    <div className='p-4 md:p-6 max-h-[calc(100dvh-72px-32px-72px)] md:max-h-[calc(100dvh-72px-48px-72px)] flex flex-col gap-4 bg-white rounded-lg shadow'>
      <h1 className="text-3xl font-bold text-center">Mini App 3D Factory Floor Plan</h1>
      <p className="text-center text-gray-600 text-lg">
        An interactive 3D dashboard that visualizes a factory floor layout and displays real-time machine performance data through clickable tags.
      </p>
      <img
        className='h-full object-contain rounded-md'
        src={hero_image}
        alt='hero image'
      />
    </div>
  )
}
