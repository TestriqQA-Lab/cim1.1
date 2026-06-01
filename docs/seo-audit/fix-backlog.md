# CIM SEO Audit — Fix Backlog

Status: ⏳ pending · 🔵 in progress · ✅ done · ⏭️ deferred (off-page/owner)

| ID | Sev | Area | Issue | File(s) | Fix | Phase | Status |
|---|---|---|---|---|---|---|---|
| C-1 | BLOCKER | Structured data | Fabricated `aggregateRating`/`reviewCount` (4.9/127, 4.9/312, 4.9/247) + homepage `ratingValue:5` | astro-framework-services, ecommerce-seo-services, local-seo-services `page.tsx`; `app/page.tsx`; `lib/schema.ts` (Review helper) | Remove fake review/aggregateRating schema | 2/3 | ⏳ |
| C-2 | HIGH | Claims (global) | Site-wide Twitter card hardcodes "95% client retention" | `src/lib/metadata.ts:38` | Remove the stat | 2 | ⏳ |
| C-3 | MED | Claims (schema) | Claim-stuffed HowTo/Service JSON-LD ("<100ms / 100 Lighthouse", "zero downtime") | service `page.tsx` files | Reframe to capability | 2 | ⏳ |
| C-4 | HIGH | Claims (on-page) | ~211 files: guarantees, "zero breaches since N", bug-free %, ROI/ROAS %, big counts; superlatives in titles/meta | src/** , src/data/*.ts | Tier 1 remove/reframe, Tier 2 neutralize | 2 | ⏳ |
| I-1 | HIGH | Indexing | 4× "Not found (404)" + 1× "Page with redirect" in GSC | TBD (need GSC URLs) | Fix route / 301 / remove from sitemap | 1 | 🔵 |
| I-2 | MED | Sitemap | Priority inflation — all service routes `priority:0.9` | `src/app/sitemap.ts` | Tiered priorities | 3 | ⏳ |
| I-3 | MED | Indexing | Thin blog taxonomy pages (categories/category/author) likely Crawled-not-indexed + crawl-budget drain | blog taxonomy routes | noindex decision | 3 | ⏳ |
| M-1 | LOW | Metadata | Canonical-doubling if Sanity editor sets full `canonicalUrl` in category/author meta | `src/lib/metadata.ts` | Guard against absolute URL | 3 | ⏳ |
| A-1 | HIGH | Authority | 138 Discovered-not-indexed = crawl-budget/authority (off-page) | n/a | GBP, directories, reviews, backlinks | 5 | ⏭️ owner |
| T-1 | MED | URL hygiene | Uppercase slugs → lowercase variant 404s (case-sensitive routing). `harmony-OS-...` (internally consistent, OK live) + blog `organic-growth-seo-Guide` (capital G; lowercase=404) | `app/services/mobile-app-development/harmony-OS-...`, Sanity slug `organic-growth-seo-Guide` | lowercase rename + 301, or 301 lowercase→current | 1/3 | ⏳ |
| T-2 | LOW | Domain | `http://cinuteinfomedia.com` (apex, http) → conn fails (000); no http-apex redirect | Vercel/domain config | add apex http→https www redirect | 1 | ⏭️ owner (infra) |
| T-3 | LOW | Redirect | non-www apex uses 307 (temp), ideal 308/301 permanent | Vercel domain config | set permanent redirect | 3 | ⏭️ owner (infra) |

## Phase 1 defensive verification (2026-06-01)
- ✅ All **156 sitemap URLs return HTTP 200** — sitemap is clean, no broken entries.
- ✅ Redirects healthy: `https://cinuteinfomedia.com`→www (307), `http://www`→https (308), trailing-slash `/about/`→`/about` (308).
- ⚠️ Case-sensitivity: `/About`, lowercase `harmony-os`, lowercase `...-guide` all 404 (see T-1).
- ⚠️ apex http unreachable (T-2); non-www redirect is temporary (T-3).
- ❗ The exact 4 GSC "Not found (404)" URLs are NOT in the current sitemap → they are historical/removed
  URLs. **Need GSC's URL list** (Page indexing → "Not found (404)" → examples) to pinpoint + 301 them.
