const { getAllUsers, getUserById } = require('../services');

const getAll = (ctx) => {
  ctx.body = getAllUsers();
};

const getById = (ctx) => {
  const { id } = ctx.params;
  const idInt = +id || 0;
  ctx.body = getUserById(idInt);
};

module.exports = {
  getAll,
  getById,
};
