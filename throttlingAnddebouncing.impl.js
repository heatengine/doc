let input = document.getElementById("name");
let debounceValue = document.getElementById("debounce-value");
let throttleValue = document.getElementById("throttle-value");

// Dummy API call function
const apiCall = (type) => {
  setTimeout(() => {
    type === "throttle"
      ? (throttleValue.innerHTML = input.value)
      : (debounceValue.innerHTML = input.value);
  }, 500);
};

// Debounce implementation
let debounceTimer;
const debounce = (apiCb, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(apiCb("debounce"), time);
};

// Throttling implementation
let throttleTimer;
const throttle = (callback, time) => {
  if (throttleTimer) return;
  throttleTimer = true;
  setTimeout(() => {
    callback("throttle");
    throttleTimer = false;
  }, time);
};

input.addEventListener(
  "input",
  () => {
    debounce(apiCall, 500);
    throttle(apiCall, 2000);
  },
  false
);
