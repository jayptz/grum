This is an **Electron + Next.js** app: a desktop app built with [Next.js](https://nextjs.org) and [Electron](https://www.electronjs.org).

**Gmail integration via Google OAuth 2.0 and Gmail API (read-only scopes).**

## Getting Started

Install dependencies, then run the app in development (starts both the Next.js dev server and the Electron window):

```bash
npm install
npm run dev
```

The Electron window will open automatically once Next.js is ready at [http://localhost:3000](http://localhost:3000). You can also open that URL in a browser.

- **`npm run dev`** – Runs Next.js dev server and Electron together.
- **`npm run electron`** – Runs only Electron (expects Next.js to be running at port 3000, e.g. `npm run start` in another terminal).
- **`npm run build`** / **`npm run start`** – Build and run Next.js in production mode.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
