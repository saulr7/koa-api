const { users } = require('../data/dummy-data');

const getAllUsers = () => users;
const getUserById = (id = 0) => users.find((u) => u.id === id) || {};

module.exports = {
  getAllUsers,
  getUserById,
};
