# QuickHire AI

An intelligent resume analysis platform powered by AI technology to help job seekers optimize their resumes and land their dream jobs.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## 🚀 Features

### Core Functionality

- 🤖 **AI-Powered Resume Analysis** - Advanced machine learning algorithms analyze resumes against job descriptions
- 📊 **ATS Compatibility Scoring** - Check how well your resume passes Applicant Tracking Systems
- 💡 **Smart Feedback & Suggestions** - Get actionable insights to improve your resume
- 📄 **PDF Resume Processing** - Upload and analyze PDF resumes with ease
- 🎯 **Job-Specific Optimization** - Tailor your resume for specific job descriptions

### Modern UI/UX

- 🎨 **shadcn/ui Components** - Beautiful, accessible UI components with consistent design
- 📱 **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🌈 **Custom Color Palette** - Professional sage green theme with modern aesthetics
- ✨ **Smooth Animations** - Enhanced user experience with Framer Motion animations
- 🎭 **Interactive Elements** - Engaging hero sections, testimonials, and feature showcases

### Technical Excellence

- 🚀 **Server-side Rendering** - Fast initial page loads with React Router SSR
- ⚡️ **Hot Module Replacement** - Instant development feedback
- 📦 **Optimized Bundling** - Efficient asset bundling and optimization
- 🔒 **TypeScript** - Full type safety throughout the application
- 🎉 **TailwindCSS** - Utility-first CSS framework for rapid styling

## 📋 Pages & Components

### Main Pages

- **🏠 Landing Page** - Hero section, features, testimonials, stats, and FAQ
- **ℹ️ About Page** - Company mission, vision, technology, and team information
- **📞 Contact Page** - Contact form and company information
- **📤 Upload Page** - Resume upload and job description input
- **📊 Resume Analysis** - Detailed AI feedback and scoring results

### Key Components

- **Header/Navigation** - Responsive navigation with mobile menu
- **Footer** - Links and company information
- **Hero Section** - Animated landing page hero with call-to-action
- **Feature Cards** - Highlighting platform capabilities
- **Testimonial Section** - User success stories
- **Stats Section** - Platform metrics and achievements
- **Contact Form** - Validated form with proper error handling

## 🛠️ Technology Stack

- **Frontend**: React 19 + React Router 7
- **Styling**: TailwindCSS 4 + shadcn/ui components
- **Animations**: Framer Motion
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

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## 🎨 Design System

### Color Palette

The application uses a professional sage green color palette:

- **Light Sage**: `#cad2c5` - Muted backgrounds and borders
- **Medium Sage**: `#84a98c` - Primary actions and highlights
- **Dark Sage**: `#52796f` - Secondary elements
- **Deep Teal**: `#354f52` - Accent colors
- **Dark Slate**: `#2f3e46` - Text and dark elements

### Components

- **shadcn/ui**: Modern, accessible component library
- **Custom Components**: Tailored for resume analysis workflow
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Configuration

### shadcn/ui Setup

The project is configured with shadcn/ui using the "New York" style:

- Components are located in `app/components/ui/`
- Styling uses CSS variables for theming
- Lucide React for consistent iconography

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
