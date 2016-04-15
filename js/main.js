var $boxTwo = $('.box-2');
var $boxThree = $('.box-3');
var $boxFour = $('.box-4');
var $boneOne = $('.bone-1');
var $boneTwo = $('.bone-2');

$boxTwo.waypoint(function (direction) {
  if (direction == 'down') {
    $boxTwo.addClass('box-animate');
  } else {

  }
}, { offset: '50%'});

$boxThree.waypoint(function (direction) {
  if (direction == 'down') {
    $boxThree.addClass('box-animate');
  } else {

  }
}, { offset: '50%'});

$boxFour.waypoint(function (direction) {
  if (direction == 'down') {
    $boxFour.addClass('box-animate');
  } else {

  }
}, { offset: '50%'});

$boneOne.waypoint(function (direction) {
  if (direction == 'down') {
    $boneOne.addClass('bone-animate');
  } else {
    $boneOne.removeClass('bone-animate');
  }
}, { offset: '50%'});

$boneTwo.waypoint(function (direction) {
  if (direction == 'down') {
    $boneTwo.addClass('bone-animate');
  } else {
    $boneTwo.removeClass('bone-animate');
  }
}, { offset: '50%'});
