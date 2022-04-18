let bgMusicIsPlaying = true;

document.body.onload = () => {
    creaAudio("../audio/MainMenuPacman.mp3");
}

let creaAudio = audio => {
    let tagAudio = document.createElement("audio");
    tagAudio.autoplay = true;
    tagAudio.loop = true;
    tagAudio.id = "bgMusic";
    tagAudio.volume = 0.15; // il volume è tra 0 e 1
    document.body.appendChild(tagAudio);

    let sourceTag = document.createElement("source");
    sourceTag.src = audio;
    sourceTag.type = "audio/mp3";
    document.getElementById("bgMusic").appendChild(sourceTag);
    bgMusicIsPlaying = true;
}

let playBgAudio = () => {
    document.getElementById("bgMusic").play();
    document.getElementById("gestBgAudio").textContent = "MUTA AUDIO";
    bgMusicIsPlaying = true;
}

let stopBgAudio = () => {
    document.getElementById("bgMusic").pause();
    document.getElementById("gestBgAudio").textContent = "ATTIVA AUDIO";
    bgMusicIsPlaying = false;
}

document.getElementById("gestBgAudio").onclick = () => {
    if (bgMusicIsPlaying) stopBgAudio();
    else playBgAudio();
}