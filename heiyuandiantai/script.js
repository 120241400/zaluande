var song = new Audio;
var isStopped = true;
var currentSong = 0;
var playlist = ["http://live.ximalaya.com/radio-first-page-app/live/1011/64.m3u8?/忘情一台","http://live.ximalaya.com/radio-first-page-app/live/53/64.m3u8?/忘情二台","http://live.ximalaya.com/radio-first-page-app/live/538/64.m3u8?/忘情三台","http://live.ximalaya.com/radio-first-page-app/live/2069/64.m3u8?/忘情四台","http://live.ximalaya.com/radio-first-page-app/live/2125/64.m3u8?/忘情五台","http://live.ximalaya.com/radio-first-page-app/live/802/64.m3u8?/忘情六台","http://live.ximalaya.com/radio-first-page-app/live/608/64.m3u8?/忘情七台","http://live.ximalaya.com/radio-first-page-app/live/1739/64.m3u8?/忘情八台"];
var playlistVisible = false;

function skip(to) {
	if (to == 'prev') {
		stop();
		currentSong = (--currentSong)%playlist.length;
		if (currentSong < 0) {
			currentSong += playlist.length;
		}
		playpause();
	}
	else if (to == 'next') {
		stop();
		currentSong = (++currentSong)%playlist.length;
		playpause();
	}
}

function playpause() {
	if (!song.paused) {
		song.pause();
		document.getElementById("glow").classList.add("disable-animation");
	}
	else {
	if (isStopped) {
			song.src = playlist[currentSong];
		}
		song.play();
		songFile = playlist[currentSong].split("/");
		songName = document.getElementById("songName");
		songName.innerHTML = songFile[songFile.length - 1];
		document.getElementById("glow").classList.remove("disable-animation");
		isStopped = false;
	}
}

function stop() {
	song.pause();
	document.getElementById("glow").classList.add("disable-animation");
	song.currentTime = 0;
	document.getElementById("seek").value = 0;
	isStopped = true;
	document.getElementById("songName").innerHTML = "Coding and Stuff";
}

function setPos(pos) {
	song.currentTime = pos;
}

function mute() {
	if (song.muted) {
		song.muted = false;
		document.getElementById('mute').className = "fa fa-volume-up";
	}
	else {
		song.muted = true;
		document.getElementById('mute').className = "fa fa-volume-off";
	}
}

function setVolume(volume) {
	song.volume = volume;
}

function togglePlaylist() {
	if (playlistVisible) {
		document.getElementById('playlist').className = "hide";
		document.getElementById('player').className = "";
		playlistVisible = false;
	}
	else {
		document.getElementById('player').className = "hide";
		document.getElementById('playlist').className = "";
		playlistVisible = true;
	}
}

function addList() {
	sourceUrl = document.getElementById('sourceUrl').value;
	sourceUrl.split(",").forEach((file) => {
		fileUrl = file.trim();
		if (fileUrl != "" && playlist.indexOf(fileUrl) == -1) {
			parent = document.getElementById('list');
			listItem = document.createElement('div');
			listItem.setAttribute('class','list-item');

			wrapper = document.createElement('div');
			wrapper.setAttribute('class','wrap-text');

			span = document.createElement('span');
			span.innerHTML = fileUrl;

			wrapper.appendChild(span);
			listItem.appendChild(wrapper);

			btn = document.createElement('button');
			btn.setAttribute('onclick','removeList(this)');
			btn.innerHTML = '×';

			listItem.appendChild(btn);
			parent.appendChild(listItem);
			playlist.push(fileUrl);
			document.getElementById('sourceUrl').value = '';
		}
	});
}

function removeList(item) {
	index = playlist.indexOf(item.parentElement.firstChild.innerText);
	if (index != -1){
		playlist.splice(index,1);
		item.parentElement.remove();
	}
}

song.addEventListener('error', function(){
	stop();
	document.getElementById("songName").innerHTML = "Error Loading Audio";
});

song.addEventListener('timeupdate', function() {
	curtime = parseInt(song.currentTime,10);
	document.getElementById('seek').max = song.duration;
	document.getElementById('seek').value = curtime;
});

song.addEventListener("ended", function() {
	song.pause();
	song.currentTime = 0;
	document.getElementById('seek').value = 0;
	if ((currentSong + 1) >= playlist.length) {
		currentSong = 0;	
	}
	else {
		currentSong++;
	}
	stop();
	song.src = playlist[currentSong];
	playpause();
});

var input = document.getElementById("sourceUrl");
input.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		addList();
	}
});
