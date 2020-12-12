'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');
const Event = require('./Event');
module.exports = class Venue extends Schwifty.Model {

    static get tableName() {

        return 'Venue';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.string().guid({
                version: 'uuidv4'
            }),
            name: Joi.string(),
            description: Joi.string(),
            country: Joi.string(),
            province: Joi.string(),
            suburb: Joi.string(),
            email: Joi.string().email(),
            phone: Joi.string(),
            private: Joi.bool()
        });
    }

    static relationMappings = {
        events: {
            relation: Schwifty.Model.HasManyRelation,
            modelClass: Event,
            join: {
                from: 'Venue.id',
                to: 'Event.venue_id'
            }
        }
    }
};
