## Setup

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Implementation Overview

**Tech Stack**

- Bootstrapped with Next.js: `npx create-next-app@latest`
- Styled with Material UI (Cards for listings, Tables for data visualization)

**Core Functionality**

1. **Homepage:** Renders 10 interactive Pokémon cards using the PokeAPI.
2. **Detail View:** Clicking any card navigates to a dedicated page displaying:
    - Key attributes (height, weight, type)
    - Statistical breakdown via Material UI Table
    - Official artwork sprite

### Known Limitations & Optimization Opportunities

1. **API Call Inefficiency**
    - Current Behavior: Sequential API calls for each Pokémon (10+ individual GET requests per page load).
    - Risk: High latency and potential PokeAPI rate-limiting (60 requests/minute).
    - Improvement: Use batch fetching via /pokemon?limit=10 endpoint to reduce calls by 90%.
2. **Error Handling Gaps**
    - Current State: Missing fallback UI for API failures or invalid routes.
    - Impact: Unhandled errors disrupt user experience during outages.
        - Solution:
            - Add React Error Boundaries.
            - Implement loading skeletons and a retry mechanism.
3. **Missing Cache Strategy**
    - Issue: No client-side caching for repeated requests.
    - Consequence: Redundant network usage and slower revisits.
    - Fix: Integrate stale-while-revalidate (SWR) or localStorage with TTL.