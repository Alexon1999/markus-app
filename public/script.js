const home = document.querySelector(".home");

export function isIntersecting(element) {
  const scrollTop_el = element.scrollTop;
  const height_el = element.clientHeight; // element a la moitié
  const height_window = window.innerHeight;

  console.log(scrollTop_el);

  if (height_el + scrollTop_el < height_window / 2) {
    console.log("active");
  }
}
