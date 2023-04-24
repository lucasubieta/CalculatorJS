//VARIABLES
var total = "";

//get elements from DOM
var displayResult= document.getElementById('display-progress');
var butTotal = document.getElementById('total');
var reset = document.getElementById('reset');

var addition = document.getElementById('addition');
var substraction = document.getElementById('substraction');
var multip = document.getElementById('multip');
var divid = document.getElementById('divid');

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const num3 = document.getElementById('num3');
const num4 = document.getElementById('num4');
const num5 = document.getElementById('num5');
const num6 = document.getElementById('num6');
const num7 = document.getElementById('num7');
const num8 = document.getElementById('num8');
const num9 = document.getElementById('num9');
const num0 = document.getElementById('num0');




//NUMBER BUTTOM EVENTS

num1.onclick = function(){
    total += "1";
    displayResult.innerHTML = total;
}

num2.onclick = function(){
    total += "2";
    displayResult.innerHTML = total;
};

num3.onclick = function(){
    total += "3";
    displayResult.innerHTML = total;
};

num4.onclick = function(){
    total += "4";
    displayResult.innerHTML = total;
};

num5.onclick = function(){
    total += "5";
    displayResult.innerHTML = total;
};

num6.onclick = function(){
    total += "6";
    displayResult.innerHTML = total;
};

num7.onclick = function(){
    total += "7";
    displayResult.innerHTML = total;
};

num8.onclick = function(){
    total += "8";
    displayResult.innerHTML = total;
};

num9.onclick = function(){
    total += "9";
    displayResult.innerHTML = total;
};

num0.onclick = function(){
    total += "0";
    displayResult.innerHTML = total;
};

//******

butTotal.onclick = function(){
    total == "" ? displayResult.innerHTML = "0" : displayResult.innerHTML = eval(total);
}

reset.onclick = function(){
    total = "";
    displayResult.innerHTML = "";
}

//OPERATIONAL EVENTS 
addition.onclick = function (){ 
    total == "" ? displayResult.innerHTML = "0" : total += " + ";
    displayResult.innerHTML = total;
}

substraction.onclick = function (){ 
    total += " - ";
    displayResult.innerHTML = total;
}

multip.onclick = function (){ 
    total += " * ";
    displayResult.innerHTML = total;
}

divid.onclick = function (){ 
    total += " / ";
    displayResult.innerHTML = total;
}
// *****