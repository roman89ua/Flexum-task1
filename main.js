for (var i = 1; i <= 10; i++) {
  var btn = document.querySelector(".btn_" + i);
  btn.addEventListener("click", function () {
    alert(i);
  });
}
