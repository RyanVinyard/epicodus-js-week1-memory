fuction Memory(name) {
  this.card = name;
  this.number = ['1', '1', '2', '2', '3', '3', '4', '4', '5', '5', '6', '6', '7', '7', '8', '8', '9', '9', '10', '10'];
  this.cardFlip = false;
  this.previousCard = -2;
};

Memory.prototype.randomizeNumber = function() {

}
exports.memoryModule = Memory;
