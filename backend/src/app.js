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

app.put("/api/users/:id", (req, res) => {
  const { familyname, email, ageGroup, city, ecologicalLevel } = req.body;
  const userId = req.params.id;
  const db = connection.promise();
  let existingUser = null;
  db.query("SELECT * FROM users WHERE id = ?", [userId]).then(([results]) => {
    existingUser = results[0];
    if (!existingUser) return Promise.reject(new Error("USER_NOT_FOUND"));
    existingUser = Joi.object({
      email: Joi.string().email().max(255),
      familyname: Joi.string().max(255),
      ageGroup: Joi.string().max(255),
      city: Joi.string().max(255),
      ecologicalLevel: Joi.string().max(255),
      avatarUrl: Joi.string().max(255),
    }).validate(
      { familyname, email, ageGroup, city, ecologicalLevel },
      { abortEarly: false }
    ).error;
    if (existingUser) return Promise.reject(new Error("USER_NOT_FOUND"));
    return db
      .query("UPDATE users SET ? WHERE id = ?", [req.body, userId])
      .then(() => {
        res.status(200).json({ ...existingUser, ...req.body });
      })
      .catch((err) => {
        console.error(err);
        if (err === "USER_NOT_FOUND")
          res.status(404).send(`User with id ${userId} not found.`);
        else res.status(500).send("Error updating a user");
      });
  });
});

app.delete("/api/users/:id", (req, res) => {
  connection.query(
    "DELETE FROM users WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        res.status(500).send("Error deleting an user");
      }
      if (result.affectedRows) {
        res.status(200).send("🎉 User deleted!");
      } else {
        res.status(404).send("User not found.");
      }
    }
  );
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
    "SELECT * FROM activities WHERE id = ?",
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

app.post("/api/activities", (req, res) => {
  const {
    name,
    duration,
    category,
    ageGroup,
    ecologicalLevel,
    description,
    requirements,
    pictureActivity,
  } = req.body;

  const db = connection.promise();
  const validationErrors = Joi.object({
    name: Joi.string().max(255).required(),
    duration: Joi.string().max(255).required(),
    category: Joi.string().max(255).required(),
    ageGroup: Joi.string().max(255).required(),
    ecologicalLevel: Joi.string().max(255).required(),
    description: Joi.string().max(5000).required(),
    requirements: Joi.string().max(5000),
    pictureActivity: Joi.string().max(5000),
  }).validate(
    {
      name,
      duration,
      category,
      ageGroup,
      ecologicalLevel,
      description,
      requirements,
      pictureActivity,
    },
    { abortEarly: false }
  ).error;
  if (validationErrors) return res.status(422).json({ validationErrors });
  return db
    .query(
      "INSERT INTO activities (name, duration, category, ageGroup, ecologicalLevel, description, requirements, pictureActivity) VALUES (?, ?, ?, ?, ?,?,?,?)",
      [
        name,
        duration,
        category,
        ageGroup,
        ecologicalLevel,
        description,
        requirements,
        pictureActivity,
      ]
    )
    .then(([{ insertId }]) => {
      res.status(201).json({
        id: insertId,
        name,
        duration,
        category,
        ageGroup,
        ecologicalLevel,
        description,
        requirements,
        pictureActivity,
      });
    })
    .catch(() => {
      res.status(500).send("Error saving the user");
    });
});

