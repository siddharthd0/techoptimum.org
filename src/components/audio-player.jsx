import { useEffect, useState } from "react";

export default function AudioPlayer({ playPauseStatus, audioFileURI }) {
  const [audioState, setAudioState] = useState(null);
  useEffect(() => {
    const audioPlayer = window.document.querySelector(".audio-player");
    const audio = new Audio(audioFileURI);
  
    audio.addEventListener(
      "loadeddata",
      () => {
        audioPlayer.querySelector(".time .length").textContent = getTimeCodeFromNum(
          audio.duration
        );
        audio.volume = .75;
      },
      false
    );

    setAudioState(audio)
  
    const timeline = audioPlayer.querySelector(".timeline");
    timeline.addEventListener("click", e => {
      const timelineWidth = window.getComputedStyle(timeline).width;
      const timeToSeek = e.offsetX / parseInt(timelineWidth) * audio.duration;
      audio.currentTime = timeToSeek;
    }, false);
  
  
    setInterval(() => {
      const progressBar = audioPlayer.querySelector(".progress");
      progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
      const thumb = audioPlayer.querySelector(".thumb")
      thumb.style.marginLeft = audio.currentTime / audio.duration * 100 - 1 + "%";
      audioPlayer.querySelector(".time .current").textContent = getTimeCodeFromNum(
        audio.currentTime
      );
    }, 500);
  
  
    function getTimeCodeFromNum(num) {
      let seconds = parseInt(num);
      let minutes = parseInt(seconds / 60);
      seconds -= minutes * 60;
      const hours = parseInt(minutes / 60);
      minutes -= hours * 60;

      if (minutes === 0) {
        minutes = "00"
      }
  
      if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
      return `${String(hours).padStart(2, 0)}:${minutes}:${String(
        seconds % 60
      ).padStart(2, 0)}`;
    }
  }, [])

  useEffect(() => {
    if (audioState) {
      if (playPauseStatus === "play") {
        audioState.play();
      } else {
        audioState.pause();
      }
    }
  }, [playPauseStatus, audioState])
  
  
  return (
    <>
      <div style={{ width: "50px", height: "50px" }}></div>
      <div className="audio-player">
        <div className="timeline">
          <div className="progress"></div>
          <div className="thumb"></div>
        </div>
        <div className="controls">
          <div className="time">
            <div className="current">0:00</div>
            <div className="length"></div>
          </div>
        </div>
      </div>
    </>
  )
}