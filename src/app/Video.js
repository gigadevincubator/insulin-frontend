import React from 'react';


export default class Video extends React.Component {
    //function below adds a div inside the main video div, containing a videoPlayer.


    createVideo(src) {
        //creating main div, video tag, and styling video.
        var innerDiv = document.createElement('div');
        var videoElement = document.createElement('video')
        videoElement.src = src;
        videoElement.muted = true;
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.playsinline = true;
        videoElement.style.objectFit = "cover";
        videoElement.style.borderRadius = "5%";
        videoElement.style.height = this.props.h;
        videoElement.style.width = this.props.w;
        videoElement.id = "videoPlayer";

        //create progressBar
        var videoProgressBar = document.createElement("hr");
        videoProgressBar.id = "progressBar";
        videoProgressBar.style.position = "relative";
        videoProgressBar.style.top = "-7vmin";
        videoProgressBar.style.width = "80vmin";
        videoProgressBar.style.height = "0.5vmin";
        var position = 10;
        videoProgressBar.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) " + position + "%, rgba(255,255,255,0.5) " + position + "%, rgba(255,255,255,0.5) 100%)";
        videoProgressBar.style.borderRadius = "15%";
        videoProgressBar.style.border = "none";

        //create sound playback icon.
        var soundIcon = document.createElement("img");
        soundIcon.src = "https://p7.hiclipart.com/preview/67/795/616/computer-icons-scalable-vector-graphics-mute-off-sound-off-icon.jpg";
        soundIcon.id = "soundIcon";
        soundIcon.style.width = "5vmin";
        soundIcon.style.position = "relative";
        soundIcon.style.top = "-90vmin"
        soundIcon.style.left = "35vmin"
        soundIcon.style.background = "rgba(255,255,255,.5)";
        soundIcon.style.borderRadius = "50%";
        soundIcon.style.padding = "2vmin"

        // adding event listeners
        videoElement.addEventListener('touchend', this.handleClick.bind(this), false);
        videoElement.addEventListener('click', this.handleClick.bind(this), false);
        innerDiv.appendChild(videoElement);
        innerDiv.appendChild(videoProgressBar);
        innerDiv.addEventListener('touchend', this.handleClick.bind(this), false);
        soundIcon.addEventListener('touchend', this.handleClickMute.bind(this), false);
        soundIcon.addEventListener('click', this.handleClickMute.bind(this), false);

        //adding div with video and sound icon to the main div.
        document.getElementById("videoDiv").appendChild(innerDiv);
        document.getElementById("videoDiv").appendChild(soundIcon);


    }
    //handle click on PC/tap on phone.
    handleClick() {
        var myVideo = document.getElementById("videoPlayer");
        if (myVideo.paused)
            myVideo.play();
        else
            myVideo.pause();
    }
    //handle mute/unmute on PC/mobile
    handleClickMute() {
        var myVideo = document.getElementById("videoPlayer");
        var soundIcon = document.getElementById("soundIcon");
        if (myVideo.muted) {
            myVideo.muted = false;
            soundIcon.src = "https://image.flaticon.com/icons/png/512/25/25695.png";
        } else {
            soundIcon.src = "https://p7.hiclipart.com/preview/67/795/616/computer-icons-scalable-vector-graphics-mute-off-sound-off-icon.jpg";
            myVideo.muted = true;
        }

    }
    //update the progress loop
    progressLoop() {
        setInterval(function () {
            var video = document.getElementById("videoPlayer");
            var position = Math.round((video.currentTime / video.duration) * 100);
            var progressBar = document.getElementById("progressBar");
            progressBar.style.background = "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) " + position + "%, rgba(255,255,255,0.5) " + position + "%, rgba(255,255,255,0.5) 100%)";
        });
    }
    componentDidMount() {
        this.createVideo(this.props.src);
        this.progressLoop();
    }
    render() {
        return <div id = "videoDiv" ></div>
    }
}