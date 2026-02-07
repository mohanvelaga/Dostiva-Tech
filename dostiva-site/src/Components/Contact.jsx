import { useLocation } from "react-router-dom";




export default function Contact() {
  const { state } = useLocation();
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-slate-600 mb-4">Ready to grow with us? Let’s talk.</p>
          <p>Email: info@dostiva.com</p>
          <p>Phone: +91 9192849769</p>
        </div>
         {state?.course && (
        <p className="mb-4 text-slate-600">
          You are interested in:{" "}
          <span className="font-semibold text-brand-orange">
            {state.course}
          </span>
        </p>
      )}

        <form className="bg-slate-50 p-6 rounded-xl grid gap-4">
          <input className="border p-3 rounded" placeholder="Your Name" />
          <input className="border p-3 rounded" placeholder="Email" />
          <input className="border p-3 rounded" placeholder="Phone" />
          <textarea className="border p-3 rounded" placeholder="Your Message" rows="4"></textarea>
          <button className="bg-brand-orange text-white py-3 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
}
