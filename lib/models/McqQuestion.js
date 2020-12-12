'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');

module.exports = class McqQuestion extends Schwifty.Model {

    static get tableName() {

        return 'McqQuestion';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.string().guid({
                version: 'uuidv4'
            }),
            question: Joi.string(),
            a: Joi.string(),
            b: Joi.string(),
            c: Joi.string(),
            d: Joi.string(),
            difficulty: Joi.string(),
            answer: Joi.string(),
            theme: Joi.string(),
        });
    }
};
