'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    rm: {
        type: String,
        required: true,
        trim: true
    },
    nome: {
        type: String,
        required: true
    },
    turma: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
        required: true
    },
    dtnasc: {
        type: Date,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});

exports.module = mongoose.model('aluno', schema);