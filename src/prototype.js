const Plane = () => {
  this.blood = 100;
  this.attackLevel = 1;
  this.defenseLevel = 1;
};

const plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;

const clonePlane = Object.create(plane);
console.log(clonePlane);

if (typeof Object.create !== "function") {
  Object.create = function(obj) {
    const F = function() {};
    F.prototype = obj;
    return new F();
  };
}