app.put("/api/activities/:id", (req, res) => {
  const {
    name,
    duration,
    category,
    ageGroup,
    ecologicalLevel,
    description,
    requirements,
    pictureActivity,
  } = req.body;
  const activityId = req.params.id;
  const db = connection.promise();
  let existingActivity = null;
  db.query("SELECT * FROM activities WHERE id = ?", [activityId]).then(
    ([results]) => {
      existingActivity = results[0];
      if (!existingActivity)
        return Promise.reject(new Error("ACTIVITY_NOT_FOUND"));
      existingActivity = Joi.object({
        name: Joi.string().max(255),
        duration: Joi.string().max(255),
        category: Joi.string().max(255),
        ageGroup: Joi.string().max(255),
        ecologicalLevel: Joi.string().max(255),
        description: Joi.string().max(5000),
        requirements: Joi.string().max(5000),
        pictureActivity: Joi.string().max(5000),
      }).validate(
        {
          name,
          duration,
          category,
          ageGroup,
          ecologicalLevel,
          description,
          requirements,
          pictureActivity,
        },
        { abortEarly: false }
      ).error;
      if (existingActivity)
        return Promise.reject(new Error("RECORD_NOT_FOUND"));
      return db
        .query("UPDATE activities SET ? WHERE id = ?", [req.body, activityId])
        .then(() => {
          res.status(200).json({ ...existingActivity, ...req.body });
        })
        .catch((err) => {
          console.error(err);
          if (err === "RECORD_NOT_FOUND")
            res.status(404).send(`Activity with id ${activityId} not found.`);
          else res.status(500).send("Error updating activities");
        });
    }
  );
});

app.delete("/api/activities/:id", (req, res) => {
  connection.query(
    "DELETE FROM activities WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        res.status(500).send("Error deleting an activity");
      }
      if (result.affectedRows) {
        res.status(200).send("🎉 Activity deleted!");
      } else {
        res.status(404).send("Activity not found.");
      }
    }
  );
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
    pictureActivity,
  } = req.body;

  const db = connection.promise();
  const validationErrors = Joi.object({
    name: Joi.string().max(255).required(),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    category: Joi.string().max(255).required(),
    eventLocation: Joi.string().max(255).required(),
    ageGroup: Joi.string().max(255).required(),
    ecologicalLevel: Joi.string().max(255).required(),
    description: Joi.string().max(255).required(),
    pictureActivity: Joi.string().max(255),
  }).validate(
    {
      name,
      startDate,
      endDate,
      category,
      eventLocation,
      ageGroup,
      ecologicalLevel,
      description,
      pictureActivity,
    },
    { abortEarly: false }
  ).error;
  if (validationErrors) return res.status(422).json({ validationErrors });
  return db
    .query(
      "INSERT INTO events (name, startDate, endDate, category, eventLocation, ageGroup, ecologicalLevel, description, pictureActivity) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        startDate,
        endDate,
        category,
        eventLocation,
        ageGroup,
        ecologicalLevel,
        description,
        pictureActivity,
      ]
    )
    .then(([{ insertId }]) => {
      res.status(201).json({
        id: insertId,
        name,
        startDate,
        endDate,
        category,
        eventLocation,
        ageGroup,
        ecologicalLevel,
        description,
        pictureActivity,
      });
    })
    .catch(() => {
      res.status(500).send("Error saving the event");
    });
});

app.put("/api/events/:id", (req, res) => {
  const {
    name,
    startDate,
    endDate,
    category,
    eventLocation,
    ageGroup,
    ecologicalLevel,
    description,
    pictureActivity,
  } = req.body;
  const eventId = req.params.id;
  const db = connection.promise();
  let existingEvent = null;
  db.query("SELECT * FROM events WHERE id = ?", [eventId]).then(([results]) => {
    existingEvent = results[0];
    if (!existingEvent) return Promise.reject(new Error("EVENT_NOT_FOUND"));
    existingEvent = Joi.object({
      name: Joi.string().max(255),
      startDate: Joi.date(),
      endDate: Joi.date(),
      category: Joi.string().max(255),
      eventLocation: Joi.string().max(255),
      ageGroup: Joi.string().max(255),
      ecologicalLevel: Joi.string().max(255),
      description: Joi.string().max(255),
      pictureActivity: Joi.string().max(255),
    }).validate(
      {
        name,
        startDate,
        endDate,
        category,
        eventLocation,
        ageGroup,
        ecologicalLevel,
        description,
        pictureActivity,
      },
      { abortEarly: false }
    ).error;
    if (existingEvent) return Promise.reject(new Error("EVENT_NOT_FOUND"));
    return db
      .query("UPDATE events SET ? WHERE id = ?", [req.body, eventId])
      .then(() => {
        res.status(200).json({ ...existingEvent, ...req.body });
      })
      .catch((err) => {
        console.error(err);
        if (err === "EVENT_NOT_FOUND")
          res.status(404).send(`User with id ${eventId} not found.`);
        else res.status(500).send("Error updating a event");
      });
  });
});

