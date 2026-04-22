export const CLINIC = {
  name: "Phoenix Mediclinic",
  tagline: "Advanced Skin, Hair & Holistic Care in Gurugram",
  phone: "8336005000",
  phoneDisplay: "+91 83360 05000",
  whatsapp: "918336005000",
  address: "1168, Sector 46, Gurugram, Haryana",
  mapsQuery: "1168, Sector 46, Gurugram, Haryana",
};

export const whatsappLink = (message = "Hi, I'd like to book an appointment at Phoenix Mediclinic.") =>
  `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
