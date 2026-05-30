import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
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
