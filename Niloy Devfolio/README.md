# 🚀 Niloy Bhuiyan's Devfolio

A modern, highly responsive, and premium developer portfolio built for **Niloy Bhuiyan**—CSE Graduate & Software Engineer. This portfolio showcases his projects, experiences, qualifications, certifications, and skills in a clean, minimalist, and dark/light theme-supported layout.

---

## 🛠️ Tech Stack & Technologies

- **Frontend Core:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vite.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/) (Single Page Application routing)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS variables for dark/light theme control
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** [Vercel](https://vercel.com/) (configured with `vercel.json` for SPA routing)

---

## 🌟 Key Features

1. **Flexible Dark/Light Theme:** Fully integrated theme toggler leveraging React Context API (`ThemeContext.tsx`).
2. **Responsive Layout & Navigation:** A sleek left-side navigation panel for desktop screens that smoothly transitions to an interactive navbar/hamburger layout on mobile/tablet devices.
3. **Structured & Dynamic Routing:**
   - `/` - About Niloy, core skills, expertise, and social connections.
   - `/experience` - Details on software engineering roles, hackathon wins, and thesis research.
   - `/projects` - Grid of built applications.
   - `/projects/:id` - Dynamic details page for specific projects including tags, live URLs, and descriptions.
   - `/qualifications` - Education, professional courses, and online certifications.
   - `/contact` - Quick mail options and form handling.
4. **Fast HMR & Optimized Builds:** Set up with Vite for a sub-second development feedback loop and optimal production compilation.

---

## 📂 Project Structure

```text
├── src/
│   ├── assets/              # Static images/assets (e.g. Profile photo)
│   ├── Components/          # Modular layout and sub-page components
│   │   ├── Contact/         # Contact info & social links component
│   │   ├── Experience/      # Work, hackathons, and thesis research timeline
│   │   ├── Layout/          # Page wrapping component (Sidebar structure)
│   │   ├── Projects/        # Project grid & Dynamic individual project pages
│   │   ├── Qualifications/  # Education & Certifications
│   │   └── Sidebar.tsx      # Multi-device adaptive sidebar navigation
│   ├── Home/                # Main home / hero section component
│   ├── data/                # Hardcoded structured data for easy maintenance
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   └── qualifications.ts
│   ├── ThemeContext.tsx     # Handles Light / Dark theme toggling states
│   ├── App.tsx              # Fallback / App component
│   ├── main.tsx             # Application router & entry point
│   └── index.css            # Base Tailwind configurations & CSS variables
├── public/                  # Public assets
├── vercel.json              # Vercel SPA routing redirects configuration
├── package.json             # NPM dependencies and scripts
└── tsconfig.json            # TypeScript configuration
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/niloy8/Portfolioo.git
   cd "Niloy Devfolio"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

### 📦 Build for Production

To build the static application for production deployment:
```bash
npm run build
```
This generates the optimized build artifacts in the `dist` directory.

### 🌐 Deploying to Vercel

The project includes a `vercel.json` file to make sure that single-page routes (like `/projects` or `/qualifications`) resolve correctly without producing 404 errors when reloaded:

```json
{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/index.html"
        }
    ]
}
```

---

## 👨‍💻 About Niloy Bhuiyan

Niloy is a CSE Graduate specializing in Full-stack web development and Agentic AI.
- **Experience Highlights:** Full-Stack Developer at *Khan Express*, 9th place in *Hack The AI Hackathon*, and researcher of hybrid spatio-temporal sign language recognition.
- **Languages:** Python, TypeScript, Node.js, JavaScript, C, SQL.
- **Expertise:** Web Development, AI Agents, Machine Learning, Cyber Security, Prompt Engineering.

---

## 🤝 Connect with Niloy

- **LinkedIn:** [niloy8](https://www.linkedin.com/in/niloy8/)
- **GitHub:** [niloy88](https://github.com/niloy88)
- **Twitter / X:** [@Niloy__Bh](https://x.com/Niloy__Bh)
- **Email:** niloybhuiyan522@gmail.com
