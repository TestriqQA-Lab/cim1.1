import PrivacyPolicyClient from "./PrivacyPolicyClient";
import { getPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata = getPageMetadata({
    title: "Privacy Policy | Cinute InfoMedia",
    description: "Our commitment to protecting your privacy. Understand how we collect, use, and safeguard your data at Cinute InfoMedia.",
    url: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
    return <PrivacyPolicyClient />;
}
