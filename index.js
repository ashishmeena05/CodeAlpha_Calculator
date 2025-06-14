const display = document.getElementById("display");
const historyList = document.getElementById("historyList");
const historyContainer = document.getElementById("historyContainer");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function addToHistory(entry) {
  const li = document.createElement("li");
  li.textContent = entry;
  historyList.appendChild(li);
}

function clearHistory() {
  historyList.innerHTML = "";
}

function toggleHistory() {
  if (historyContainer.style.display === "none" || historyContainer.style.display === "") {
    historyContainer.style.display = "block";
  } else {
    historyContainer.style.display = "none";
  }
}
