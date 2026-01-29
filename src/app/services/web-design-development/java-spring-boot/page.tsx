import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/java-spring-boot/Hero";
import ServiceOverview from "@/components/services/web-design-development/java-spring-boot/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/java-spring-boot/SolutionTypes";
import TechStack from "@/components/services/web-design-development/java-spring-boot/TechStack";
import Process from "@/components/services/web-design-development/java-spring-boot/Process";
import WhyChooseUs from "@/components/services/web-design-development/java-spring-boot/WhyChooseUs";
import CTA from "@/components/services/web-design-development/java-spring-boot/CTA";

export const metadata: Metadata = {
    title: "Java & Spring Boot Development Services | Testriq",
    description:
        "Expert Java and Spring Boot development services. We build scalable, secure enterprise applications, microservices, and high-performance APIs with the Spring ecosystem.",
};

export default function JavaSpringBootPage() {
    return (
        <main className="min-h-screen">
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
