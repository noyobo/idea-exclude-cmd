const findUp = require('find-up');
const colors = require('colors-cli');

const cc = {
  'error': colors.red.bold,
  'warn': colors.yellow,
  'info': colors.blue,
};

const utils = {
  log: {}
};

utils.findDotIdea = function findDotIdea(cwd) {
  var ideaDir = findUp.sync('.idea', {
    cwd: cwd
  });

  return ideaDir;
};

['info', 'warn', 'error'].forEach(function(type) {
  utils.log[type] = function() {
    const args = Array.prototype.slice.call(arguments, 0);
    args.unshift(cc[type](type.toUpperCase()));
    console.log.apply(null, args);
  };
});



module.exports = utils;
