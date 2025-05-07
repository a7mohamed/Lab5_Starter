// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textInput = document.getElementById('text-to-speak');
  const button = document.querySelector('button');
  const faceImage = document.querySelector('img');

  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '';

    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  button.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text === '') return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[voiceSelect.value];

    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
    });

    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
    });

    synth.speak(utterance);
  });
}
