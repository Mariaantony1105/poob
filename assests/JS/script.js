document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 410) {
    nav.classList.add("scrolled1");
  } else {
    nav.classList.remove("scrolled1");
  }
});

let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false; // Function Started ? No

window.onscroll = function () {
  // console.log(section.offsetTop);
  if (window.scrollY >= 500) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.5,
  spaceBetween: 40,
  slidesPerGroup: 1,
  loop: true,
  // loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500, // Set the delay between slides to 2 seconds (2000 milliseconds)
    disableOnInteraction: false, // Allow autoplay to continue even if user interacts with the carousel
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    484: {
      slidesPerView: 1.3,
      spaceBetween: 40,
    },
    280: {
      slidesPerView: 1.2,
      spaceBetween: 40,
    },
    100: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: "#swiper-button-next-1",
    prevEl: "#swiper-button-prev-1",
  },
 
});





// let sections = document.querySelectorAll(".container, .container-fluid");
// let navLinks = document.querySelectorAll("nav a");

// window.onscroll = () => {
//   let scrollPosition = window.scrollY;

//   sections.forEach((sec) => {
//     let offset = sec.offsetTop - 158;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (scrollPosition >= offset && scrollPosition < offset + height) {
//       navLinks.forEach((link) => {
//         link.classList.remove("hover");
//       });
//       document.querySelector(`nav a[href="#${id}"]`).classList.add("hover");
//     }
//   });
// };

// var copy = document.querySelector(".logos-slide").cloneNode(true);
// document.querySelector(".logos").appendChild(copy);
