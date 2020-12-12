'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');
const Quiz = require('./Quiz');
module.exports = class Event extends Schwifty.Model {

    static get tableName() {

        return 'Event';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.string().guid({
                version: 'uuidv4'
            }),
            name: Joi.string(),
            recurring: Joi.bool(),
            date: Joi.date(),
            event_code: Joi.number().integer(),
            promos_id: Joi.string()
        });
    }

    static relationMappings = {
        quiz: {
            relation: Schwifty.Model.BelongsToOneRelation,
            modelClass: Quiz,
            join: {
                from: 'Event.quiz_id',
                to: 'Quiz.id'
            }
        }
    }
};
