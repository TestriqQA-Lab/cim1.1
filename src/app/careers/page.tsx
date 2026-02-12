
import Hero from "@/components/careers/Hero";
import Benefits from "@/components/careers/Benefits";
import Culture from "@/components/careers/Culture";
import OpenPositions from "@/components/careers/OpenPositions";
import CTA from "@/components/careers/CTA";
import { getPageMetadata } from "@/lib/metadata";

export const metadata = getPageMetadata({
    title: 'Careers | Cinute InfoMedia - Join the Growth Team',
    description: 'Explore career opportunities at Cinute InfoMedia. Join a team of innovators, designers, and engineers building the future of digital growth.',
    url: '/careers',
});

export default function CareersPage() {
    return (
        <main className="transition-colors duration-300" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem", backgroundColor: "var(--background)", color: "var(--foreground)" }}>
            <Hero />
            <Benefits />
            <Culture />
            <OpenPositions />
            <CTA />
        </main>
    );
}
