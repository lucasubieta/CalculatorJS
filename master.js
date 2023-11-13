//VARIABLES
var total = "";
let power = false;

//get elements from DOM
var displayResult= document.getElementById('display-progress');
var butTotal = document.getElementById('total');
var reset = document.getElementById('reset');

var addition = document.getElementById('addition');
var substraction = document.getElementById('substraction');
var multip = document.getElementById('multip');
var divid = document.getElementById('divid');

/* 
power.onclick = funcion(){
    power==true?false:true;
}; */


//NUMBER BUTTOM EVENTS

document.getElementById('num1').onclick = function(){
    total += "1";
    displayResult.innerHTML = total;
}

document.getElementById('num2').onclick = function(){
    total += "2";
    displayResult.innerHTML = total;
};

document.getElementById('num3').onclick = function(){
    total += "3";
    displayResult.innerHTML = total;
};

document.getElementById('num4').onclick = function(){
    total += "4";
    displayResult.innerHTML = total;
};

document.getElementById('num5').onclick = function(){
    total += "5";
    displayResult.innerHTML = total;
};

document.getElementById('num6').onclick = function(){
    total += "6";
    displayResult.innerHTML = total;
};

document.getElementById('num7').onclick = function(){
    total += "7";
    displayResult.innerHTML = total;
};

document.getElementById('num8').onclick = function(){
    total += "8";
    displayResult.innerHTML = total;
};

document.getElementById('num9').onclick = function(){
    total += "9";
    displayResult.innerHTML = total;
};

document.getElementById('num0').onclick = function(){
    total += "0";
    displayResult.innerHTML = total;
};

//*****

butTotal.onclick = function(){
    total == "" ? displayResult.innerHTML = "0" : displayResult.innerHTML = eval(total);
}

reset.onclick = function(){
    total = "";
    displayResult.innerHTML = "";
}

//OPERATIONAL EVENTS 
addition.onclick = function () {
    total += total === "" ? "0" : " + ";
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