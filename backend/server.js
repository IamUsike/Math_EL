server.js;
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mysql from "mysql";
// import cookieParser from 'cookie-parser';
// import { Jwt } from 'jsonwebtoken';

const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.get("/", function (req, res, next) {
  res.send("Hello world");
});

app.use(express.static("../client"));
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "maths_el",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection error: ", err);
  } else {
    console.log("Connected to the database");
  }
});

// Define your API endpoints for handling signup, login, etc.
// Example:
app.post("/signup", (req, res) => {
  const { fname, lname, email, dob, phoneno, password } = req.body;

  db.query(
    "SELECT * FROM signup WHERE email = ?",
    [email],
    (error, results) => {
      // Check if the email is already registered
      if (error) {
        console.error("Database query error: ", error);
        return res
          .status(500)
          .json({ success: false, message: "Internal server error" });
      }

      if (results.length > 0) {
        return res
          .status(400)
          .json({ success: false, message: "Email is already registered" });
      }
      // If email is not registered, proceed with user registration
      db.query(
        "INSERT INTO signup (fname,lname,email,dob,phoneno, password) VALUES (?, ?, ?, ?, ?,?)",
        [fname, lname, email, dob, phoneno, password],
        (error) => {
          if (error) {
            console.error("Database query error: ", error);
            return res
              .status(500)
              .json({ success: false, message: "Internal server error" });
          }

          // User registration successful
          res.json({ success: true, message: "User signed up successfully" });
        }
      );
    }
  );
});

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  // Query the database to check if the user exists
  const query = `SELECT * FROM signup WHERE email = '${email}' AND password = '${password}'`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error("Error executing the query: " + err.stack);
      res.status(500).json({ error: "Internal server error" });
      return;
    }

    if (results.length === 0) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    res.status(200).json({ message: "Login successful" });
  });
});

const PORT = 8080;
app.get("PORT");
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
