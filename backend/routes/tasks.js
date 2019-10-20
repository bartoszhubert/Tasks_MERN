const router = require('express').Router();
const Task = require('../models/task.model');

router.route('/').get((req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/create').post((req, res) => {
  const { imie, nazwisko, email, temat, opis, data, kategoria, priorytet, uwagi, start, stop } = req.body;

  const newTask = new Task({
    imie,
    nazwisko,
    email,
    temat,
    opis,
    data,
    kategoria,
    priorytet,
    uwagi,
    start,
    stop
  });

  newTask.save()
  .then(() => res.json('Task added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').put((req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      task.uwagi = req.body.uwagi;

      task.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').delete((req, res) => {
//   Exercise.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Exercise deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;