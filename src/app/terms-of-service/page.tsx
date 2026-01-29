import TermsOfServiceClient from "./TermsOfServiceClient";
import { getPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata = getPageMetadata({
    title: "Terms of Service | Cinute InfoMedia",
    description: "Understand the terms and conditions for using Cinute InfoMedia's services, tools, and digital solutions. Quality and transparency in every project.",
    url: "/terms-of-service",
});

export default function TermsOfServicePage() {
    return <TermsOfServiceClient />;
}
