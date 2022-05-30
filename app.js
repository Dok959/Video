'use strict';

const preloader = document.querySelector('.preloader');
const videoBg = document.querySelector('.bg-video');
const toggleBtn = document.querySelector('.switch-btn');

toggleBtn.addEventListener('click', () => {
	toggleBtn.classList.toggle('slide');
	videoBg.paused === true ? videoBg.play() : videoBg.pause();
});

window.addEventListener('load', () => {
	preloader.classList.add('preloader--hide');
});
