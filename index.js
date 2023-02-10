const widgetContainer = document.getElementById("widget-container");
const widget = document.querySelector(".widget");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
nextButton.addEventListener("click", () => {
  const slideWidth = widget.clientWidth;
  widgetContainer.scrollLeft += slideWidth;
});
prevButton.addEventListener("click", () => {
  const slideWidth = widget.clientWidth;
  widgetContainer.scrollLeft -= slideWidth;
});