# Backend

This is a Backend Initial Setup using Monolithic MVC Architecture. It is designed for scalable and secure applications, providing authentication, real-time communication, and secure API endpoints to support both web and mobile platforms.

## 📌 Features

- ✅ User authentication with **JWT & Passport.js**
- ✅ Real-time communication using **Socket.io**
- ✅ Secure API with **Express.js** and **MongoDB**
- ✅ Payment processing via **Stripe**
- ✅ Input validation with **Joi**
- ✅ Security middleware: **Helmet, CORS, Express-Rate-Limit, xss-clean, express-mongo-sanitize**
- ✅ API documentation with **Swagger**
- ✅ File uploads with **Multer**
- ✅ Logging with **Winston** and **Morgan**
- ✅ Email services with **Nodemailer**
- ✅ Geolocation support using **geoip-country**
- ✅ Data compression with **compression**
- ✅ Status monitoring with **express-status-monitor**

---

## 🛠 Technologies Used

| Technology                                                              | Purpose                 |
| ----------------------------------------------------------------------- | ----------------------- |
| **Node.js**                                                             | Backend runtime         |
| **Express.js**                                                          | Web framework           |
| **MongoDB & Mongoose**                                                  | Database & ODM          |
| **Socket.io**                                                           | Real-time communication |
| **JWT & Passport.js**                                                   | Authentication          |
| **Stripe API**                                                          | Payments                |
| **Swagger**                                                             | API documentation       |
| **Helmet, CORS, Express-Rate-Limit, xss-clean, express-mongo-sanitize** | Security                |
| **Multer**                                                              | File uploads            |
| **Nodemailer**                                                          | Email services          |
| **GeoIP-Country**                                                       | Geolocation             |
| **Compression**                                                         | Data compression        |
| **Express-Status-Monitor**                                              | Monitoring              |

---

## 📥 Installation

### 1️⃣ Clone the repository

```sh
git clone https://gitlab.com/shadat-hossain/initial-backend-setup-template-mvp-architecture
cd initial-backend-setup-template-mvp-architecture
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file and configure the required environment variables:

```ini
PORT=3000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET=your_stripe_secret
EMAIL_SERVICE=your_email_service
EMAIL_USER=your_email
EMAIL_PASSWORD=your_email_password
```

### 4️⃣ Run the server

```sh
npm run dev
```

---

## 🚀 API Endpoints

The API documentation is available through **Swagger**. You can access it at:

```
http://your-ip:3000
```

### 🔑 Authentication

| Method | Endpoint                       | Description         |
| ------ | ------------------------------ | ------------------- |
| POST   | `/api/v1/auth/register`        | Register a new user |
| POST   | `/api/v1/auth/login`           | Login user          |
| POST   | `/api/v1/auth/verify-email`    | Verify email        |
| POST   | `/api/v1/auth/forgot-password` | Forgot password     |
| POST   | `/api/v1/auth/reset-password`  | Reset password      |
| POST   | `/api/v1/auth/change-password` | Change password     |
| POST   | `/api/v1/auth/logout`          | Logout user         |

### 👤 User Profile

| Method | Endpoint                    | Description         |
| ------ | --------------------------- | ------------------- |
| GET    | `/api/v1/users/self/in`     | Get user profile    |
| PATCH  | `/api/v1/users/self/update` | Update user profile |
| POST   | `/api/v1/auth/delete-me`    | Delete user account |

---

## 🛠 Available Scripts

| Script          | Description                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Runs the app in development mode with nodemon |
| `npm run build` | Builds the project using Webpack              |
| `npm run seed`  | Runs the database seeder                      |
| `npm test`      | Runs tests (not yet implemented)              |

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 🤝 Contribution

Feel free to fork this repository and submit pull requests.

---

## 📧 Contact

**Authors**: [Md. Shadat Hossain](mailto:shadathossan3500@gmail.com) & Sahinur Islam

If you have any questions, feel free to reach out!

---

### 🌟 Star the repo if you like it! ⭐

