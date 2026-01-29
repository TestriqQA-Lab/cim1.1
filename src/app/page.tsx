import { Metadata } from "next";
import HomeClient from "./HomeClient";
import { getPageMetadata } from "@/lib/metadata";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";

export const metadata: Metadata = getPageMetadata({
  title: "Cinute Infomedia | Web Design, App Development & Digital Marketing",
  description: "CIM (Cinute Infomedia) is a premium digital agency specializing in high-end web design, mobile app development, UI/UX branding, and AI-powered automation solutions.",
  url: "/",
});

export default function Home() {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeClient />
    </>
  );
}
