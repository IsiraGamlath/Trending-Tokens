#  Trending Tokens - Solana Cryptocurrency Dashboard

A modern **Solana-based cryptocurrency dashboard** that allows users to explore trending tokens, view token information, analyze wallet activity, and connect with Phantom Wallet. The application provides a clean and responsive interface for interacting with Solana blockchain data.

##  Project Overview

Trending Tokens is a web application designed to simplify access to Solana token and wallet information. Instead of manually searching across different blockchain platforms, users can view important token metrics and wallet details through a centralized dashboard.

The application integrates blockchain APIs to retrieve real-time data and presents it through an interactive and user-friendly interface.

---

#  Key Features

##  Trending Tokens Dashboard

* View trending Solana tokens
* Display token name and symbol
* View token prices
* Display 24-hour price changes
* Dynamic data fetching from blockchain APIs
* Responsive token card layout

---

##  Pagination System

* Handles large token lists efficiently
* Displays a limited number of tokens per page
* Provides page navigation controls
* Improves performance and user experience

---

##  Solana Wallet Search

Users can search any valid Solana wallet address and view:

* Wallet address
* SOL balance
* Token holdings
* Token amounts
* Associated token information

---

##  Phantom Wallet Integration

The application supports Phantom Wallet connection.

Users can:

* Connect their Phantom Wallet extension
* Retrieve their public wallet address
* Use their wallet for blockchain interactions

---

##  Token Details

Each token has a dedicated details page containing:

* Token mint address
* Token information
* Related blockchain data

---

##  Responsive User Interface

The application is designed for:

* Desktop devices
* Tablets
* Mobile devices

The UI adapts automatically using responsive Tailwind CSS utilities.

---

#  Technology Stack

## Frontend

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS 4

## Backend

* Next.js API Routes
* REST API architecture

## Blockchain

* Solana Web3.js
* Solana wallet integration
* Phantom Wallet

## Development Tools

* Git & GitHub
* VS Code
* Postman

## Deployment

* Vercel

---

#  Project Structure

```
Trending-Tokens
│
├── app
│   ├── api
│   │   ├── trending
│   │   └── wallet
│   │
│   ├── token
│   ├── wallet
│   ├── phantom
│   └── page.tsx
│
├── components
│   └── TokenCard.tsx
│
├── types
│   └── token.ts
│
└── public
```

---

#  Installation and Setup

## 1. Clone the repository

```bash
git clone https://github.com/your-username/Trending-Tokens.git
```

## 2. Navigate to the project folder

```bash
cd Trending-Tokens
```

## 3. Install dependencies

```bash
npm install
```

## 4. Configure environment variables

Create a `.env.local` file:

```env
SOLANA_TRACKER_API_KEY=64cbb404-ff54-41f0-b183-28b11d7800bd
SOLANA_TRACKER_BASE_URL=https://data.solanatracker.io
```
Add the required API values used by the application.

---

## 5. Run the development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

#  Deployment

The application is deployed using **Vercel** with continuous deployment from GitHub.

Every update pushed to the main branch automatically triggers a new deployment.

---


#  License

This project is developed for educational and demonstration purposes.
