import endingSound from "../assets/sounds/ending_dpr_live.m4a";


// Audio setup
let audioContext = null;
let sourceNode = null;
let gainNode = null;
let audioBuffer = null;
let endingSoundAudio = null;

// Preload HTML Audio element
const preloadEndingSound = () => {
    if (!endingSoundAudio) {
        endingSoundAudio = new Audio(endingSound);
        endingSoundAudio.preload = "auto";
        endingSoundAudio.volume = 0.05;
        endingSoundAudio.load();
    }
};

// Preload immediately
preloadEndingSound();

// Start main audio (plays once)
export async function startAudio(audioFilePath) {
    if (audioContext) return;

    audioContext = new (window.AudioContext || window.webkitAudioContext)();

    const response = await fetch(audioFilePath);
    const arrayBuffer = await response.arrayBuffer();
    audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    gainNode = audioContext.createGain();
    gainNode.gain.value = 0.4;
    gainNode.connect(audioContext.destination);

    sourceNode = audioContext.createBufferSource();
    sourceNode.buffer = audioBuffer;
    sourceNode.connect(gainNode);
    sourceNode.start(0);
    
    // Ensure ending sound is preloaded
    preloadEndingSound();
}

// Page transition sound and visual effect
export default async function PageSwitch(callback) {
    // Prevent multiple transitions at once
    if (PageSwitch.isTransitioning) return;
    PageSwitch.isTransitioning = true;

    document.body.style.cursor = "wait";

    // Stop main sound if it exists
    if (sourceNode) {
        try { sourceNode.stop(); } catch {}
        sourceNode = null;
    }

    // Wait for audio to be ready
    if (endingSoundAudio) {
        // If audio isn't loaded yet, wait for it
        if (!endingSoundAudio.duration || isNaN(endingSoundAudio.duration)) {
            await new Promise((resolve) => {
                endingSoundAudio.addEventListener('loadedmetadata', resolve, { once: true });
            });
        }
    }

    // Get audio duration
    let audioDuration = 750;
    if (endingSoundAudio && endingSoundAudio.duration && !isNaN(endingSoundAudio.duration)) {
        audioDuration = endingSoundAudio.duration * 1000;
    }

    // Start audio playback
    if (endingSoundAudio) {
        endingSoundAudio.currentTime = 0;
        try {
            await endingSoundAudio.play();
        } catch (error) {
            console.error("Audio play failed:", error);
        }
    }

    // Calculate transition timings based on audio duration
    const firstTransition = audioDuration * 0.30;
    const secondTransition = audioDuration * 0.60;
    
    // Visual transitions synced to audio (now everything starts together)
    setTimeout(() => {
        document.body.style.filter = "grayscale(100%) brightness(100%) contrast(200%)";
    }, firstTransition);
    
    setTimeout(() => {
        document.body.style.filter = "brightness(0%)";
    }, secondTransition);
    
    setTimeout(() => {
        document.body.style.filter = "none";
        document.body.style.cursor = "default";
        PageSwitch.isTransitioning = false;
        if (callback) callback();
    }, audioDuration);
}

PageSwitch.isTransitioning = false;