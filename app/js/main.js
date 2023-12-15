//mobile menu
  let hamburger = document.querySelector('.menu-tab');
  let menu = document.querySelector('.menu-hide');
  let blockFon = document.querySelector('.black-fon')
  
  const toggleMenu = () => {
    menu.classList.toggle('display-block');
  }
  
  hamburger.addEventListener('click', e => {
    e.stopPropagation();
  
    toggleMenu();
    hamburger.classList.toggle('active');
    blockFon.classList.toggle('display-block');
  });
  
  document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_hamburger = target == hamburger;
    let menu_is_active = menu.classList.contains('display-block');
    if (!its_menu && !its_hamburger && menu_is_active) {
      toggleMenu();
      hamburger.classList.toggle('active');
      blockFon.classList.toggle('display-block');
    }
  })

  jQuery('.marquee').marquee({
    duration: 30000,
    // startVisible: true,
    // duplicated: true
});

$(function(){
  $(".twentytwenty").twentytwenty({
    no_overlay: true,
  });
});



$('.slider').slick({
  centerPadding: '220px',
  centerMode: true,
  slidesToShow: 1,
  draggable: false,
  prevArrow: '<div class="bafter-arrow_left"><svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0015 25.0424C16.6662 24.4322 16.6662 23.4428 16.0015 22.8326L5.26584 13L16.0015 3.16736C16.6662 2.55716 16.6662 1.56784 16.0015 0.957647C15.3367 0.347452 14.259 0.347452 13.5943 0.957647L0.499999 13L13.5943 25.0424C14.259 25.6525 15.3367 25.6525 16.0015 25.0424Z" fill="#DEB359"/></svg></div>',
  nextArrow: '<div class="bafter-arrow_right"><svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0015 25.0424C16.6662 24.4322 16.6662 23.4428 16.0015 22.8326L5.26584 13L16.0015 3.16736C16.6662 2.55716 16.6662 1.56784 16.0015 0.957647C15.3367 0.347452 14.259 0.347452 13.5943 0.957647L0.499999 13L13.5943 25.0424C14.259 25.6525 15.3367 25.6525 16.0015 25.0424Z" fill="#DEB359"/></svg></div>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});


