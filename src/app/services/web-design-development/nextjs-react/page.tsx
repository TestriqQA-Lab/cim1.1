import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/nextjs-react/Hero";
import ServiceOverview from "@/components/services/web-design-development/nextjs-react/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/nextjs-react/SolutionTypes";
import TechStack from "@/components/services/web-design-development/nextjs-react/TechStack";
import Process from "@/components/services/web-design-development/nextjs-react/Process";
import WhyChooseUs from "@/components/services/web-design-development/nextjs-react/WhyChooseUs";
import CTA from "@/components/services/web-design-development/nextjs-react/CTA";

export const metadata: Metadata = {
    title: "Next.js & React Development Services | Modern Web Applications",
    description: "Build high-performance web applications with Next.js and React. Server-side rendering, static site generation, App Router, TypeScript, and Vercel deployment.",
    keywords: [
        "next.js development",
        "react development services",
        "server-side rendering",
        "static site generation",
        "react web application",
        "next.js app router",
        "typescript development",
        "vercel deployment",
    ],
    openGraph: {
        title: "Next.js & React Development Services",
        description: "Build high-performance web applications with Next.js and React.",
        type: "website",
    },
};

export default function NextjsReactPage() {
    return (
        <main>
            <Hero />
            <ServiceOverview />
            <SolutionTypes />
            <TechStack />
            <Process />
            <WhyChooseUs />
            <CTA />
        </main>
    );
}
