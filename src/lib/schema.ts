import { BlogPost, Author } from "@/data/blog";

const siteUrl = "https://www.cinuteinfomedia.com";

// ============================================================
// HELPER — Wraps multiple schemas into a single @graph
// ============================================================

export function generateGraphSchema(...schemas: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
}

// ============================================================
// CORE SCHEMAS — Organization, WebSite (site-wide identity)
// ============================================================

export function generateOrganizationSchema(overrides?: {
  description?: string;
  slogan?: string;
  locationId?: string;
  hasOfferCatalogId?: string;
}) {
  return {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "Cinute InfoMedia",
    "alternateName": "CIM",
    "url": siteUrl,
    "logo": {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#logo`,
      "url": `${siteUrl}/images/CIM_Brand_Logo.png`,
      "contentUrl": `${siteUrl}/images/CIM_Brand_Logo.png`,
      "caption": "Cinute InfoMedia Logo",
      "inLanguage": "en-US",
    },
    "image": {
      "@id": `${siteUrl}/#logo`,
    },
    "description":
      overrides?.description ||
      "Leading web development company delivering custom websites, mobile apps & AI-driven marketing. 320% ROI proven. 300+ global projects.",
    "foundingDate": "2025",
    ...(overrides?.slogan && { "slogan": overrides.slogan }),
    ...(overrides?.hasOfferCatalogId && {
      "hasOfferCatalog": { "@id": overrides.hasOfferCatalogId },
    }),
    "address": {
      "@type": "PostalAddress",
      "streetAddress":
        "Office #3, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park",
      "addressLocality": "Mira Road, Mira Bhayandar",
      "addressRegion": "Maharashtra",
      "postalCode": "401107",
      "addressCountry": "IN",
    },
    "location": overrides?.locationId
      ? { "@id": overrides.locationId }
      : {
          "@type": "Place",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "19.2812",
            "longitude": "72.8685",
          },
        },
    "telephone": "+919004988859",
    "email": "contact@cinuteinfomedia.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919004988859",
      "contactType": "customer service",
      "email": "contact@cinuteinfomedia.com",
      "availableLanguage": ["English", "Hindi"],
      "areaServed": ["US", "GB", "IN", "AU", "AE"],
    },
    "sameAs": [
      "https://www.linkedin.com/company/cinute-infomedia/",
      "https://www.instagram.com/cinuteinfomedia/",
      "https://x.com/cinute_infomedia",
      "https://www.facebook.com/cinuteinfomedia/",
    ],
    "areaServed": ["US", "GB", "IN", "AU", "AE"],
    "knowsAbout": [
      "Web Development",
      "Mobile App Development",
      "Search Engine Optimization",
      "Social Media Marketing",
      "Performance Marketing",
      "AI Workflows & Automations",
      "AI-Powered Chatbots",
      "Brand Identity Design",
      "Digital Marketing",
      "E-commerce Development",
      "UI/UX Design",
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50,
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    "name": "Cinute InfoMedia",
    "url": siteUrl,
    "publisher": {
      "@id": `${siteUrl}/#organization`,
    },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ============================================================
// PAGE SCHEMAS — WebPage, FAQ, Breadcrumb (reusable per page)
// ============================================================

export function generateWebPageSchema(params: {
  name: string;
  description: string;
  urlPath: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${siteUrl}${params.urlPath}/#webpage`,
    "url": `${siteUrl}${params.urlPath}`,
    "name": params.name,
    "description": params.description,
    "isPartOf": {
      "@id": `${siteUrl}/#website`,
    },
    "about": {
      "@id": `${siteUrl}/#organization`,
    },
    "publisher": {
      "@id": `${siteUrl}/#organization`,
    },
    "inLanguage": "en-US",
    ...(params.datePublished && { "datePublished": params.datePublished }),
    ...(params.dateModified && { "dateModified": params.dateModified }),
  };
}

export function generateAboutPageSchema(params: {
  name: string;
  description: string;
  urlPath: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@type": "AboutPage",
    "@id": `${siteUrl}${params.urlPath}/#webpage`,
    "url": `${siteUrl}${params.urlPath}`,
    "name": params.name,
    "description": params.description,
    "isPartOf": {
      "@id": `${siteUrl}/#website`,
    },
    "about": {
      "@id": `${siteUrl}/#organization`,
    },
    "mainEntity": {
      "@id": `${siteUrl}/#organization`,
    },
    "publisher": {
      "@id": `${siteUrl}/#organization`,
    },
    "inLanguage": "en-US",
    ...(params.datePublished && { "datePublished": params.datePublished }),
    ...(params.dateModified && { "dateModified": params.dateModified }),
  };
}

export function generateContactPageSchema(params: {
  name: string;
  description: string;
  urlPath: string;
}) {
  return {
    "@type": "ContactPage",
    "@id": `${siteUrl}${params.urlPath}/#webpage`,
    "url": `${siteUrl}${params.urlPath}`,
    "name": params.name,
    "description": params.description,
    "isPartOf": {
      "@id": `${siteUrl}/#website`,
    },
    "about": {
      "@id": `${siteUrl}/#organization`,
    },
    "mainEntity": {
      "@id": `${siteUrl}${params.urlPath}/#professional-service`,
    },
    "publisher": {
      "@id": `${siteUrl}/#organization`,
    },
    "inLanguage": "en-US",
    "breadcrumb": {
      "@id": `${siteUrl}${params.urlPath}/#breadcrumb`,
    },
  };
}

export function generateProfessionalServiceSchema(params: {
  name: string;
  urlPath: string;
  image?: string;
  priceRange?: string;
  telephone: string;
  hasMap?: string;
}) {
  return {
    "@type": "ProfessionalService",
    "@id": `${siteUrl}${params.urlPath}/#professional-service`,
    "name": params.name,
    "image": params.image || `${siteUrl}/images/CIM_Brand_Logo.png`,
    "url": `${siteUrl}${params.urlPath}`,
    "telephone": params.telephone,
    "priceRange": params.priceRange || "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress":
        "Office #3, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park",
      "addressLocality": "Mira Road, Mira Bhayandar",
      "addressRegion": "Maharashtra",
      "postalCode": "401107",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.2812",
      "longitude": "72.8685",
    },
    ...(params.hasMap && { "hasMap": params.hasMap }),
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        "opens": "10:00",
        "closes": "20:00",
      },
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": params.telephone,
      "contactType": "expert consultation",
      "availableLanguage": ["English", "Hindi"],
    },
  };
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
  id?: string
) {
  return {
    "@type": "FAQPage",
    "@id": id || `${siteUrl}/#faq`,
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
  id?: string
) {
  return {
    "@type": "BreadcrumbList",
    "@id": id || `${siteUrl}/#breadcrumb`,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

// ============================================================
// SERVICE SCHEMAS — Service, ItemList (for service pages)
// ============================================================

export function generateServiceSchema(params: {
  name: string;
  description: string;
  urlPath: string;
  image?: string;
}) {
  return {
    "@type": "Service",
    "name": params.name,
    "description": params.description,
    "provider": {
      "@id": `${siteUrl}/#organization`,
    },
    "url": `${siteUrl}${params.urlPath}`,
    "image": params.image || `${siteUrl}/images/service-placeholder.png`,
  };
}

export function generateItemListSchema(params: {
  id: string;
  name: string;
  description: string;
  items: Array<{
    name: string;
    url: string;
  }>;
}) {
  return {
    "@type": "ItemList",
    "@id": `${siteUrl}${params.id}`,
    "name": params.name,
    "description": params.description,
    "numberOfItems": params.items.length,
    "itemListElement": params.items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "url": item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}

export function generateOfferCatalogSchema(params: {
  id: string;
  name: string;
  offers: Array<{
    name: string;
    description: string;
  }>;
}) {
  return {
    "@type": "OfferCatalog",
    "@id": `${siteUrl}${params.id}`,
    "name": params.name,
    "itemListElement": params.offers.map((offer) => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": offer.name,
        "description": offer.description,
      },
    })),
  };
}

// ============================================================
// REVIEW & HOWTO SCHEMAS
// ============================================================

export function generateReviewSchema(params: {
  reviewBody: string;
  authorName: string;
  authorType?: string;
  ratingValue: string;
  bestRating?: string;
  worstRating?: string;
}) {
  return {
    "@type": "Review",
    "@id": `${siteUrl}/#review`,
    "reviewBody": params.reviewBody,
    "author": {
      "@type": params.authorType || "Organization",
      "name": params.authorName,
    },
    "itemReviewed": {
      "@id": `${siteUrl}/#organization`,
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": params.ratingValue,
      "bestRating": params.bestRating || "5",
      "worstRating": params.worstRating || "1",
    },
  };
}

export function generateHowToSchema(params: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{
    name: string;
    text: string;
    url?: string;
  }>;
}) {
  return {
    "@type": "HowTo",
    "@id": `${siteUrl}/#howto`,
    "name": params.name,
    "description": params.description,
    ...(params.totalTime && { "totalTime": params.totalTime }),
    "step": params.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.url && { "url": step.url }),
    })),
  };
}

