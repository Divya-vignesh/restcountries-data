var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all',true);
req.send();
req.onload=function(){
    var result=JSON.parse(req.response);
console.log(result);
for(var i in result)
{
   //console.log(result[i].name+" "+result[i].region+" "+result[i].subregion+" "+result[i].population);  
   //console.log(result[i].flags);
   try{
       var name=result[i].name;
       var latlon=result[i].latlng;
       if(latlon.length=== 0)throw new Error("Invalid coordinates for the country")
       
       weatherdata(name,...latlon);
   }catch(e){
       console.log("Invalid country"+name+e.message);
   }
   //console.log(`${name}:${latlon}`);
}
}
function weatherdata(name,lat,lang)
{
var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=b6ccb5ec692c5ad80b29c5c862060b8d&units=imperial`;
    var request=new XMLHttpRequest();
    request.open('GET',url,true);
    request.send();
    request.onload=function(){
        var data=JSON.parse(request.response);
        console.log(`${name}:${data.main.temp}`);
    }
}