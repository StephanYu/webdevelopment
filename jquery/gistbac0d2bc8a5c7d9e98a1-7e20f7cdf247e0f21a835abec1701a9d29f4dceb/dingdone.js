// Intro to basic constructor functions
function Bell(imageUrl, soundUrl) {
  this.$view = $('<div class="bell"><img src="' + imageUrl + '"><div class="fuse"></div></div>')
  this.sound = new Howl({
    urls: [soundUrl]
  });
  this.delayedRing = function(callback) {
    var me = this;

    this.$view.children('.fuse').css({
      "background-color": "#ff0000",
      "height": "20px",
      "width": "100%"
    }).animate({
      "width": "0px"
    }, 2000);

    setTimeout(function() {
      me.ring();
      if (callback) {
        callback();
      }
    }, 2000);
  };
  this.ring = function(callback) {
    this.sound.play();
    if (callback) {
      callback();
    }
  };
  var me = this;
  this.$view.on('click', function() {
    me.delayedRing();
  })
  $('#bells').append(this.$view);
}

var gong = new Bell('img/gong.jpg', 'sounds/gong.mp3');
var cowbell = new Bell('img/cowbell.jpg', 'sounds/cowbell.mp3');
var bell = new Bell('img/bell.jpg', 'sounds/bell.mp3');
var doorbell = new Bell('img/doorbell.jpg', 'sounds/doorbell.mp3');
var deskbell = new Bell('img/deskbell.jpg', 'sounds/deskbell.mp3');

$('.ding').click(function() {
  gong.delayedRing(function() {
    cowbell.delayedRing(function() {
      deskbell.delayedRing(function() {
        doorbell.delayedRing(function() {
          bell.delayedRing()
        })
      })
    })
  })
});
