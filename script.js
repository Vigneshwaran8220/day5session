//MAP:
// var arr=[12,18,24,46,32]
// var res=arr.map((ele)=>ele*2)
// console.log(res);
//task:
// var arr1 =["orange","apple","mangoe"]
// var res1 =arr1.map((ele)=>ele+"s")
// console.log(res1);
//XMLHttpRequest using for the map (print the name)
// var request=new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.send();
// request.onload=function()
// {
//     var data=request.response
//     var result =JSON.parse(data);
    // var res2=result.map((element)=>{console.log(element.name.common)})
    //console.log(res2);
// }
//filter function:-
// var arr=[12,13,14,15]
// var res=arr.filter((ele)=>ele%2==0)
// console.log(res);

//XMLHttpRequest using for the map (print the name)
// var request=new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true);
// request.send();
// request.onload=function(){
//     var data=request.response
//     var result =JSON.parse(data);
//     var res=result.filter((ele)=>ele.population<300000)
// //to display the filtered result countries
// var res1= res.map((ele)=>ele.name.common)
// console.log(res1)
// }
//using map to get two values:
// var request=new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true);
// request.send();
// request.onload=function(){
//     var data=request.response
//     var result =JSON.parse(data);
//     var res=result.map((ele)=>`${ele.name.common}:${ele.region}:${ele.population}`)
//     console.log(res);
// }
// var request=new XMLHttpRequest();
//          request.open("GET","https://restcountries.com/v3.1/all",true);
//          request.send();
//          request.onload=function(){
//          var data=request.response
//          var result =JSON.parse(data);
//         var res=result.reduce((acc,cv)=>acc+cv.population,0)
//         console.log(res);
//         }
//forEach using xmlHttprequest:
// var request=new XMLHttpRequest();
//          request.open("GET","https://restcountries.com/v3.1/all",true);
//          request.send();
//          request.onload=function(){
//          var data=request.response
//          var result =JSON.parse(data);
//         var res=result.forEach((ele)=>{console.log(`${ele.name.common}${ele.capital}${ele.region}`)})
//         }
var arr =["john","apple"]
        var[firstname,lastname]=arr
        console.log(firstname)
        console.log(lastname)
        

        