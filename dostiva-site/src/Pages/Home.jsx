import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Courses from "../Components/Courses";
import WhyChooseUs from "../Components/ChooseUs";
import HowItWorks from "../Components/HowIt";
import Testimonials from "../Components/Testimonials";
import Stats from "../Components/Stats";
import SEO from "../Components/SEO";
import Schema from "../Components/Schema";


const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Dostiva Tecnologis",
  "url": "https://www.dostiva.com",
  "logo": "https://www.dostiva.com/logo.png", // change when you upload logo
  "sameAs": [
    "https://www.linkedin.com/company/dostiva",
    "https://www.facebook.com/dostiva",
    "https://www.instagram.com/dostiva"
  ],
  "description": "Dostiva Tecnologis provides IT services, software development, and professional training programs.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-XXXXXXXXXX",
    "contactType": "customer support",
    "areaServed": "IN",
    "availableLanguage": ["English"]
  }
};

export default function Home() {
  return (
    <>
      <Schema schema={orgSchema} />
      <SEO
        title="Dostiva Technologis | IT Services & Training"
        description="Build. Learn. Grow. with Dostiva Technologis. We provide IT solutions and professional training."
      />
      
      <Hero />
      <Stats />
      <Services />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <HowItWorks />
    </>
  );
}
