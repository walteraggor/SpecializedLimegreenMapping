const FIRST_IMAGE = 'https://clipart.info/images/ccovers/1522453412Logo-Snapchat-Png.png';
const SECOND_IMAGE = 'second.svg'; // local file; replace with your own image if you like

document.addEventListener('DOMContentLoaded', function() {
  const imageElement = document.getElementById('myImage');
  const audioElement = document.getElementById('myAudio');

  if (!imageElement) {
    console.error('Element #myImage not found.');
    return;
  }

  let imageState = 0;

  function hasAudio() {
    return Boolean(audioElement && audioElement.getAttribute('src'));
  }

  function toggleImageAndAudio() {
    if (imageState === 0) {
      imageElement.src = SECOND_IMAGE;
      if (hasAudio()) {
        // play() rejects if playback is blocked or the file is missing
        audioElement.play().catch(function(err) {
          console.warn('Audio could not play:', err);
        });
      }
      imageState = 1;
    } else {
      imageElement.src = FIRST_IMAGE;
      if (hasAudio()) {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
      imageState = 0;
    }
  }

  imageElement.addEventListener('click', toggleImageAndAudio);

  imageElement.addEventListener('error', function() {
    console.warn('Image failed to load:', imageElement.src);
  });

  if (audioElement) {
    audioElement.addEventListener('loadeddata', function() {
      console.log('Audio loaded');
    });
    audioElement.addEventListener('error', function() {
      if (hasAudio()) {
        console.warn('Audio failed to load. Check the src path.');
      }
    });
  }
});
