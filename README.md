# tds-assignment

## Project Setup

I recomend using pnpm as a package manager.

Before running installation steps you need to setup an `.env` file

```
cp .env.template .env
```

`.env` file contains 1 property called `VITE_CURRENCYBEACON_API_KEY` that needs to be filled with `api_key` delivered in
an email with repository link

### Then install the packages:

```sh
pnpm install
```

### And finally run development mode

```sh
pnpm dev
```

### Local development server should be accessible under this URL:

`http://localhost:5173/`
