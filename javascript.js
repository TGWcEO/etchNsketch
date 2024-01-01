/*javascript goes here*/
let defaultColor=1,
    defaultSize=50,
    columns=61,
    rows=30,
    changeId='',
    num=0;
const master=document.querySelector("#masterBox");
const display=document.querySelector("#display");
const controls=document.querySelector("#controls");

/*squares*/
const createSquare=index=>{
  const square=document.createElement('div');
  let dark=0;
  square.classList.add('square');
  changeId=`square${num}`;
  square.setAttribute('id',changeId);
  display.appendChild(square);
  square.addEventListener('mouseover',()=>{
    square.classList.remove('c1','c2','c3','c4','c5','p1','p2','p3','p4','p5');
    if(defaultColor==1){
      if(dark==0){
        square.classList.add('c1');
        dark=1;
      }else if(dark==1){
        square.classList.add('c2');
        dark=2;
      }else if(dark==2){
        square.classList.add('c3');
        dark=3;
      }else if(dark==3){
        square.classList.add('c4');
        dark=4;
      }else if(dark==4){
        square.classList.add('c5');
      }
    }else if(defaultColor==2){
      square.classList.add('p1');
      defaultColor=3;
    }else if(defaultColor==3){
      square.classList.add('p2');
      defaultColor=4;
    }else if(defaultColor==4){
      square.classList.add('p3');
      defaultColor=5;
    }else if(defaultColor==5){
      square.classList.add('p4');
      defaultColor=6;
    }else if(defaultColor==6){
      square.classList.add('p5');
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

/*size Buttons*/
const small=document.querySelector('#small');
const medium=document.querySelector('#medium');
const large=document.querySelector('#large');
large.classList.add('darker');
small.addEventListener('click',toSmall);
medium.addEventListener('click',toMedium);
large.addEventListener('click',toLarge);

/*screen eraser*/
const erase=document.querySelector("#erase");
erase.addEventListener('click',()=>{
  const sq=document.getElementsByClassName('square');
  for(let item of sq){
  item.classList.remove('c1','c2','c3','c4','c5','p1','p2','p3','p4','p5');
  }
});

/*color Buttons*/
const black=document.querySelector('#black');
const psych=document.querySelector('#psych');
black.classList.add('darker');
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

/*square size changers*/
function removeSizeClass(){
  small.classList.remove('darker');
  medium.classList.remove('darker');
  large.classList.remove('darker');
}function toSmall(){
//columns=335;
//rows=210;
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
