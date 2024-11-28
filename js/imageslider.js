const images = [
  'images/foodspics/food2.jpg', 
  'images/foodspics/food3.jpg',
  'images/foodspics/food4.jpg',
  'images/foodspics/food1.webp',
  'images/foodspics/food5.jpeg',
  'images/foodspics/food6.jpg'
];

let currentIndex = 0;
const heroImagesDiv = document.querySelector('.hero-images');
images.forEach((image) => {
  const img = document.createElement('div');
  img.style.backgroundImage = `url('${image}')`;
  img.className = 'hero-image'; 
  heroImagesDiv.appendChild(img);
});
const imagesDivs = document.querySelectorAll('.hero-image');
imagesDivs[0].style.opacity = '1'; 

function changeBackgroundImage() {
  imagesDivs[currentIndex].style.opacity = '0';
  currentIndex = (currentIndex + 1) % images.length; 
  imagesDivs[currentIndex].style.opacity = '1';
}
setInterval(changeBackgroundImage, 4000);