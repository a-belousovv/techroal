window.addEventListener('DOMContentLoaded', () => {
  let width = document.documentElement.clientWidth;
  console.log(width)
  if (width <= 360) {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      
      spaceBetween: 44,
      slidesPerView: 1,
      navigation: {
        nextEl: '.slider__arrow-next',
        prevEl: '.slider__arrow-prev',
      },
    
      
    });
  }
  else if (width >= 361 && width <= 768) {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      
      spaceBetween: 44,
      slidesPerView: 2,
      navigation: {
        nextEl: '.slider__arrow-next',
        prevEl: '.slider__arrow-prev',
      },
    
      
    });
  }
  else {
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      
      spaceBetween: 44,
      slidesPerView: 3,
      navigation: {
        nextEl: '.slider__arrow-next',
        prevEl: '.slider__arrow-prev',
      },
    
      
    });
  }
  function DevelopmentMobileAccordion() {
    const parent = document.querySelector('.development-mobile');
    const cards = parent.querySelectorAll('.development__card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        if (event.target.classList.contains('development__card_button-plus')) {
         
          card.querySelector('.development__card_button-plus').classList.add('hide');
          card.querySelector('.development__card_button-close').classList.add('show');
          card.querySelector('.development__card_button-plus').classList.remove('show');
          card.querySelector('.development__card_button-close').classList.remove('hide');


          card.querySelector('.development__card_content').classList.add('show');
          card.querySelector('.development__card_content').classList.remove('hide');
        }
        else if (event.target.classList.contains('development__card_button-close') ) {
          card.querySelector('.development__card_button-plus').classList.remove('hide');
          card.querySelector('.development__card_button-close').classList.remove('show');
          card.querySelector('.development__card_button-plus').classList.add('show');
          card.querySelector('.development__card_button-close').classList.add('hide');


          card.querySelector('.development__card_content').classList.remove('show');
          card.querySelector('.development__card_content').classList.add('hide');
        }
        
       
      })
    });
  }

  DevelopmentMobileAccordion();
})