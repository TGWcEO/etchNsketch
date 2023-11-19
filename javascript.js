/*javascript goes here*/

const defaultColor=0;
const defaultSize=0;
const master=document.querySelector("#masterBox");

/*squares*/
const square=document.createElement("div");
square.classList.add('square');
square.textContent("child of Master");
master.appendChild(square);
///////////////////////////////make a shit ton of squares

/*size Buttons*/
const small=document.createElement('button');
const medium=document.createElemet('button');
const large=document.createElemtent('button');
small.classList.add('sizeButton');
medium.classList.add('sizeButton');
large.classList.add('sizeButton');
small.addEventListener('click',small());
medium.addEventListener('click',medium());
large.addEventListener('click',large());

/*color Buttons*/
const black=document.createElement('button');
const psych=document.createElement('button');
black.classList.add('colorButton');
psych.classList.add('colorButton');
black.addEventListener('click',black());
psych.addEventListener('click',psych());
function black(){
  defaultColor=1;
}function psych(){
  defaultColor=2;
}

/*screen eraser*/
function clearAll(){
  square.classList.remove('black');
  square.classList.remove('psych');
}

//make a funtion that says when the mouse hovers over a square it changes
////////////////////////////the square from white to the default color

/*square size changers*/
function removeSizeClass(){
  square.classList.remove('small');
  square.classList.remove('medium');
  square.classList.remove('large');
}function small(){
  remove SizeClass();
  square.classList.add('small');
}function medium(){
  removeSizeClass();
  square.classList.add('medium');
}function large(){
  removeSizeClass();
  square.classList.add('large');
}
