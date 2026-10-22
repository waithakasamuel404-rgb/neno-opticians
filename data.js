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
  { name: "Tortoise Square",   brand: "Posh",        category: "Rectangle", price: "", image: "images/frame-1.jpg",  color: "#9a4a1c", available: "yes" },
  { name: "Purple Cat-Eye",    brand: "Dior",        category: "Cat-eye",   price: "", image: "images/frame-2.jpg",  color: "#a02fd1", available: "yes" },
  { name: "Blue Tortoise",     brand: "Posh",        category: "Rectangle", price: "", image: "images/frame-3.jpg",  color: "#4d6c8c", available: "yes" },
  { name: "Classic Black",     brand: "Cartier",     category: "Rectangle", price: "", image: "images/frame-4.jpg",  color: "#1b2540", available: "yes" },
  { name: "Navy Butterfly",    brand: "Maxim Paris", category: "Cat-eye",   price: "", image: "images/frame-5.jpg",  color: "#1f2f78", available: "yes" },
  { name: "Ocean Round",       brand: "Maxim Paris", category: "Round",     price: "", image: "images/frame-6.jpg",  color: "#1aa5c8", available: "yes" },
  { name: "Lilac Rimless",     brand: "",            category: "Rimless",   price: "", image: "images/frame-7.jpg",  color: "#b784d6", available: "yes" },
  { name: "Red Half-Rim",      brand: "",            category: "Half-rim",  price: "", image: "images/frame-8.jpg",  color: "#c8283c", available: "yes" },
  { name: "Smoke Rectangle",   brand: "Prada",       category: "Rectangle", price: "", image: "images/frame-9.jpg",  color: "#3d4452", available: "yes" }
];
