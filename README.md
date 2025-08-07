# Next.js Auth App

Simple authentication app built with Next.js 14, TypeScript, and SCSS modules.

## Features

- 🔐 Authentication system
- 🎨 SCSS modules for styling
- 🛡️ Protected routes
- 💪 TypeScript + App Router

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- SCSS Modules
- Custom authentication

## Quick Start

```bash
# Install dependencies
yarn

# Run development server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

```env
NEXT_PUBLIC_BASE_URL=https://randomuser.me
```

## Routes

- `/` - Protected dashboard
- `/auth` - Login/register (public)

## Scripts

```bash
yarn dev            # Development server
yarn build          # Production build
yarn start          # Production server
yarn lint           # Lint code
```

## SCSS Modules Usage

```typescript
import styles from "./Component.module.scss";

export default function Component() {
  return <div className={styles.container}>Content</div>;
}
```

## Deployment

[Deployed on Vercel](https://simple-nextjs-auth.vercel.app/).
