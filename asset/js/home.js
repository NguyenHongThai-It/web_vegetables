(() => {
  const navCollapse = document.getElementById("navigate-list-collapse");
  const navCollapseItem = document.getElementById(
    "navigate-list-collapse__item"
  );
  const a = document.getElementById("carouselExampleIndicators");

  navCollapse.onclick = (e) => {
    navCollapseItem.classList.toggle("move");
  };

  window.onresize = () => {
    const b = document.querySelector(".carousel-item.active ");
    a.style.height = b.offsetHeight + "px";
  };
})();
