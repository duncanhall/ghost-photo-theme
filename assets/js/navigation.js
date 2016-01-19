var hammertime = new Hammer(document.body, {});
var anchor;

hammertime.on('swipeleft', function(event) {
    navigateToAdjacent('#prev-post-link');
});

hammertime.on('swiperight', function(event) {
    navigateToAdjacent('#next-post-link');
});

document.body.addEventListener('keydown', function(event) {
    if (event.keyCode === 39) {
        navigateToAdjacent('#prev-post-link');
    }
    else if (event.keyCode === 37) {
        navigateToAdjacent('#next-post-link');
    }
});

function navigateToAdjacent (id) {
    anchor = $(id);
    if (anchor && anchor.attr('href')) {
        window.location = anchor.attr('href');
    }
}
