let scrollPrecendent = window.scrollY;
window.addEventListener("scroll", (e) => {
  const ScrollActuel = window.scrollY;
  if (ScrollActuel > scrollPrecendent) {
    nav.style.top = "-60px";
  } else {
    nav.style.top = "0px";
  }
  scrollPrecendent = ScrollActuel;
});

// ma maniere corriger

let lastscroll = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY < lastscroll) {
    navbar.style.top = "0px";
  } else {
    navbar.style.top = "-60px";
  }
  lastscroll = window.scrollY;
});
