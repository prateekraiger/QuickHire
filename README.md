# 🚀 QuickHire AI

> **Transform your career with AI-powered resume analysis**

An intelligent resume analysis platform that helps job seekers optimize their resumes using advanced AI technology. Get instant feedback, ATS compatibility scores, and actionable insights to land your dream job.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/prateekraiger/quickhire-ai)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)

## ✨ Features

### 🤖 AI-Powered Analysis

- **Smart Resume Scoring** - Get comprehensive ATS compatibility scores
- **Keyword Optimization** -AI identifies missing keywords from job descriptions
- **Content Analysis** - Detailed feedback on resume structure and content
- **Industry-Specific Insights** - Tailored recommendations for your field

### 🎨 Modern User Experience

- **Beautiful UI** - Built with shadcn/ui components and custom design system
- **Responsive Design** - Perfect experience across all devices
- **Smooth Animations** - Enhanced interactions with Framer Motion
- **Professional Theme** - Sage green color palette with modern aesthetics

### ⚡ Technical Excellence

- **React Router 7** - Latest routing with SSR capabilities
- **TypeScript** - Full type safety and better developer experience
- **TailwindCSS 4** - Modern utility-first styling
- **PDF Processing** - Advanced PDF parsing and analysis
- **Cloud Storage** - Secure file handling with Puter.com integration

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Fronations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **State Management**: Zustand
- **File Processing**: PDF.js for resume parsing
- **Storage**: Puter.com cloud storage integration

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

Install the dependencies:

```bash
pnpm install
# or
npm install
```

### Development

Start the development server with HMR:

```bash
pnpm dev
# or
npm run dev
```

Your application will be available at `http://localhost:5173`.

## 🏗️ Building for Production

Create a production build:

```bash
pnpm build
# or
npm run build
```

### Type Checking

Run TypeScript type checking:

```bash
pnpm typecheck
# or
npm run typecheck
```

### Components

- **shadcn/ui**: Modern, accessible component library
- **Custom Components**: Tailored for resume analysis workflow
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Configuration

### Environment Setup

Create a `.env` file for any environment-specific configurations:

```bash
# Add your environment variables here
```

## 📁 Project Structure

```
├── app/
│   ├── components/          # Reusable components
│   │   ├── ui/             # shadcn/ui components
│   │   └── ...             # Custom components
│   ├── routes/             # Page components
│   ├── lib/                # Utilities and helpers
│   └── app.css            # Global styles and Tailwind
├── public/                 # Static assets
├── types/                  # TypeScript type definitions
└── components.json         # shadcn/ui configuration
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using React Router, shadcn/ui, and modern web technologies.
