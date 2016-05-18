
if (window.location.pathname.indexOf ("/story/" > -1)) {

  alert ('download story');

  $(".btns").children ("div").append ('<div class="primary_btn download_story"><div class="btn_text"><span>Download</span></div><div class="disabled_tooltip_wrap"><div class="disabled_tooltip"><div class="tooltip_arrow border"></div><div class="tooltip_arrow"></div>Download all the photos from the story</div></div></div>');

  $("div.download_story div.btn_text").click (function () {

    for (var i=0; i<ThisLife.currentStory.moments.length; i++) {

       var moment = ThisLife.currentStory.moments[i];

       console.log ("Moment: " + moment.uid);
     }

  });
}