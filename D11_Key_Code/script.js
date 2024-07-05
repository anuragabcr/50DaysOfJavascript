window.addEventListener("keydown", (event) => {
  const key = document.getElementById("key");
  const keyCode = document.getElementById("keyCode");
  const code = document.getElementById("code");
  key.innerText = event.key;
  keyCode.innerText = event.keyCode;
  code.innerText = event.code;
});
