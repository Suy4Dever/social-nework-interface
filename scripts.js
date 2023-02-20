let counter1 = 0;
document.getElementsByClassName("info-1")[0].addEventListener("click", () => {
  // let css = ".info-title:hover{background-color: #ccc; color: white}";
  // let style = document.createElement("style");
  if (counter1 === 0) {
    document.getElementsByClassName("detail-1")[0].style.display = "block";
    document.getElementsByClassName("title-1")[0].style.backgroundColor =
      "#57707d";
    // style.styleSheet.cssText = css;
    counter1 = 1;
  } else {
    document.getElementsByClassName("detail-1")[0].style.display = "none";
    document.getElementsByClassName("title-1")[0].style.backgroundColor =
      "#7d97a5";
    // style.styleSheet.cssText = css;
    counter1 = 0;
  }
});

let counter2 = 0;
document.getElementsByClassName("info-2")[0].addEventListener("click", () => {
  if (counter2 === 0) {
    document.getElementsByClassName("detail-2")[0].style.display = "block";
    document.getElementsByClassName("title-2")[0].style.backgroundColor =
      "#57707d";
    counter2 = 1;
  } else {
    document.getElementsByClassName("detail-2")[0].style.display = "none";
    document.getElementsByClassName("title-2")[0].style.backgroundColor =
      "#7d97a5";
    counter2 = 0;
  }
});

let counter3 = 0;
document.getElementsByClassName("info-3")[0].addEventListener("click", () => {
  if (counter3 === 0) {
    document.getElementsByClassName("detail-3")[0].style.display = "grid";
    counter3 = 1;
  } else {
    document.getElementsByClassName("detail-3")[0].style.display = "none";
    counter3 = 0;
  }
});
