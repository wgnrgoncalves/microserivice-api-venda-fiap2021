'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    config_layout :{
        menuSuperior : {
            backgroundColor: {
                type: String,
                required: true,
                trim: true
            },
            cor: {
                type: String,
                required: false,
                trim: true
            }
        },
        menuEsquerdo: {
            backgroundColor: {
                type: String,
                required: true,
                trim: true
            }
        }

    }
});

exports.module = mongoose.model('Layout', schema);