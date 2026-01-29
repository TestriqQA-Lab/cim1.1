import { BlogPost, Author } from "@/data/blog";

const siteUrl = "https://www.cinuteinfomedia.com";

export function generateBlogPostSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      image: post.author.image,
      url: `${siteUrl}/blog/author/${post.author.name.toLowerCase().replace(/\s+/g, "-")}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Cinute Infomedia",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/cim_Logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    articleBody: post.content,
    keywords: post.tags.join(", "),
  };
}

export function generateBlogCollectionSchema(title: string, description: string, urlPath: string) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: description,
    url: `${siteUrl}${urlPath}`,
    publisher: {
      "@type": "Organization",
      name: "Cinute Infomedia",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/cim_Logo.png`,
      },
    },
  };
}

export function generateAuthorSchema(author: Author) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    description: author.bio,
    image: author.image,
    email: author.email,
    url: `${siteUrl}/blog/author/${author.name.toLowerCase().replace(/\s+/g, "-")}`,
    jobTitle: author.title,
    sameAs: author.social ? [
      author.social.twitter,
      author.social.linkedin,
      author.social.github,
    ].filter(Boolean) : [],
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cinute Infomedia",
    url: siteUrl,
    logo: `${siteUrl}/images/cim_Logo.png`,
    description: "Web Design, Mobile App Development, UI/UX Branding, and Digital Marketing Services",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+919004988859",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"]
    },
    sameAs: [
      "https://x.com/cinute_infomedia",
      "https://www.linkedin.com/company/cinute-infomedia/",
      "https://www.instagram.com/cinuteinfomedia/",
      "https://www.facebook.com/cinuteinfomedia/"
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cinute Infomedia",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateServiceSchema(params: {
  name: string;
  description: string;
  urlPath: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: params.name,
    description: params.description,
    provider: {
      "@type": "Organization",
      name: "Cinute Infomedia",
      url: siteUrl,
      logo: `${siteUrl}/images/cim_Logo.png`
    },
    url: `${siteUrl}${params.urlPath}`,
    image: params.image || `${siteUrl}/images/service-placeholder.png`
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteUrl}${item.url}`,
    })),
  };
}
