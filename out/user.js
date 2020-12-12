"use strict";
const Joi = require("joi");
module.exports = (server) => {
  const { User } = server.models();
  const responseSchema = User.responseSchema.label('User');
  return [
    
      {
  method: "GET",
  path: "/user",
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
  path: "/user",
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
  path: "/user",
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
  path: "/user",
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
  path: "/user",
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