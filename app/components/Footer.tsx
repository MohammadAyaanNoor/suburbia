import { createClient } from '@/prismicio'
import { Skater } from '@/slices/TeamGrid/Skater'
import { PrismicNextImage } from '@prismicio/next'
import React from 'react'
import { Logo } from '@/app/components/Logo'

type Props = {}

export async function Footer({}: Props) {
    const client = createClient()
    const settings = await client.getSingle('settings')
  return (
    <div className='bg-texture bg-zinc-900 text-white overflow-hidden'>
        <div className='relative h-[75vh] fl-p-10/16 md:aspect-auto'>
        {/* image */}
        <PrismicNextImage field={settings.data.footer_image} alt='' fill className='object-cover' width={1200}/>
        </div>
        {/* physics */}
        {/* logo */}
        <Logo/>
        {/* links */}
    </div>
  )
}