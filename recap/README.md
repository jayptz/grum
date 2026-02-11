# Grum

A desktop productivity app that aggregates and organizes your personal information. Built with **Electron** and **Next.js**, with Gmail integration via Google OAuth 2.0 and the Gmail API (read-only).

## Features

- **Bento grid layout** – Clean, compact cards for Email, Documents, Calendar, Analytics, Team, and Settings
- **Floating dock** – Aceternity-style navigation bar at the bottom (Mac-like dock with hover animations)
- **Gmail integration** – Read-only access to your inbox via Google OAuth 2.0
- **Monochrome UI** – Black, white, and gray theme

## Tech Stack

- [Next.js](https://nextjs.org) 16
- [Electron](https://www.electronjs.org)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Motion](https://motion.dev) (animations)
- [Radix UI](https://radix-ui.com) components

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/YOUR_USERNAME/recap.git
   cd recap/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) For Gmail integration, add a `.env` file in the `recap` root with your Google OAuth credentials:
   ```
   GOOGLE_CLIENT_ID=your_client_id
   GOOGLE_CLIENT_SECRET=your_client_secret
   ```

### Run the app

```bash
npm run dev
```

The Electron window opens automatically once Next.js is ready at [http://localhost:3000](http://localhost:3000). You can also open that URL in a browser.

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Runs Next.js dev server and Electron together |
| `npm run build` | Builds Next.js for production |
| `npm run start` | Runs Next.js in production mode |
| `npm run electron` | Runs only Electron (expects Next.js at port 3000) |
| `npm run lint` | Runs ESLint |

## Project Structure

```
recap/
├── frontend/          # Electron + Next.js app
│   ├── app/           # Next.js pages
│   ├── components/    # UI components (bento grid, floating dock, etc.)
│   └── main.js       # Electron main process
├── backend/          # Gmail service (OAuth, API)
│   └── src/
│       └── gmail.service.ts
└── README.md
```

## License

MIT
