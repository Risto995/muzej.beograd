window.addEventListener('DOMContentLoaded', (event) => {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function (event) {
            event.target.src = event.target.src.replace('v0', 'V3');
        });
    }
});