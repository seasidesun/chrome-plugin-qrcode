window.onload = function () {
    //https://github.com/davidshimjs/qrcodejs
    var defaultConfig = {
        text: 'https://github.com/davidshimjs/qrcodejs',
        width: 230,
        height: 230,
        colorDark : '#000000',
        colorLight : '#ffffff'
    }
    new QRCode(document.getElementById('qrcode'), defaultConfig);
    chrome.tabs && chrome.tabs.getSelected && chrome.tabs.getSelected(null, function (tab) { 
        defaultConfig.text = tab.url;
        new QRCode(document.getElementById('qrcode'), defaultConfig);
    });
}
