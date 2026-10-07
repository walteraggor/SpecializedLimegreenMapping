const FIRST_IMAGE = 'https://clipart.info/images/ccovers/1522453412Logo-Snapchat-Png.png';
const SECOND_IMAGE = 'https://th.bing.com/th/id/R.8d155b2e1f87f6104d939cfd4b62e9e7?rik=2VNWuTQje8i89Q&pid=ImgRaw&r=0';

let imageState = 0;

const imageElement = document.getElementById('myImage');
const audioElement = document.getElementById('myAudio');

function toggleImageAndAudio() {
  const hasAudio = Boolean(audioElement.getAttribute('src'));

  if (imageState === 0) {
    imageElement.src = SECOND_IMAGE;
    if (hasAudio) {
      // play() returns a promise that rejects if playback is blocked or the file is missing
      audioElement.play().catch(function(err) {
        console.warn('Audio could not play:', err);
      });
    }
    imageState = 1;
  } else {
    imageElement.src = FIRST_IMAGE;
    if (hasAudio) {
      audioElement.pause();
      audioElement.currentTime = 0;
    }
    imageState = 0;
  }
}

imageElement.addEventListener('click', toggleImageAndAudio);

audioElement.addEventListener('loadeddata', function() {
  console.log('Audio loaded');
});

audioElement.addEventListener('error', function() {
  console.warn('Audio failed to load. Check the src path.');
});
