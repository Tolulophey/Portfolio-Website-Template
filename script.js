const icon = document.getElementsByClassName('icon')[0];
const nav = document.getElementsByClassName('nav-links')[0]
// icon.addEventListener('click', ()=>{
//     // icon.classList.toggle('responsive');
//     nav.classList.toggle('responsive');
    
// })
icon.onclick = function() {
    nav.classList.toggle('responsive');
}