// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img');
  const hornAudio = document.querySelector('audio');

  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', () => {
    const horn = hornSelect.value;
    hornImage.src = `assets/images/${horn}.svg`;
    hornAudio.src = `assets/audio/${horn}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const volume = volumeSlider.value;
    hornAudio.volume = volume / 100;

    let level = 0;
    if (volume >= 67) {
      level = 3;
    } else if (volume >= 33) {
      level = 2;
    } else if (volume >= 1) {
      level = 1;
    }
    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
  });

  playButton.addEventListener('click', () => {
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}