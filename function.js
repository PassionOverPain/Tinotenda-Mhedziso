let menuToggle = document.querySelector('.menuToggle'); //This will allow my navbar to have it's items 
let menu = document.querySelector('.menu');
menuToggle.onclick = function()
{
    menu.classList.toggle('active');
} 
let text = document.querySelector('.myName');
text.innerHTML = text.innerText.split('').map((letters, i) => `<span style="transition-delay:${ i * 40}ms;">${letters}</span>`).join('');