// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll("nav a");
//   const navbarHeight = document.querySelector("nav").offsetHeight;

//   navLinks.forEach((link) => {
//     link.addEventListener("click", function (e) {
//       e.preventDefault();

//       const targetId = this.getAttribute("href").substring(1);
//       const targetElement = document.getElementById(targetId);
//       const offsetPosition =
//         targetElement.getBoundingClientRect().top +
//         window.scrollY -
//         navbarHeight;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth",
//       });
//     });
//   });

//   window.addEventListener("scroll", function () {
//     const scrollPosition = window.scrollY;

//     navLinks.forEach((link) => {
//       const targetId = link.getAttribute("href").substring(1);
//       const targetElement = document.getElementById(targetId);
//       const targetPosition =
//         targetElement.getBoundingClientRect().top +
//         window.scrollY -
//         navbarHeight;
//       const targetHeight = targetElement.offsetHeight;

//       if (
//         scrollPosition >= targetPosition &&
//         scrollPosition < targetPosition + targetHeight
//       ) {
//         link.classList.add("active");
//       } else {
//         link.classList.remove("active");
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const navbarHeight = document.querySelector("nav").offsetHeight;

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const offsetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    navLinks.forEach((link) => {
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;
      const targetHeight = targetElement.offsetHeight;

      // Tambahkan kondisi untuk Home
      if (
        targetId === "introduction" &&
        scrollPosition < targetPosition + targetHeight
      ) {
        link.classList.add("active");
      } else if (
        scrollPosition >= targetPosition &&
        scrollPosition < targetPosition + targetHeight
      ) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    // Menjaga 'Home' aktif saat di bagian atas
    const homeLink = document.querySelector('nav a[href="#introduction"]');
    if (scrollPosition < navbarHeight) {
      homeLink.classList.add("active");
    }
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll("nav a");
//     const navbarHeight = document.querySelector("nav").offsetHeight;

//     navLinks.forEach((link) => {
//         link.addEventListener("click", function (e) {
//             e.preventDefault();

//             const targetId = this.getAttribute("href").substring(1);
//             const targetElement = document.getElementById(targetId);
//             const offsetPosition =
//                 targetElement.getBoundingClientRect().top +
//                 window.scrollY - navbarHeight;

//             window.scrollTo({
//                 top: offsetPosition,
//                 behavior: "smooth",
//             });
//         });
//     });

//     window.addEventListener("scroll", function () {
//         const scrollPosition = window.scrollY;

//         navLinks.forEach((link) => {
//             const targetId = link.getAttribute("href").substring(1);
//             const targetElement = document.getElementById(targetId);
//             const targetPosition =
//                 targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
//             const targetHeight = targetElement.offsetHeight;

//             if (scrollPosition >= targetPosition && scrollPosition < targetPosition + targetHeight) {
//                 link.classList.add("active");
//             } else {
//                 link.classList.remove("active");
//             }
//         });

//         // Menjaga 'Home' aktif saat di bagian atas
//         const homeLink = document.querySelector('nav a[href="#introduction"]');
//         if (scrollPosition < navbarHeight) {
//             homeLink.classList.add("active");
//         } else {
//             homeLink.classList.remove("active");
//         }
//     });
// });
