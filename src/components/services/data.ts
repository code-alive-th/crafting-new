export interface SubCard {
  icon?: string;
  iconW?: number;
  iconH?: number;
  titleTop?: string;
  titleBottom?: string;
  lines?: string[];
  photo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  subCards: SubCard[];
  tags: string[];
  photo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    align: "left" | "right";
  };
}

export const SERVICES: ServiceData[] = [
  {
    id: "strategy",
    title: "STRATEGY&MARKETING",
    description:
      "Explore and analyze target audiences, products, and both direct and indirect competitors to develop strategic plans and define a clear brand positioning. We provide business consultation and operational planning, while summarizing and analyzing performance results to refine strategies and guide the next stage of execution.",
    subCards: [
      {
        icon: "/assets/services/icon-research.webp",
        iconW: 151,
        iconH: 100,
        titleTop: "RESEARCH",
        titleBottom: "& STRATEGY",
        lines: [
          "สำรวจ กลุ่มลูกค้า สินค้า",
          "คู่แข่งทางตรงทางอ้อม",
          "เพื่อนำมาวางแผนกลยุทธ์",
          "หาจุดยืนที่ชัดเจน",
        ],
      },
      {
        icon: "/assets/services/icon-consulting.webp",
        iconW: 144,
        iconH: 100,
        titleTop: "CONSULTING",
        titleBottom: "& PLANNING",
        lines: [
          "ให้คำปรึกษาทางด้านธุรกิจ",
          "ความต้องการของลูกค้า",
          "วางแผนเพื่อดำเนินงาน",
          "ตามที่กำหนดไว้",
        ],
      },
      {
        icon: "/assets/services/icon-kpi.webp",
        iconW: 142,
        iconH: 100,
        titleTop: "FINAL KPI",
        titleBottom: "& REPORT",
        lines: [
          "สรุปและรายงานผล",
          "การดำเนินงานประจำเดือน",
          "เพื่อวิเคราะห์และวางแผน",
          "การทำงานในขั้นตอนต่อไป",
        ],
      },
    ],
    tags: [
      "Copy Writing",
      "Researching",
      "Marketing Analytics",
      "Media Planning",
      "Report",
      "Ads Optimise",
      "Campaign Management",
      "Social Media Management",
      "Performance&Analytics",
      "Campaign Concept&Execution",
    ],
    photo: {
      src: "/assets/services/service-strategy.jpg",
      alt: "Strategy & Marketing",
      width: 1086,
      height: 328,
      align: "left",
    },
  },
  {
    id: "branding",
    title: "BRANDING&DESIGN",
    description:
      "Develop and strengthen brand identity through thoughtful design, while establishing clear marketing communication guidelines. This ensures the brand maintains a distinct image and effectively connects with its target audience.",
    subCards: [
      {
        icon: "/assets/services/icon-marketing.webp",
        iconW: 127,
        iconH: 100,
        titleTop: "MARKETING",
        titleBottom: "& SOLUTION",
        lines: [
          "สร้างงานดีไซน์สุดครีเอทีฟ",
          "ด้วยสื่อที่เหมาะสมกับธุรกิจ",
          "ทั้ง Online และ Offline",
        ],
      },
      {
        icon: "/assets/services/icon-branding.webp",
        iconW: 206,
        iconH: 76,
        titleTop: "BRANDING",
        titleBottom: "& DESIGN",
        lines: [
          "สร้างเอกลักษณ์ของแบรนด์",
          "ให้เป็นที่จดจำ ด้วยดีไซน์",
          "ที่บ่งบอกตัวตนของธุรกิจ",
        ],
      },
      {
        photo: {
          src: "/assets/services/service-branding.png",
          alt: "Branding & Design",
          width: 442,
          height: 399,
        },
      },
    ],
    tags: [
      "Product Design",
      "Logo Design",
      "Signage",
      "Re-Branding",
      "CI Branding",
      "Mascot Design",
      "Graphic Design",
      "UI Design",
      "Web Design",
      "Packaging Design",
      "Training&Workshop",
    ],
  },
  {
    id: "production",
    title: "PRODUCTION&VIDEO",
    description:
      "Produce photography and video content for marketing communications, creating visual content that reflects the brand's identity and captures the attention of the target audience.",
    subCards: [
      {
        photo: {
          src: "/assets/services/service-production.webp",
          alt: "Production & Video",
          width: 749,
          height: 500,
        },
      },
      {
        icon: "/assets/services/icon-production.webp",
        iconW: 168,
        iconH: 94,
        titleTop: "PRODUCTION",
        titleBottom: "& VIDEO",
        lines: [
          "ผลิตสื่อทั้งภาพถ่าย วิดีโอ",
          "สตอรี่บอร์ดที่เข้าถึง",
          "กลุ่มลูกค้า เข้าใจแบรนด์",
          "อย่างตรงจุด",
        ],
      },
    ],
    tags: [
      "Photography",
      "Video Production",
      "Editor",
      "Packshot",
      "Motion Graphic",
      "Animation",
      "Post Production",
    ],
  },
];

export const SUBTITLE_LINES = [
  "We provide online marketing services by a team of experienced people.",
  "Build a strong brand in the online business world. through creativity Content",
  "and data analytics by using marketing strategies that are specific to your business",
];
