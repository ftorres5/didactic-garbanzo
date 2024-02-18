const router = require("express").Router();
const db = require("../db/client");
const jwt = require("jsonwebtoken");

const { getUserBooks } = require("../db");

// Register a new user account
router.post("/register", async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    const {
      rows: [user],
    } = await db.query(
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *",
      [username, password, email]
    );

    // Create a token with the user id
    const token = jwt.sign({ id: user.id }, process.env.JWT);

    res.status(201).send({ token });
  } catch (error) {
    next(error);
  }
});

// Login to an existing user account
router.post("/login", async (req, res, next) => {
  try {
    const {
      rows: [user],
    } = await db.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [req.body.username, req.body.password]
    );

    if (!user) {
      return res.status(401).send("Invalid login credentials.");
    }

    // Create a token with the user id
    const token = jwt.sign({ id: user.id }, process.env.JWT);

    res.send({ token });
  } catch (error) {
    next(error);
  }
});

// Get the currently logged in user
router.get("/me", async (req, res, next) => {
  try {
    const {
      rows: [user],
    } = await db.query("SELECT * FROM users WHERE users.id = $1", [
      req.user?.id,
    ]);

    const books = await getUserBooks(req.user.id);

    return res.send({ ...user, books });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
