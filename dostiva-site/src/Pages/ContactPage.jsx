import Contact from "../Components/Contact";
import Schema from "../Components/Schema";
import SEO from "../Components/SEO";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Dostiva Technologis",
  image: "https://www.dostiva.com/logo.png",
  url: "https://www.dostiva.com",
  telephone: "+91-XXXXXXXXXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Office Address",
    addressLocality: "Your City",
    addressRegion: "Your State",
    postalCode: "Your PIN",
    addressCountry: "IN",
  },
};

export default function ContactPage() {
  return (
    <>
      <Schema schema={localBusinessSchema} />
      <SEO
        title="Contact | Dostiva Technologis"
        description="Contact Dostiva Technologis for IT services and professional training."
      />

      {/* ✅ Make parent relative */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 overflow-hidden  bg-slate-50">
        
        {/* ✅ Background blobs should NOT block clicks */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />

        {/* ✅ Content goes above background */}
        <div className="relative " style={{ zIndex: 10 }}>
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <Contact />
        </div>
      </div>
    </>
  );
}
