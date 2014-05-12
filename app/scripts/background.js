'use strict';

console.log('begin of background.js');

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('main.html', {
        id: 'Magnum8ConfigWindowID',
        bounds: {
            width: 800,
            height: 600
        },
        minWidth: 800,
        minHeight: 600
    });
});

console.log('\'Allo \'Allo! Event Page');
