import Hero from '@/components/contact/Hero';
// import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import Location from '@/components/contact/Location';
import { getPageMetadata } from '@/lib/metadata';

export const metadata = getPageMetadata({
    title: 'Contact Us | Cinute InfoMedia - Get in Touch',
    description: 'Get in touch with Cinute InfoMedia. We are ready to help you build your next digital success story. Reach out for consultations and quotes.',
    url: '/contact',
});

export default function ContactPage() {
    return (
        <div className="bg-white">
            <Hero />
            {/* <ContactInfo /> */}
            <ContactForm />
            <Location />
        </div>
    );
}
