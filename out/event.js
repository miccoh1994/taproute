"use strict";
const Joi = require("joi");
module.exports = (server) => {
  const { Event } = server.models();
  const responseSchema = Event.responseSchema.label('Event');
  return [
    
      {
  method: "GET",
  path: "/event",
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
  path: "/event",
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
  path: "/event",
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
  path: "/event",
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
  path: "/event",
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