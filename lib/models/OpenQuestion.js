'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');

module.exports = class OpenQuestion extends Schwifty.Model {

    static get tableName() {

        return 'OpenQuestion';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.string().guid({
                version: 'uuidv4'
            }),
            question: Joi.string(),
            answer: Joi.string(),
            difficulty: Joi.string(),
            theme: Joi.bool()
        });
    }
};
