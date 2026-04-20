export const site = {
  name: "Barber Template",
  tagline: "Modern cuts, classic style. Premium experience.",
  phone: "123 456 789",
  address: "Your Address Here, City",
  instagram: "https://instagram.com/",
  googleMapsEmbed:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12151.789124403064!2d-3.715367681657803!3d40.41018804868285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e0766a505%3A0xe7267590d98ac145!2sSol%2C%20Centro%2C%2028013%20Madrid!5e0!3m2!1sen!2ses!4v1739910000000",

  // Koalendar: usa el link y/o un embedUrl si lo tienes.
  koalendar: {
    bookingLink: "https://koalendar.com/e/testmiguelweb", // <- pon aquí el link real
    embedUrl: "", // <- si tienes un embed específico, ponlo aquí
  },

  hours: [
    { day: "Mon - Fri", time: "10:00 - 20:00" },
    { day: "Saturday", time: "10:00 - 15:00" },
    { day: "Sunday", time: "Closed" },
  ],

  services: [
    { name: "Service 1", price: "10€", detail: "Detail for service 1" },
    { name: "Service 2", price: "15€", detail: "Detail for service 2" },
    { name: "Service 3", price: "20€", detail: "Detail for service 3" },
    { name: "Service 4", price: "25€", detail: "Detail for service 4" },
    { name: "Service 5", price: "30€", detail: "Detail for service 5" },
  ],


  team: [
    {
      name: "Barber 1",
      role: "Master Barber",
      bookingLink: "https://koalendar.com/e/testmiguelweb",
      image: "/team-1.png",
    },
    {
      name: "Barber 2",
      role: "Barber",
      bookingLink: "https://koalendar.com/",
      image: "/team-2.png",
    },
  ],

  testimonials: [
    { name: "Client 1", text: "Great service and exactly what I wanted." },
    { name: "Client 2", text: "Very professional, will come back 100%." },
    { name: "Client 3", text: "Top notch experience." },
  ],

  // Pon imágenes en /public/ (ej: public/gallery-1.jpg)
  gallery: ["/gallery-1.jpg", "/gallery-2.jpg", "/gallery-3.jpg", "/gallery-4.jpg"],
};
