for (let i = 1; i <= 10; i++) {
  let btn = document.querySelector(".btn_" + i);
  btn.addEventListener("click", function () {
    alert(i);
  });
}
