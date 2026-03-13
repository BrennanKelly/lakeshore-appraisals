# Lake Shore Real Estate Appraisals

Professional real estate appraisal website serving Southwest Michigan.

## Tech Stack

- **Frontend:** React 19 + Vite + TypeScript + Tailwind CSS v4
- **UI Components:** Radix UI (shadcn/ui)
- **Routing:** Wouter

## Development

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:3000`.

## Build for Static Deployment

```bash
pnpm install
pnpm build
```

This produces a static build in `client/dist/` containing:

```
client/dist/
├── index.html
├── assets/
│   ├── index-XXXXX.js
│   └── index-XXXXX.css
├── favicon.svg
├── logo-lighthouse.svg
├── robots.txt
└── .htaccess          # SPA routing fallback for Apache
```

## Deploy to Hostinger

1. **Build the project:**
   ```bash
   pnpm install
   pnpm build
   ```

2. **Upload to Hostinger:**
   Upload the entire contents of `client/dist/` into your Hostinger `public_html/` directory.

   You can do this via:
   - **Hostinger File Manager:** Upload all files from `client/dist/` to `public_html/`
   - **FTP/SFTP:** Connect to your Hostinger account and upload to `public_html/`
   - **Git deployment:** Configure Hostinger's Git deployment to run the build command, then point the web root to `client/dist/`

3. **Verify SPA routing:**
   The `.htaccess` file handles client-side routing so that URLs like `/services` or `/about` work correctly on page refresh. This file is automatically included in the build output.

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build static frontend to `client/dist/` |
| `pnpm build:full` | Build frontend + Node.js server (for server-hosted deployments) |
| `pnpm preview` | Preview the production build locally |
| `pnpm check` | Run TypeScript type checking |
