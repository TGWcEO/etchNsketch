/*javascript goes here*/
let defaultColor=1,
    defaultSize=50,
    columns=61,
    rows=30,
    changeId='',
    num=0;
const master=document.querySelector("#masterBox");
master.classList.add('master');

/*display screen*/
const display=document.createElement("div");
display.classList.add("display");
master.appendChild(display);

/*contorl box*/
const controls=document.createElement("div");
controls.classList.add("controlBox");
master.appendChild(controls);

/*squares*/
///////create fuction that makes the squares get progressivly darker until
/////////////////eventually being completely black (10 shades to black)
const createSquare=index=>{
  const square=document.createElement('div');
  square.classList.add('square');
  changeId=`square${num}`;
  square.setAttribute('id',changeId);
  display.appendChild(square);
  square.addEventListener('mouseover',()=>{
    square.classList.remove('black','psych1','psych2','psych3','psych4','psych5');
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
  });
  num++
  return square;
}
const createSquares=quantity=>{
  Array.from(Array(quantity)).map((square,index)=>{
    createSquare(index);
  })
}
const createGrid=()=>{
  display.innerHTML="";
  num=0;
  display.style.setProperty("--columns",columns);
  display.style.setProperty("--rows",rows);
  createSquares(columns*rows);
}
createGrid();
 
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

/*screen eraser*/
const erase=document.createElement("button");
erase.textContent="ERASE";
erase.classList.add('erase');
erase.addEventListener('click',()=>{
  const sq=document.getElementsByClassName('square');
  for(let item of sq){
  item.classList.remove('black','psych1','psych2','psych3','psych4','psych5');
  }
});
controls.appendChild(erase);

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

/*right knob placement*/
controls.appendChild(knob2);

/*square size changers*/
function removeSizeClass(){
  small.classList.remove('darker');
  medium.classList.remove('darker');
  large.classList.remove('darker');
}function toSmall(){
  columns=145;
  rows=70;
  removeSizeClass();
  small.classList.add('darker');
  createGrid();
}function toMedium(){
  columns=103;
  rows=50
  removeSizeClass();
  medium.classList.add('darker');
  createGrid();
}function toLarge(){
  columns=61;
  rows=30;
  removeSizeClass();
  large.classList.add('darker');
  createGrid();
}