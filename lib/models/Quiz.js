'use strict';

const Schwifty = require('schwifty');
const Joi = require('joi');
const OpenQuestion = require('./OpenQuestion');
const McqQuestion = require('./McqQuestion');

module.exports = class Quiz extends Schwifty.Model {

    static get tableName() {

        return 'Quiz';
    }

    static get joiSchema() {

        return Joi.object({
            id: Joi.string().guid({
                version: 'uuidv4'
            }),
            name: Joi.string(),
            theme: Joi.string()
        });
    }

    static relationMappings = {
        openQuestions: {
            relation: Schwifty.Model.ManyToManyRelation,
            modelClass: OpenQuestion,
            join: {
                from: 'Quiz.id',
                through: {
                    from: 'OpenQuizQuestions.quiz_id',
                    to: 'OpenQuizQuestions.open_question_id'
                },
                to: 'OpenQuestion.id'
            }
        },
        mcqQuestions: {
            relation: Schwifty.Model.ManyToManyRelation,
            modelClass: McqQuestion,
            join: {
                from: 'Quiz.id',
                through: {
                    from: 'McqQuizQuestions.quiz_id',
                    to: 'McqQuizQuestions.open_question_id'
                },
                to: 'McqQuestion.id'
            }
        }
    }
};
