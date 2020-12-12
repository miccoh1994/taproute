"use strict";
const Joi = require("joi");
module.exports = (server) => {
  const { Venue } = server.models();
  const responseSchema = Venue.responseSchema.label('Venue');
  return [
    
      {
  method: "GET",
  path: "/venue",
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
  path: "/venue",
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
  path: "/venue",
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
  path: "/venue",
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
  path: "/venue",
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