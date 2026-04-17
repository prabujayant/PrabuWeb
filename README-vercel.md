# Deploying this project to Vercel

Quick steps to deploy the repository to Vercel (recommended):

1. Sign in at https://vercel.com using your GitHub account.
2. Click "New Project" → "Import Git Repository" and choose `prabujayant/Prabu123`.
3. Vercel will detect the framework. If not, set:
   - Framework Preset: Create React App
   - Build Command: `npm run build`
   - Output Directory: `build`
4. Click "Deploy". Vercel will build and publish your site. The default domain will be `https://<project>.vercel.app`.

Alternative: use the Vercel CLI (requires login):

```powershell
# install (if not installed)
npm i -g vercel

# login (follows a browser flow)
vercel login

# run from project root to link & deploy (follow prompts)
vercel --prod
```

Notes:
- `vercel.json` is included and instructs Vercel to use the static-build adapter and to rewrite requests to `index.html` so client-side routing works.
- If you need environment variables (API keys, etc.), add them in the Vercel project Settings → Environment Variables.
- The `homepage` in `package.json` is currently set for GitHub Pages but does not affect Vercel deployments.

If you want, I can:
- Run the Vercel CLI here and deploy (you'll need to authenticate interactively), or
- Walk through the import UI step-by-step and verify the first deployment logs.