app.delete("/api/events/:id", (req, res) => {
  connection.query(
    "DELETE FROM events WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        res.status(500).send("Error deleting an event");
      }
      if (result.affectedRows) {
        res.status(200).send("🎉 Event deleted!");
      } else {
        res.status(404).send("Event not found.");
      }
    }
  );
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

app.post("/api/challenges", (req, res) => {
  const { name, description, pointsScored } = req.body;

  const db = connection.promise();
  const validationErrors = Joi.object({
    name: Joi.string().max(255).required(),
    description: Joi.string().max(5000).required(),
    pointsScored: Joi.number().min(0),
  }).validate(
    {
      name,
      description,
      pointsScored,
    },
    { abortEarly: false }
  ).error;
  if (validationErrors) return res.status(422).json({ validationErrors });
  return db
    .query(
      "INSERT INTO challenges (name, description, pointsScored) VALUES (?, ?, ?)",
      [name, description, pointsScored]
    )
    .then(([{ insertId }]) => {
      res.status(201).json({
        id: insertId,
        name,
        description,
        pointsScored,
      });
    })
    .catch(() => {
      res.status(500).send("Error saving the event");
    });
});

app.put("/api/challenges/:id", (req, res) => {
  const { name, description, pointsScored } = req.body;
  const challengeId = req.params.id;
  const db = connection.promise();
  let existingChallenge = null;
  db.query("SELECT * FROM challenges WHERE id = ?", [challengeId]).then(
    ([results]) => {
      existingChallenge = results[0];
      if (!existingChallenge)
        return Promise.reject(new Error("CHALLENGE_NOT_FOUND"));
      existingChallenge = Joi.object({
        name: Joi.string().max(255),
        description: Joi.string().max(5000),
        pointsScored: Joi.number().min(0),
      }).validate(
        {
          name,
          description,
          pointsScored,
        },
        { abortEarly: false }
      ).error;
      if (existingChallenge)
        return Promise.reject(new Error("CHALLENGE_NOT_FOUND"));
      return db
        .query("UPDATE challenges SET ? WHERE id = ?", [req.body, challengeId])
        .then(() => {
          res.status(200).json({ ...existingChallenge, ...req.body });
        })
        .catch((err) => {
          console.error(err);
          if (err === "CHALLENGE_NOT_FOUND")
            res.status(404).send(`Challenge with id ${challengeId} not found.`);
          else res.status(500).send("Error updating a challenge");
        });
    }
  );
});

app.delete("/api/challenges/:id", (req, res) => {
  connection.query(
    "DELETE FROM challenges WHERE id = ?",
    [req.params.id],
    (err, result) => {
      if (err) {
        res.status(500).send("Error deleting this challenge");
      }
      if (result.affectedRows) {
        res.status(200).send("🎉 Challenge deleted!");
      } else {
        res.status(404).send("Challenge not found.");
      }
    }
  );
});

app.get("/api/reservationactivities", (req, res) => {
  connection.query("SELECT * FROM reservation_activities", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving reservation from database");
    } else if (results.length) {
      res.json(results);
    } else {
      res.status(404).send(`Reservation activity does not exist`);
    }
  });
});

