# Expense Tracker — My Money Diary

A full-stack MERN application for tracking personal income, expenses and daily budget in real-time.

**Stack:** MongoDB | Express.js | React.js | Node.js
**Status:** Completed | **Project Type:** BCA VAP — College Project



## Overview

Expense Tracker helps users record every income and expense, view their total balance instantly, and understand where their money is going. It is built with a clean dashboard, simple forms and a fast REST API.

Perfect for students and beginners to learn complete MERN development — from database to deployment.



## Features

- Add Income & Expense with title, amount, category and date
- Real-time Balance Calculation: Income - Expense = Balance
- Complete Transaction History with date-wise sorting
- Filter Transactions by Income / Expense / Category
- One-click Delete for any transaction
- Clean, Modern & Responsive Dashboard for Mobile & Desktop
- Fast & Secure REST API with MongoDB


## Tech Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| Frontend | React.js, CSS, JavaScript | User Interface & Dashboard |
| Backend | Node.js, Express.js | Server & REST APIs |
| Database | MongoDB, Mongoose | Store Transactions |
| Tools | Git, GitHub, VS Code, Postman | Development & Testing |



## Getting Started

# Prerequisites

- Node.js v18 or above installed
- MongoDB installed / MongoDB Atlas account
- VS Code & Git installed

# Installation

1. Clone the repository:
   git clone https://github.com/mariyamwasey/college-vap-project.git
   cd college-vap-project

2. Setup Backend:
   cd backend
   npm install
   npm start
   Backend runs on http://localhost:5000

3. Setup Frontend:
   cd frontend
   npm install
   npm start
   Frontend opens on http://localhost:3000

Your app is now ready to use.



# Project Structure

college-vap-project/
  backend/
    models/Transaction.js - Mongoose Schema
    routes/transactions.js - API Routes
    server.js - Express Server & DB Connection
  frontend/
    src/
      components/Dashboard.js - Balance & Summary
      components/TransactionList.js - All Transactions
      components/AddTransaction.js - Add Form
      App.js - Main App File
  README.md - Project Documentation


# API Documentation

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | /api/transactions | Get all transactions |
| POST | /api/transactions | Create new transaction |
| DELETE | /api/transactions/:id | Delete transaction by ID |

Example Request - Add Expense:
POST /api/transactions
Body: { title: "Grocery", amount: 500, type: "expense", category: "Food" }


# Screenshots

Dashboard - Shows Total Balance, Income & Expense
Add Transaction - Simple form to add new entry
Transaction List - All history in one place


# What I Learned From This Project

- Complete MERN Stack Development from Scratch
- Building REST APIs with Express.js
- Connecting React Frontend with Backend
- Database Design with MongoDB & Mongoose
- State Management in React
- Version Control & Project Management with GitHub


## Future Enhancements

- Monthly Reports with Charts using Recharts
- Category-wise Analytics - Food, Travel, Shopping, Bills
- User Login / Signup with JWT Authentication
- Export Monthly Report as PDF / Excel
- Monthly Budget Limit with Alert Notification
- Dark Mode & PWA Support


## Author

Mariyam Wasey
BCA Student | MERN Stack Developer | VAP Project

GitHub: https://github.com/mariyamwasey


If you found this project helpful, please give it a ⭐ Star.
Thank you for visiting!
