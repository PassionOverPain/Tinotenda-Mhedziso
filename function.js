let menuToggle = document.querySelector('.menuToggle'); //This will allow my navbar to have it's items 
let menu = document.querySelector('.menu');
menuToggle.onclick = function()
{
    menu.classList.toggle('active');
} 
let text = document.querySelector('.myName');
text.innerHTML = text.innerText.split('').map((letters, i) => `<span style="transition-delay:${ i * 40}ms;">${letters}</span>`).join('');
var viewpoints = document.getElementsByClassName('Viewpoint');
var views = document.getElementsByClassName('View');
function show(thisview)
{
for(viewpoint of viewpoints)
    {
        viewpoint.classList.remove("Activepoint");
    }
    for(view of views)
        {
            view.classList.remove("Activeview");
        }
    event.currentTarget.classList.add("Activepoint");
    document.getElementById('View').classList.add("Activeview");
}