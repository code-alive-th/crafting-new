export const SHOWCASE_ITEMS = [
  {
    id: "craftheart",
    title: "Craft Heart",
    image: "/assets/works/showcase-craftheart.webp",
  },
  {
    id: "gogreen",
    title: "GoGreen By Kanya",
    image: "/assets/works/showcase-gogreen.webp",
  },
  {
    id: "wisetniyom",
    title: "Wiset Niyom",
    image: "/assets/works/showcase-wisetniyom.webp",
  },
];

export const GRAPHIC_DESIGN_ITEMS = [
  {
    id: "cma",
    name: "Central Chiangmai Airport",
    image: "/assets/works/portfolio/clients/cma-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/cma-color.webp",
  },
  {
    id: "ggb",
    name: "Go Green Bar",
    image: "/assets/works/portfolio/clients/ggb-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/ggb-color.webp",
  },
  {
    id: "payon",
    name: "Payon",
    image: "/assets/works/portfolio/clients/payon-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/payon-color.webp",
  },
  {
    id: "kong",
    name: "Kong Mart",
    image: "/assets/works/portfolio/clients/kong-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/kong-color.webp",
  },
  {
    id: "gomaew",
    name: "Gomaew",
    image: "/assets/works/portfolio/clients/gomaew-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/gomaew-color.webp",
  },
  {
    id: "blanc",
    name: "Blanc All Day Eatery",
    image: "/assets/works/portfolio/clients/blanc-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/blanc-color.webp",
  },
  {
    id: "vinzen",
    name: "The Vinzen",
    image: "/assets/works/portfolio/clients/vinzen-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/vinzen-color.webp",
  },
  {
    id: "nat",
    name: "Nat Bar",
    image: "/assets/works/portfolio/clients/nat-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/nat-color.webp",
  },
  {
    id: "paincare",
    name: "Pain Care",
    image: "/assets/works/portfolio/clients/paincare-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/paincare-color.webp",
  },
  {
    id: "ggclinic",
    name: "Go Green Clinic",
    image: "/assets/works/portfolio/clients/ggclinic-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/ggclinic-color.webp",
  },
  {
    id: "funky",
    name: "Funky",
    image: "/assets/works/portfolio/clients/funky-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/funky-color.webp",
  },
  {
    id: "nor",
    name: "Nor",
    image: "/assets/works/portfolio/clients/nor-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/nor-color.webp",
  },
  {
    id: "moreeda",
    name: "Moreeda",
    image: "/assets/works/portfolio/clients/moreeda-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/moreeda-color.webp",
  },
  {
    id: "cusco",
    name: "Caffe Cusco",
    image: "/assets/works/portfolio/clients/cusco-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/cusco-color.webp",
  },
  {
    id: "cmh",
    name: "CMH",
    image: "/assets/works/portfolio/clients/cmh-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/cmh-color.webp",
  },
  {
    id: "gsl",
    name: "GSL",
    image: "/assets/works/portfolio/clients/gsl-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/gsl-color.webp",
  },
  {
    id: "baipo",
    name: "Baipo",
    image: "/assets/works/portfolio/clients/baipo-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/baipo-color.webp",
  },
  {
    id: "ggcafe",
    name: "GoGreen Cafe",
    image: "/assets/works/portfolio/clients/ggcafe-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/ggcafe-color.webp",
  },
  {
    id: "chidlom",
    name: "Chidlom",
    image: "/assets/works/portfolio/clients/chidlom-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/chidlom-color.webp",
  },
  {
    id: "somm",
    name: "Somm",
    image: "/assets/works/portfolio/clients/somm-dark.webp",
    hoverImage: "/assets/works/portfolio/clients/somm-color.webp",
  },
];

export const VIDEO_CATEGORIES = [
  "Craft Heart",
  "Real Estate",
  "Restaurant",
  "Food",
  "Bar&Cafe",
];

export type VideoItem = {
  id: string;
  src: string;
  thumbnail: string;
  alt: string;
  category: string;
};

const createYouTubeShort = (
  id: string,
  category: string,
  alt: string,
): VideoItem => ({
  id,
  src: `https://www.youtube.com/embed/${id}?playsinline=1&rel=0&modestbranding=1`,
  thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
  alt,
  category,
});

