import { FaqItems } from "@/data/data";
import Heading from "./ui/heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const Faq = ({ }) => {
  return (
    <section className="py-10 border-t border-[#2d2d2d]"
      style={{
        backgroundImage: "radial-gradient(at center center,#111 0%,#0a0a0a 69%)"
      }}
    >
      <div className="container space-y-6">
        <Heading
          title="Preguntas frecuentes"
          highlightWords={["preguntas frecuentes"]}
        />
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto space-y-3"
        >
          {
            FaqItems.map(({ question, answer, id }) => (
              <AccordionItem
                key={id}
                value={`item-${id}`}
                className="border-[1px] border-[#2d3740] rounded-lg"
              >
                <AccordionTrigger
                  className=" font-bold border-[#2d3740] rounded-lg px-6 text-left hover:text-[#0faab6] data-[state=open]:rounded-b-none  data-[state=open]:border-b  data-[state=open]:text-[#0faab6]"
                  style={{ background: 'linear-gradient(283deg,#FFFFFF1A 0%,#FFFFFF12 100%)' }}
                >
                  {question}
                </AccordionTrigger>
                <AccordionContent
                  className="bg-black px-6 py-4 rounded-lg text-[1.1em] text-[#c7c7c7]"
                >
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
