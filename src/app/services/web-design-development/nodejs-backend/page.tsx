import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/nodejs-backend/Hero";
import ServiceOverview from "@/components/services/web-design-development/nodejs-backend/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/nodejs-backend/SolutionTypes";
import TechStack from "@/components/services/web-design-development/nodejs-backend/TechStack";
import Process from "@/components/services/web-design-development/nodejs-backend/Process";
import WhyChooseUs from "@/components/services/web-design-development/nodejs-backend/WhyChooseUs";
import CTA from "@/components/services/web-design-development/nodejs-backend/CTA";

export const metadata: Metadata = {
    title: "Node.js & Backend Development | APIs & Microservices",
    description: "Expert backend development services with Node.js, Express, NestJS, and more. Custom APIs, microservices architecture, and scalable database solutions.",
    keywords: [
        "nodejs development",
        "backend development",
        "api development",
        "microservices",
        "express.js",
        "nestjs",
        "graphql api",
        "rest api",
        "database design",
    ],
    openGraph: {
        title: "Node.js & Backend Development Services",
        description: "Build scalable, high-performance backend systems and APIs.",
        type: "website",
    },
};

export default function NodejsBackendPage() {
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
