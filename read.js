
console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});


exports.handler = function(e, ctx, callback){

      var scanningParameters ={
        TableName: 'guestbook',
        Limit: 200
      };

      docClient.scan(scanningParameters, function(err,data){
        if(err){
          callback(err,null);

        }else{
          callback(null, data);
        }

      });

    }
