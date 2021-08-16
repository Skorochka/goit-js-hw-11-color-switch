const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
// рефы
const refs = {
    body: document.querySelector('body'),
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]')
}
// слушатели событий
refs.btnStart.addEventListener('click', startColorChange)
refs.btnStop.addEventListener('click', stopColorChange)
// хранит id setInterval 
let idFunctionStart = null;

// функции для кнопок старт и стоп
function startColorChange() {
    idFunctionStart = setInterval(selectionColor, 1000),
    refs.btnStart.setAttribute('disabled', `true`)
}
function stopColorChange() {
    clearInterval(idFunctionStart),
    refs.btnStart.removeAttribute('disabled')

}
// функции для генерации цвета 

function selectionColor() {
    arrayLength = colors.length
    const randomColor = randomIntegerFromInterval(0, arrayLength)
    bgc = colors[randomColor]
    refs.body.setAttribute('style', `background-color: ${bgc}`)
}


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

