# FinBoon - Personal Finance Dashboard

A premium, production-ready personal finance dashboard built with React, Vite, and Tailwind CSS.

## 🎯 Features

- 📊 Dashboard with net worth tracking
- 💼 Portfolio management (Stocks, Mutual Funds, ETFs, Crypto, Gold, etc.)
- 💰 Expense tracking with categories and budgets
- 🎯 Financial goals tracking
- 📈 Retirement calculator
- 💳 Tax calculator (Indian tax regime support)
- 🌓 Dark/Light mode
- 📱 Fully responsive (Mobile-first, Sidebar on desktop, Bottom nav on mobile)
- 🚀 PWA ready
- ⚡ Built with Vite for blazing fast performance

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Animations**: Framer Motion
- **Charts**: Chart.js + React ChartJS 2
- **Icons**: React Icons
- **Storage**: LocalStorage only (no backend)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/sgovarthan47-lgtm/FinBoon-dashboard.git
cd FinBoon-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── layouts/            # Layout components (Sidebar, Header, etc.)
├── hooks/              # Custom React hooks
├── charts/             # Chart components
├── storage/            # LocalStorage utilities
├── services/           # Business logic services
├── utils/              # Helper functions
├── App.jsx             # Main App component
├── main.jsx            # React entry point
└── index.css           # Global styles

public/
├── manifest.json       # PWA manifest
└── vite.svg           # Vite logo

Config Files:
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── eslint.config.js    # ESLint configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Available Scripts

- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Create optimized production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks
- `npm run lint:fix` - Fix ESLint issues automatically

## 🎨 Design Features

- Rounded cards with subtle shadows
- Glassmorphism effects
- Smooth animations with Framer Motion
- Dark mode support
- Beautiful typography
- Mobile-first responsive design
- Inspired by Apple Wallet, INDmoney, Zerodha, Groww, and Google Material Design

## 📝 Pages (To be implemented)

- **Dashboard** - Overview with net worth, investments, and quick stats
- **Portfolio** - Asset management and tracking
- **Expenses** - Expense tracking with categories and budgets
- **Goals** - Financial goals tracking
- **Retirement Calculator** - Calculate retirement corpus
- **Tax Calculator** - Indian tax calculations
- **Settings** - Preferences, backup, and restore

## 💾 Data Storage

All data is stored in browser's LocalStorage. No backend required.

## 🔐 Privacy

Your financial data stays on your device. No cloud storage or external servers.

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 👨‍💻 Author

FinBoon Team

## 🐛 Bug Reports & Suggestions

Feel free to open issues for bug reports or feature suggestions.

---

**Happy tracking! 🎉**
