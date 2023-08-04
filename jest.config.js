// remove the noise from express server logs
process.env.LOG_LEVEL = 'fatal';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
