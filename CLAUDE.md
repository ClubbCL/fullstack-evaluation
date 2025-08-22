# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 technical evaluation project for a points system where users accumulate and redeem points at restaurants. The project is designed as a coding assessment with specific TODO tasks for candidates to complete.

## Key Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application with Turbopack  
- `npm run lint` - Run ESLint
- `npm run init-db` - Initialize SQLite database with seed data

## Architecture

### Database Layer
- **SQLite database** (`database.db`) with three main tables:
  - `users` - User accounts (id, name, email)
  - `restaurants` - Restaurant locations (id, name, address)
  - `points_transactions` - Point transactions (user_id, restaurant_id, points, type, created_at)
- **Database connection** via `lib/db.ts` using sqlite/sqlite3 with singleton pattern
- **Initialization script** at `scripts/init-db.js` creates tables and seeds test data

### API Layer (App Router)
- **User listing**: `app/api/users/route.ts` - Complete implementation
- **Points calculation**: `app/api/users/[userId]/points/route.ts` - TODO for SQL query
- **Transaction history**: `app/api/users/[userId]/transactions/route.ts` - TODO for SQL query
- **API helpers** in `lib/api.ts` provide typed client-side fetch functions

### Frontend Architecture
- **Main page**: `app/page.tsx` - User selector with complete implementation
- **Points display**: `components/PointsDisplay.tsx` - TODO for useEffect data fetching
- **Transaction list**: `components/TransactionsList.tsx` - TODO for date rendering
- **TypeScript interfaces** in `types/index.ts` define User, Transaction, PointsResponse

## Evaluation Structure

This is a **technical assessment project** where candidates complete 4 specific TODOs:
1. SQL query for points summation with COALESCE handling
2. SQL query for recent transactions with ordering and limiting
3. React useEffect for parallel API data fetching 
4. Date formatting in transaction display component

The project works in its current state (showing empty data) but requires implementation to show actual points and transaction data from the database.

## Database Schema Context

The points system uses positive values for 'earn' transactions and negative values for 'redeem' transactions. Total points are calculated by summing all transaction points for a user. The seed data includes edge cases like users with zero points and users with no transactions.