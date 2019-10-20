const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    imie: { type: String, required: true, minlength: 3 },
    nazwisko: { type: String, required: true, minlength: 5 },
    email: { type: String, unique: true, index: true, required: true, minlength: 6 },
    temat: { type: String, required: true, minlength: 3 },
    opis: { type: String, required: true, minlength: 20 },
    data: { type: String, required: true },
    kategoria: { type: String, required: true, minlength: 3 },
    priorytet: { type: String, required: true, minlength: 3 },
    uwagi: { type: String },
    start: { type: String },
    stop: { type: String }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;