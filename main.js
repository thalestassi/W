document.addEventListener("DOMContentLoaded", () => {
  const moon = document.getElementById("moon");
  const phases = [
    "new-moon",
    "crescent-moon",
    "half-moon",
    "gibbous-moon ",
    "full-moon",
  ];
  let currentPhase = 0;

  moon.addEventListener("click", () => {
    moon.classList.remove(phases[currentPhase]);
    currentPhase = (currentPhase + 1) % phases.length;
    moon.classList.add(phases[currentPhase]);
  });

  // Generate countless stars
  const starsContainer = document.querySelector(".stars");
  const numStars = 1000; // Adjust this number for more or fewer stars

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 5 + 2}s`; // Random duration between 2s and 7s
    star.style.animationDelay = `${Math.random() * 5}s`; // Random delay between 0s and 5s
    starsContainer.appendChild(star);
  }

  // Generate moving stars

  const movingStarsContainer = document.querySelector(".moving-stars");
  const numMovingStars = 50; // Adjust this number for more or fewer moving stars

  for (let i = 0; i < numMovingStars; i++) {
    const movingStar = document.createElement("div");
    movingStar.classList.add("moving-star");
    movingStar.style.top = `${Math.random() * 100}vh`;
    movingStar.style.left = `${Math.random() * 100}vw`;
    movingStar.style.animationDuration = `${Math.random() * 10 + 10}s`; // Random duration between 5s
    movingStarsContainer.appendChild(movingStar);
  }
});

const startDate = new Date('2004-06-08T03:21:00');
const counterElement = document.getElementById('counter');
const counterContainer = document.querySelector('.counter-container');
const moon = document.getElementById('moon');

function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    counterElement.textContent = `${days} dias, ${hours} horas e ${minutes} minutos`;
}

moon.addEventListener('click', () => {
    // Fade out da lua
    moon.classList.add('fade-out');

    // Após o fade-out, esconder a lua
    setTimeout(() => {
        moon.style.display = 'none';

        // Mostrar e fazer fade-in do contador
        counterContainer.style.display = 'block';
        counterContainer.classList.add('fade-in');

        updateCounter();
        setInterval(updateCounter, 60000);
    }, 1000);  // tempo igual à duração do fade-out
});
const moonText = document.querySelector('.moon-text');

moon.addEventListener('click', () => {
    // Fade out da lua
    moon.classList.add('fade-out');

    // Fade out do texto
    moonText.classList.add('fade-out');

    // Após o fade-out, esconder a lua e o texto, mostrar contador
    setTimeout(() => {
        moon.style.display = 'none';
        moonText.style.display = 'none';

        counterContainer.style.display = 'block';
        counterContainer.classList.add('fade-in');

        updateCounter();
        setInterval(updateCounter, 60000);
    }, 1000);
});
