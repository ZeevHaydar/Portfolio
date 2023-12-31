import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen px-24">
      <div className='flex flex-col items-center'>
        <h1 className='text-lg sm:text-xl md:text-3xl lg:text-6xl p-3'>Welcome to My Website</h1>
        <h2 className='lg:text-2xl text-sm'>About Me</h2>
        <div className='profile-card w-full h-fit p-2'>
          <div></div>
          <div className='w-full h-fit p-2 border-2 rounded-lg border-cyan-600'>
          </div>
        </div>

      </div>
    </main>
  )
}
