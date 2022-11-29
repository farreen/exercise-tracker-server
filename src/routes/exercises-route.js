const router = require("express").Router();

let Exercise = require("../models/exercise-model");

router.route("/").get((_, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json("Error: " + err))
})

router.route("/add").post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    console.log("req  body", req.body);
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json("exercise added...!"))
        .catch((err) => res.status(400).json("Error: " + err))
});

router.route("/:id").get((req, res) => {
    console.log("id =", req.params.id)
    Exercise.findById(req.params.id)
        .then((exercise) => res.json(exercise))
        .catch((err) => res.status(400).json("Error: ", err))
})

router.route("/update/:id").post((req, res) => {
    Exercise.findById(req.params.id)
        .then((exercise) => {
            exercise.username = req.params.username;
            exercise.description = req.params.description;
            exercise.duration = Number(req.params.duration);
            exercise.date = Date.parse(req.params.date);

            exercise.save()
                .then(() => res.json("exercise updated!"))
                .catch((err) => res.status(400).json("Error: " + err))

        })
        .catch((err) => res.status(400).json("Error:"+ err))
})

console.log("inside-route");
module.exports = router

