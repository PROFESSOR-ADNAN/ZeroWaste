# Zero Waste — MERN migration

This workspace now contains a scaffolded MERN structure alongside the original project.

Backend (backend/):

- Express server: `backend/server.js`
- Mongoose connection: `backend/config/db.js`
- Models: `backend/models/*` (User, Donation, Product, Payment)
- Controllers: `backend/controllers/*`
- API routes: `backend/routes/api/*`

Frontend (frontend/):

- React app skeleton in `frontend/` with pages in `frontend/src/pages`
- API helper: `frontend/src/services/api.js`

Quick start (development):

1. Backend: install and run

```bash
cd backend
npm install
# configure .env (MONGO_URI, JWT_SECRET)
npm run dev
```

2. Frontend: install and run

```bash
# if you used the previous 'client' folder, you can remove it now. Use the new frontend:
cd frontend
# this project expects react-scripts (create-react-app); if not installed, run:
# npx create-react-app .  (or ensure dependencies are installed)
npm install
npm run dev
```

Notes:

- The API base URL defaults to `http://localhost:5000/api` (client/src/services/api.js). Set `REACT_APP_API_URL` in client env if different.
- The payment controller is stubbed and sets status to `paid` for demonstration; integrate a payment gateway for production.
- This scaffold covers core endpoints and pages (auth, donations, products, payments). Expand controllers/models to match full app logic as needed.

Next recommended steps:

- Fill `.env` with real `MONGO_URI` and `JWT_SECRET`.
- Run backend and create an initial admin user.
- Verify endpoints with Postman or via the React UI.
