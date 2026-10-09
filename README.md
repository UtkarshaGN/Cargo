
# 🚗 Cargo 

Cargo is a full-stack car rental web application built using the MERN stack and modern JavaScript technologies. It allows users to explore available cars, view car details, register and log in to their accounts, and make bookings through a responsive user interface.

The application also includes backend APIs, database integration, image uploads, JWT-based authentication, and an admin panel for managing cars and bookings.

## ✨ Features

### 1. MERN Stack Project Setup
- Built using MongoDB, Express.js, React.js, and Node.js.
- Separate frontend and backend structure.
- RESTful API architecture.
- Environment variable configuration.
- Modular and reusable code structure.

### 2. Backend API Development
- Developed REST APIs using Node.js and Express.js.
- Implemented API routes and controllers.
- Used middleware for request handling and error management.
- Integrated frontend API requests with the backend.
- Implemented CRUD operations for application data.
- Implemented image upload functionality for car listings.

### 3. MongoDB Integration
- Integrated MongoDB using Mongoose.
- Created database models and schemas for application data.
- Stored and retrieved user, car, and booking information.
- Implemented data validation and database operations.

### 5. Frontend Development
- Developed the user interface using React.js.
- Used React Router for page navigation and dynamic routes.
- Styled components using Tailwind CSS.
- Created reusable components for car cards, forms, and other UI elements.
- Built responsive layouts for desktop, tablet, and mobile devices.
- Integrated REST APIs using Axios and Redux Toolkit.

### 6. User Authentication with JWT
- Implemented user registration and login functionality.
- Used JSON Web Tokens (JWT) for authentication.
- Integrated frontend authentication with backend APIs.
- Used password hashing on the backend.
- Managed authentication-related application state using Redux Toolkit.

### 7. Car Booking Functionality
- Displayed available cars and individual car details.
- Implemented booking forms with pickup and return dates.
- Integrated booking requests with backend APIs.
- Stored and retrieved booking information from MongoDB.
- Designed the booking flow to support future enhancements such as availability checks and booking status management.

### 8. Admin Panel
- Designed an admin interface for managing application data.
- Supported car listing management, including creating, viewing, updating, and deleting cars.
- Provided booking management functionality.
- Structured the application to support role-based access control and protected admin routes.


## 🛠️ Tech Stack

**Frontend**
- React.js
- JavaScript (ES6+)
- React Router
- Redux Toolkit
- Axios
- Tailwind CSS
- React Hot Toast

**Backend**
- Node.js
- Express.js
- REST APIs
- JSON Web Token (JWT)
- bcrypt
- Multer ( for image uploads)

**Database**
- MongoDB
- Mongoose

**Development Tools**
- Git and GitHub
- Visual Studio Code
- Postman
- npm
- Environment variables using dotenv

## 📁 Project Structure

```text
Cargo/
├── client/
│   ├── public/
│   └── src/
│       ├── api/
│       ├── components/
│       ├── data/
│       ├── pages/
│       ├── store/
│       │   └── features/
│       ├── App.jsx
│       └── main.jsx
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
│
├── .gitignore
└── README.md
```



## 🔗 Application Workflow

1. Users browse the available car listings.
2. Users register for an account or log in.
3. The frontend communicates with the backend through REST APIs.
4. Users view car details and submit booking requests.
5. The backend processes requests and interacts with MongoDB.
6. The admin interface provides tools for managing cars and bookings, subject to implemented permissions.

## 🧪 API Testing

Use Postman to test the backend API endpoints.

Typical REST operations include:

| HTTP Method | Purpose |
|---|---|
| GET | Retrieve cars, car details, or bookings |
| POST | Register users, log in, or create bookings |
| PATCH | Update selected fields |
| PUT | Replace a resource, if supported |
| DELETE | Delete a resource, if supported |

The exact API routes depend on your backend implementation.

## 🔐 Security Considerations

- Hash passwords before storing them.
- Validate incoming request data on the backend.
- Verify JWTs on protected endpoints.
- Enforce admin permissions on the backend, not just in the frontend.
- Protect database credentials and other secrets with environment variables.
- Validate uploaded files, including file types and size.
- Check car availability on the backend before confirming bookings.

## 🚀 Future Enhancements


- Booking availability validation 
- Booking cancellation and status tracking.


## 👩‍💻 Learning Outcomes

Through this project, I am developing practical skills in:

- Full-stack MERN application development.
- React component design and client-side routing.
- REST API integration using Axios and Redux Toolkit.
- Asynchronous state management.
- Authentication and protected routes.
- MongoDB data modelling and persistence.
- CRUD operations and backend API development.
- Responsive UI development using Tailwind CSS.
- Git, GitHub, debugging, and API testing.

## 📌 Project Status

Actively developing and improving the Cargo car rental application as part of my full-stack development learning journey.

## 👤 Author

**Utkarsha Naik**

Junior Software Developer | Frontend Developer

- Portfolio: https://myportfolio-green-pi.vercel.app/
- GitHub: https://github.com/UtkarshaGN

