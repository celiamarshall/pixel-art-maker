(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
for (i = 0; i < 4980; i++){
    newBox = document.createElement('div');
    newBox.classList.add('box');
    document.querySelector('.canvas').appendChild(newBox)
}

let color = 'black'



function paintColor(event) {
    color = event.target.dataset.color
    console.log(color)
    currentColor.innerHTML = `<div class="paint paint${color} style= background-color: ${color}"></div>`
}

const colorsArr = ['lightpink', 'hotpink', 'deeppink', 'darkred', 'red', 'orangered', 'orange', 'yellow', 'greenyellow', 'green', 'teal', 'blue', 'navy', 'indigo', 'purple']

for (col of colorsArr) {
    newPaint = document.createElement('div');
    newPaint.classList.add('paint', 'paint' + col)
    newPaint.style = `background-color: ${col}`
    newPaint.dataset.color = col
    document.querySelector('.palette').appendChild(newPaint)
    const colorDiv = document.querySelector(`.paint${col}`)
    colorDiv.addEventListener('click', paintColor)

}

currentText = document.createElement('div')
currentText.innerHTML = "Current Color:"
currentText.style = "font-size: 30px;" 
currentText.style = "font-family: 'comic sans MS'"
currentText.style = "margin-right: 10px; font-size: 30px; font-family: 'comic sans MS'"
document.querySelector('.palette').appendChild(currentText)

currentColor = document.createElement('div')
document.querySelector('.palette').appendChild(currentColor)

const boxes = document.querySelectorAll('.box')

for (const box of boxes) {
    box.addEventListener('click', (event) => {
            event.target.classList.toggle(color)
    })
}





},{}]},{},[1]);
