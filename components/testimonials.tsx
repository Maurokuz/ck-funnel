import { TestimonialsItems } from "@/data/data";
import { Button } from "./ui/button"
import Testimonial from "./ui/testimonial"
import Heading from "./ui/heading";
import Badge from "./ui/badge";

interface TestimonialProps {
  isMain?: boolean;
  title: string;
  highlightWords: string[];
}

const Testimonials: React.FC<TestimonialProps> = ({
  isMain = true,
  title,
  highlightWords
}) => {
  return (
    <section
      className="py-10 border-t border-[#2d2d2d] bg-[#111]"
    >
      <div className="container flex flex-col items-center justify-center space-y-6">
        <Badge
          text="Estos son algunos de los traders que han pasado por nuestro programa"
        />
        <Heading
          title={title}
          highlightWords={highlightWords}
        />
        <div
          className="grid grid-cols-1 xl:grid-cols-3 gap-x-10 gap-y-5 md:gap-y-10"
        >
          {
            TestimonialsItems.map(({ id, video, description, highlightWords }, index) => {
              const isLast = TestimonialsItems.length === index + 1
              const isOdd = TestimonialsItems.length % 2 !== 0
              return (
                <Testimonial
                  key={id}
                  video={video}
                  description={description}
                  highlightWords={highlightWords}
                  isLast={isLast && isOdd}
                />
              )

            })
          }
        </div>
        {
          isMain ?
            <Button
              size='xl'
              asChild
            >
              <a href="#calendly">Quiero aplicar</a>
            </Button>
            :
            <div
              className="container space-y-2 text-center py-10"
            >
              <h2
                className="text-4xl font-bold"
              >
                Nos vemos en la llamada!
              </h2>
              <p
                className="text-2xl text-gray-400"
              >
                Si no viste los videos anteriores, no podremos tener la llamada
              </p>
            </div>
        }
      </div>
    </section>
  )
}

export default Testimonials