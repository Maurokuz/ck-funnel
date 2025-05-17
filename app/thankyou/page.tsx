import { Metadata } from "next";

import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Testimonials from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import BackgroundLayout from "@/components/background-layout";
import Badge from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Criptokuz | ¡Gracias por aplicar!",
  description: "Muchas gracias por aplicar a la mentoría de CriptoKuz.",
  openGraph: {
    title: "Criptokuz | ¡Gracias por aplicar!",
    description: "Muchas gracias por aplicar a la mentoría de CriptoKuz.",
    type: "website",
    url: "https://criptokuz.com/thankyou",
    images: [
      {
        url: "./og-image-thankyou.jpg",
        width: 800,
        height: 450,
        alt: "Criptokuz | ¡Gracias por aplicar!",
      },
    ]
  },
};

const ThankYouPage = () => {
  return (
    <main>
      <BackgroundLayout
        className="flex items-center justify-center pt-10"
      >
        <Badge
          text="Pasos anteriores a la llamada"
        />
        <Hero
          isMain={false}
          title="Paso #1 (OBLIGATORIO) Mira el siguiente video para confirmar tu llamada"
          highlightWords={["paso #1"]}
          video="https://player.vimeo.com/video/1077456855?h=ccbfc9f446&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        />
        <Button
          size="xl"
          asChild
        >
          <a
            href="https://wa.me/5492984358451?text=Buenas,%20acabo%20de%20agendar%20una%20llamada%20con%20vos%20mi%20nombre%20es"
            target="_blank"
            className="z-50 mb-10"
          >
            Confirmar llamada
          </a>
        </Button>
      </BackgroundLayout>
      <Hero
        isMain={false}
        title="Paso #2 (OBLIGATORIO)
          Nuestro proceso para ser rentable en menos de 90 dias"
        video="https://player.vimeo.com/video/958728289?h=2dca979dc9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        highlightWords={["Paso #2", "rentable", "90 dias"]}
      />
      <Testimonials
        isMain={false}
        title="Paso #3 (OBLIGATORIO)
          Mira nuestros casos de éxito de CriptoKuz"
        highlightWords={["paso #3"]}
      />
      <Faq />
    </main>
  );
};

export default ThankYouPage;
