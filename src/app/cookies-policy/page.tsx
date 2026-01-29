import CookiesPolicyClient from "./CookiesPolicyClient";
import { getPageMetadata } from "@/lib/metadata";
import { Metadata } from "next";

export const metadata = getPageMetadata({
    title: "Cookies Policy | Cinute InfoMedia",
    description: "Learn about how Cinute InfoMedia uses cookies to enhance your experience, analyze traffic, and personalize content. Manage your preferences here.",
    url: "/cookies-policy",
});

export default function CookiesPolicyPage() {
    return <CookiesPolicyClient />;
}
