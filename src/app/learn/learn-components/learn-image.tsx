import Image, { StaticImageData } from 'next/image'

interface Props {
  src: StaticImageData
}

export const LearnImage = ({ src }: Props) => {
  return (
    <div className='relative mb-20 block rounded-lg bg-white px-4 pb-4 pt-14 outline-dashed outline-offset-8 outline-gray-900'>
      <Image src={src} alt='Figma Design' className='relative z-10 mx-auto' />
      <p className='absolute left-2 top-2 z-10 rounded-lg bg-indigo-500 px-3 py-2 leading-none text-white'>
        representative image
      </p>
    </div>
  )
}
