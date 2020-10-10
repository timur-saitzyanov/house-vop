$('._goto').click(function () {
	var el = $(this).attr('href').replace('#', '');
	var offset = 0;
	$('body,html').animate({ scrollTop: $('.' + el).offset().top + offset }, 500, function () { });

	if ($('.menu__body').hasClass('active')) {
		$('.menu__body,.icon-menu').removeClass('active');
		$('body').removeClass('lock');
	}
	return false;
});
$(window).scroll(function (event) {
	var s = 0 - $(this).scrollTop() / 3;
	$('.first-screen__image').css('transform', 'translate3d(0, ' + s + 'px, 0)');
});

var mediaPlayer = document.getElementById('video');
var playPauseButton = document.getElementById("play-pause");

mediaPlayer.addEventListener('playing', onPlay);
mediaPlayer.addEventListener('pause', onPause);
mediaPlayer.addEventListener("ended", resetVideo, false);

if (playPauseButton.addEventListener) {
	playPauseButton.addEventListener("click", playVideo, false)
} else if (playPauseButton.attachEvent) {
	playPauseButton.attachEvent("onclick", playVideo)
}

function onPlay(e) {
	document.getElementById('play-pause').className = "hidden";
}
function onPause(e) {
	document.getElementById('play-pause').className = "pause";
}

function playVideo() {
	if (mediaPlayer.paused === true) {
		mediaPlayer.play();
	} else {
		mediaPlayer.pause();
	}
}
function resetVideo() {
	this.load()
	document.getElementById('play-pause').className = "";
}
let iconMenu = document.querySelector(".menu-header__icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu-header__menu");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".menu-header__icon-menu");
	let menuBody = document.querySelector(".menu-header__menu");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();
function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 12,
		center: { lat: 59.5550, lng: 30.2022 },
	});
	// const geocoder = new google.maps.Geocoder();
	// document.getElementById("submit").addEventListener("click", () => {
	// 	geocodeAddress(geocoder, map);
	// });
}

