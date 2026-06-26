import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next';
import React from 'react'

type Props = {
    skater : Content.SkaterDocument;
    index : number
}

export function Skater({skater,index}: Props) {
  return (
    <div className='group relative flex items-center flex-col gap-4'>
        <div className='stack-layout overflow-hidden'>
        <PrismicNextImage field={skater.data.photo_background} width={500} imgixParams={{q:20}} alt='' className=''/>
        <PrismicNextImage field={skater.data.photo_foreground} width={500}  alt='' className=''/>
        {skater.data.first_name}
        {skater.data.last_name}
        </div>
    </div>
  )
}