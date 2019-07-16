var express = require('express');
var router = express.Router();
var tinh=require('./modul');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Máy tính' ,kq:'',hieu:''});
});
router.get('/mt',function (req,res){
  var a=Number((req.query.soa))
  var b=Number((req.query.sob))
 var tong=Number(tinh.Cong(a,b)) 
 var hieu=Number(tinh.Tru(a,b)) 
 console.log(tong)
// console.log(hieu)
res.render('index',{title:'máy tính',kq:tong,hieu:hieu})
//res.end(String(tong))
})
router.get('/tinh',function (req,res){
  var a=Number((req.query.soa))
  var b=Number((req.query.sob))
 var tong=Number(tinh.Cong(a,b)) 
 var hieu=Number(tinh.Tru(a,b)) 
 console.log(tong)
//res.render('index',{title:'máy tính',kq:tong,hieu:hieu})
//res.send(String('tong :'+tong+''+'hieu: '+hieu))
//res.end(String(tong))
res.end(String(tong))

})
module.exports = router;
