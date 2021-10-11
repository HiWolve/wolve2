(function () {
  var SELECTOR_SCREEN_ELEMENT = '.screen';
  var SELECTOR_SWITCHER_TV = '#switcher-tv';
  var audio = new Audio("FlippingChannelsAudio.mp3");


  var isTurnedOn = true;

  var timeline;



  function buildTimeline() {
    timeline = new TimelineMax({
      paused: false  //change to true to have tv already on when website loads
    });


    timeline.
      to(SELECTOR_SCREEN_ELEMENT, .2, {
        width: '100vw',
        height: '2px',
        background: '#ffffff',
        ease: Power2.easeOut
      }).

      to(SELECTOR_SCREEN_ELEMENT, .2, {
        width: '0',
        height: '0',
        background: '#ffffff'
      });

  }

  function toggleSwitcherTV() {
    if (isTurnedOn) {
      timeline.restart();
      audio.muted = true;


    }

    if (!isTurnedOn) {
      timeline.reverse();
      audio.loop = true;
      audio.muted = false;
      audio.play();


    }

    isTurnedOn = !isTurnedOn;
  }

  // Initialize
  $(document).ready(buildTimeline);

  // Bindings
  $(document).on('click', SELECTOR_SWITCHER_TV, function () {
    toggleSwitcherTV();
  });
})();