export const PRODUCTION_VIDEOS: VideoItem[] = [
  createYouTubeShort(
    "UPqGsHt7fkA",
    "Real Estate",
    "Real Estate video production showcase",
  ),
  createYouTubeShort(
    "aaqykWnnUzE",
    "Restaurant",
    "Restaurant video production showcase",
  ),
  createYouTubeShort("Sldg55p42jU", "Food", "Food video production showcase"),
  createYouTubeShort(
    "HVRnOXuqMYI",
    "Clinic",
    "Clinic video production showcase",
  ),
  createYouTubeShort(
    "XAQn98HVJw4",
    "Bar&Cafe",
    "Bar and cafe video production showcase",
  ),
];

export const PHOTO_CATEGORIES = ["Packshot", "Styling", "Vibe", "Advertising"];

export const PHOTO_FAN = [
  { rotate: 0.88, yOffset: 77 },
  { rotate: -4.98, yOffset: 0 },
  { rotate: 0, yOffset: 130 },
  { rotate: 4.98, yOffset: 0 },
  { rotate: -0.88, yOffset: 77 },
];

export const PHOTO_SLIDES = [
  [
    {
      id: "ph-1",
      image: "/assets/works/photography/ph-1.webp",
      alt: "Packshot 1",
    },
    {
      id: "ph-2",
      image: "/assets/works/photography/ph-2.webp",
      alt: "Packshot 2",
    },
    {
      id: "ph-3",
      image: "/assets/works/photography/ph-3.webp",
      alt: "Packshot 3",
    },
    {
      id: "ph-4",
      image: "/assets/works/photography/ph-4.webp",
      alt: "Packshot 4",
    },
    {
      id: "ph-5",
      image: "/assets/works/photography/ph-5.webp",
      alt: "Packshot 5",
    },
  ],
  [
    {
      id: "ph-6",
      image: "/assets/works/photography/ph-6.webp",
      alt: "Styling 1",
    },
    {
      id: "ph-7",
      image: "/assets/works/photography/ph-7.webp",
      alt: "Styling 2",
    },
    {
      id: "ph-8",
      image: "/assets/works/photography/ph-8.webp",
      alt: "Styling 3",
    },
    {
      id: "ph-9",
      image: "/assets/works/photography/ph-9.webp",
      alt: "Styling 4",
    },
    {
      id: "ph-10",
      image: "/assets/works/photography/ph-10.webp",
      alt: "Styling 5",
    },
  ],
  [
    {
      id: "ph-11",
      image: "/assets/works/photography/ph-11.webp",
      alt: "Vibe 1",
    },
    {
      id: "ph-12",
      image: "/assets/works/photography/ph-12.webp",
      alt: "Vibe 2",
    },
    {
      id: "ph-13",
      image: "/assets/works/photography/ph-13.webp",
      alt: "Vibe 3",
    },
    {
      id: "ph-14",
      image: "/assets/works/photography/ph-14.webp",
      alt: "Vibe 4",
    },
    {
      id: "ph-15",
      image: "/assets/works/photography/ph-15.webp",
      alt: "Vibe 5",
    },
  ],
  [
    {
      id: "ph-16",
      image: "/assets/works/photography/ph-16.webp",
      alt: "Advertising 1",
    },
    {
      id: "ph-17",
      image: "/assets/works/photography/ph-17.webp",
      alt: "Advertising 2",
    },
    {
      id: "ph-18",
      image: "/assets/works/photography/ph-18.webp",
      alt: "Advertising 3",
    },
    {
      id: "ph-19",
      image: "/assets/works/photography/ph-19.webp",
      alt: "Advertising 4",
    },
    {
      id: "ph-20",
      image: "/assets/works/photography/ph-20.webp",
      alt: "Advertising 5",
    },
  ],
];

export type WorkDetail = {
  id: string; // slug (ตรงกับ id ใน GRAPHIC_DESIGN_ITEMS)
  client: string; // ชื่อ client (bold label)
  businessType: string; // ประเภทธุรกิจ
  details: string; // รายละเอียดงาน (multi-line ใช้ \n)
  description?: string; // optional paragraph description (Thai text)
  logo: string; // path ไปยัง client logo image
  images: string[]; // array ของ project images
};

