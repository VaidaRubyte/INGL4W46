/*
Generate 6 random numbers
Store lottery numbers in an array
Sort lottery numbers in numerical order
Display numbers
You will need to make use of loops, arrays and sort.
*/

var Numbers=[ 8, 7, 1, 3, 9, 2, 4 , 5, 10, 6];
var max=0;
var min=0;
var temp; 
var i=0; 
var j;
var n=10;
 document.write( "Numbers " +"</br>");
 for (i=0; i<n; i++)
{
  document.write( Numbers[i] +"</br>");
}

document.write( "sorted Numbers from biggest to smallest  " +"</br>");

//sort numbers from max to min
 for (i=0; i<n-1; i++)
{
   max=i;
       for( j=i+1; j<n; j++)
          {
              if (Numbers[j]>Numbers[max])
              max=j;
           }
  temp=Numbers[i];
    Numbers[i]=Numbers[max];
    Numbers[max]=temp;
}
 for (i=0; i<n; i++)
{
  document.write( Numbers[i] +"</br>");
}


document.write( "sorted Numbers from smallest to biggest  " +"</br>");

//sort numbers from min to max
 for (i=0; i<n-1; i++)
{
   min=i;
       for( j=i+1; j<n; j++)
          {
              if (Numbers[j]<Numbers[min])
              min=j;
           }
  temp=Numbers[i];
    Numbers[i]=Numbers[min];
    Numbers[min]=temp;
}
 for (i=0; i<n; i++)
{
  document.write( Numbers[i] +"</br>");
}