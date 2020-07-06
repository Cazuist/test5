const ajs = require('@cazuist/ajs');

console.log(ajs.info());
console.log('test 5 ------>>> exports.info = ajs.info');

exports.info = ajs.info;