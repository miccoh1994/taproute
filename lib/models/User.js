'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');
const Venue = require('./Venue');
module.exports = class User extends Schwifty.Model {

    static get tableName() {

        return 'User';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.string().guid({
                version: 'uuidv4'
            }),
            username: Joi.string(),
            first_name: Joi.string(),
            last_name: Joi.string(),
            country: Joi.string(),
            email: Joi.string().email(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            email_confirmation_code: Joi.string().guid({
                version: 'uuidv4'
            }),
            email_confirmed: Joi.boolean(),
            password_reset_code: Joi.string().guid({
                version: 'uuidv4'
            }),
            phone: Joi.string(),
            role: Joi.string()
        });
    }

    static get responseSchema() {
        return Joi.object({
            id: Joi.string().guid({
                version: 'uuidv4'
            }),
            username: Joi.string(),
            first_name: Joi.string(),
            last_name: Joi.string(),
            country: Joi.string(),
            email: Joi.string().email(),
            email_confirmed: Joi.boolean(),
            role: Joi.string()
        });
    }

    static relationMappings = {
        venues: {
            relation: Schwifty.Model.ManyToManyRelation,
            modelClass: Venue,
            join: {
                from: 'User.id',
                through: {
                    from: 'UserVenues.user_id',
                    to: 'UserVenues.venue_id'
                },
                to: 'Venue.id'
            }
        }
    }
};
