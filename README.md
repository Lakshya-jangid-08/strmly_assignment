# STRMLY

STRMLY is a simple video sharing platform that allows users to sign up, log in, upload videos, and browse videos uploaded by others. It features user authentication, video uploads (with Cloudinary integration), and a searchable dashboard.

## Features

- User authentication (signup, login, JWT-based sessions)
- Video upload (MP4, stored on Cloudinary)
- Video listing with search functionality
- User profile with logout
- Responsive UI built with React and Tailwind CSS
- Backend API built with Node.js, Express, and MongoDB

## Tech Stack

- **Frontend:** React, Tailwind CSS, Axios, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose, Cloudinary
- **Authentication:** JWT, Bcrypt
- **File Upload:** Multer, Cloudinary

## Getting Started

### Prerequisites

- Node.js (v16+)
- MongoDB instance (local or Atlas)
- Cloudinary account

### Environment Variables

Create a `.env` file in the `Server` directory with the following variables:

```
PORT=5000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Create a `.env` file in the `Client` directory with:

```
VITE_API_URL=http://localhost:5000
```

### Installation

#### Backend

```bash
cd Server
npm install
npm run start
```

#### Frontend

```bash
cd Client
npm install
npm run dev
```

### Usage

- Visit `http://localhost:5173` (or the port shown in your terminal) to access the frontend.
- Sign up or log in to upload and browse videos.

## Folder Structure

```
STRMLY/
  ├── Client/      # React frontend
  └── Server/      # Node.js backend
```

### Server/.env
```
PORT=5000
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Client/.env
```
VITE_API_URL=http://localhost:5000
```

## API Endpoints

- `POST /auth/signup` - Register a new user
- `POST /auth/login` - Login and receive JWT
- `GET /auth/profile` - Get current user profile (JWT required)
- `POST /post/upload` - Upload a new video (JWT required)
- `GET /post/get-posts` - List all videos

## License

This project is for educational purposes.

