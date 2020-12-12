"use strict";
const Joi = require("joi");
module.exports = (server) => {
  const { Quiz } = server.models();
  const responseSchema = Quiz.responseSchema.label('Quiz');
  return [
    
      {
  method: "GET",
  path: "/quiz",
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
  path: "/quiz",
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
  path: "/quiz",
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
  path: "/quiz",
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
  path: "/quiz",
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