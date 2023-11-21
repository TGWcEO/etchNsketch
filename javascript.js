/*javascript goes here*/
let defaultColor=1;
let defaultSize=3;
const master=document.querySelector("#masterBox");
master.classList.add('master');
/*display square*/
const display=document.createElement("div");
display.classList.add("display");
master.appendChild(display);

/*contorl box*/
const controls=document.createElement("div");
controls.classList.add("controlBox");
master.appendChild(controls);

/*squares*/
const square=document.createElement('div');
square.classList.add('square');
display.appendChild(square);
///////////////////////////////make a shit ton of squares

/*knobs*/
const knob1=document.createElement("div");
const knob2=document.createElement("div");
knob1.classList.add("knob");
knob1.classList.add("left");
knob2.classList.add("knob");
knob2.classList.add("right");
controls.appendChild(knob1);

/*size Buttons*/
const small=document.createElement('button');
const medium=document.createElement('button');
const large=document.createElement('button');
small.textContent="small";
medium.textContent="medium";
large.textContent="large";
small.classList.add('sizeButton');
medium.classList.add('sizeButton');
large.classList.add('sizeButton');
large.classList.add('darker');
small.addEventListener('click',toSmall);
medium.addEventListener('click',toMedium);
large.addEventListener('click',toLarge);
controls.appendChild(small);
controls.appendChild(medium);
controls.appendChild(large);

/*color Buttons*/
const black=document.createElement('button');
const psych=document.createElement('button');
black.textContent="black";
psych.textContent="psychedelic";
black.classList.add('colorButton');
black.classList.add('darker');
psych.classList.add('colorButton');
black.addEventListener('click',toBlack);
psych.addEventListener('click',toPsych);
function toBlack(){
  black.classList.add('darker');
  psych.classList.remove('darker');
  defaultColor=1;
}function toPsych(){
  black.classList.remove('darker');
  psych.classList.add('darker')
  defaultColor=2;
}
controls.appendChild(black);
controls.appendChild(psych);

/*screen eraser*/
const erase=document.createElement("button");
erase.textContent="ERASE";
erase.addEventListener('click',clearAll);
function clearAll(){
  square.classList.remove('black');
  square.classList.remove('psych1');
  square.classList.remove('psych2');
  square.classList.remove('psych3');
  square.classList.remove('psych4');
  square.classList.remove('psych5');
}

/*erase button and right knob placement*/
controls.appendChild(erase);
controls.appendChild(knob2);



/*mouseOver event changer*/
square.addEventListener("mouseover",changeColor);
function changeColor(){
  clearAll();
  if(defaultColor==1){
    square.classList.add('black');
  }else if(defaultColor==2){
    square.classList.add('psych1');
    defaultColor=3;
  }else if(defaultColor==3){
    square.classList.add('psych2');
    defaultColor=4;
  }else if(defaultColor==4){
    square.classList.add('psych3');
    defaultColor=5;
  }else if(defaultColor==5){
    square.classList.add('psych4');
    defaultColor=6;
  }else if(defaultColor==6){
    square.classList.add('psych5');
    defaultColor=2;
  }
}

///////create fuction that makes the squares get progressivly darker until
/////////////////eventually being completely black (10 shades to black)

/*square size changers*/
function removeSizeClass(){
  square.classList.remove('small');
  square.classList.remove('medium');
  square.classList.remove('large');
  small.classList.remove('darker');
  medium.classList.remove('darker');
  large.classList.remove('darker');
}function toSmall(){
  removeSizeClass();
  small.classList.add('darker');
  square.classList.add('small');
}function toMedium(){
  removeSizeClass();
  medium.classList.add('darker');
  square.classList.add('medium');
}function toLarge(){
  removeSizeClass();
  large.classList.add('darker');
  square.classList.add('large');
}
