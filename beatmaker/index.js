class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playbtn = document.querySelector(".btn-play");
    this.kickAudio = document.querySelector(".kick-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.index = 0;
    this.bpm = 500;
    this.isPlaying = null;
    this.muteBTns = document.querySelectorAll(".mute");
  }
  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    activeBars.forEach((bar) => {
      bar.style.animation = `playtrack 0.3s alternate ease-in-out 2`;
      if (bar.classList.contains("active")) {
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.kickAudio.currentTime = 0;
          this.hihatAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.kickAudio.currentTime = 0;
          this.snareAudio.play();
        }
      }
    });
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    if (!this.isPlaying) {
      this.isPlaying = setInterval(() => {
        this.repeat();
      }, interval);
      this.playbtn.innerText = "Stop";
    } else {
      clearInterval(this.isPlaying);
      this.isPlaying = null;
      this.playbtn.innerText = "Play";
    }
  }
  activePad() {
    this.classList.toggle("active");
  }
  mute(e) {
    console.log(e.target);
    const muteIndex = e.target.getAttribute("data-track");
    e.target.classList.toggle("active");
    if (e.target.classList.contains("active")) {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 0;
          break;
        case "1":
          this.hihatAudio.volume = 0;
          break;
        case "2":
          this.snareAudio.volume = 0;
          break;
      }
    } else {
      switch (muteIndex) {
        case "0":
          this.kickAudio.volume = 1;
          break;
        case "1":
          this.hihatAudio.volume = 1;
          break;
        case "2":
          this.snareAudio.volume = 1;
          break;
      }
    }
  }
}

const drumKit = new DrumKit();
drumKit.playbtn.addEventListener("click", function () {
  drumKit.start();
  drumKit.pads.forEach((pad) => {
    pad.addEventListener("click", drumKit.activePad);
    pad.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  });
});

drumKit.muteBTns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    drumKit.mute(e);
  });
});
