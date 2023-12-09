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
//clue for search 
document.querySelector('.close-serch-clues')?.addEventListener('click' , ()=>{
  document.querySelector('.block-clue').classList.toggle('display-none');
});
//list of results filter change color
let search = document.querySelector('.search-filter');
if (search) {
  search.onclick = function(e) {
    [].forEach.call(search.querySelectorAll('a'), function(i) {
      i.classList.remove('search-filter_active');
    });
    e.target.classList.add('search-filter_active');
  };
}
//font setting
let fontSetting = document.querySelector('.font-setting_popup');
let fontBtn = document.querySelector('.font-setting');

const toggleFont = () => {
  fontSetting.classList.toggle('display-block');
}

if (fontSetting && fontBtn){
  fontBtn.addEventListener('click', e => {
    e.stopPropagation();
    toggleFont();
  });
  
  
  document.addEventListener('click', e => {
    let target = e.target;
    let its_fontSetting = target == fontSetting || fontSetting.contains(target);
    let its_fontBtn = target == fontBtn;
    let fontSetting_active = fontSetting.classList.contains('display-block');
    if (!its_fontSetting && !its_fontBtn && fontSetting_active) {
      toggleFont();
    }
  })
}

//increase and decrease font size 
// Get HTML elements
const decreaseButton = document.getElementById('font-size-minus');
const increaseButton = document.getElementById('font-size-plus');
const fontSizeDisplay = document.getElementById('font-size-value');
const textBlock = document.querySelector('.chapter-block');
// Set initial font size
let fontSize = parseInt(localStorage.getItem('fontSize')) || 18; 
if (decreaseButton && increaseButton && fontSizeDisplay && textBlock) {
 textBlock.style.fontSize = `${fontSize}px`;
 fontSizeDisplay.innerText = `${fontSize}px`;
 
 // Event listeners
 decreaseButton.addEventListener('click', function(){
     if(fontSize > 0){
         fontSize -= 1;
         textBlock.style.fontSize = `${fontSize}px`;
         fontSizeDisplay.innerText = `${fontSize}px`;
         localStorage.setItem('fontSize', fontSize); 
     }
 });
 
 increaseButton.addEventListener('click', function(){
     fontSize += 1;
     textBlock.style.fontSize = `${fontSize}px`;
     fontSizeDisplay.innerText = `${fontSize}px`;
     localStorage.setItem('fontSize', fontSize); 
 });
}

//increase and decrease font height
window.onload = function() {
  // Get elements
  let text_container = document.querySelector('.chapter-block');
  let increase_btn = document.querySelector('#font-height-plus');
  let decrease_btn = document.querySelector('#font-height-minus');
  let display_span = document.querySelector('#font-height-numb');
  // try to retrieve the saved line height from local storage
  let localStorageLineHeight = localStorage.getItem('lineheight');
  // Check if value exists in localstorage
  let line_height = (localStorageLineHeight) ? parseInt(localStorageLineHeight) : 28;
  if (text_container && increase_btn && decrease_btn && display_span) {
  // Apply saved or default line height
  text_container.style.lineHeight = `${line_height}px`;
  display_span.textContent = `${line_height}px`;
  // Increase line height event and save new value to local storage
  increase_btn.addEventListener('click', function() {
    line_height += 1;
    text_container.style.lineHeight = `${line_height}px`;
    display_span.textContent = `${line_height}px`;
    localStorage.setItem('lineheight', line_height);
  });
  // Decrease line height event and save new value to local storage
  decrease_btn.addEventListener('click', function() {
    if(line_height > 1){ //prevent line height going below 1
      line_height -= 1;
      text_container.style.lineHeight = `${line_height}px`;
      display_span.textContent = `${line_height}px`;
      localStorage.setItem('lineheight', line_height);
    }
  });
  }
}


// alignment words in stroke
// First, get the two elements
let alignmentBlockItem = document.getElementById("alignment-block__item");
let chapterBlock = document.querySelector(".chapter-block");
if (alignmentBlockItem && chapterBlock) {
// If there is saved alignment data, apply it
if (localStorage.getItem("textAlignment")) {
  chapterBlock.style.textAlign = localStorage.getItem("textAlignment");
}

// Check if the class 'alignment-block__active' should be applied
if (localStorage.getItem("isActive") === "true") {
  alignmentBlockItem.classList.add("alignment-block__active");
}

// Define what to do when alignmentBlockItem is clicked
alignmentBlockItem.onclick = function() {
  // Toggle the class 'alignment-block__active'
  this.classList.toggle("alignment-block__active");
  localStorage.setItem("isActive", this.classList.contains("alignment-block__active"));

  // Check the current text alignment of chapterBlock
  let currentAlignment = window.getComputedStyle(chapterBlock).getPropertyValue("text-align");
  
  // If the text is currently justified, remove that property. Otherwise, set it.
  if (currentAlignment === "justify") {
    chapterBlock.style.textAlign = "inherit";
    localStorage.setItem("textAlignment", "inherit");
  } 
  else {
    chapterBlock.style.textAlign = "justify";
    localStorage.setItem("textAlignment", "justify");
  }
}
}


//dark theme 
let darkModeDiv = document.querySelector(".darkmode");
let darkModeBlockDiv = document.querySelector(".darkmode-block");

if (darkModeDiv && darkModeBlockDiv){
  // check if 'darkmode' is in localStorage when page loads
  document.addEventListener('DOMContentLoaded', (event) => {
    if(localStorage.getItem('darkmode') === 'true') {
        applyDarkMode();
    }
  });

  darkModeDiv.onclick = function() {
    
      if(localStorage.getItem('darkmode') !== 'true') {
          localStorage.setItem('darkmode', 'true');
          applyDarkMode();
      } else {
          localStorage.removeItem('darkmode');
          removeDarkMode();
      }
  };

  // Put all the code that applies dark mode inside this function
  function applyDarkMode() {
      document.body.classList.toggle('dark-theme');
      darkModeBlockDiv.classList.toggle('darkmode-block__active');
      document.querySelector('.wr-contaner').classList.toggle('dark-theme');
      document.querySelector('.logo-light').classList.toggle('display-none');
      document.querySelector('.logo-dark').classList.toggle('display-block');
  }

  // Put all the code that removes dark mode inside this function
  function removeDarkMode() {
      document.body.classList.toggle('dark-theme');
      darkModeBlockDiv.classList.toggle('darkmode-block__active');
      document.querySelector('.wr-contaner').classList.toggle('dark-theme');
      document.querySelector('.logo-light').classList.toggle('display-none');
      document.querySelector('.logo-dark').classList.toggle('display-block');
  } 
}






