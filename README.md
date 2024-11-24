```markdown
# Firestore to MongoDB Data Transfer Application

## Index
1. [Description](#description)
2. [Technologies Used](#technologies-used)
3. [Installation & Setup](#installation--setup)
4. [API Endpoints](#api-endpoints)
5. [Contributors](#contributors)
6. [File Structure](#file-structure)

## Description
This application provides a backend service to transfer data between Firebase/Firestore and MongoDB databases. It implements full CRUD operations with API endpoints for both databases.

## Technologies Used
- Node.js
- Express.js
- Firebase/Firestore
- MongoDB with Mongoose
- Winston (Logging)
- Express Rate Limiter
- Helmet (Security)
- CORS

## Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB instance running
- Firebase project setup

### Steps to Run
1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file with the following variables:
```env
PORT=3000
DATABASE_URL=your_mongodb_url
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
```
4. Run the application:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## API Endpoints

### Firebase Operations
- `POST /api/v1/blogs/firebase/add/data` - Add data to Firebase
- `GET /api/v1/blogs/firebase/get/data` - Get data from Firebase
- `POST /api/v1/blogs/firebase/update/data` - Update data in Firebase

### MongoDB Operations
- `POST /api/v1/mongodb/blogs/add` - Create a new blog
- `GET /api/v1/mongodb/blogs/getall` - Get all blogs
- `GET /api/v1/mongodb/blogs/get/:id` - Get blog by ID
- `PUT /api/v1/mongodb/blogs/update/:id` - Update blog
- `DELETE /api/v1/mongodb/blogs/delete/:id` - Delete blog

## Contributors
- **Rohit**: MongoDB API development
- **Ayush Kathri**: Main API for data transfer implementation
- **GauravKesh**: Firebase API development

## File Structure
```
src/
├── api/
│   ├── controller/
│   └── router/
├── config/
├── controllers/
├── database/
├── models/
├── routes/
├── util/
├── app.js
└── server.js
```

### Key Files and Their Purpose
- `app.js`: Main Express application setup
- `server.js`: Server initialization and database connection
- `database/db.js`: MongoDB connection configuration
- `database/firebase.js`: Firebase initialization
- `controllers/blogController.js`: MongoDB CRUD operations
- `controllers/firebaseControllers.js`: Firebase operations
- `models/blogModel.js`: MongoDB schema definition
- `util/logger.js`: Winston logger configuration
- `util/apiRateLimit.js`: Rate limiting configuration

## Dependencies
All required dependencies are listed in `package.json`:
- express
- mongoose
- firebase/firebase-admin
- winston
- cors
- helmet
- dotenv-flow
- express-rate-limit
- and more...
```
