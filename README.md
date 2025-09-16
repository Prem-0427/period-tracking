# Period Tracker App

A full-stack **Period Tracker** built with **Node.js, Express.js, MongoDB, and Vanilla JS**.

## 📂 Project Structure

```
period-tracker/
│── backend/      # Node.js + Express + MongoDB API
│── frontend/     # Static HTML, CSS, JS served via Express
```

## 🚀 Setup Instructions

### 1) Backend Setup
```sh
cd backend
npm install
# Edit backend/.env (or copy .env.example to .env and fill values)
npm start
```

### 2) Frontend Setup
```sh
cd frontend
npm install
npm start
```

### 3) Access the App
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## 🔑 Environment Variables (`backend/.env`)
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/periodtracker
JWT_SECRET=replace-with-strong-secret
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your-app-password
```
> For Gmail, create an **App Password** and use it for `EMAIL_PASS`.

## ✨ Features
- JWT-based Signup / Login
- Forgot / Reset Password (email link, 15 min expiry)
- Save period data (date, cycle length, food notes)
- Predict next period date on dashboard

## 🔒 Notes & Best Practices
- Use a long, random `JWT_SECRET` (32+ chars).
- Never commit real `.env` secrets to a public repo.
- Update CORS rules if you deploy frontend/backend to different domains.

## 🧪 Quick Test Flow
1. Sign up from `/signup.html`
2. Log in from `/login.html` → token saved to localStorage
3. Visit `/` (dashboard), add last period + cycle length → predicted date shows
4. Try `/forgot.html` → check your email for reset link
5. Open link, reset password on `/reset.html`

## 📄 License
MIT
