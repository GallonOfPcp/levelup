let scrollBtn = document.querySelectorAll('.btn');

for (var i = 0; i < scrollBtn.length; i++) {
  scrollBtn[i].onclick = function () {
    window.scrollTo ({
      top: 1940,
      behavior: "smooth"
    });
  }
}
