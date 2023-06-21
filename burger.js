const burger = document.querySelector('.hamburger_block')

if(burger){
    const menu = document.querySelector('.header-menu')
    const line = document.querySelector('.hamburger')
    burger.addEventListener("click", function (p) {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        
        line.classList.toggle('_active');
        document.body.classList.toggle('_lock');
    })
    
}
