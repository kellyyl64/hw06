var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false
});

document.querySelector("#play").addEventListener("click", function(){
	console.log("Play Video")
	video.play();
	document.querySelector("#volume".innerHTML = video.volume * 100 + "%")
});

document.querySelector("#pause").addEventListener("click",function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click",function() {
	console.log("Slow Down Video");
	video.playbackRate *= 0.95
	console.log("Speed =", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click",function() {
	console.log("Speed up Video");
	video.playbackRate /= 0.95
	console.log("Speed =", video.playbackRate)	
});	
		
document.querySelector("#skip").addEventListener("click",function() {	
	console.log("Skip Ahead");
	video.currentTime += 15
	if (video.currentTime >= video.duration)
		video.currentTime = 0
	console.log("Video Current Time is", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function () {
	if (video.muted !== true) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = (document.querySelector("#slider").value)/100;
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});