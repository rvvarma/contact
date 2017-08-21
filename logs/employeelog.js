var bunyan = require('bunyan');
var log = bunyan.createLogger({
  name:'newlogs',
  streams:[{
     path: './logfiles/employee/foo.log',
     period: '1d'
  }],
  serializers:bunyan.stdSerializers
});
exports.logs = function(){
  return log ;
};
