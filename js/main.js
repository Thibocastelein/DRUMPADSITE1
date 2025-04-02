const geluiden = {
    "A": document.getElementById("A"),
    "Z": document.getElementById("Z"),
    "E": document.getElementById("E"),
    "Q": document.getElementById("Q"),
    "S": document.getElementById("S"),
    "D": document.getElementById("D"),
    "W": document.getElementById("W"),
    "X": document.getElementById("X"),
    "C": document.getElementById("C"),
};

const lightDarkModeBtn = document.getElementById('lightdarkmode');
const body = document.body;
const presets = document.getElementById("presets");
const openpresets = document.getElementById("open-preset-screen");
const sluitpresets = document.getElementById("sluit-presets");
const presetsdropdown = document.getElementById('presets-dropdowns');
const pads = document.querySelectorAll('.pad');
const effect = document.getElementById('effect');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

document.addEventListener('keydown', (event) => {
    const pad = document.querySelector(`.pad[data-pad="${event.key.toUpperCase()}"]`);

    if (pad) {
        const soundId = pad.getAttribute('data-pad');
        const audio = document.getElementById(soundId);

        if (audio) {
            audio.currentTime = 0;
            audio.play();

            effect.classList.add('active');
            setTimeout(() => {
                effect.classList.remove('active');
            }, 300);

            pad.classList.add('actief');
            setTimeout(() => {
                pad.classList.remove('actief');
            }, 200);
        }
    }
});

lightDarkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

green.onclick = function () {
    pads.forEach(pad => {
        pad.classList.toggle('green-mode');
        effect.classList.toggle('green-mode');
    });
};

blue.onclick = function () {
    pads.forEach(pad => {
        pad.classList.toggle('blue-mode');
        effect.classList.toggle('blue-mode');
    });
};

openpresets.onclick = function () {
    presets.classList.add('active');
};

sluitpresets.onclick = function () {
    presets.classList.remove('active');
};

presetsdropdown.onchange = function () {
    const selectedValue = presetsdropdown.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
};