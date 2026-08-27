# 4Core Digital — Next.js Website

Premium AI SEO agency site inspired by [4coredigital.com](https://4coredigital.com/), built with Next.js, custom CSS, Framer Motion, Lucide, and Recharts.

## Run locally

```bash
cd c:\Users\Kartik_hL\my_ai\4core-digital
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js 15 (App Router)
- React 19
- Custom CSS (no Tailwind)
- Framer Motion
- Lucide React
- Recharts

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | Who We Are |
| `/services` | Services index |
| `/services/[slug]` | Service detail |
| `/case-studies` | Case studies |
| `/blog` | Blog / resources |
| `/contact` | Contact / audit form |

## Share with others

Keep `npm run dev` running, then in a second terminal:

```bash
npx cloudflared tunnel --url http://127.0.0.1:3000
```

Share the `https://….trycloudflare.com` URL it prints.
