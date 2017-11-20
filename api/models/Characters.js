/**
 * Character.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    char_name: {
      required: true,
      type: "string"
    },
    char_films: {
      required: false,
      type: "array"
    },
    char_hair: {
      required: false,
      type: "string"
    },
    char_eye: {
      required: false,
      type: "string"
    }
  }
};
