/* .js files add interaction to your website */
var factList = [
  "There is no law that requires families to be separated at the border.",/*0*/ 

  "1,995 children were separated from 1,940 adults in only six weeks",/*1*/

  "Children separated from their families are named unaccompanied alien children",/*2*/

  "45% of the kids that cross the border alone are from Guatemala,29% are from El Salvador, 17% are from Honduras, and 6% are from Mexico.",/*3*/ 
];

var fact= document.getElementById("fact");
var myBtn= document.getElementById("myBtn");
var count=0;

myBtn.addEventListener("click", displayFact);

function displayFact (){
  fact.innerHTML=factList[count];
  count++;

  if (count == factList.length){
    count=0;
  }
}
