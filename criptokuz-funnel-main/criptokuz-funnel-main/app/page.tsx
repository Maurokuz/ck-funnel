import BackgroundLayout from "@/components/background-layout";
import Calendly from "@/components/calendly";
import CardsGrid from "@/components/cards-grid";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import HorizontalTestimonials from "@/components/horizontal-testimonials";
import Rentable from "@/components/rentable";
import Badge from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="">
      <BackgroundLayout
        className="pt-10"
      >
        <Badge
          text="Aprende a ser rentable en los mercados"
        />
        <Hero
          title="Trader, estas a dos pasos de volverte rentable y poder vivir de los mercados"
          video="https://player.vimeo.com/video/1028229172?h=303fcf7d1f&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          subtitle="La mejor parte es que si no sos rentable, te devolvemos cada dolar que nos pagaste garantizado por contrato"
          highlightWords={["rentable"]}
          steps
        />
      </BackgroundLayout>
      <Calendly />
      <HorizontalTestimonials />
      <CardsGrid />
      <Rentable />
      <Faq />
    </main>
  );
}
