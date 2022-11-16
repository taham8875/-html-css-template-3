let scrollTopButton = document.querySelector(".scroll-to-top");
let articles = document.querySelector(".articles");

window.addEventListener("scroll", function() {
  if (
    document.documentElement.scrollTop > document.documentElement.clientHeight
  ) {
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
});

scrollTopButton.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Countdown timer

let target = new Date(`31 Dec ${new Date().getFullYear()} 23:59:59`);

let countDown = setInterval(function() {
  difference = target - new Date();

  document.querySelector(".days span:nth-of-type(1)").innerHTML = (
    "0" + Math.floor(difference / (1000 * 60 * 60 * 24))
  ).slice(-2);
  document.querySelector(".hours span:nth-of-type(1)").innerHTML = (
    "0" + Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).slice(-2);
  document.querySelector(".minutes span:nth-of-type(1)").innerHTML = (
    "0" + Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
  ).slice(-2);
  document.querySelector(".seconds span:nth-of-type(1)").innerHTML = (
    "0" + Math.floor((difference % (1000 * 60)) / 1000)
  ).slice(-2);
}, 1000);

// page scroll progress

let scrollProgress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", function() {
  scrollProgress.style.width = `${
    (document.documentElement.scrollTop /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
    100
  }%`;
});