var my_module = require('./my_module');
my_module.greet();

my_module.add(5,6);

const querystring = require('querystring');
var testStr = 'foo=bar&abc=xyz&abc=123';
var result = querystring.parse(testStr,'&','=');
console.log(result);
