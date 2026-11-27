# Konsulispa

A web-based **expert system** that recommends **self-care (swamedikasi) and over-the-counter medication** for symptoms of **Upper Respiratory Tract Infections (URTI / ISPA)**, and lets users **book consultations** with partner clinics and pharmacies.

Built as my undergraduate thesis at Pancasila University (Informatics Engineering, 2025). The user interface is in Indonesian.

**Live:** [konsulispa.com](https://konsulispa.com)

> **Thesis title:** *Sistem Rekomendasi Pengobatan Gejala Infeksi Saluran Pernafasan Atas dengan Tindakan Mandiri dan Konsultasi Medis* (Recommendation System for Treating Symptoms of Upper Respiratory Tract Infections with Self-Care and Medical Consultation)

> **Disclaimer:** This project was built for academic purposes. Its recommendations are not a substitute for professional medical advice.

---

## Features

**Patient (user app)**
- Register / login (JWT)
- Symptom-based diagnosis (7 questions) with treatment recommendations
- Diagnosis history, stored per user in the browser, with delete
- Browse medicines by symptom category: cough, cold, flu, asthma, fever, pain
- Browse clinics and pharmacies by city (Jakarta, Bogor, Depok, Tangerang, Bekasi)
- Book a consultation by choosing a date and time slot
- View and cancel bookings (while still pending)
- Edit profile with photo upload

**Clinic / Pharmacy member (panel)**
- Dashboard: earnings, number of bookings, number of patients, latest bookings
- Approve or cancel consultation requests
- Edit clinic profile: address, hours, services, contact, fee, and availability

**Admin (panel)**
- Dashboard with system-wide statistics
- View all consultations and cancel them
- Add clinics/pharmacies and toggle their availability
- Add medicines and view the medicine list

## How the Expert System Works

The diagnosis engine runs **client-side** in the React app (`frontend/src/components/InferDiagnosis.jsx`). The knowledge base (questions and rules with expert-assigned CF values) lives in `frontend/src/assets/assets.js`.

1. **Forward chaining:** the user's answers are treated as facts. The engine fires every rule whose conditions all match, for example *cough = yes AND cough type = productive*.
2. **Certainty Factor:** each rule carries an expert-assigned CF. When several rules support the same diagnosis, their CF values are combined into a single confidence value (for two positive values: `CF1 + CF2 × (1 − CF1)`).
3. **Result:** the user gets the diagnosis and a list of recommended treatments. If no rule matches, the system falls back to advising a doctor consultation.

## Tech Stack

| Layer | Technology |
|---|---|
| User app | React, Vite, Tailwind CSS, React Router, Axios |
| Admin / clinic panel | React, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas (Mongoose) |
| Auth and security | JWT, bcrypt, validator |
| File upload | Multer, Cloudinary |

## Architecture

```
konsulispa-mern/
├── frontend/   # User app (port 5173)
├── admin/      # Admin and clinic/pharmacy panel (port 5174)
└── backend/    # REST API (port 4000)
    ├── config/        # MongoDB and Cloudinary setup
    ├── models/        # user, klinikApotek, obat, appointment
    ├── routes/        # /api/user, /api/admin, /api/klinikapotek, /api/obat
    ├── controllers/
    └── middlewares/   # JWT auth per role, Multer
```

## Getting Started

### Prerequisites
- Node.js 18+
- A MongoDB Atlas cluster
- A Cloudinary account (cloud name, API key, API secret)

### 1. Clone
```bash
git clone https://github.com/glgpratamaputra/konsulispa-mern.git
cd konsulispa-mern
```

### 2. Backend
```bash
cd backend
npm install
```
Copy `.env.example` to `.env` and fill in your own values (see below), then run:
```bash
npm run server
```
Wait for `Server Started 4000` and `Database Connected`.

### 3. User app
```bash
cd frontend
npm install
```
Copy `.env.example` to `.env`, then:
```bash
npm run dev
```
Open http://localhost:5173

### 4. Admin / clinic panel
```bash
cd admin
npm install
```
Copy `.env.example` to `.env`, then:
```bash
npm run dev
```
Open http://localhost:5174 and log in as Admin or Clinic/Pharmacy member.

## Environment Variables

Each folder has a `.env.example`. **Never commit a real `.env` file.**

| Folder | Variables |
|---|---|
| `backend` | `PORT`, `MONGODB_URI`, `CLOUDINARY_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_SECRET_KEY`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, plus demo account variables |
| `frontend`, `admin` | `VITE_BACKEND_URL` (for example `http://localhost:4000`) |

> `MONGODB_URI` must **not** include a database name. The database name is appended in `backend/config/mongodb.js`.

## Screenshots

<!-- Add screenshots, for example:
![Home](docs/screenshots/home.png)
![Diagnosis](docs/screenshots/diagnosis.png)
![Clinic booking](docs/screenshots/booking.png)
![Admin dashboard](docs/screenshots/admin-dashboard.png)
-->

## Author

**Gilang Pratama Putra**, Informatics Engineering graduate, Pancasila University

- Email: glgpratamaputra@gmail.com
- GitHub: [@glgpratamaputra](https://github.com/glgpratamaputra)
