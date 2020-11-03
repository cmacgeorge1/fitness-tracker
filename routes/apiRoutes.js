const router = require("express").Router();
const db = require("../models/fitnessModel");

// db.User.create({ name: "Ernest Hemingway" })
//   .then(dbUser => {
//     console.log(dbUser);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });

// app.get("/notes", (req, res) => {
//   db.Note.find({})
//     .then(dbNote => {
//       res.json(dbNote);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

router.put("/api/saveWorkout/:id", (req, res) => {
  db.findByIdAndUpdate(req.params.id, {$push:{exercises:req.body}}, {new:true})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/saveWorkout", ({ body }, res) => {
    console.log(body)
  db.create(body)
    
    .then(dbUser => {
        console.log(dbUser)
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/exerciseData", (req, res) => {
  db.find({})
    .then(dbUser => {
        console.log(dbUser)
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router