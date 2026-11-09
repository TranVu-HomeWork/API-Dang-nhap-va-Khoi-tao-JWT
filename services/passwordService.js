const bcrypt = require('bcryptjs');

const saltRounds = Number.parseInt(
  process.env.BCRYPT_SALT_ROUNDS || '10',
  10
);

const hashPassword = async (password) => {
  return bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};

module.exports = {
  hashPassword,
  comparePassword
};