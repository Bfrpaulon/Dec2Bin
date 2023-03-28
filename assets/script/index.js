const binInput = document.getElementById("bin-input");
const convertBtn = document.getElementById("convert-btn");
const resultDiv = document.getElementById("result");
convertBtn.addEventListener("click", () => { const binStr = binInput.value.trim(); if (!/^[01]{1,8}$/.test(binStr)) { alert("Input invalid. Please enter a sequence of up to 8 binary digits (0 or 1)."); return; } const decimal = binStr.split("").reverse().reduce((acc, digit, index) => { return acc + digit * 2 ** index; }, 0);
  resultDiv.textContent = `The decimal equivalent of ${binStr} is ${decimal}`; });