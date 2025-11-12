// Define all songs here with their volumes
const SONGS = {
    about: {path: require("../assets/sounds/looped_hawaii_yeek.m4a"), volume: 0.07},
    career: {path: require("../assets/sounds/eyes_of_rem.mp3"), volume: 0.008},
    contact: {path: require("../assets/sounds/a_heart_aflutter.mp3"), volume: 0.025},
    projects: {path: require("../assets/sounds/growing_anxiety.mp3"), volume: 0.012},
    music: {path: require("../assets/sounds/monochrome_echoes.mp3"), volume: 0.006},
};

let audioContext = null;
let currentSource = null;
let gainNode = null;
let currentSong = null;

// Play a looping song for a specific page
export async function playPageAudio(songName) {
    const songData = SONGS[songName];
    
    if (!songData) {
        console.error(`Song "${songName}" not found`);
        return;
    }

    const audioFilePath = songData.path;
    const volume = songData.volume;

    // If already playing this song, don't restart
    if (currentSong === audioFilePath && currentSource) {
        return;
    }

    // Stop any currently playing audio
    stopPageAudio();

    try {
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        if (audioContext.state === 'suspended') {
            await audioContext.resume();
        }

        const response = await fetch(audioFilePath);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        gainNode = audioContext.createGain();
        gainNode.gain.value = volume; // Use the song's specific volume
        gainNode.connect(audioContext.destination);

        currentSource = audioContext.createBufferSource();
        currentSource.buffer = audioBuffer;
        currentSource.loop = true;
        currentSource.connect(gainNode);
        currentSource.start(0);

        currentSong = audioFilePath;
    } catch (error) {
        console.error("Failed to play page audio:", error);
    }
}

// Stop the currently playing song
export function stopPageAudio() {
    if (currentSource) {
        try {
            currentSource.stop();
        } catch {}
        currentSource = null;
    }
    currentSong = null;
}

// Fade out and stop
export function fadeOutPageAudio(duration = 1000) {
    if (gainNode && currentSource) {
        const fadeSteps = 20;
        const stepTime = duration / fadeSteps;
        const volumeStep = gainNode.gain.value / fadeSteps;

        let step = 0;
        const fadeInterval = setInterval(() => {
            step++;
            gainNode.gain.value = Math.max(0, gainNode.gain.value - volumeStep);

            if (step >= fadeSteps) {
                clearInterval(fadeInterval);
                stopPageAudio();
            }
        }, stepTime);
    }
}