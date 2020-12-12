"use strict";
const Joi = require("joi");
module.exports = (server) => {
  const { McqQuestion } = server.models();
  const responseSchema = McqQuestion.responseSchema.label('McqQuestion');
  return [
    
      {
  method: "GET",
  path: "/mcqquestion",
  options: {
    tags: ["api"],
    handler: { tandy: {} },
    response: {
      schema: Joi.array().items(responseSchema),
      options: {
        stripUnknown: {objects: true},
      },
      modify: true
    }
  },
},    
      {
  method: "POST",
  path: "/mcqquestion",
  options: {
    tags: ["api"],
    handler: { tandy: {} },
    response: {
      schema: Joi.array().items(responseSchema),
      options: {
        stripUnknown: {objects: true},
      },
      modify: true
    }
  },
},    
      {
  method: "PUT",
  path: "/mcqquestion",
  options: {
    tags: ["api"],
    handler: { tandy: {} },
    response: {
      schema: Joi.array().items(responseSchema),
      options: {
        stripUnknown: {objects: true},
      },
      modify: true
    }
  },
},    
      {
  method: "PATCH",
  path: "/mcqquestion",
  options: {
    tags: ["api"],
    handler: { tandy: {} },
    response: {
      schema: Joi.array().items(responseSchema),
      options: {
        stripUnknown: {objects: true},
      },
      modify: true
    }
  },
},    
      {
  method: "DELETE",
  path: "/mcqquestion",
  options: {
    tags: ["api"],
    handler: { tandy: {} },
    response: {
      schema: Joi.array().items(responseSchema),
      options: {
        stripUnknown: {objects: true},
      },
      modify: true
    }
  },
},      ]
};