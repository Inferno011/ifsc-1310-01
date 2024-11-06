document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("backgroundMusic");
    const playButton = document.getElementById("playMusicButton");

    function togglePlay() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "Pause Music"; // Change the link text
        } else {
            audio.pause();
            playButton.textContent = "Play Music"; // Revert the link text
        }
    }

    playButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevents link from navigating
        togglePlay();
    });
});
