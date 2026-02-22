import type { MetadataRoute } from "next";

import { principals } from "@/data/principals";
import { allBeyondItems } from "@/data/beyondClassrooms";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jhlc.vercel.app";
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/staff/academic`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/staff/non-academic`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/facilities`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/calendar`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/beyond-classrooms`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/alumni`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/news`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...principals.map((principal) => ({
      url: `${base}/principals/${principal.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...allBeyondItems.map((item) => ({
      url: `${base}/beyond-classrooms/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
