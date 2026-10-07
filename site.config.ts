import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "Jayz Bakers",
  tagline: "Custom cakes, cupcakes, and dessert tables in Mississauga, baked from scratch with love.",
  category: "Custom cakes",
  schemaType: "Bakery",
  area: "Mississauga, ON",
  siteUrl: "https://jayz-bakers.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#d4a07c" },
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Home baked in Mississauga",
    headline: "Cakes and dessert tables made for your celebration",
    subhead:
      "Custom cakes, cupcakes, and coordinated dessert tables, baked 100% from scratch with love. Slide into our DMs with your date and event theme to check availability.",
    images: [
      {
        src: "/images/floral-cake.jpg",
        alt: "Custom buttercream floral cake by Jayz Bakers",
        width: 640,
        height: 1136,
      },
      {
        src: "/images/dessert-table.jpg",
        alt: "Coordinated event dessert table",
        width: 640,
        height: 1136,
      },
      {
        src: "/images/cupcakes.jpg",
        alt: "Decorated cupcakes to match a celebration cake",
        width: 640,
        height: 1136,
      },
    ],
    secondaryCta: { label: "See the gallery", href: "#gallery" },
  },

  highlights: [
    "Baked 100% from scratch",
    "Orders by DM",
    "Event dessert tables",
    "Mississauga",
  ],

  about: {
    title: "Baked from scratch, with love",
    body: [
      "Jayz Bakers makes custom cakes, cupcakes, and event dessert tables in Mississauga. Everything is baked 100% from scratch with love, from buttercream florals and pearl finishes to cupcake towers that match the main cake.",
      "Planning a baby shower, birthday, or special gathering? Send your date and event theme in a DM and we will check availability for upcoming weekends.",
    ],
    image: {
      src: "/images/from-scratch.jpg",
      alt: "Homemade cake decorated with buttercream flowers",
      width: 896,
      height: 671,
    },
  },

  menu: {
    title: "What we bake",
    intro:
      "A taste of recent favourites. Every order is custom quoted in your DM based on design, size, and date.",
    variant: "list",
    groups: [
      {
        title: "Cakes and cupcakes",
        note: "Quoted by DM",
        items: [
          {
            name: "Custom cakes",
            description:
              "Palette knife florals, buttercream flowers, pearls, and designs that match your theme.",
            href: "https://www.instagram.com/p/Dd7bUnbnJn5/",
          },
          {
            name: "Cupcakes and cupcake towers",
            description: "Pretty companions to the main cake, including three tier towers.",
            href: "https://www.instagram.com/p/DeAhGhgPCvo/",
          },
          {
            name: "Event dessert tables",
            description:
              "Coordinated sweets styled to match your venue and decor.",
            href: "https://www.instagram.com/p/DeImImoMvBp/",
          },
          {
            name: "Slab cakes",
            description:
              "Including half Ferrero Rocher chocolate hazelnut crunch and half strawberry vanilla.",
          },
          {
            name: "Lotus Biscoff filled cutting cake",
          },
          {
            name: "Vanilla cake with strawberry and pineapple filling",
          },
          {
            name: "Cookies and Cream Oreo fault line cake",
          },
          {
            name: "Tres Leches Mango Cake",
            description: "Creamy, light, and perfect for celebrations.",
            href: "https://www.instagram.com/p/DbCLbWKynwS/",
          },
          {
            name: "Baby shower cakes",
            href: "https://www.instagram.com/p/Db4O2Kryr3c/",
          },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at recent bakes",
    items: [
      {
        src: "/images/dessert-table.jpg",
        width: 640,
        height: 1136,
        alt: "Coordinated dessert table matching venue decor",
        caption: "Dessert table styled to the venue",
        href: "https://www.instagram.com/p/DeImImoMvBp/",
      },
      {
        src: "/images/cupcakes.jpg",
        width: 640,
        height: 1136,
        alt: "Cupcakes beside a celebration cake",
        caption: "Cupcakes to match the cake",
        href: "https://www.instagram.com/p/DeAhGhgPCvo/",
      },
      {
        src: "/images/from-scratch.jpg",
        width: 896,
        height: 671,
        alt: "Cake baked from scratch with buttercream florals",
        caption: "Baked 100% from scratch with love",
        href: "https://www.instagram.com/p/Dd7bUnbnJn5/",
      },
      {
        src: "/images/pakistan-cake.jpg",
        width: 640,
        height: 1136,
        alt: "White and green celebration cake",
        caption: "White and green, made with love",
        href: "https://www.instagram.com/p/DcCMkzFvo7g/",
      },
      {
        src: "/images/baby-shower.jpg",
        width: 640,
        height: 1136,
        alt: "Baby shower cake for a new arrival",
        caption: "Celebrating a sweet new arrival",
        href: "https://www.instagram.com/p/Db4O2Kryr3c/",
      },
      {
        src: "/images/floral-cake.jpg",
        width: 640,
        height: 1136,
        alt: "Custom cake with detailed buttercream decor",
        caption: "Decor that matches your vision",
        href: "https://www.instagram.com/p/Dbot4oHy_ls/",
      },
      {
        src: "/images/tres-leches.jpg",
        width: 789,
        height: 1400,
        alt: "Tres Leches Mango Cake",
        caption: "Tres Leches Mango Cake",
        href: "https://www.instagram.com/p/DbCLbWKynwS/",
      },
    ],
  },

  instagram: {
    handle: "jav_hashmi",
    embeds: [
      "https://www.instagram.com/p/Dd7bUnbnJn5/",
      "https://www.instagram.com/p/DeImImoMvBp/",
      "https://www.instagram.com/p/Dbot4oHy_ls/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro:
      "Orders are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat with your date and event theme.",
    dmMessage:
      "Hi Jayz Bakers! I would love to place an order.\n\nWhat I need (cake / cupcakes / dessert table):\nDate needed:\nNumber of guests:\nTheme or colour palette:\nPickup or delivery:\nAny flavour or design notes:",
    links: [],
    note: "Share your date and event theme in a DM to check availability. Booking for upcoming weekends.",
  },

  reviews: {
    title: "Kind words",
    items: [
      {
        quote:
          "The flavour was on point and the cake decor was exactly what I was looking for!",
        source: "Client feedback",
      },
    ],
  },

  faq: [
    {
      q: "How do I order?",
      a: "Slide into our Instagram DMs with your date and event theme so we can check availability. Tell us whether you need a cake, cupcakes, or a dessert table, and we will take it from there.",
    },
    {
      q: "What do you bake?",
      a: "Custom cakes, cupcakes and cupcake towers, slab cakes, cutting cakes, and coordinated event dessert tables. Favourites have included Tres Leches Mango, Lotus Biscoff, Cookies and Cream, and strawberry pineapple fillings.",
    },
    {
      q: "Where are you based?",
      a: "Jayz Bakers is based in Mississauga, Ontario. Details for pickup or delivery are arranged when you place your order.",
    },
    {
      q: "Are cakes made from scratch?",
      a: "Yes. Everything is baked 100% from scratch with love.",
    },
  ],

  contact: {
    area: "Mississauga, Ontario",
  },

  seo: {
    title: "Jayz Bakers | Custom cakes in Mississauga",
    description:
      "Custom cakes, cupcakes, and dessert tables in Mississauga, baked from scratch with love. Order by Instagram DM with your date and theme.",
    keywords: [
      "custom cakes Mississauga",
      "cupcakes Mississauga",
      "dessert tables Mississauga",
      "home baker Mississauga",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
