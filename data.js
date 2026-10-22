/* ==========================================================
   NENO OPTICIANS — SITE DATA
   This is the ONLY file the owner needs to edit.
   Two ways to manage frames (pick one):
   A) Easiest: Google Sheet. Paste the sheet's CSV link into
      sheetCsvUrl below. Edit the sheet, the website updates.
   B) Edit the NENO_PRODUCTS list at the bottom of this file.
   ========================================================== */

window.NENO_CONFIG = {
  whatsapp: "254722831921",          // WhatsApp number, no + or spaces
  phoneDisplay: "0722 831 921",
  phoneLink: "+254722831921",

  socials: {
    tiktok:    { handle: "@neno_opticians.ke",       url: "https://www.tiktok.com/@neno_opticians.ke" },
    instagram: { handle: "@Neno.opticians",           url: "https://www.instagram.com/neno.opticians" },
    facebook:  { handle: "Neno Opticians Eye Clinic", url: "https://www.facebook.com/search/top?q=neno%20opticians%20eye%20clinic" }
  },

  /* Google Sheet CSV link (leave "" to use the list below).
     Sheet columns (row 1 headings, exactly):
     name, brand, category, price, image, color, available
     - image: a photo link or a file name inside /images (e.g. images/frame-10.jpg)
     - available: leave empty or write yes / no
     How to get the link: File > Share > Publish to web > choose the
     sheet > CSV > Publish > copy the link. */
  sheetCsvUrl: "",

  // Add an address or opening hours to any branch when you have them.
  branches: [
    { name: "Ruiru" },
    { name: "Kihunguro" },
    { name: "Kayole" },
    { name: "Kahawa West" },
    { name: "Nairobi" },
    { name: "Thika" },
    { name: "Githunguri" }
  ],

  services: [
    { title: "Eye examination",      text: "A full sight test by trained eye care staff, so your prescription starts from a correct reading." },
    { title: "Prescription lenses",  text: "Lenses cut to your prescription and fitted into the frame you choose." },
    { title: "Frames for every face", text: "Cat-eye, round, rectangle, rimless and half-rim styles in many colours." },
    { title: "Fitting and adjustment", text: "Bring your glasses in when they slip, pinch or sit crooked and we will adjust them." }
  ]
};

/* Frames. To add one: copy a block, change the words, save your photo
   in the images folder with the same name you write under "image".
   category examples: Cat-eye, Round, Rectangle, Rimless, Half-rim
   price: write a number like 2500, or leave "" to show "Ask for price". */
window.NENO_PRODUCTS = [
  {name: "Blush Cat-Eye", brand: "", category: "Cat-eye", price: "", image: "frame-1.jpg", color: "#e8a7a0", available: "yes"},
  {name: "Lilac Cat-Eye", brand: "", category: "Cat-eye", price: "", image: "frame-2.jpg", color: "#9b7fb0", available: "yes"},
  {name: "Rose Stripe Cat-Eye", brand: "", category: "Cat-eye", price: "", image: "frame-3.jpg", color: "#f0489b", available: "yes"},
  {name: "Pink Tortoise Cat-Eye", brand: "", category: "Cat-eye", price: "", image: "frame-4.jpg", color: "#b5655c", available: "yes"},
  {name: "Tortoise and Teal", brand: "Evolution Classic", category: "Rectangle", price: "", image: "frame-5.jpg", color: "#9a4a1c", available: "yes"},
  {name: "Tortoise Browline", brand: "", category: "Half-rim", price: "", image: "frame-6.jpg", color: "#5b3a29", available: "yes"},
  {name: "Rose Gold Aviator", brand: "", category: "Aviator", price: "", image: "frame-7.jpg", color: "#d4a59a", available: "yes"},
  {name: "Matte Black Rectangle", brand: "", category: "Rectangle", price: "", image: "frame-8.jpg", color: "#1b2540", available: "yes"},
  {name: "Champagne Round", brand: "", category: "Round", price: "", image: "frame-9.jpg", color: "#d9b99b", available: "yes"},
  {name: "Smoke Round", brand: "Dior", category: "Round", price: "", image: "frame-10.jpg", color: "#5b6a5a", available: "yes"},
  {name: "Black Gold Round", brand: "", category: "Round", price: "", image: "frame-11.jpg", color: "#1b2540", available: "yes"},
  {name: "Crystal Bridge Round", brand: "", category: "Round", price: "", image: "frame-12.jpg", color: "#9fb4c7", available: "yes"},
  {name: "Ruby Fade Round", brand: "", category: "Round", price: "", image: "frame-13.jpg", color: "#a0453a", available: "yes"},
  {name: "Burgundy Hexagon", brand: "Ania", category: "Round", price: "", image: "frame-14.jpg", color: "#7a2036", available: "yes"},
  {name: "Black Gold Round II", brand: "", category: "Round", price: "", image: "frame-15.jpg", color: "#1b2540", available: "yes"},
  {name: "Black Bridge Round", brand: "", category: "Round", price: "", image: "frame-16.jpg", color: "#1b2540", available: "yes"},
  {name: "Black Double Bridge", brand: "Clara", category: "Round", price: "", image: "frame-17.jpg", color: "#1b2540", available: "yes"},
  {name: "Floral Round", brand: "Cielo", category: "Round", price: "", image: "frame-18.jpg", color: "#7b4fb0", available: "yes"},
  {name: "Sky Tip Metal Cat-Eye", brand: "", category: "Cat-eye", price: "", image: "frame-19.jpg", color: "#6bb7e8", available: "yes"},
  {name: "Rose Tip Metal Cat-Eye", brand: "", category: "Cat-eye", price: "", image: "frame-20.jpg", color: "#e58ab8", available: "yes"},
  {name: "Black Rose Gold Cat-Eye", brand: "", category: "Cat-eye", price: "", image: "frame-21.jpg", color: "#1b2540", available: "yes"},
  {name: "Black Gold Jewel Cat-Eye", brand: "", category: "Cat-eye", price: "", image: "frame-22.jpg", color: "#c8a063", available: "yes"},
  {name: "Leopard Wing", brand: "", category: "Cat-eye", price: "", image: "frame-23.jpg", color: "#8a6a3a", available: "yes"},
  {name: "Leopard Classic", brand: "", category: "Cat-eye", price: "", image: "frame-24.jpg", color: "#8a6a3a", available: "yes"}
];
