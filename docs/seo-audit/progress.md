# CIM SEO Audit — Progress

_Branch: `seo/cim-audit-fixes` (off `main`). User owns merge._

| Phase | Title | Status | Date |
|---|---|---|---|
| 0 | Deep-dive analysis & discovery | ✅ done | 2026-06-01 |
| 1 | GSC non-indexing diagnosis + technical fixes | ✅ technical done (owner redirected 404s) | 2026-06-04 |
| 2 | Non-defensible claims cleanup (code + Sanity) | ✅ done (code + CMS) | 2026-06-04 |
| 3 | Technical SEO audit + fix | 🔵 fixes done; owner 404s pending | 2026-06-04 |
| 4 | On-page / content SEO + dedup | 🔵 analysis done; content writing = team | 2026-06-04 |
| 5 | Ranking action plan (off-page) | ⏳ pending | — |
| 6 | Conversion + analytics + security | ⏳ pending | — |
| 7 | Final report + KPIs + monitoring | ⏳ pending | — |

## Key baseline (2026-06-01)
- GSC: **Indexed 14 / Not indexed 169** (Discovered-not-indexed 138, Crawled-not-indexed 24,
  404×4, redirect×1, alt-canonical×2).
- Verdict: technical foundation strong; not-indexing driven by authority/crawl-budget + content quality.

## Phase 2 progress (2026-06-04)
All code-side non-defensible claims cleaned across the repo (7 batches, ~700 edits, all tsc-clean,
diffs line-balanced, no encoding corruption):
- C-1 fake review schema · C-2 global retention · C-4a guarantees · C-4b zero-breach · C-4c bug-free
- **C-4d STAT-1** (246 fabricated % + multipliers) · **C-4e STAT-2** (uptime/stability + product stats)
- **STAT-CS/PB, C-8, BUG-1** (animated case studies, progress bars, app-store ratings, stray text)
- **C-4f COUNT** (inflated counts softened, founding-year normalized) · **C-4g SUPER** (superlatives)

**Phase 2 COMPLETE** — CMS-1 done: 8 self-referential claims in 7 Sanity blog posts patched via mutate API (project `mi5m5dun`/`production`) and verified live (no fabricated claims remain).

## Phase 3 progress (2026-06-04)
Technical-SEO fixes done (all tsc-clean, committed): C-5 (real CIM NAP in astro/local-seo JSON-LD),
I-2 (sitemap depth-tiered priorities), M-1 (canonical-doubling guard), I-3 (author archives noindex,follow
+ removed from sitemap), T-1 (301 lowercase→mixed-case slug variants), I-4 (fixed pre-existing
redirect-to-404 on /social-media[-services]). Foundation verified strong in Phase 0 (robots/sitemap/
per-page canonical+metadata+JSON-LD all good). **Remaining:** the 4 GSC "Not found (404)" URLs (need
owner to pull from GSC) for Phase 1 A1; plus owner-verify flags C-7/TEST-1/C-9.

## Phase 4 analysis (2026-06-04) — see `phase4-content-plan.md`
Data-driven audit of all 60 service pages: meta descriptions **all unique** (no templating), `<title>`
**60/60 unique**, structure page-specific (no literal dup), heavy internal linking. **No mechanical
on-page fix needed.** Real gap = **content depth** on the ~12 thinnest pages (perf-marketing ad-platform
sub-pages thinnest at ~660–830 words incl. baseline). Differentiation = content-team task (no fabricated
stats). Biggest indexing ROI remains **Phase 5 off-page authority**. Full plan + thin-page priority list
in `phase4-content-plan.md`.
**Owner-verification flags:** C-7 (cert claims), C-5 (placeholder NAP in JSON-LD → Phase 3), TEST-1
(testimonial authenticity), C-9 (financial claims). Phase 1 still needs the 4 GSC 404 URLs.

See `MASTER-PROMPT.md` (plan), `deep-dive.md` (Phase 0 findings), `fix-backlog.md` (issue log).
