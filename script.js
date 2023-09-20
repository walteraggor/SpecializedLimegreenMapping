// Initialize a variable to keep track of the image state
let imageState = 0;

// Get references to the image and audio elements
const imageElement = document.getElementById('myImage');
const audioElement = document.getElementById('myAudio');

// Function to toggle the image and audio
function toggleImageAndAudio() {
  if (imageState === 0) {
    // If the current image state is 0 (first image displayed)
    imageElement.src = 'https://th.bing.com/th/id/R.8d155b2e1f87f6104d939cfd4b62e9e7?rik=2VNWuTQje8i89Q&pid=ImgRaw&r=0';
    audioElement.play();
    // Play the audio
    imageState = 1;
    // Update the image state to 1 (second image displayed)
  } else {
    // If the current image state is not 0 (second image displayed)
    imageElement.src = 'https://clipart.info/images/ccovers/1522453412Logo-Snapchat-Png.png';
    audioElement.pause();
    // Pause the audio
    audioElement.currentTime = 0;
    // Reset audio playback position to the beginning
    imageState = 0;
    // Update the image state to 0 (first image displayed)
  }
}

// Add an event listener to the image element
imageElement.addEventListener('click', toggleImageAndAudio);

// Add an event listener to the audio element for loadeddata event
audioElement.addEventListener('loadeddata', function() {
  // This event will be triggered when the audio is loaded and can be played
  console.log('Audio loaded');
});
