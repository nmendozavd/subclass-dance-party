
var BlinkyDancer = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);

};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {

  Dancer.prototype.step.call(this);

  this.$node.animate({top: '600px', left: '450px'});
  //this.$node.animate({});

  // this.$node;
};