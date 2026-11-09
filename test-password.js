require('dotenv').config();

const {
  hashPassword,
  comparePassword
} = require('./services/passwordService');

async function testPasswordService() {
  const password = '123456';

  const hashedPassword = await hashPassword(password);

  console.log('Password đã hash:', hashedPassword);
  console.log('Đúng password:', await comparePassword('123456', hashedPassword));
  console.log('Sai password:', await comparePassword('sai-password', hashedPassword));
}

testPasswordService();