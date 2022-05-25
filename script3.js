var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all',true);
req.send();
req.onload=function(){
var result=JSON.parse(req.response);
  result.forEach(myfunction);
  function myfunction(item)
  {
   console.log(`${item.name}:${item.capital}:${item.flags}`) 
    }
   // result.forEach(myfunction);
}