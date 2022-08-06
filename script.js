const burger = document.querySelector('.menu-icon')
const menu = document.querySelector('.menu')
const body = document.body

if (burger && menu)  {
    burger.addEventListener('click', ()=>{
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        menu.classList.toggle('_lock')
    })
}


const filter = document.querySelector('.filter')

if (filter) {
    const items = document.querySelectorAll('.block-filter')

    items.forEach(item =>{
        item.addEventListener('click', event =>{
            item.querySelector('.block-filter__dropdown').classList.toggle('_active');
            item.querySelector('.block-filter__icon').classList.toggle('_active');

            if (event.target.classList.contains('block-filter__item')){
                item.querySelector('.block-filter__value').textContent = event.target.textContent;
            }
        })
    })
}

//--Swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });