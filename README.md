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

## Description

This app will render 10 pokemon. The pokemon cards are clickable.

When clicking into a card the general information for a pokemon is displayed with it's stats.

## Limitations

1. The app will loop through each of the 10 cards and call the pokemon api to retrieve additional infomration. This is
   expensive and could result in rate limiting from an open source api.
2. There's no error handling at the moment. If the api fails to load the page may error out.
3. Cacheing isn't used, so there is over reliance on api calls making the app expensive on the backend.