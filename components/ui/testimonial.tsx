import { cn } from "@/lib/utils";
import Highlighter from "../highlighter";

interface TestimonialProps {
  video: string
  description: string
  highlightWords?: string[];
  isLast?: boolean
}

const Testimonial: React.FC<TestimonialProps> = ({ video, description, highlightWords = [], isLast = false }) => {
  return (
    <article
      className={cn("space-y-4 max-w-2xl w-full mx-auto p-3 bg-[#FFFFFF12] border-[1px] border-[#444d55] rounded-lg bg-black")}
    >
      <iframe
        src={video}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg w-full aspect-video"
      ></iframe>
      <div
        className='text-xl font-semibold'
      >
        <Highlighter
          wordsToHighlight={highlightWords}
          text={description}
        />
      </div>
    </article>
  )
}

export default Testimonial