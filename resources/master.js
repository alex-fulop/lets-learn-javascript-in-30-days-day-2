const slider = document.getElementById("slider");
const body = document.querySelector("body");
const saturation = 100;
const lightness = 50;

slider.addEventListener("input", (e) => {
    let value = e.target.value;
    let color = `hsl(${value},${saturation}%,${lightness}%)`;
    body.style.setProperty("--bg-color", color);
});