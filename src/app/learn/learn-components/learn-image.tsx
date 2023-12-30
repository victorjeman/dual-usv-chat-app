import Image, { StaticImageData } from 'next/image'

interface Props {
  src: StaticImageData
}

export const LearnImage = ({ src }: Props) => {
  return (
    <div className='relative mb-14 bg-slate-100 py-10 text-slate-900/10'>
      <Image src={src} alt='Figma Design' className='relative z-10 mx-auto  max-w-[90%]' />

      <svg aria-hidden='true' className='absolute inset-0 h-full w-full'>
        <defs>
          <pattern
            id=':S4:'
            width='128'
            height='128'
            patternUnits='userSpaceOnUse'
            x='50%'
            patternTransform='translate(0 80)'>
            <path d='M0 128V.5H128' fill='none' stroke='currentColor'></path>
          </pattern>
        </defs>
        <rect width='100%' height='100%' fill='url(#:S4:)'></rect>
      </svg>
    </div>
  )
}
