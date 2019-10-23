const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    imie: { type: String, required: true, minlength: 3 },
    nazwisko: { type: String, required: true, minlength: 3 },
    email: { type: String, unique: true, index: true, required: true, minlength: 6 },
    temat: { type: String, required: true, minlength: 3 },
    opis: { type: String, required: true, minlength: 10 },
    data: { type: String, required: true, minlength: 10 },
    kategoria: { type: String, required: true, minlength: 3 },
    priorytet: { type: String, required: true, minlength: 3 },
    uwagi: { type: String, required: true, minlength: 10},
    start: { type: String },
    stop: { type: String }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;