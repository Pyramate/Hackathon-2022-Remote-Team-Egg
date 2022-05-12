const express = require("express");
const path = require("path");
const Joi = require("joi");
const connection = require("../db_config");

// let's create express app
// const globalConnection = require("../migrate");

const app = express();

// use some application-level middlewares

app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  } else {
    console.log("connected as id " + connection.threadId);
  }
});

//  Routes for users

app.get("/api/users", (req, res) => {
  connection.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    } else {
      res.json(result);
    }
  });
});

app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  connection.query(
    "SELECT * FROM users WHERE id = ?",
    [userId],
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving user from database");
      } else if (results.length) {
        res.json(results[0]);
      } else {
        res.status(404).send(`User with ${userId} does not exist`);
      }
    }
  );
});

app.post("/api/users", (req, res) => {
  const { familyname, email, ageGroup, city, ecologicalLevel } = req.body;
  const userAvatar = `https://avatars.dicebear.com/api/avataaars/:${email}.svg`;

  const db = connection.promise();
  let validationErrors = null;
  db.query("SELECT * FROM users WHERE email = ?", [email])
    .then(([result]) => {
      if (result[0]) return Promise.reject(new Error("DUPLICATE_EMAIL"));
      validationErrors = Joi.object({
        email: Joi.string().email().max(255).required(),
        familyname: Joi.string().max(255).required(),
        ageGroup: Joi.string().max(255).required(),
        city: Joi.string().max(255).required(),
        ecologicalLevel: Joi.string().max(255).required(),
        avatarUrl: Joi.string().max(255),
      }).validate(
        { familyname, email, ageGroup, city, ecologicalLevel },
        { abortEarly: false }
      ).error;
      if (validationErrors) return Promise.reject(new Error("INVALID_DATA"));
      return db.query(
        "INSERT INTO users (familyname, email, ageGroup, city, ecologicalLevel, avatarUrl) VALUES (?, ?, ?, ?, ?,?)",
        [familyname, email, ageGroup, city, ecologicalLevel, userAvatar]
      );
    })
    .then(([{ insertId }]) => {
      res.status(201).json({
        id: insertId,
        familyname,
        email,
        ageGroup,
        city,
        ecologicalLevel,
        avatarUrl: userAvatar,
      });
    })
    .catch((err) => {
      console.error(err);
      if (err === "DUPLICATE_EMAIL")
        res.status(409).json({ message: "This email is already used" });
      else if (err === "INVALID_DATA")
        res.status(422).json({ validationErrors });
      else res.status(500).send("Error saving the user");
    });
});
// Routes for activities
app.get("/api/activities", (req, res) => {
  connection.query("SELECT * FROM activities", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving activities from database");
    } else {
      res.json(result);
    }
  });
});

app.get("/api/activities/:id", (req, res) => {
  const activityId = req.params.id;
  connection.query(
    "SELECT * FROM users WHERE id = ?",
    [activityId],
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving activity from database");
      } else if (results.length) {
        res.json(results[0]);
      } else {
        res.status(404).send(`Activity with ${activityId} does not exist`);
      }
    }
  );
});

