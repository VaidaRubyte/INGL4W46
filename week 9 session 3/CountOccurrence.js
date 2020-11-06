//var FirstName=["Andrew","Lili","Damon","Stephen","Brodie","Piotr","Drew","Bianca","Nathan","Andrew","Damon","Brodie","Andrew"];

var FirstName=['Andrew','Lili','Damon','Stephen','Brodie','Piotr','Drew','Bianca','Nathan','Andrew','Damon','Brodie','Andrew'];
var i=0;
var min;
var j;
var n=13;
var times=0;
var ask;
var student;
var ans;

for(i=0; i<n ; i++)
{

  document.write(i+1 + FirstName[i] +"</br>");

}

ask=prompt("please enter name ");
//document.write(ask +"</br>");
document.write("</br>");

for(i=0; i<n ; i++)
{
if(FirstName[i]==ask)
	times++;
	 // document.write("yes" + times+"</br>");
  
}
document.write("with name "+ask + "  is "+ times + " student"+"</br>");
for(i=0; i<n ; i++)
if(FirstName[i]==ask)
{

document.write("student number is "+   (i+1)   +"</br>");
}