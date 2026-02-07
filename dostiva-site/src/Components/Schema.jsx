import { useEffect } from "react";

export default function Schema() {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Dostiva Technologies",
      url: "https://dostiva-tech.netlify.app", // change to your real domain later
      logo: "https://dostiva-tech.netlify.app/logo.png", // update if needed
      sameAs: [],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    script.id = "dostiva-schema";

    // Remove old one if exists
    const old = document.getElementById("dostiva-schema");
    if (old) old.remove();

    document.head.appendChild(script);

    return () => {
      const s = document.getElementById("dostiva-schema");
      if (s) s.remove();
    };
  }, []);

  return null;
}
