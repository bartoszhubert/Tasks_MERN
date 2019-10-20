const router = require('express').Router();
const Task = require('../models/task.model');
const getActualFormattedDate = () => {
  const day = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const formMonth = month < 10 ? '0' + month : month;
  const year = new Date().getFullYear();
  return `${day}.${formMonth}.${year}`;
}

router.route('/').get((req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').post((req, res) => {
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
        .then(() => res.json('Task updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id/:action').put((req, res) => {
  Task.findById(req.params.id)
    .then(task => {
      const action = req.params.action;
      task[action] = getActualFormattedDate();

      task.save()
        .then(() => res.json('Task updated!'))
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