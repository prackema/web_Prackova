# Cyber-Dark Portfolio - Complete Setup Guide

This guide provides all the terminal commands needed to set up, run, and deploy the Cyber-Dark themed portfolio.

## 📋 Prerequisites

Before starting, ensure you have:
- Node.js 18.x or higher installed
- npm (comes with Node.js)
- Git installed
- A GitHub account

## 🚀 Quick Start (For New Project)

If you're creating this project from scratch in a new directory:

```bash
# 1. Create a new directory and navigate into it
mkdir web_prackova
cd web_prackova

# 2. Initialize npm project
npm init -y

# 3. Install core dependencies
npm install next@latest react@latest react-dom@latest

# 4. Install development dependencies
npm install -D typescript @types/react @types/node tailwindcss @tailwindcss/postcss

# 5. Create folder structure
mkdir -p app

# 6. Create configuration files
# (Copy the configuration files from this repository)
# - tailwind.config.ts
# - tsconfig.json
# - next.config.ts
# - postcss.config.mjs
# - .gitignore

# 7. Create application files
# (Copy the application files from this repository)
# - app/layout.tsx
# - app/page.tsx
# - app/globals.css

# 8. Update package.json scripts
# Add these scripts to package.json:
# "dev": "next dev"
# "build": "next build"
# "start": "next start"
# "lint": "next lint"
```

## 🔄 Working with Existing Repository

If you're cloning this existing repository:

```bash
# 1. Clone the repository
git clone https://github.com/prackema/web_Prackova.git
cd web_Prackova

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open your browser to http://localhost:3000
```

## 🛠️ Development Commands

### Run Development Server
```bash
npm run dev
```
- Starts the development server on http://localhost:3000
- Features hot-reload for instant updates
- Press `Ctrl + C` to stop the server

### Build for Production
```bash
npm run build
```
- Creates an optimized production build
- Output is stored in the `.next` directory
- This command must succeed before deployment

### Start Production Server
```bash
npm start
```
- Runs the production build locally
- Must run `npm run build` first
- Good for testing production behavior

### Run Linter
```bash
npm run lint
```
- Checks code for potential issues
- Helps maintain code quality

## 📦 Git Commands

### Initial Repository Setup

If you're starting a brand new repository:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Cyber-Dark portfolio with Next.js"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/prackema/web_Prackova.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### Regular Updates

When making changes to the project:

```bash
# Check what files have changed
git status

# See the specific changes
git diff

# Add all changed files
git add .

# Or add specific files
git add app/page.tsx

# Commit with a descriptive message
git commit -m "Add new feature or fix"

# Push to GitHub
git push origin main
```

### Useful Git Commands

```bash
# View commit history
git log --oneline

# Create a new branch
git checkout -b feature-name

# Switch between branches
git checkout main

# Merge a branch
git merge feature-name

# Pull latest changes from GitHub
git pull origin main

# Discard changes to a file
git checkout -- filename

# Undo last commit (keep changes)
git reset --soft HEAD~1
```

## 🌐 Deployment Options

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to Vercel
vercel

# Follow the prompts:
# - Link to existing project or create new
# - Confirm settings
# - Deploy

# Deploy to production
vercel --prod
```

**Or deploy via GitHub integration:**
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Vercel will automatically deploy on every push to main

### Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init

# Manual deploy
netlify deploy --prod
```

### Deploy to GitHub Pages

Add to `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
```

Then run:
```bash
# Build the static export
npm run build

# The output will be in the 'out' directory
# Push the 'out' directory to a gh-pages branch

git checkout -b gh-pages
git add out -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix out origin gh-pages
```

## 🔍 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
# Find the process using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use a different port
PORT=3001 npm run dev
```

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

### Git Issues
```bash
# If you have conflicts
git status
git merge --abort  # To cancel the merge

# If you need to start fresh
git stash  # Save your changes temporarily
git pull origin main
git stash pop  # Reapply your changes
```

## 📱 Environment Variables (Optional)

Create a `.env.local` file for local environment variables:

```bash
# Example .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

**Note:** Never commit `.env.local` to Git (it's in .gitignore)

## 🎯 Next Steps

After successful deployment:

1. **Custom Domain**: Configure a custom domain in your hosting platform
2. **Analytics**: Add Google Analytics or similar
3. **SEO**: Update metadata in `app/layout.tsx`
4. **Content**: Customize the portfolio content in `app/page.tsx`
5. **Styling**: Adjust colors and theme in `app/globals.css`

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Git Documentation](https://git-scm.com/doc)
- [Vercel Documentation](https://vercel.com/docs)

## 🆘 Getting Help

If you encounter issues:
1. Check the error message carefully
2. Search the error on Google or Stack Overflow
3. Check the official Next.js documentation
4. Ask in the Next.js Discord community

---

**Happy Coding! 🚀**
