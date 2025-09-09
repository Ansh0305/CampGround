# CampGround
🌲 IndiCamp

A full-stack web application for exploring, creating, and reviewing campgrounds.

✨ Features

🔐 User Authentication – Secure login & signup with Passport.js

🏕 Campground Listings – Create, edit, and delete campgrounds

📸 Image Uploads – Store images on Cloudinary

🌍 Interactive Maps – MapTiler integration for location display

📝 Reviews System – Add, edit, and delete reviews

🛡 Security – Helmet & MongoDB sanitization to prevent attacks

🎥 Preview
Home Page
<img width="1916" height="870" alt="home page" src="https://github.com/user-attachments/assets/2b24dc73-84ec-446c-9d21-55f7794e5e52" />

Campground Details
<img width="1899" height="774" alt="Campground Details" src="https://github.com/user-attachments/assets/f90fa54a-fbb4-4cce-a668-03956ceba887" />

Reviews Section	Map Integration
<img width="1918" height="873" alt="Screenshot 2025-09-09 193434" src="https://github.com/user-attachments/assets/0f3e8a25-c50a-4474-a947-b4aa9dd564bb" />


🛠 Tech Stack

Frontend: EJS, EJS-Mate, Vanilla JS, CSS
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: Passport.js (Local Strategy)
Cloud Storage: Cloudinary + Multer
Other Tools: MapTiler, Joi Validation, Method Override

📂 Project Structure
CampGround-main/
│── app.js              # Entry point
│── middleware.js       # Custom middlewares
│── schemas.js          # Joi validation schemas
│── package.json        # Dependencies & scripts
│
├── controllers/        # Business logic
├── models/             # Mongoose models
├── routes/             # Express routes
├── views/              # EJS templates
├── public/             # Static assets (CSS, JS)
├── cloudinary/         # Cloudinary config
├── seeds/              # Sample DB seeds
└── Utilities/          # Helper utilities

⚡ Installation & Setup

1️⃣ Clone the repo
git clone https://github.com/your-username/CampGround.git
cd CampGround-main

2️⃣ Install dependencies
npm install

3️⃣ Environment Variables

Create a .env file in the root directory and add:

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
MAPTILER_API_KEY=your_api_key
MONGO_URI=your_mongodb_uri
SESSION_SECRET=your_secret_key

4️⃣ Run the application
npm start


App will be live at 👉 http://localhost:3000

🎯 Future Improvements

📍 Geolocation search for campgrounds

⭐ Ratings system

📱 Mobile-friendly UI redesign

📨 Email verification & password reset

🤝 Contributing

Contributions are always welcome!

Fork the project

Create a feature branch (git checkout -b feature-name)

Commit your changes

Open a Pull Request 🚀

📜 License

This project is licensed under the MIT License.

