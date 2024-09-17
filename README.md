# CryptoTracker - Simulating Hodlinfo website's Dashboard/Home Page

## Overview
This project is a clone of the HODLINFO website, a platform that displays real-time cryptocurrency prices from various Indian exchanges. It features a Node.js backend with Express and a frontend built with HTML, CSS, and JavaScript.

## Features
- Fetches real-time cryptocurrency data from the WazirX API
- Displays top 10 cryptocurrencies with their prices and other details
- Auto-refreshes data every minute

## Tech Stack
- Backend: Node.js with Express
- Database: PostgreSQL with Prisma ORM
- Frontend: HTML, CSS, JavaScript
- API: WazirX public API

## Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- PostgreSQL
- npm or yarn

### Backend Setup
1. Clone the repository:
   ```
   git clone https://github.com/Sejal0109/cryptoTracker
   cd cryptoTracker/backend-node
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your PostgreSQL database and update the connection details in the Prisma schema file.

4. Run Prisma migrations:
   ```
   npx prisma migrate dev
   ```

5. Start the backend server:
   ```
   node src/index.js
   ```

### Frontend Setup
1. Open the `frontend-html,css/index.html` file in a web browser.
2. Ensure that the backend server URL in the JavaScript fetch calls matches your backend server address.

## Usage
- The website will automatically fetch and display the top 10 cryptocurrencies from WazirX.
- Data is refreshed every minute.
- The UI closely resembles the original HODLINFO website, featuring a dark theme and responsive design.

## API Endpoints
- `GET /fetch-tickers`: Fetches new data from WazirX API and stores it in the database.
- `GET /tickers`: Retrieves the latest cryptocurrency data from the database.

## Acknowledgements
- This project is inspired by [HODLINFO](https://hodlinfo.com)
- Data provided by [WazirX API](https://api.wazirx.com/api/v2/tickers)