app.post("/api/users/:userId/activities/:activityId", (req, res) => {
  const { userId, activityId } = req.params;
  const db = connection.promise();
  let existingUser = null;
  let existingActivity = null;
  db.query(
    "SELECT * FROM reservation_activities WHERE userId = ? AND activityId = ?",
    [userId, activityId]
  )
    .then(([result]) => {
      if (result.length > 0)
        return Promise.reject(new Error("DUPLICATE_ENTRY"));
      return db
        .query("SELECT * FROM users WHERE id = ?", [userId])
        .then(([results]) => {
          existingUser = results[0];
          if (!existingUser) return Promise.reject(new Error("USER_NOT_FOUND"));
          return db
            .query("SELECT * FROM activities WHERE id = ?", [activityId])
            .then(([newresult]) => {
              existingActivity = newresult[0];
              if (!existingActivity)
                return Promise.reject(new Error("ACTIVITY_NOT_FOUND"));
              return db
                .query(
                  "INSERT INTO reservation_activities (userId, activityId) VALUES (?, ?)",
                  [userId, activityId]
                )
                .then(([{ insertId }]) => {
                  res.status(201).json({
                    id: insertId,
                    userId,
                    activityId,
                  });
                })
                .catch(() => {
                  res.status(500).send("Error saving the reservation");
                });
            })
            .catch((err) => {
              console.error(err);
              res
                .status(404)
                .json({ message: `Activity with id ${activityId} not found.` });
            });
        })
        .catch((err) => {
          console.error(err);
          res
            .status(404)
            .json({ message: `User with id ${userId} not found.` });
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(409).json({ message: "This entry is already used" });
    });
});

app.get("/api/participationevents", (req, res) => {
  connection.query("SELECT * FROM participation_events", (err, result) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .send("Error retrieving participation events from database");
    } else {
      res.json(result);
    }
  });
});

app.post("/api/users/:userId/events/:eventId", (req, res) => {
  const { userId, eventId } = req.params;
  const db = connection.promise();
  let existingEvents = null;
  let existingUser = null;
  db.query("SELECT * FROM users WHERE id = ?", [userId]).then(([results]) => {
    existingUser = results[0];
    if (!existingUser) return Promise.reject(new Error("USER_NOT_FOUND"));
    db.query("SELECT * FROM events WHERE id = ?", [eventId]).then(
      ([result]) => {
        existingEvents = result[0];
        if (!existingEvents)
          return Promise.reject(new Error("EVENT_NOT_FOUND"));
        return db
          .query(
            "INSERT INTO participation_events (userId, eventId) VALUES (?, ?)",
            [userId, eventId]
          )
          .then(([{ insertId }]) => {
            res.status(201).json({
              id: insertId,
              userId,
              eventId,
            });
          })
          .catch(() => {
            res.status(500).send("Error saving the participation to the event");
          });
      }
    );
  });
});

app.get("/api/participationchallenges", (req, res) => {
  connection.query("SELECT * FROM participation_challenges", (err, result) => {
    if (err) {
      console.error(err);
      res
        .status(500)
        .send("Error retrieving participation challenges from database");
    } else {
      res.json(result);
    }
  });
});

app.post("/api/users/:userId/challenges/:challengeId", (req, res) => {
  const { userId, challengeId } = req.params;
  const db = connection.promise();
  let existingChallenges = null;
  let existingUser = null;
  db.query("SELECT * FROM users WHERE id = ?", [userId]).then(([results]) => {
    existingUser = results[0];
    if (!existingUser) return Promise.reject(new Error("USER_NOT_FOUND"));
    db.query("SELECT * FROM challenges WHERE id = ?", [challengeId]).then(
      ([result]) => {
        existingChallenges = result[0];
        if (!existingChallenges)
          return Promise.reject(new Error("CHALLENGE_NOT_FOUND"));
        return db
          .query(
            "INSERT INTO participation_challenges (userId, challengeId) VALUES (?, ?)",
            [userId, challengeId]
          )
          .then(([{ insertId }]) => {
            res.status(201).json({
              id: insertId,
              userId,
              challengeId,
            });
          })
          .catch(() => {
            res
              .status(500)
              .send("Error saving the participation to the challenge");
          });
      }
    );
  });
});

module.exports = app;
