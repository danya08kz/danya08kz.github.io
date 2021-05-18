$( document ).ready(function() {
    const accordions = document.querySelectorAll(".faq-accordion");

    accordions.forEach((el) => {
      el.addEventListener("click", (e) => {
        const self = e.currentTarget;
        const control = self.querySelector(".faq-accordion__control");
        const content = self.querySelector(".faq-accordion__content");
    
        self.classList.toggle("open");
    
        // если открыт аккордеон
        if (self.classList.contains("open")) {
          control.setAttribute("aria-expanded", true);
          content.setAttribute("aria-hidden", false);
          content.style.maxHeight = content.scrollHeight + "px";
        } else {
          control.setAttribute("aria-expanded", false);
          content.setAttribute("aria-hidden", true);
          content.style.maxHeight = null;
        }
      });
    });
  
    AOS.init({disable: 'phone'});
    
    $('.modal-open').click(function() {
      $('.modal').addClass('open-modal');
    })

    $('.modal-close').click(function() {
        $('.modal').removeClass('open-modal');
    })


    $('.mobile-nav-btn').click(function() {
      $('.mobile-menu').toggleClass('open-menu');
    })

    $('.mobile-menu-item').click(function() {
      $('.mobile-menu').removeClass('open-menu');
    })


    $('body').on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    const swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      centeredSlides: true,
    });
          
});


