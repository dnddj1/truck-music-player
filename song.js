let input = document.getElementById("headshell");
let audio = document.getElementById("player");
let playButton = document.getElementById("play-button");

function togglePlayPause() {
    let tsElement = document.querySelector('.ts'); // Get the element that needs to bounce
    let envelopeElement = document.querySelector('.envelope-container'); // Get the envelope container
    let truckContainer = document.querySelector('.truck-container');

    if (audio.paused) {
        audio.play();
        // audio.currentTime = 0;
        input.checked = true; // Sync headshell
        playButton.classList.remove('play');
        playButton.classList.add('pause');
        tsElement.classList.add('bounce-animation'); // Add bounce animation
        envelopeElement.classList.add('envelope-animation'); // Add envelope animation

    } else {
        audio.pause();
        input.checked = false; // Sync headshell
        playButton.classList.remove('pause');
        playButton.classList.add('play');
        tsElement.classList.remove('bounce-animation'); // Remove bounce animation
    }
}

playButton.classList.add('play');
input.addEventListener("click", togglePlayPause);
playButton.addEventListener("click", togglePlayPause);

function audioVolume(amount) {
  let changevolume = document.getElementsByTagName("audio")[0];
  changevolume.volume = amount;
}

audio.addEventListener('timeupdate', function() {
    let percentage = (audio.currentTime / audio.duration) * 100;
    document.getElementById('music-bar').style.width = percentage + '%';
    document.querySelector('.truck-container').style.left = percentage - 15 + '%'; // Move truck based on music duration
});