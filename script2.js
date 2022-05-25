var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all',true);
req.send();
req.onload=function(){
    var result=JSON.parse(req.response);
    //console.log(result);
    var res=result.filter((country)=>country.population>200000).map((country)=>`${country.name}:${country.population}`);
     console.log(res);
}