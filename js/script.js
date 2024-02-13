const words = "spiral_shenanigans";

const jitter = document.getElementById("jitter");
const jitter2 = document.getElementById("jitter2");
const jitter3 = document.getElementById("jitter3");

const AnimationDuration = 4000;

const characters = words.split("").forEach((char, i) => {
  function createElement(offset) {
    const div = document.createElement("div");
    const AnimationDelay = `-${i * (AnimationDuration / 16) - offset}ms`;

    div.textContent = char;
    div.classList.add("character");
    div.style.animationDelay = AnimationDelay;

    return div;
  }

  jitter.append(createElement(0));
  jitter2.append(createElement(-1 * (AnimationDuration / 2)));
//   jitter3.append(createElement(-2 * (AnimationDuration / 3)));
});
