var rp = require('request')

exports.main = async (event, context) => {
  
  return new Promise(
    (resj, rej)=>{
      let res;
      rp('https://api.douban.com/v2/book/isbn/' + event.isbn,function(err,res,body){
        if(res.statusCode === 200){
          res = body
        }
        console.log(body)
      });
      resj(res);
    })
}
