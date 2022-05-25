var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v2/all',true);
req.send();
req.onload=function(){
var result=JSON.parse(req.response);
var data=0;
for(var i in result)
{
    data=data+result[i].population;

  //  mypopulation(data);  
}
console.log(data);
}

function mypopulation(data)
{
    var arr=[];
    arr=data;
   // console.log(arr);
    for(var i=0;i<arr.length;i++)
    {
        console.log(arr[i]);
    }
   // console.log(arr.reduce(sum));
    //console.log(res);
    var sum=function(total,arr)
    {
        return total+arr;
    }
}