## Context

The Stitch project `2982813652353387172` exposes two mobile screens through Stitch MCP: `Vertical Feed` and `Discover`. The exported HTML is the fidelity baseline; Vue code should preserve its visual tokens and structure while adding enough interactivity to demonstrate a real frontend rather than a static screenshot.

The implementation lives in a new Vite/Vue app under `/Users/pengdahan/WorkSpace/stitch-vertical-feed-vue`.

## Goals / Non-Goals

**Goals:**
- Recreate the Stitch `Discover` page as the primary route/view.
- Include the `Vertical Feed` screen as an in-app tab so reviewers can compare the feed/discover flow.
- Use Vue 3 Composition API with `<script setup lang="ts">`, typed props, and componentized UI sections.
- Use Tailwind CSS with the Stitch design tokens configured locally rather than runtime Tailwind CDN.
- Provide local, GitHub Pages, and Vercel deployment paths.

**Non-Goals:**
- Rebuild a backend, streaming service, user authentication, or real search API.
- Replace the Stitch-provided remote poster assets with self-hosted images unless deployment requires it.
- Recreate every possible responsive breakpoint beyond a polished mobile-first layout with desktop centering.

## Decisions

1. **Source of truth: Stitch MCP HTML and screenshots.**
   - Rationale: MCP-exported HTML preserves exact tokens, copy, image URLs, and layout class intent better than screenshot-only reconstruction.
   - Alternative considered: manually infer layout from screenshot. Rejected because it lowers fidelity.

2. **Vue component decomposition.**
   - `App` owns app-wide shell only.
   - `DiscoverPage` composes the Discover experience.
   - `VerticalFeedPage` composes the cinematic full-screen feed.
   - `TopBar`, `SearchAndGenres`, `PosterMasonry`, `EditorialCollection`, `ReactionRail`, and `BottomNav` isolate visible sections.
   - Rationale: keeps the page maintainable without over-abstracting individual one-off pieces.

3. **Composable data model.**
   - `useCineSwipeData` returns readonly/static arrays for genres, posters, collections, and feed data.
   - Rationale: data is presentation-oriented and does not need Pinia or API state.

4. **Deployment configuration.**
   - Vite `base` is derived from `VITE_BASE_PATH` so GitHub Pages can build under `/stitch-vertical-feed-vue/` while Vercel can build at `/`.
   - GitHub Pages uses Actions to run `npm ci` and `npm run build:github`.
   - Vercel uses the default Vite build command.

## Risks / Trade-offs

- Remote Google image/font assets can change or be blocked → Keep the Stitch URLs for fidelity, but ensure the UI remains structurally correct if an image fails.
- Componentizing HTML can introduce spacing drift → Preserve Stitch Tailwind classes and tokens closely, then verify in browser screenshots.
- Anonymous Vercel fallback may produce a claim URL instead of a managed project → Prefer CLI if authenticated, otherwise return the preview and claim links.
