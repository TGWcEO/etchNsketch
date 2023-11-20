/*javascript goes here*/
let defaultColor=0;
let defaultSize=0;
const master=document.querySelector("#masterBox");
master.classList.add('master');

/*display square*/
const display=document.createElement("div");
display.classList.add("display");
master.appendChild(display);

/*squares*/
const square=document.createElement("div");
square.classList.add('square');
display.appendChild(square);
///////////////////////////////make a shit ton of squares

/*size Buttons*/
const small=document.createElement('button');
const medium=document.createElement('button');
const large=document.createElement('button');
small.classList.add('sizeButton');
medium.classList.add('sizeButton');
large.classList.add('sizeButton');
small.addEventListener('click',toSmall);
medium.addEventListener('click',toMedium);
large.addEventListener('click',toLarge);
/////////////////////////////append buttons to masterBox

/*color Buttons*/
const black=document.createElement('button');
const psych=document.createElement('button');
black.classList.add('colorButton');
psych.classList.add('colorButton');
black.addEventListener('click',toBlack);
psych.addEventListener('click',toPsych);
function toBlack(){
  defaultColor=1;
}function toPsych(){
  defaultColor=2;
}
////////////////////////////append buttons to masterBox

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
}
function toSmall(){
  removeSizeClass();
  square.classList.add('small');
}
function toMedium(){
  removeSizeClass();
  square.classList.add('medium');
}
function toLarge(){
  removeSizeClass();
  square.classList.add('large');
}
