module.exports = {
  default: {
    requireModule: ['ts-node/register'], // 👈 this is the critical part
    require: ['features/**/*.ts'],
    format: ['progress'],
    publishQuiet: true
  }
};
