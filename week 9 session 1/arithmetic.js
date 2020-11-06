var FirstNumber=0;
var SecondNumber=0;
var sum = 0;
var difference= 0;
var product = 0;
var integerquotient = 0;
var number;

while(FirstNumber<=0 || FirstNumber>100)
{
FirstNumber=parseInt(prompt("please enter first number"));
}

while(SecondNumber<=0 || SecondNumber>100)
{
SecondNumber=parseInt(prompt("please enter second number"));
}
      document.write("first number "+FirstNumber +"</br>");

     document.write("second number "+SecondNumber +"</br>"); 

     //counting sum
sum=(FirstNumber+SecondNumber);
          document.write( "sum " + sum +"</br>");

document.getElementById("sum").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("sum").innerHTML = sum;
}

 //counting difference
difference=(FirstNumber - SecondNumber);
if(difference<0)
{

  difference=(difference*(-1));
}
     document.write( "difference " + difference +"</br>");

    document.getElementById("difference").onclick = function() {myFunction2()};

   function myFunction2() {
  document.getElementById("difference").innerHTML = difference;
}

//counting product
product=(FirstNumber*SecondNumber);
document.write( "product " + product +"</br>");
 document.getElementById("product").onclick = function() {myFunction3()};

   function myFunction3() {
  document.getElementById("product").innerHTML = product;
}

//counting integer quotient
integerquotient=(Math.floor(FirstNumber/SecondNumber));

   document.write( "integer quotient " + integerquotient +"</br>");
document.getElementById("integerquotient").onclick = function() {myFunction4()};

   function myFunction4() {
  document.getElementById("integerquotient").innerHTML = integerquotient;
}
