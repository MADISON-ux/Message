const CORRECT_CODE = "SEYLHELLO"; // <-- поменяешь код здесь, если понадобится

const screenCode = document.getElementById("screen-code");
const screenResult = document.getElementById("screen-result");
const codeInput = document.getElementById("code-input");
const okBtn = document.getElementById("ok-btn");
const errorMsg = document.getElementById("error-msg");

function checkCode() {
  const value = codeInput.value.trim().toUpperCase().replace(/\s+/g, "");

  if (value === CORRECT_CODE) {
    screenCode.classList.add("hidden");
    screenResult.classList.remove("hidden");
  } else {
    errorMsg.classList.add("show");
    codeInput.classList.add("shake");
    setTimeout(() => codeInput.classList.remove("shake"), 400);
  }
}

okBtn.addEventListener("click", checkCode);

codeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkCode();
  }
});

codeInput.addEventListener("input", () => {
  errorMsg.classList.remove("show");
});
