"use client"

import React from 'react'
import Badge from './ui/badge'
import Heading from './ui/heading'
import { Button } from './ui/button'
import { Rentable_data } from '@/data/data'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Separator } from './ui/separator'

const Rentable = () => {
  return (
    <section
      className="border-t border-[#2d2d2d] bg-[#111]"
    >
      <div
        className="container mx-auto px-4 py-12 flex items-center flex-col justify-center space-y-8"
      >
        <Badge
          text='LOGRA SER RENTABLE MES A MES'
        />
        <div className='flex items-center justify-center flex-col space-y-4'>
          <Heading
            title='aGENDA TU LLAMADA AHORA Y DESCUBRe CóMO SER RENTABLE A TRAVES DE UN SETUP'
            highlightWords={[""]}
          />
          <p className='text-center text-gray-400 max-w-[800px]'>
            Lo que necesitas para ser rentable es un setup escalable y portable basado en hew y si tenes dudas mira...
          </p>
        </div>
        <div className='space-y-4'>
          {
            Rentable_data.map((item, index) => (
              <div
                key={index}
                className={cn('border border-border text-center md:text-left bg-transparent p-4 border-[#2d2d2d] rounded-lg flex items-center gap-4 md:gap-10 px-10 max-w-5xl', index % 2 === 0 ? 'flex-col md:flex-row' : ' flex-col-reverse md:flex-row-reverse')}
                style={{
                  backgroundImage: index % 2 === 0 ? "linear-gradient(32deg,#0c0b0b 43%,#233e47 100%" : "linear-gradient(-32deg,#0c0b0b 43%,#233e47 100%"
                }}
              >
                <div
                  className='aspect-square w-40 h-40 md:w-48 md:h-48 relative'
                >
                  <Image
                    src={item.image}
                    fill
                    alt={item.title}
                  />
                </div>
                <div>
                  <h4
                    className='text-xl md:text-2xl font-semibold'
                  >
                    {item.title}
                  </h4>
                  <Separator className='my-2 ' />
                  <p className='text-gray-200'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
        <div
          className='flex items-center justify-center flex-col space-y-4 px-4 text-center  md:text-left'
        >
          <p>
            ❌NO NECESITAS MAS CURSOS O ASESORÍAS PARA SER RENTABLE.
          </p>
          <p>
            Necesitas un sistema probado que funcione y te garantice resultados sin preocupaciones
          </p>
          <Button
            size='xl'
            asChild
            className='text-center'
          >
            <a href="#calendly">
              QUIERO USAR HEW <br /> PARA OPERAR
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Rentable