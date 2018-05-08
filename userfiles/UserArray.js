function UserArray() {
  this.array = [];
}

UserArray.prototype.add = function(data) {
  this.array.push(data);
};
UserArray.prototype.remove = function(data) {
  this.array = this.array.filter(function(current) {
    return current !== data;
  });
};
UserArray.prototype.search = function(data) {
  var foundIndex = this.array.indexOf(data);
  if(~foundIndex) {
    return foundIndex;
  }

  return null;
};
UserArray.prototype.getAtIndex = function(index) {
  return this.array[index];
};
UserArray.prototype.length = function() {
  return this.array.length;
};
UserArray.prototype.print = function() {
  console.log(this.array.join(' '));
};