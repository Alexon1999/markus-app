export const smoothScroll = (to) => (e) => {
  e.preventDefault();
  e.stopPropagation();

  const href = e.target.hash || "#" + to; // '#projects'
  const offsetTop = document.querySelector(href)?.offsetTop - 60;

  // console.log({ href, offsetTop });

  window.scroll({
    top: offsetTop,
    behavior: "smooth",
  });
};