export const WORK_DETAILS: WorkDetail[] = [
  {
    id: "gogreen",
    client: "GoGreen by Kanya",
    businessType: "Cannabis Shop",
    details:
      "Decorate Shop / Digital Media / Offline Media / CI Branding / Merchandise",
    description:
      "Crafting Lab เริ่มตั้งแต่วาง Concept Branding ไปจนถึงการช่วย ออกแบบร้านกว่า 13 สาขา\nต่อยอดทั้ง Online + Offline ให้ร้านเป็นที่รู้จักปรับเปลี่ยนการสื่อสารให้ถูกต้องตามข้อกฏหมาย\nให้เป็น GoGreen Consult Center",
    logo: "/assets/works/portfolio/clients/gogreen-color.png",
    images: [
      "/assets/works/portfolio/details/gogreen-1.webp",
      "/assets/works/portfolio/details/gogreen-2.webp",
      "/assets/works/portfolio/details/gogreen-3.webp",
      "/assets/works/portfolio/details/gogreen-4.webp",
      "/assets/works/portfolio/details/gogreen-5.webp",
      "/assets/works/portfolio/details/gogreen-6.webp",
      "/assets/works/portfolio/details/gogreen-7.webp",
      "/assets/works/portfolio/details/gogreen-8.webp",
      "/assets/works/portfolio/details/gogreen-9.webp",
      "/assets/works/portfolio/details/gogreen-10.webp",
    ],
  },
  {
    id: "cma",
    client: "Central Chiangmai Department Store",
    businessType: "Department Store",
    details: "Hoarding Design / Counter Design /\nVisual Design",
    logo: "/assets/works/portfolio/clients/cma-color.webp",
    images: [
      "/assets/works/portfolio/details/cma-1.webp",
      "/assets/works/portfolio/details/cma-2.webp",
      "/assets/works/portfolio/details/cma-3.webp",
      "/assets/works/portfolio/details/cma-4.webp",
      "/assets/works/portfolio/details/cma-5.webp",
    ],
  },
  {
    id: "ggb",
    client: "GoGreen Bar",
    businessType: "Bar & Cafe",
    details: "Decorate Shop / Digital Media /\nOffline Media",
    logo: "/assets/works/portfolio/clients/ggb-color.webp",
    images: [
      "/assets/works/portfolio/details/ggb-1.webp",
      "/assets/works/portfolio/details/ggb-2.webp",
      "/assets/works/portfolio/details/ggb-3.webp",
    ],
  },
  {
    id: "somm",
    client: "SOMM",
    businessType: "Restaurant",
    details: "Digital Media / Offline Media",
    logo: "/assets/works/portfolio/clients/somm-color.webp",
    images: [
      "/assets/works/portfolio/details/somm-1.webp",
      "/assets/works/portfolio/details/somm-2.webp",
      "/assets/works/portfolio/details/somm-3.webp",
      "/assets/works/portfolio/details/somm-4.webp",
    ],
  },
  {
    id: "gomaew",
    client: "Go Maew Tom Kao Breakfast",
    businessType: "Restaurant",
    details:
      "Digital Media / Offline Media /\nBusiness Consult / Social Media Planner",
    logo: "/assets/works/portfolio/clients/gomaew-color.webp",
    images: [
      "/assets/works/portfolio/details/gomaew-1.webp",
      "/assets/works/portfolio/details/gomaew-2.webp",
      "/assets/works/portfolio/details/gomaew-3.webp",
      "/assets/works/portfolio/details/gomaew-4.webp",
    ],
  },
  {
    id: "baipo",
    client: "Baipo",
    businessType: "Stationary",
    details: "Catalogue Design",
    logo: "/assets/works/portfolio/clients/baipo-color.webp",
    images: [
      "/assets/works/portfolio/details/baipo-1.webp",
      "/assets/works/portfolio/details/baipo-2.webp",
      "/assets/works/portfolio/details/baipo-3.webp",
      "/assets/works/portfolio/details/baipo-4.webp",
    ],
  },
  {
    id: "nat",
    client: "NATMOTOR",
    businessType: "Automotive",
    details: "Digital Media",
    logo: "/assets/works/portfolio/clients/nat-color.webp",
    images: [
      "/assets/works/portfolio/details/nat-1.webp",
      "/assets/works/portfolio/details/nat-2.webp",
      "/assets/works/portfolio/details/nat-3.webp",
      "/assets/works/portfolio/details/nat-4.webp",
    ],
  },
  {
    id: "kong",
    client: "Kong Mart",
    businessType: "Retail Store",
    details: "Logo Design / Mascot Design /\nBrand Guidebook",
    logo: "/assets/works/portfolio/clients/kong-color.webp",
    images: [
      "/assets/works/portfolio/details/kong-1.webp",
      "/assets/works/portfolio/details/kong-2.webp",
      "/assets/works/portfolio/details/kong-3.webp",
      "/assets/works/portfolio/details/kong-4.webp",
    ],
  },
  {
    id: "paincare",
    client: "Pain Care Specialists of Oregon",
    businessType: "Clinic",
    details: "Social Media Planner /\nGraphic Design / Content",
    logo: "/assets/works/portfolio/clients/paincare-color.webp",
    images: [
      "/assets/works/portfolio/details/paincare-1.webp",
      "/assets/works/portfolio/details/paincare-2.webp",
      "/assets/works/portfolio/details/paincare-3.webp",
      "/assets/works/portfolio/details/paincare-4.webp",
    ],
  },
  {
    id: "gsl",
    client: "GSL Green Star Lab",
    businessType: "Retail Store",
    details: "Logo Design / Mascot Design /\nBrand Guidebook",
    logo: "/assets/works/portfolio/clients/gsl-color.webp",
    images: [
      "/assets/works/portfolio/details/gsl-1.webp",
      "/assets/works/portfolio/details/gsl-2.webp",
      "/assets/works/portfolio/details/gsl-3.webp",
      "/assets/works/portfolio/details/gsl-4.webp",
    ],
  },
  {
    id: "nor",
    client: "Nor Noodle",
    businessType: "Food",
    details: "Logo Design / Menu Design /\nVinyl Design",
    logo: "/assets/works/portfolio/clients/nor-color.webp",
    images: [
      "/assets/works/portfolio/details/nor-1.webp",
      "/assets/works/portfolio/details/nor-2.webp",
      "/assets/works/portfolio/details/nor-3.webp",
      "/assets/works/portfolio/details/nor-4.webp",
    ],
  },
  {
    id: "moreeda",
    client: "MOREEDA SWEET",
    businessType: "Bakery",
    details: "Campaign Design / Digital Media",
    logo: "/assets/works/portfolio/clients/moreeda-color.webp",
    images: [
      "/assets/works/portfolio/details/moreeda-1.webp",
      "/assets/works/portfolio/details/moreeda-2.webp",
      "/assets/works/portfolio/details/moreeda-3.webp",
      "/assets/works/portfolio/details/moreeda-4.webp",
      "/assets/works/portfolio/details/moreeda-5.webp",
    ],
  },
  {
    id: "vinzen",
    client: "THE VINZEN",
    businessType: "Real Estate",
    details: "Campaign Design / Digital Media",
    logo: "/assets/works/portfolio/clients/vinzen-color.webp",
    images: [
      "/assets/works/portfolio/details/vinzen-1.webp",
      "/assets/works/portfolio/details/vinzen-2.webp",
      "/assets/works/portfolio/details/vinzen-3.webp",
      "/assets/works/portfolio/details/vinzen-4.webp",
    ],
  },
  {
    id: "cmh",
    client: "CAKE ME HOME",
    businessType: "Bakery",
    details: "Campaign Design / Digital Media",
    logo: "/assets/works/portfolio/clients/cmh-color.webp",
    images: [
      "/assets/works/portfolio/details/cmh-1.webp",
      "/assets/works/portfolio/details/cmh-2.webp",
      "/assets/works/portfolio/details/cmh-3.webp",
      "/assets/works/portfolio/details/cmh-4.webp",
    ],
  },
  {
    id: "funky",
    client: "FUNKY GRILL THAILAND",
    businessType: "Street Food",
    details: "Catalogue Design",
    logo: "/assets/works/portfolio/clients/funky-color.webp",
    images: [
      "/assets/works/portfolio/details/funky-1.webp",
      "/assets/works/portfolio/details/funky-2.webp",
      "/assets/works/portfolio/details/funky-3.webp",
      "/assets/works/portfolio/details/funky-4.webp",
    ],
  },
  {
    id: "cusco",
    client: "CAFFE CUSCO",
    businessType: "Brunch & Cafe",
    details: "Digital Media / Offline Media",
    logo: "/assets/works/portfolio/clients/cusco-color.webp",
    images: [
      "/assets/works/portfolio/details/cusco-1.webp",
      "/assets/works/portfolio/details/cusco-2.webp",
      "/assets/works/portfolio/details/cusco-3.webp",
      "/assets/works/portfolio/details/cusco-4.webp",
    ],
  },
  {
    id: "ggcafe",
    client: "GoGreen Cafe",
    businessType: "Cafe",
    details: "Digital Media / Social Planner",
    logo: "/assets/works/portfolio/clients/ggcafe-color.webp",
    images: [
      "/assets/works/portfolio/details/ggcafe-1.webp",
      "/assets/works/portfolio/details/ggcafe-2.webp",
      "/assets/works/portfolio/details/ggcafe-3.webp",
    ],
  },
];
