let colors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink'];

let button = document.getElementById('button');

button.addEventListener('click', function(){

let randomColor = colors[Math.floor(Math.random() * colors.length)]

let body = document.getElementsByTagName('body')[0];

body.style.backgroundColor = randomColor;
}) 


