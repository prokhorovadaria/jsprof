const container = document.querySelector('.container');

const videoEl = document.createElement('video');
videoEl.src = 'media/Море.mp4';
videoEl.style.border = '15px solid pink';
container.appendChild(videoEl);

const videoplayerWrapper = document.createElement('div');
videoplayerWrapper.classList.add('videoplayerWrapper');
container.appendChild(videoplayerWrapper);


const playBtn = document.createElement('img');
playBtn.src = 'media/play-solid.svg';
playBtn.classList.add('button-play');
playBtn.style.width = '30px';
videoplayerWrapper.style.marginTop = '15px';
videoplayerWrapper.appendChild(playBtn);

const pauseBtn = document.createElement('img');
pauseBtn.src = 'media/circle-pause-solid.svg';
pauseBtn.classList.add('button-pause');
pauseBtn.style.width = '40px';
pauseBtn.style.marginLeft = '35px';
videoplayerWrapper.appendChild(pauseBtn);

const volumeControl = document.createElement('div');
videoplayerWrapper.appendChild(volumeControl);
const volumeEl = document.createElement('input');
volumeEl.classList.add('volume');
volumeEl.type = 'range';
volumeEl.min = 0;
volumeEl.max = 100;
volumeEl.value = 10;
volumeEl.style.backgroundColor = '#FF69B4';
volumeControl.appendChild(volumeEl);

const uiDiv = document.createElement('div');
uiDiv.classList.add('ui');
container.appendChild(uiDiv);

const progressEl = document.createElement('input');
progressEl.type = 'range';
progressEl.classList.add('progress');
progressEl.style.width = '360px';
progressEl.min = 0;
progressEl.max = 100;
progressEl.value = 0;
uiDiv.appendChild(progressEl);



volumeEl.addEventListener('change', (e) => {
    videoEl.volume = e.target.value / 10;
});
    
playBtn.addEventListener('click', (e) => {
    videoEl.play();
});
    
pauseBtn.addEventListener('click', (e) => {
    videoEl.pause();
});
    
progressEl.addEventListener('change', (e) => {
    videoEl.currentTime = videoEl.duration * (e.target.value / 100);
});

videoEl.addEventListener('timeupdate', function (e) {
    timeEl.innerText = videoEl.currentTime;
    progressEl.value = Math.round(videoEl.currentTime / videoEl.duration * 100);
});
