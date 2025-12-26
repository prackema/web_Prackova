# Cyber-Dark Portfolio - Prackova

A minimalist, cyber-dark themed portfolio built with Next.js, TypeScript, and Tailwind CSS, featuring a professional JetBrains Mono font setup.

## 🎨 Features

- **Cyber-Dark Theme**: Minimalist dark design with neon accents (green, blue, purple)
- **JetBrains Mono Font**: Professional monospace font for a developer-focused aesthetic
- **Hero Section**: Name and title with glowing gradient text
- **AI Agent Terminal**: Interactive terminal placeholder with glowing border effect
- **Projects Grid**: Responsive grid layout showcasing projects
- **Skills Section**: Divided into AI/ML and Security/Cybersecurity categories
- **Fully Responsive**: Mobile-first design that works on all devices

## 📁 Folder Structure

```
web_Prackova/
├── app/
│   ├── globals.css        # Global styles with Cyber-Dark theme
│   ├── layout.tsx         # Root layout with JetBrains Mono font
│   └── page.tsx           # Main page with all sections
├── node_modules/          # Dependencies (auto-generated)
├── .gitignore             # Git ignore file
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.mjs     # PostCSS configuration for Tailwind
├── README.md              # This file
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Git

### Step-by-Step Setup Commands

#### 1. Clone the Repository

```bash
git clone https://github.com/prackema/web_Prackova.git
cd web_Prackova
```

#### 2. Install Dependencies

```bash
npm install
```

#### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

#### 4. Build for Production

```bash
npm run build
```

#### 5. Start Production Server

```bash
npm start
```

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🎨 Theme Customization

The Cyber-Dark theme uses CSS variables defined in `app/globals.css`:

```css
--background: #0a0a0a      /* Main background */
--foreground: #e0e0e0      /* Main text color */
--cyber-green: #00ff41     /* Primary accent */
--cyber-blue: #00d4ff      /* Secondary accent */
--cyber-purple: #b300ff    /* Tertiary accent */
```

## 📦 Dependencies

### Core Dependencies
- **next**: ^16.1.1 - React framework for production
- **react**: ^19.2.3 - UI library
- **react-dom**: ^19.2.3 - React DOM renderer

### Dev Dependencies
- **typescript**: ^5.9.3 - TypeScript language
- **@types/react**: ^19.2.7 - React type definitions
- **@types/node**: ^25.0.3 - Node.js type definitions
- **tailwindcss**: ^4.1.18 - Utility-first CSS framework
- **postcss**: ^8.5.6 - CSS transformation tool
- **autoprefixer**: ^10.4.23 - PostCSS plugin for vendor prefixes

## 🌐 Deployment to GitHub

### Initial Setup (for new repository)

```bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Cyber-Dark portfolio"

# Add remote repository
git remote add origin https://github.com/prackema/web_Prackova.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Updating an Existing Repository

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Update portfolio"

# Push to GitHub
git push origin main
```

## 🌟 Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 🎯 Key Components

### Hero Section
- Displays name with gradient cyber effect
- Shows title with glowing green text effect
- Responsive typography

### AI Agent Terminal
- Terminal-style interface with glowing border
- Mac-style window controls
- Animated cursor placeholder

### Projects Grid
- Responsive 3-column grid (1 column on mobile)
- Hover effects with colored borders
- Tech stack tags for each project

### Skills Section
- Two-column layout (AI and Security)
- Bullet points with colored indicators
- Icons for visual enhancement

## 📝 License

ISC

## 👨‍💻 Author

**Prackova**
- AI & Security Specialist
- Portfolio: [https://github.com/prackema/web_Prackova](https://github.com/prackema/web_Prackova)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS