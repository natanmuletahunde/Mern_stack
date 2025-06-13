📝 Workout_Buddy

A full-stack fitness tracking application built with React, Vite, Node.js, Express, and MongoDB. Workout_Buddy empowers users to overcome their fitness challenges by signing up, logging in, and managing workout plans with  a sleek, responsive UI. Turn your fitness pain into progress! 💪

🚀 Features

✅ User Authentication – Secure signup and login using email and password with JWT authentication.
🔍 Workout Tracking – Create, view, and manage personalized workout plans (in progress).
🎨 Modern UI – Clean, responsive design with smooth transitions, built with React and Vite.
📱 Responsive Design – Works seamlessly on web, mobile, and tablet devices.
⚠️ Error Handling – Displays real-time feedback for login/signup errors.
🔒 Context API – Manages global auth state with AuthContext (and planned WorkoutContext for workouts).

📸 Screenshots

Coming soon! Screenshots of Signup, Login, and Workout Dashboard will be added to the GitHub repo.





Signup Page: Clean form for user registration.



Login Page: Secure login interface.



Dashboard: (Planned) Displays user workouts and progress.

Embed example (add to repo later):




🏗️ Project Structure

workout_buddy/
├── backend/                 # Node.js/Express backend
│   ├── models/             # MongoDB models (User.js)
│   ├── routes/             # API routes (user.js)
│   ├── server.js           # Main server file
│   ├── .env                # Environment variables
│   └── package.json
├── frontend/                # React/Vite frontend
│   ├── src/
│   │   ├── components/     # React components (Signup.js, Login.js)
│   │   ├── context/        # Context API (AuthContext.js, WorkoutContext.js)
│   │   ├── hooks/          # Custom hooks (useSignup.js, useLogin.js)
│   │   ├── index.js        # Main entry point
│   │   └── App.js          # Root component
│   ├── dist/               # Production build output
│   ├── vite.config.js      # Vite configuration
│   └── package.json
├── README.md

⚙️ Setup Instructions

🔧 Backend (Node.js/Express)





Navigate to the backend directory:

cd backend



Install dependencies:

npm install



Create a .env file in backend/ with:

MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/workout_buddy
JWT_SECRET=your_jwt_secret
PORT=4000



Start the server:

npm start

The API will be available at http://localhost:4000.

💻 Frontend (React/Vite)





Navigate to the frontend directory:

cd frontend



Install dependencies:

npm install



Create a .env file in frontend/ with:

VITE_API_URL=http://localhost:4000



Run the app:

npm run dev

The app will be available at http://localhost:5173.

Note: Ensure the backend server is running before launching the frontend.

🔌 API Endpoints

🔐 Authentication





POST /api/user/signup – Register a new user (email, password).



POST /api/user/login – Log in an existing user (returns JWT).

📝 Workouts (Planned)





GET /api/workouts – Fetch user workouts.



POST /api/workouts – Create a new workout plan.

🛠️ Technologies Used

Frontend





React: Component-based UI framework.



Vite: Fast build tool for development and production.



React Context API: Manages global state (AuthContext, WorkoutContext).



Fetch API: Handles HTTP requests to the backend.

Backend





Node.js/Express: Server framework for API routes.



MongoDB/Mongoose: NoSQL database and ODM for user/workout data.



jsonwebtoken: JWT-based authentication.



bcrypt: Password hashing.



cors: Enables cross-origin requests.



dotenv: Manages environment variables.

📬 Contact

For questions or feedback:
📧 Email: natanmuleta77@example.com
💻 GitHub: [Your GitHub Username]

📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

💡 Contributing

Contributions are welcome!





Fork the repo.



Create a branch: git checkout -b feature/your-feature.



Commit: git commit -m 'Add feature'.



Push: git push origin feature/your-feature.



Open a Pull Request.

About

Workout_Buddy is a full-stack fitness app that helps users turn their fitness challenges into progress. Built with React, Vite, Node.js, Express, and MongoDB, it offers secure authentication and a foundation for tracking workouts, inspiring users to rise above their “fitness crisis” with focus and action.
