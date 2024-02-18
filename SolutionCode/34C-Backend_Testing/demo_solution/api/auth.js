const router = require("express").Router();
const prisma = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Register a new user account
router.post("/register", async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    const hashedPassword = await bcrypt.hash(
      password,
      //salt needs to be a number but env variables have a string type
      parseInt(process.env.SALT)
    );

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
        email,
      },
    });

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
    const user = await prisma.user.findUnique({
      where: {
        username: req.body.username,
      },
    });

    const isSamePassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!user || !isSamePassword) {
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
    if (req.user?.id) {
      const user = await prisma.user.findUnique({
        where: {
          id: req.user.id,
        },
      });

      if (user) {
        const books = await prisma.book.findMany({
          where: {
            userid: user.id,
          },
          orderBy: {
            title: "asc",
          },
        });

        return res.send({ ...user, books });
      }
    }

    res.status(204).end();
  } catch (error) {
    next(error);
  }
});

module.exports = router;
