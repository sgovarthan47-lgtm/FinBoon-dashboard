# Finance Dashboard - Product Specification

## Project Goal

Build a premium Personal Finance Dashboard as a Progressive Web App (PWA) using React, Vite, Tailwind CSS, Chart.js, React Router, and LocalStorage only. No backend or database.

The application should be responsive, mobile-first, fast, and production-ready.

---

# Tech Stack

- React 19
- Vite
- Tailwind CSS
- React Router
- Chart.js
- Framer Motion
- React Icons
- LocalStorage
- PWA support

---

# Design Requirements

The UI should feel like a combination of:

- Apple Wallet
- INDmoney
- Zerodha
- Groww
- Google Material Design

Requirements:

- Rounded cards
- Glassmorphism where appropriate
- Smooth animations
- Dark and Light Mode
- Beautiful typography
- Mobile-first responsive design
- Sidebar on desktop
- Bottom navigation on mobile

---

# Pages

## Dashboard

Display:

- Net Worth
- Total Investment
- Current Value
- Profit/Loss
- Today's Gain/Loss
- Monthly Expenses
- Emergency Fund
- Quick Actions
- Recent Transactions

Charts:

- Net Worth Trend
- Asset Allocation
- Monthly Expenses

---

## Portfolio

Support these asset types:

- Stocks
- Mutual Funds
- ETFs
- US ETFs
- Gold
- Crypto
- EPF
- PPF
- Fixed Deposits
- Cash

Each asset should include:

- Name
- Category
- Quantity
- Average Price
- Current Price
- Purchase Date
- Notes

Automatically calculate:

- Current Value
- Profit/Loss
- Gain %
- Portfolio Allocation

---

## Expense Tracker

Features:

- Add Expense
- Delete Expense
- Edit Expense
- Categories
- Monthly Budget
- Search
- Filters
- CSV Export

Charts:

- Monthly Trend
- Category Pie Chart
- Spending Breakdown

---

## Goals

Track:

- Emergency Fund
- House
- Car
- Vacation
- Retirement
- Education

Each goal includes:

- Target Amount
- Saved Amount
- Target Date
- Progress Bar

---

## Retirement Calculator

Inputs:

- Current Age
- Retirement Age
- Monthly Expenses
- Inflation
- Expected Return

Outputs:

- Required Corpus
- Monthly Investment Needed

---

## Tax Calculator

Support:

- Old Regime
- New Regime
- Capital Gains
- LTCG
- STCG
- Section 80C
- 80CCD
- 80D

---

## Settings

- Dark Mode
- Backup JSON
- Restore JSON
- Export CSV
- Reset Data

---

# Architecture

Use reusable components.

Suggested folders:

src/
components/
pages/
hooks/
layouts/
charts/
storage/
utils/
services/

Never duplicate LocalStorage logic.

Use Context API where appropriate.

---

# Performance

- Lazy loading
- Clean code
- ESLint compatible
- Reusable components
- No console errors

---

# Deliverables

Generate a complete React + Vite project.

Include:

- package.json
- README.md
- Tailwind configuration
- All source files
- Responsive design
- Ready for GitHub Pages deployment

The application should run with:

npm install
npm run dev

without errors.
