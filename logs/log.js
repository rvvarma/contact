var bunyan = require('bunyan');
var log = bunyan.createLogger({
  name:'newlogs',
  streams:[{
    path:'newlogs.log',
  }],
  serializers:bunyan.stdSerializers
});
exports.logs = function(){
  return log ;
};
