import { Metadata } from "next";

const siteUrl = "https://www.cinuteinfomedia.com";

const defaultMetadata: Partial<Metadata> = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CIM - Digital Solutions | Cinute Infomedia",
    template: "%s | Cinute Infomedia"
  },
  description: "Web Design, Mobile App Development, UI/UX Branding, and Digital Marketing Services",
  keywords: ["Web Design", "Mobile App Development", "UI/UX Branding", "Digital Marketing", "SEO", "AI Automation"],
  authors: [{ name: "Cinute Infomedia" }],
  creator: "Cinute Infomedia",
  publisher: "Cinute Infomedia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Cinute Infomedia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cinute InfoMedia | Web Development Company & Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinute InfoMedia | Web Development Company & Digital Marketing Agency",
    description: "Transform your digital presence with our web development services, mobile apps, AI automation & marketing solutions. 95% client retention.",
    images: ["/og-image.jpg"],
    creator: "@cinute_infomedia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function getPageMetadata(params: {
  title: string;
  description: string;
  url: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  return {
    ...defaultMetadata,
    title: params.title,
    description: params.description,
    keywords: [...(defaultMetadata.keywords as string[]), ...(params.keywords || [])],
    alternates: {
      canonical: `${siteUrl}${params.url}`,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: params.title,
      description: params.description,
      url: `${siteUrl}${params.url}`,
      images: params.image ? [{ url: params.image }] : defaultMetadata.openGraph?.images,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: params.title,
      description: params.description,
      images: params.image ? [params.image] : defaultMetadata.twitter?.images,
    },
  };
}

export const blogMetadata: Metadata = getPageMetadata({
  title: "Blog & Insights | Cinute Infomedia",
  description: "Discover the latest trends, strategies, and insights in web development, digital marketing, UI/UX design, and business growth.",
  url: "/blog",
  keywords: ["blog", "web development insights", "digital marketing trends", "AI automation blog"],
});

export function generateBlogPostMetadata(
  title: string,
  excerpt: string,
  image: string,
  slug: string,
  publishedAt: string,
  author: string
): Metadata {
  const url = `/blog/${slug}`;

  return {
    ...defaultMetadata,
    title: title,
    description: excerpt,
    keywords: ["blog", "article", "insights", ...excerpt.split(" ").slice(0, 5)],
    authors: [{ name: author }],
    alternates: {
      canonical: `${siteUrl}${url}`,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title,
      description: excerpt,
      type: "article",
      url: `${siteUrl}${url}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      publishedTime: publishedAt,
      authors: [author],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title,
      description: excerpt,
      images: [image],
    },
  };
}

export function generateCategoryMetadata(category: string, postCount: number, slug: string): Metadata {
  const url = `/blog/category/${slug}`;

  return getPageMetadata({
    title: `${category} Articles | Cinute Infomedia Blog`,
    description: `Explore ${postCount} articles about ${category}. Learn from our experts on the latest trends and best practices.`,
    url: url,
    keywords: [category, "blog", "articles"],
  });
}

export function generateAuthorMetadata(
  name: string,
  bio: string,
  image: string,
  postCount: number
): Metadata {
  const url = `/blog/author/${name.toLowerCase().replace(/\s+/g, "-")}`;

  return getPageMetadata({
    title: `${name} | Author at Cinute Infomedia`,
    description: bio,
    url: url,
    image: image,
    keywords: [name, "author", "blog"],
  });
}
