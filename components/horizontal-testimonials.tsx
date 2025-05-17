import Badge from './ui/badge'
import Heading from './ui/heading'
import Highlighter from './highlighter'
import { TrendingUp } from 'lucide-react'
import { HorizontalTestimonialsItems } from '@/data/data'
import SlideIn from './slide-in'

const HorizontalTestimonials = () => {
  return (
    <section
      className="border-t border-[#2d2d2d]"
    >
      <div
        className="container mx-auto px-4 py-12 flex items-center flex-col justify-center space-y-8"
      >
        <Badge
          text="Casos de éxito"
        />
        <Heading
          title="Resultados de nuestros alumnos"
          highlightWords={["resultados"]}
        />
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {
            HorizontalTestimonialsItems.map((item, index) => (
              <SlideIn
                key={index}
                className='bg-[linear-gradient(219deg,#233e47_10%,#0c0b0b_60%)] bg-transparent p-4 rounded-lg
                border border-[#2d3740] flex flex-col gap-4 max-w-xl hover:shadow-[0px_0px_70px_-12px_rgba(18,193,243,.5)] transition-shadow duration-300'
              >
                <iframe
                  src={item.video}
                  title="Vimeo video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className='aspect-video rounded-lg'
                />
                <div className='flex flex-col md:flex-row justify-center gap-4 h-full'>
                  <div className='w-full md:w-[70%]'>
                    <div className='font-normal md:font-semibold text-zinc-300'>
                      {item.name}
                    </div>
                    <div className='text-xl md:text-2xl font-semibold leading-[105%]'>
                      <Highlighter
                        text={item.description}
                        wordsToHighlight={item.wordsToHighlight}
                      />
                    </div>
                  </div>
                  <div className='p-2 border border-[#495159] rounded-md bg-[#0d0f16] flex items-center flex-col w-full md:w-[30%] justify-center'>
                    <div className='flex gap-2 items-center'>
                      <TrendingUp className='text-primary' size={24} />
                      <p>WR</p>
                    </div>
                    <div>
                      <p className='text-2xl font-bold'>{item.wr}%</p>
                    </div>
                  </div>
                </div>
              </SlideIn>
            ))
          }
        </div>
      </div>
    </section>

  )
}

export default HorizontalTestimonials