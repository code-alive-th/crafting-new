import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/fonts/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "anthropic-ai",
          "Claude-Web",
          "Google-Extended",
          "GoogleOther",
          "FacebookBot",
          "meta-externalagent",
          "Amazonbot",
          "Applebot-Extended",
          "cohere-ai",
          "Bytespider",
          "CCBot",
          "PerplexityBot",
          "YouBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.craftinglab.co/sitemap.xml",
  };
}
