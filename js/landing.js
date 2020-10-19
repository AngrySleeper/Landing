const getIt = document.getElementById("get-it")
,offer = document.querySelector(".offer")
;

let visible = true;
getIt.onclick = () => {
  if (visible) {
    offer.style.visibility = "hidden";
    visible = false;
    document.getElementById("get-it").innerHTML = "Get it";
  } else {
    offer.style.visibility = "visible";
    visible = true;
    document.getElementById("get-it").innerHTML = "Close";
  }
}

function copyCode() {
  let copyText = document.getElementById("discountCode");
  copyText.select();
  document.execCommand("copy");
  alert("Ваш код: " + copyText.value);
}