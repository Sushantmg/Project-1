
const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeSidebar');

    menuIcon.addEventListener('click', () => {
      sidebar.classList.add('active');
      overlay.classList.add('active');
    });

    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
    });
    function showForm(formId) {
      const tabs = document.querySelectorAll('.tab-btn');
      const forms = document.querySelectorAll('.form-container');

      tabs.forEach(tab => tab.classList.remove('active'));
      forms.forEach(form => form.classList.remove('active'));

      document.getElementById(formId).classList.add('active');
      event.target.classList.add('active');
    }


    const slider = document.getElementById("slider");
const dotsContainer = document.getElementById("dots");
const cards = document.querySelectorAll(".card");

let currentIndex = 0;

// Create navigation dots
cards.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

function goToSlide(index) {
  currentIndex = index;
  slider.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

// Auto set the first dot
goToSlide(0);
