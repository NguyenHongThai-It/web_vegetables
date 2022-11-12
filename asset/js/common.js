(() => {
  const navCollapse = document.getElementById("navigate-list-collapse");
  const navCollapseItem = document.getElementById(
    "navigate-list-collapse__item"
  );
  const a = document.getElementById("carouselExampleIndicators");
  if (navCollapse !== null) {
    navCollapse.onclick = (e) => {
      navCollapseItem.classList.toggle("move");
    };
  }

  // window.onresize = () => {
  //   const b = document.querySelector(".carousel-item.active ");
  //   if (b !== null) {
  //     a.style.height = b.offsetHeight + "px";
  //   }
  // };
})();
var myModal = document.getElementById("exampleModal");
var myInput = document.getElementById("exampleModal");

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus();
});
