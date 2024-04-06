const bcrypt = require("bcrypt");


const hashedPassword = (password) => {
  let passwordHash = bcrypt.hash(password, 7);
  return passwordHash;
};

const comparePassword = (password, passwordHash) => {
  return bcrypt.compare(password, passwordHash);
};

module.exports = { hashedPassword, comparePassword };