// ============================================================
// NAVIGATION SCHEMA
// ============================================================

export function generateNavigationSchema(
  items: Array<{
    name: string;
    url: string;
    children?: Array<{ name: string; url: string }>;
  }>
) {
  return {
    "@type": "SiteNavigationElement",
    "@id": `${siteUrl}/#navigation`,
    "name": "Main Navigation",
    "hasPart": items.map((item) => ({
      "@type": "SiteNavigationElement",
      "name": item.name,
      "url": item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
      ...(item.children && {
        "hasPart": item.children.map((child) => ({
          "@type": "SiteNavigationElement",
          "name": child.name,
          "url": child.url.startsWith("http")
            ? child.url
            : `${siteUrl}${child.url}`,
        })),
      }),
    })),
  };
}

// ============================================================
// BLOG SCHEMAS (existing — preserved)
// ============================================================

export function generateBlogPostSchema(post: BlogPost) {
  return {
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "datePublished": post.publishedAt,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "image": post.author.image,
      "url": `${siteUrl}/blog/author/${post.author.name
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
    },
    "publisher": {
      "@id": `${siteUrl}/#organization`,
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    "articleBody": post.content,
    "keywords": post.tags.join(", "),
  };
}

export function generateBlogCollectionSchema(
  title: string,
  description: string,
  urlPath: string
) {
  return {
    "@type": "CollectionPage",
    "name": title,
    "description": description,
    "url": `${siteUrl}${urlPath}`,
    "publisher": {
      "@id": `${siteUrl}/#organization`,
    },
  };
}

export function generateAuthorSchema(author: Author) {
  return {
    "@type": "Person",
    "name": author.name,
    "description": author.bio,
    "image": author.image,
    "email": author.email,
    "url": `${siteUrl}/blog/author/${author.name
      .toLowerCase()
      .replace(/\s+/g, "-")}`,
    "jobTitle": author.title,
    "sameAs": author.social
      ? [author.social.twitter, author.social.linkedin, author.social.github].filter(Boolean)
      : [],
  };
}
