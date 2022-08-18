function randomBackground() {
  img = new Array();
  img[0] = "./img/1.jpg";
  img[1] = "./img/2.jpg";
  img[2] = "./img/3.jpg";

  n = Math.floor(Math.random() * img.length);

  const randomImg = document.getElementsByClassName("fv__img");
  for (var i = 0; i < img.length; i++) {
    randomImg[i].style.background = "url(" + img[n] + ") no-repeat center / cover";
  }
}

window.addEventListener("load", randomBackground, false);