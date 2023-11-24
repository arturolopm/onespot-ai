import Image from 'next/image'

export const Loader = () => {
  return (
    <div className=' h-full flex flex-col gap-y-4 items-center justify-center'>
      <div className=' w-10 h-10 relative animate-spin'>
        <Image
          className=' rounded-full'
          width={40}
          height={40}
          alt='logo'
          src={'/onespot-logo.jpeg'}
        />
      </div>
      <p className=' text-sm text-muted-foreground'>Thinking...</p>
    </div>
  )
}
