const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

btn.style.color = "white"; 
btn.addEventListener('click', function(){
let hexColor = '#';
for(let i=0; i<6; i++){
    hexColor += hex[getRandomNumber()];
}
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
// btn.style.color = "white";                               //Also transform the font color of the text in the original button to white.
});


function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}


const btn2 = document.getElementById('btn2')

btn2.addEventListener('click', function(){
    let hexColor = '#';                              
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    btn.style.backgroundColor = hexColor;                 //On clicking this new button, instead of changing the background color of the page, you need to change the background color of the original button.
    });