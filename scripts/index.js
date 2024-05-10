"use strict"

window.onload = init;

function init() {

    let addBtn = document.getElementById("addBtn");
    addBtn.onclick = onAddBtnClicked;

    let subtractBtn = document.getElementById("subtractBtn");
    subtractBtn.onclick = onSubtractBtnClicked;

    let multiplyBtn = document.getElementById("multiplyBtn");
    multiplyBtn.onclick = onmultiplyBtnClicked;

    let divideBtn = document.getElementById("divideBtn");
    divideBtn.onclick = ondivideBtnClicked;


}

function onAddBtnClicked() {
    let number1Field = document.getElementById("number1Field").value;
    let number2Field = document.getElementById("number2Field").value;
    
    let addValue = Number(number1Field) + Number(number2Field) ;
    
    let answerField = document.getElementById("answerField");
    answerField.innerHTML= addValue;
    
    
}

function onSubtractBtnClicked() {
    let number1Field = document.getElementById("number1Field").value;
    let number2Field = document.getElementById("number2Field").value;
    
    let addValue = Number(number1Field) - Number(number2Field) ;
    
    let answerField = document.getElementById("answerField");
    answerField.innerHTML= addValue;
    
    
}

function onmultiplyBtnClicked() {
    let number1Field = document.getElementById("number1Field").value;
    let number2Field = document.getElementById("number2Field").value;
    
    let addValue = Number(number1Field) * Number(number2Field) ;
    
    let answerField = document.getElementById("answerField");
    answerField.innerHTML= addValue;
    
    
}

function ondivideBtnClicked() {
    let number1Field = document.getElementById("number1Field").value;
    let number2Field = document.getElementById("number2Field").value;
    
    let addValue = Number(number1Field) / Number(number2Field) ;
    
    let answerField = document.getElementById("answerField");
    answerField.innerHTML= addValue;
    
    
}