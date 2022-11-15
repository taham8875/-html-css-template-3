let scrollTopButton = document.querySelector(".scroll-to-top");
let articles = document.querySelector(".articles");

window.onscroll = function() {
  if (articles.getBoundingClientRect().top <= 0) {
    scrollTopButton.style.display = "block";
    // Why setTimeout() ? to add fade-in and fade-out
    setTimeout(() => {
      scrollTopButton.style.opacity = 1;
    }, 400);
  } else {
    scrollTopButton.style.opacity = 0;
    setTimeout(() => {
      scrollTopButton.style.display = "none";
    }, 400);
  }
};

scrollTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});