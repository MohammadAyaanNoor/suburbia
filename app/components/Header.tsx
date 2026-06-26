import Link from 'next/link'
import React from 'react'
import { ButtonLink } from './ButtonLink'
import { Logo } from './Logo'
import { createClient } from '@/prismicio'
import { PrismicNextLink } from '@prismicio/next'

type Props = {}

export async function Header({}: Props) {
    
    const client = createClient();
    const settings = await client.getSingle('settings');


  return (
    <header className='header  absolute top-0 left-0 right-0 z-50 fl-h-32/48 fl-py-4/6 fl-px-10/15'>
        <div className='mx-auto grid max-w-9xl grid-cols-2 items-center gap-6 md:grid-cols-[1fr,auto,1fr]'>
            
            {/* ROW 1 (Mobile): Logo stays top-left */}
            <Link href="/" className='justify-self-start row-start-1 col-start-1'>
                <Logo className='text-brand-purple fl-h-12/20'/>
            </Link>
            
            {/* ROW 2 (Mobile): Spans across both columns under the Logo & Cart */}
            {/* ROW 1 (Desktop): Snaps back to the middle column */}
            <nav aria-label='main' className='col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1'>
                <ul className='flex flex-wrap items-center justify-center gap-4 sm:gap-8'>
                    {settings.data.navigation.map((item)=>(
                        <li key={item.link.text}>
                            <PrismicNextLink field={item.link} className='fl-text-lg/xl'/>
                        </li>

                    ))}
                </ul>
            </nav>
            
            {/* ROW 1 (Mobile): Cart stays top-right */}
            <div className='justify-self-end row-start-1 col-start-2 md:col-start-3 md:row-start-1'>
              <ButtonLink href='' icon='cart' color='purple' aria-label='Cart (1)'>
                  <span className='md:hidden'>(1)</span>
                  <span className = 'hidden md:inline'>Cart(1)</span>
              </ButtonLink>
            </div>
            
        </div>
    </header>
  )
}