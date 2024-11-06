const starContainer = document.querySelector('.star-background');
const numberOfStars = 100;
const pageHeight = document.documentElement.scrollHeight; // Get the total height of the page

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');

  // Random position and animation duration for each star
  star.style.left = Math.random() * 100 + 'vw';
  star.style.top = Math.random() * -100 + 'px';
  star.style.animationDuration = 2 + Math.random() * 3 + 's';

  // Set a custom animation distance based on the page height
  star.style.setProperty('--fall-distance', `${pageHeight + 200}px`); // Extra 200px to ensure it falls off-screen

  starContainer.appendChild(star);
}
