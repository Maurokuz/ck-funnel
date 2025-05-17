import Script from "next/script";
import Heading from "./ui/heading";

const Calendly = () => {
  return (
    <>
      <section className="flex items-center mx-auto flex-col mt-10 px-2" >
        <div>
          <Heading
            title={`Paso 2 de 2: Agendá tu llamada`}
            highlightWords={["llamada", "2 de 2"]}
          />
        </div>
        <div className="container h-full rounded-lg" id="calendly">
          <div className="calendly-inline-widget mt-6 lg:mt-0 h-[650px] sm:h-[700px] md:h-[750px] xl:h-[740px] max-w-[1000px] rounded-md mx-auto" data-url="https://calendly.com/criptokuz/criptokuz-mentorship-1-a-1-mauro-clon-1?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=00fbff"
            style={{
              colorScheme: 'white'
            }}
          >
          </div>
        </div>
      </section>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></Script>
    </>
  );
};

export default Calendly;