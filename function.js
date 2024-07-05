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
function show(thingy) /* YeS... I am naming this variable thingy😀*/
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
    document.getElementById(thingy).classList.add("Activeview");
}

// const button = document.getElementById('Anime');
// button.addEventListener("click",animate);

// if(anime)
 let house = {
   observer :  new IntersectionObserver((entries) =>
{
    entries.forEach((entry) => 
    {
        console.log(entry)
        if(entry.isIntersecting)
            {
                entry.target.classList.add('show');
            }
            // else
            // {
            //     entry.target.classList.remove('show');
            // }
    });
}),
 hiddenElements : document.querySelectorAll('.Projects, .AboutMe, .Services')
 }
house.hiddenElements.forEach((el) => house.observer.observe(el));
// else
// {
//   delete house.observer;
//   delete house.hiddenElements
//   window.alert('Should be deleting');
// }
