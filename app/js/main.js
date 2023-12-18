//mobile menu
  let hamburger = document.querySelector('.menu-tab');
  let menu = document.querySelector('.menu-hide');
  
  const toggleMenu = () => {
    menu.classList.toggle('display-block');
  }
  
  hamburger.addEventListener('click', e => {
    e.stopPropagation();
  
    toggleMenu();
    hamburger.classList.toggle('active');
  });
  
  document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == menu || menu.contains(target);
    let its_hamburger = target == hamburger;
    let menu_is_active = menu.classList.contains('display-block');
    if (!its_menu && !its_hamburger && menu_is_active) {
      toggleMenu();
      hamburger.classList.toggle('active');
    }
  })

  jQuery('.marquee').marquee({
    duration: 30000,
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
  swipe: false,
  prevArrow: '<div class="bafter-arrow_left"><svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0015 25.0424C16.6662 24.4322 16.6662 23.4428 16.0015 22.8326L5.26584 13L16.0015 3.16736C16.6662 2.55716 16.6662 1.56784 16.0015 0.957647C15.3367 0.347452 14.259 0.347452 13.5943 0.957647L0.499999 13L13.5943 25.0424C14.259 25.6525 15.3367 25.6525 16.0015 25.0424Z" fill="#DEB359"/></svg></div>',
  nextArrow: '<div class="bafter-arrow_right"><svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.0015 25.0424C16.6662 24.4322 16.6662 23.4428 16.0015 22.8326L5.26584 13L16.0015 3.16736C16.6662 2.55716 16.6662 1.56784 16.0015 0.957647C15.3367 0.347452 14.259 0.347452 13.5943 0.957647L0.499999 13L13.5943 25.0424C14.259 25.6525 15.3367 25.6525 16.0015 25.0424Z" fill="#DEB359"/></svg></div>',
  responsive: [
    {
      breakpoint: 1768,
      settings: {
        centerPadding: '150px',
      }
    },
    {
      breakpoint: 1495,
      settings: {
        centerPadding: '80px',
      }
    },
    {
      breakpoint: 1366,
      settings: {
        centerPadding: '30px',
      }
    },
    {
      breakpoint: 1277,
      settings: {
        centerPadding: '10px',
      }
    },
    {
      breakpoint: 1200,
      settings: {
        centerPadding: '0px',
        centerMode: false,
      }
    }
  ]
});


const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

AOS.init({
  offset: 300, // offset (in px) from the original trigger point
  duration: 2000, // values from 0 to 3000, with step 50ms
  once: true, // whether animation should happen only once - while scrolling down
});

// $('.slick-article').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slick-article-nav'
// });

// $('.slick-article').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.slick-article'
// });


$('.service-block_item').on("click", function(){  
  $(".service-block_item-arrow.service-block_item-arrow-d").removeClass('service-block_item-arrow-d');
  $(this).find(".service-block_item-arrow ").addClass('service-block_item-arrow-d');
});


$(document).ready(function () {
  // Toggle service info on click
  $('.service-block_item').on('click', function () {
      // Get the service info block associated with the clicked item
      var serviceInfo = $(this).find('.service-info');
      
      // Check if the service info block is not visible
      if (!serviceInfo.hasClass('display-block')) {
          // Hide other visible service info blocks and show the clicked one
          $('.service-info.display-block').removeClass('display-block');
          serviceInfo.addClass('display-block');
      }
  });
});







