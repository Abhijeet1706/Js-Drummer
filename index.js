function removeTransition(event) {
    if (event.propertyName !== 'transform') return; // skip it if it's not a transform
    event.target.classList.remove('playing');
  }

  function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return; // Stops the function from running

    key.classList.add('playing');
    audio.currentTime = 0; // Rewind to the start
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);