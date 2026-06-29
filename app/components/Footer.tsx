import { createClient } from '@/prismicio'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { Logo } from '@/app/components/Logo'
import { Bounded } from './bounded'
import { SlideIn } from './SlideIn'

type Props = {}

export async function Footer({}: Props) {
    const client = createClient()
    const settings = await client.getSingle('settings')
  return (
    
    <footer className='bg-texture bg-zinc-900 text-white overflow-hidden'>
        <div className='relative h-[75vh] fl-p-10/16 md:aspect-auto'>
        {/* image */}
        <PrismicNextImage field={settings.data.footer_image} alt='' fill className='object-cover'/>
        {/* physics */}
        {/* logo */}
        <Logo className='pointer-events-none relative h-20 mix-blend-exclusion md:h-28'/>
        {/* links */}
        </div>
        <Bounded as='nav'>
            <ul className='flex flex-wrap justify-center gap-8 fl-text-lg/xl'>
                {settings.data.navigation.map((item)=>(
                    <SlideIn key={item.link.text}>

                    <li key={item.link.text} className='hover:underline'>
                        <PrismicNextLink field={item.link}/>

                    </li>
                    </SlideIn>
                ))}
            </ul>
        </Bounded>
    </footer>
  )
}