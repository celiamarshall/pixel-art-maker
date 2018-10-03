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




