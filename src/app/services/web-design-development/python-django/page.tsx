import { Metadata } from "next";
import Hero from "@/components/services/web-design-development/python-django/Hero";
import ServiceOverview from "@/components/services/web-design-development/python-django/ServiceOverview";
import SolutionTypes from "@/components/services/web-design-development/python-django/SolutionTypes";
import TechStack from "@/components/services/web-design-development/python-django/TechStack";
import Process from "@/components/services/web-design-development/python-django/Process";
import WhyChooseUs from "@/components/services/web-design-development/python-django/WhyChooseUs";
import CTA from "@/components/services/web-design-development/python-django/CTA";

export const metadata: Metadata = {
    title: "Python & Django Development Services | Testriq",
    description:
        "Expert Python and Django web development services. We build scalable, secure web applications, REST APIs, and enterprise solutions with Python's powerful ecosystem.",
};

export default function PythonDjangoPage() {
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
