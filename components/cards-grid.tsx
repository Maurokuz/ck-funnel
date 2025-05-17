import Image from "next/image"
import Badge from "./ui/badge"
import Heading from "./ui/heading"
import { Cards_data } from "@/data/data"

const CardsGrid = () => {
  return (
    <section
      className="border-t border-[#2d2d2d]"
    >
      <div
        className="container mx-auto px-4 py-12 flex items-center flex-col justify-center space-y-8"
      >
        <Badge
          text="Aprende a ser rentable en los mercados"
        />
        <Heading
          title="¿Qué vas a aprender?"
          highlightWords={[""]}
        />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        >
          {
            Cards_data.map((card, index) => (
              <div
                key={index}
                className="bg-[linear-gradient(219deg,#233e47_10%,#0c0b0b_60%)] bg-transparent px-4 pb-10 rounded-lg
                border border-[#2d3740] flex flex-col items-center justify-start text-center max-w-xs hover:scale-[102%] transition-scale duration-300"
              >
                <Image
                  src={card.image}
                  alt="Card image"
                  width={400}
                  height={400}
                />
                <h3
                  className="text-white text-2xl font-bold mb-4"
                >
                  {card.title}
                </h3>
                <p
                  className="text-gray-400 "
                >
                  {card.description}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default CardsGrid