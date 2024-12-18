# Personal Portfolio Project

This repository contains the source code for my personal portfolio website, built to showcase my skills, projects, and professional journey. The application is developed using modern web technologies to deliver a seamless, responsive, and dynamic user experience.

---

## Features

- **Dynamic Portfolio**: Showcases projects with detailed descriptions, live previews, and source code links.
- **Interactive UI**: Built with React for a fast, responsive, and user-friendly experience.
- **Backend Integration**: Node.js and Express.js are used to handle server-side logic and API management.
- **Database Management**: PostgreSQL ensures efficient storage and retrieval of project data and contact form submissions.
- **Responsive Design**: Incorporates CSS grid to ensure compatibility across all devices.
- **Contact Form**: Functional contact form to receive messages directly from visitors.

---

## Tech Stack

### Frontend
- **React**: For building reusable components and managing the application’s state.
- **JavaScript (ES6+)**: Enhancing interactivity and logic.
- **HTML & CSS**: Structuring and styling the web pages.


### Backend
- **Node.js**: For server-side runtime environment.
- **Express.js**: For building RESTful APIs.

### Database
- **PostgreSQL**: For secure and efficient data storage and retrieval.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal.git
   ```

2. Navigate to the project directory:
   ```bash
   cd personal
   ```

3. Install dependencies for both frontend and backend:
   ```bash
   # For backend
   cd backend
   npm install

   # For frontend
   cd ../frontend
   npm install
   ```

4. Set up the PostgreSQL database:
   - Create a database named `portfolio`.
   - Run the provided SQL script to initialize tables:
     ```bash
     psql -U yourusername -d portfolio -f database/schema.sql
     ```

5. Configure environment variables:
   - Create a `.env` file in the backend directory and add the following:
     ```env
     PORT=5000
     DB_HOST=localhost
     DB_USER=yourusername
     DB_PASSWORD=yourpassword
     DB_NAME=portfolio
     ```

6. Start the development servers:
   ```bash
   # For backend
   cd backend
   npm index.s

   # For frontend
   cd ../frontend
   npm run dev
   ```

---

## Usage

- Visit `http://localhost:3000` to view the frontend of the portfolio.
- The backend runs on `http://localhost:5000` and handles API requests for dynamic data.

---

## Folder Structure

```plaintext
project-root/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
└── README.md
```

---

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

If you have any questions or want to connect, feel free to reach out via the contact form on the portfolio or connect on [LinkedIn](www.linkedin.com/in/samuel-njathi-0261aa23b).

