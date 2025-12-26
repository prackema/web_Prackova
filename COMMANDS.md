# Quick Commands Cheat Sheet

## 🚀 Essential Commands

### Development
```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production
npm start            # Run production server
npm run lint         # Check code quality
```

### Git - Initial Setup
```bash
git init
git add .
git commit -m "Initial commit: Cyber-Dark portfolio"
git remote add origin https://github.com/prackema/web_Prackova.git
git branch -M main
git push -u origin main
```

### Git - Regular Updates
```bash
git status           # Check changes
git add .            # Stage all changes
git commit -m "Your message here"
git push origin main
```

### Deployment - Vercel
```bash
npm install -g vercel
vercel login
vercel               # Deploy preview
vercel --prod        # Deploy to production
```

### Deployment - Netlify
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## 🔧 Troubleshooting

### Clear Cache
```bash
rm -rf .next
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
lsof -i :3000        # Find process
kill -9 <PID>        # Kill process
PORT=3001 npm run dev # Use different port
```

### Git Reset
```bash
git reset --soft HEAD~1  # Undo last commit, keep changes
git stash               # Save changes temporarily
git stash pop           # Restore stashed changes
```

## 📝 File Locations

- Main page: `app/page.tsx`
- Layout: `app/layout.tsx`
- Styles: `app/globals.css`
- Config: `tailwind.config.ts`, `next.config.ts`

## 🎨 Color Variables (app/globals.css)

```css
--background: #0a0a0a      /* Main background */
--foreground: #e0e0e0      /* Text color */
--cyber-green: #00ff41     /* Primary accent */
--cyber-blue: #00d4ff      /* Secondary accent */
--cyber-purple: #b300ff    /* Tertiary accent */
```

## 📦 Package Management

```bash
npm install <package>     # Install package
npm uninstall <package>   # Remove package
npm update               # Update all packages
npm outdated            # Check outdated packages
npm audit               # Check for vulnerabilities
```

## 🌐 Useful URLs

- Development: http://localhost:3000
- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- Vercel Dashboard: https://vercel.com/dashboard
- GitHub Repo: https://github.com/prackema/web_Prackova

---

💡 **Pro Tip**: Save this file for quick reference!
