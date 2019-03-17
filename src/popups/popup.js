window.onload = function () {
    // https://github.com/davidshimjs/qrcodejs
    var defaultConfig = {
        text: '',
        width: 230,
        height: 230,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    }
    var getCurrent = chrome.tabs && chrome.tabs.getSelected && chrome.tabs.getSelected || function () {}

    genQrcode()

    var urlBox = document.getElementById('text-url');
    document.addEventListener('keydown', function (e) {
        if (e.keyCode != 13) return;
        e.preventDefault();

        genQrcode(urlBox.value)
        autoSetBoxHeight(urlBox)
    });

    function genQrcodeOfCur () {
        getCurrent(function (tab) {
            if (!tab || !tab.url) return
            genQrcode(tab.url)
        });
    }

    var qrcode
    function genQrcode (url) {
        if (!url) return genQrcodeOfCur()
        else {
            if (qrcode) {
                qrcode.clear();
                qrcode.makeCode(url);
            } else {
                defaultConfig.text = url;
                qrcode = new QRCode(document.getElementById('qrcode'), defaultConfig);
            }
        }
    }

    function autoSetBoxHeight (box) {
        box.style.height = 'auto'
        box.style.height = box.scrollHeight + 'px';
    }
}
