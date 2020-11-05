/*
•Set up an array containing a list of first names of all the members in the class but not in alphabetic order
•Enquire the member number in a box on the form  i.e. their position on the list remembering that an array also runs from element 0 (just like the loop counter) and return the corresponding name on the list (This is artificial and very unlikely…)
•Amend your program to check for the number of names on the list and alert the user if s/he requests a number greater than the number on the list
•Check also for a negative value being specified (there’s always one wag in the group)
*/

var FirstName=["Emanuel ", "Michael " , "Haiden " , "Jerry " , "Andrew" , "Harry " , "Leah " , "Daniel " , "Kyle ", "Maksymilian "  , "Cody" , "Stefan" , "Aidan" , "Liam " , "Ethan " , "Kaidyn " , "Jean" , "Jasiu " , "David " ,"Vaida", "Thomas " , "Rowan "];
var i=0;
var min;
var j;
var n=22;
var temp;
var ask = 0;
var student;

//sorting numbers
 for (i=0; i<n-1; i++)
{
   min=i;
              for( j=i+1; j<n; j++)
             {
          	   if (FirstName[j]<FirstName[min])
       
               min=j;
               
              }

   temp=FirstName[i];
    FirstName[i]=FirstName[min];
    FirstName[min]=temp;

}


//asking to enter student number
while(ask<=0 ||ask>22)
{
  ask =parseInt(prompt(" enter student number  "));
}

//display
document.write("student with number " +ask + " is "+ FirstName[ask -1] +"</br>");
 for (i=0; i<n; i++)
{
  document.write(i+1 + FirstName[i] +"</br>");
}