app.post("/api/users", (req, res) => {
  const {
    name,
    duration,
    category,
    ageGroup,
    ecologicalLevel,
    description,
    pictureActivity,
  } = req.body;

  const db = connection.promise();
  let validationErrors = null;
  db.query("SELECT * FROM users WHERE email = ?", [email])
    .then(([result]) => {
      if (result[0]) return Promise.reject(new Error("DUPLICATE_EMAIL"));
      validationErrors = Joi.object({
        email: Joi.string().email().max(255).required(),
        familyname: Joi.string().max(255).required(),
        ageGroup: Joi.string().max(255).required(),
        city: Joi.string().max(255).required(),
        ecologicalLevel: Joi.string().max(255).required(),
        avatarUrl: Joi.string().max(255),
      }).validate(
        { familyname, email, ageGroup, city, ecologicalLevel },
        { abortEarly: false }
      ).error;
      if (validationErrors) return Promise.reject(new Error("INVALID_DATA"));
      return db.query(
        "INSERT INTO users (familyname, email, ageGroup, city, ecologicalLevel, avatarUrl) VALUES (?, ?, ?, ?, ?,?)",
        [familyname, email, ageGroup, city, ecologicalLevel, userAvatar]
      );
    })
    .then(([{ insertId }]) => {
      res.status(201).json({
        id: insertId,
        familyname,
        email,
        ageGroup,
        city,
        ecologicalLevel,
        avatarUrl: userAvatar,
      });
    })
    .catch((err) => {
      console.error(err);
      if (err === "DUPLICATE_EMAIL")
        res.status(409).json({ message: "This email is already used" });
      else if (err === "INVALID_DATA")
        res.status(422).json({ validationErrors });
      else res.status(500).send("Error saving the user");
    });
});

// Routes for events
app.get("/api/events", (req, res) => {
  connection.query("SELECT * FROM events", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving events from database");
    } else {
      res.json(result);
    }
  });
});

app.get("/api/events/:id", (req, res) => {
  const eventId = req.params.id;
  connection.query(
    "SELECT * FROM users WHERE id = ?",
    [eventId],
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving event from database");
      } else if (results.length) {
        res.json(results[0]);
      } else {
        res.status(404).send(`Activity with ${eventId} does not exist`);
      }
    }
  );
});

app.post("/api/events", (req, res) => {
  const {
    name,
    startDate,
    endDate,
    category,
    eventLocation,
    ageGroup,
    ecologicalLevel,
    description,
    requirements,
    pictureActivity,
  } = req.body;
//   const userAvatar = `https://avatars.dicebear.com/api/avataaars/:${email}.svg`;

  const db = connection.promise();
  let validationErrors = null;
  db.query("SELECT * FROM events WHERE name = ?", [name])
    .then(([result]) => {
      if (result[0]) return Promise.reject(new Error("DUPLICATE_EMAIL"));
      validationErrors = Joi.object({
        email: Joi.string().email().max(255).required(),
        familyname: Joi.string().max(255).required(),
        ageGroup: Joi.string().max(255).required(),
        city: Joi.string().max(255).required(),
        ecologicalLevel: Joi.string().max(255).required(),
        avatarUrl: Joi.string().max(255),
      }).validate(
        { familyname, email, ageGroup, city, ecologicalLevel },
        { abortEarly: false }
      ).error;
      if (validationErrors) return Promise.reject(new Error("INVALID_DATA"));
      return db.query(
        "INSERT INTO users (familyname, email, ageGroup, city, ecologicalLevel, avatarUrl) VALUES (?, ?, ?, ?, ?,?)",
        [familyname, email, ageGroup, city, ecologicalLevel, userAvatar]
      );
    })
    .then(([{ insertId }]) => {
      res.status(201).json({
        id: insertId,
        familyname,
        email,
        ageGroup,
        city,
        ecologicalLevel,
        avatarUrl: userAvatar,
      });
    })
    .catch((err) => {
      console.error(err);
      if (err === "DUPLICATE_EMAIL")
        res.status(409).json({ message: "This email is already used" });
      else if (err === "INVALID_DATA")
        res.status(422).json({ validationErrors });
      else res.status(500).send("Error saving the user");
    });
});

// Routes for challenges
app.get("/api/challenges", (req, res) => {
  connection.query("SELECT * FROM challenges", (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving challenges from database");
    } else {
      res.json(result);
    }
  });
});

app.get("/api/challenges/:id", (req, res) => {
  const challengeId = req.params.id;
  connection.query(
    "SELECT * FROM challenges WHERE id = ?",
    [challengeId],
    (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving challenge from database");
      } else if (results.length) {
        res.json(results[0]);
      } else {
        res.status(404).send(`Activity with ${challengeId} does not exist`);
      }
    }
  );
});

module.exports = app;
