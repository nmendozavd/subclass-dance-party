var BlinkyDancer2 = function(top, left, timeBetweenSteps) {

  Dancer.call(this, top, left, timeBetweenSteps);

};
BlinkyDancer2.prototype = Object.create(Dancer.prototype);
BlinkyDancer2.prototype.constructor = BlinkyDancer2;

// this is the actual DANCE STEP
BlinkyDancer2.prototype.step = function() {

  Dancer.prototype.step.call(this);
  this.$node.animate({left: '700px', top: '550px'});
  // this.$node.animate({});
  //this.$node
};