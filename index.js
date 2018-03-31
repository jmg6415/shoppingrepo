
console.log('starting function');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-east-1'});


exports.handler = function(e, ctx, callback){

    var params = {

      Item: {

          date: Date.now(),
          message: "I love you"
          },
          TableName: 'guestbook'
      };
    docClient.put(params, function(err, data)
    {
      if(err){
      callback(err,null);
      }
      else{
      callback(null, data);
      }
    });
    }
