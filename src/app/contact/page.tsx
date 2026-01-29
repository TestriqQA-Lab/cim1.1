import Hero from '@/components/contact/Hero';
// import ContactInfo from '@/components/contact/ContactInfo';
import Location from '@/components/contact/Location';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Cinute InfoMedia - Get in Touch',
    description: 'Get in touch with Cinute InfoMedia. We are ready to help you build your next digital success story. Reach out for consultations and quotes.',
    openGraph: {
        title: 'Contact Us | Cinute InfoMedia - Get in Touch',
        description: 'Get in touch with Cinute InfoMedia. We are ready to help you build your next digital success story. Reach out for consultations and quotes.',
        url: 'https://cim.com/contact',
    },
    alternates: {
        canonical: 'https://cim.com/contact',
    },
};

export default function ContactPage() {
    return (
        <main className="bg-white" style={{ scrollPaddingTop: "5rem", scrollMarginTop: "5rem" }}>
            <Hero />
            {/* <ContactInfo /> */}
            <Location />
        </main>
    );
}
