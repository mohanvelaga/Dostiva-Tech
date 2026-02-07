import Contact from "../Components/Contact";
import Schema from "../Components/Schema";
import SEO from "../Components/SEO";
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Dostiva Tecnologis",
  "image": "https://www.dostiva.com/logo.png",
  "url": "https://www.dostiva.com",
  "telephone": "+91-XXXXXXXXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Your Office Address",
    "addressLocality": "Your City",
    "addressRegion": "Your State",
    "postalCode": "Your PIN",
    "addressCountry": "IN"
  }
};

export default function ContactPage() {
  return (
    <>
      <Schema schema={localBusinessSchema} />
      <SEO
  title="Contact | Dostiva Technologis"
  description="Contact Dostiva Technologis for IT services and professional training."
/>
    <div className="max-w-7xl mx-auto px-4 py-16 overflow-hidden bg-slate-50">
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <Contact />
    </div></>
  );
} 
   