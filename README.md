# 🚀 Backend Developer Assessment (IMARC)

A backend system for managing users and tasks, powered by **Node.js**, **Express**, **JWT Authentication**, and **MySQL** with **Sequelize ORM**.

📄 [Assignment Document → Node js Assignment.docx](https://github.com/vivekjais1110/IMARC-GROUP/blob/main/Node%20js%20Assignment.docx)

---

## 📌 Features

- 🔐 Secure User Authentication (JWT + bcrypt)
- 🧾 CRUD Operations on Tasks (Create, Read, Update, Delete)
- 👢 Task Prioritization & Status Management
- 📊 Task Pagination and Filtering
- ✉️ Task Deadline Notifications via Nodemailer
- 📥 Express Validator for Request Validation
- 🧠 Modular Architecture with Middleware, Controllers & Routes

---

## ✨ Bonus Features

- 📈 Filter-based status reports
- ⏰ Deadline alerts using `node-cron` + `nodemailer`
- 📄 Pagination support (`?page=1&limit=3`)

---

## ⚙️ Setup & Installation

Make sure you have the following tools installed:

- ✅ Node.js (v12+)
- ✅ MySQL

### 🔁 Clone the Repository

```bash
git clone https://github.com/vivekjais1110/IMARC-GROUP.git
cd IMARC-GROUP
```

### 📦 Install Dependencies

```bash
npm install
```

### 🔐 Environment Configuration

Create a `.env` file in the root directory and configure:

```env
PORT=6000
JWT_SECRET=imarc
SQL_DB=imarc_group
SQL_USER=root
SQL_PASSWORD=root
SQL_HOST=localhost
SQL_DIALECT=mysql
```

### ▶️ Run the Server

```bash
npm start
```

---

## 🔑 Environment Variables

| Variable       | Description              |
| -------------- | ------------------------ |
| `PORT`         | Server Port              |
| `JWT_SECRET`   | JWT Signing Secret       |
| `SQL_DB`       | MySQL Database Name      |
| `SQL_USER`     | MySQL Username           |
| `SQL_PASSWORD` | MySQL Password           |
| `SQL_HOST`     | Database Host            |
| `SQL_DIALECT`  | Database Dialect (mysql) |

---

## 📱 API Endpoints

### 👤 User Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | `/api/v1/register` | Register user |
| POST   | `/api/v1/login`    | User login    |

### ✅ Task Routes

| Method | Endpoint                   | Description          |
| ------ | -------------------------- | -------------------- |
| POST   | `/api/v1/tasks_create`     | Create new task      |
| GET    | `/api/v1/tasks_get`        | Get all tasks        |
| PUT    | `/api/v1/tasks_update/:id` | Update task (status) |
| DELETE | `/api/v1/tasks_delete/:id` | Delete task          |

### 🚰 Bonus API Features

| Endpoint                          | Feature                      |
| --------------------------------- | ---------------------------- |
| GET `/api/v1/tasks_get_status`    | Filter tasks by status       |
| GET `/api/v1/getTasks_pagination` | Paginated task fetch         |
| `Cron Job`                        | Email notification for tasks |

---

## 🧪 Postman Collection

📢 For complete API testing, import this collection into Postman:

🔗 [Imarc.postman_collection.json](https://github.com/vivekjais1110/IMARC-GROUP/blob/main/Imarc.postman_collection.json)

✅ Includes saved response examples for quick reference!

---

## 📦 Dependencies

| Library             | Use Case           |
| ------------------- | ------------------ |
| `express`           | Core web server    |
| `sequelize`         | ORM for MySQL      |
| `jsonwebtoken`      | JWT Authentication |
| `bcryptjs`          | Password hashing   |
| `nodemailer`        | Sending emails     |
| `node-cron`         | Task scheduling    |
| `express-validator` | Input validation   |

