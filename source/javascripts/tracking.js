var targets = {
  ".graduates-slider .slick-prev": "Clicked Grads Slider",
  ".graduates-slider .slick-next": "Clicked Grads Slider",
  ".curriculum-slider .slick-prev": "Clicked Curriculum Slider",
  ".curriculum-slider .slick-next": "Clicked Curriculum Slider",
  ".graduates-video": "Watched Alumni Video",
  "[data-track]": null,
}

var properties = {"Course Type": "Offline"};

$(document).ready(function(){
  trackClickEvents(targets, properties);
});
