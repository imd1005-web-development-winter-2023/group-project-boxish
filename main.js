//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

// Constants

// Variables
let countdownDate = new Date(projectDueDate);

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

function calculateDaysLeft(countdownDate) {
  const now = new Date().getTime();
  const countdown = new Date(countdownDate).getTime();

  const difference = (countdown - now) / 1000;

  // Countdown passed already
  if (difference < 1) {
    return null;
  }

  const days = Math.floor(difference / (60 * 60 * 24));

  return days;
}

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  const daysLeft = calculateDaysLeft(countdownDate);
  let headingTextCalculated = headingText;

  if (daysLeft) {
    headingTextCalculated = headingTextCalculated.concat(
      " In ",
      daysLeft.toString(),
      " days "
    );
  }
  h1.textContent = headingTextCalculated.concat(headingTextIcon);
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//

function productCountIncrease() {
  productCount += 1;
  document.getElementById("productCountContainer").innerHTML = productCount;
}

function productCountDecrease() {
  if (productCount > 0) {
    productCount -= 1;
    document.getElementById("productCountContainer").innerHTML = productCount;
  }
}

function addToCart(){
  document.getElementById("cartCount").innerHTML = productCount;
}

function slide(direction) {
  const sliderImages = document.getElementById("sliderImages");
  const imageCount = sliderImages.children.length;
  currentIndex += direction;

  if (currentIndex >= imageCount) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = imageCount - 1;
  }

  sliderImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlider(){
  if(currSliderIndex + 1 <= slidersId.length -1){
    currSliderIndex += 1
  } else {
    currSliderIndex = 0;
  } 
  updateSlider();
}

function previousSlider(){
  if(currSliderIndex - 1 >= 0){
    currSliderIndex -= 1
  } else {
    currSliderIndex = slidersId.length-1;
  } 
  updateSlider();
}

function updateSlider(){
  document.querySelectorAll(".slider-img").forEach((div)=>{
    if(div.id === slidersId[currSliderIndex]){
      div.style.width = '40%';
    } else {
      div.style.width = '20%';
    }
  });
}


inititialise();
