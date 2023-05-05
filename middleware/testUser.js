const { BadRequest, BadRequestError } = require('../errors');

const testUser = (req, res, next) => {
  throw new BadRequestError('Test User. Read Only');
  next();
};

module.exports = testUser;
