import { useEffect, useState } from "react";

export default function AudioPlayer({ playPauseStatus, audioFileURI }) {
	const [audioState, setAudioState] = useState(null);

	const getTimeCodeFromNum = (num) => {
		const t = parseInt(num);
		const seconds = (t % 3600) % 60;
		const minutes = ((t % 3600) - seconds) / 60;
		const hours = (t - (minutes * 60) - seconds) / 3600;
		const toDoubleDigit = (n) => { return (n >= 10) ? n.toString() : "0" + n };
		return ((hours > 0) ? hours.toString() + ":" : "") + toDoubleDigit(minutes) + ":" + toDoubleDigit(seconds);
	};

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
