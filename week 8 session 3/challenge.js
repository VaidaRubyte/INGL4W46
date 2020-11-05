/*
Generate 6 random numbers
Store lottery numbers in an array
Sort lottery numbers in numerical order
Display numbers
You will need to make use of loops, arrays and sort.
*/
var i=0;
var j;
var temp;
var arr = [];
var n=6;
max=0;
var min;
var minimum=0;
//generate numbers
while(arr.length < 6)
{
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);


//sort the numbers

 for (i=0; i<n-1; i++)
{
   min=i;
       for( j=i+1; j<n; j++)
          {
              if (arr[j]<arr[min])
              min=j;
           }
  temp=arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
}



for(i=0; i<n; i++)
{
document.write(arr[i] +"</br>");
}


//find max number
for(i=0; i<n; i++)
{

  if(arr[i]>arr[max])
    max=i
}
document.write("max number is " + arr[max] +"</br>");

//find minimum number
for(i=0; i<n; i++)
{

  if(arr[i]<arr[minimum])
    minimum=i
}
document.write("minimum number is " + arr[minimum] +"</br>");