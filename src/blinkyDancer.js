
var makeBlinkyDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  //so we must keep a copy of the old version of this function
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work
  var oldStep = this.step;
  console.log('oldStep' + oldStep);
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// this is the actual DANCE STEP
makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  // this.step();
  makeDancer.prototype.step.call(this);
  // console.log('makeDancer' + this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  this.$node.toggle();
};