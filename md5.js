var argv = require('optimist').argv;
var crypto = require('crypto');
var content = 'password'
var md5 = crypto.createHash('md5');

console.log('running');

console.log(argv.str);

if (argv.str) {
  md5.update(argv.str);
  var d = md5.digest('hex');
  console.log(d);
}


