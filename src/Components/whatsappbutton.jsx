const WhatsAppButton = () => {
  const phone = "916304596203";
  const message = "Hi Dostiva Team, I am interested in your services";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2">
         Chat on WhatsApp
      </button>
    </a>
  );
};

export default WhatsAppButton;