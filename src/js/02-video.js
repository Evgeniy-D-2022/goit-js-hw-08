import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = "videoplayer-current-time";

const setCurrentTime = function(data) {
    // data is an object containing properties specific to that event
    localStorage.setItem(currentTime, data.seconds)
};

player.on('timeupdate', throttle(setCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem(currentTime));


