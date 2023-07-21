function find_trig_ratios(angle) {
  var sin = Math.sin(angle);
  var cos = Math.cos(angle);
  var tan = Math.tan(angle);
  var csc = 1 / sin;
  var sec = 1 / cos;
  var cot = 1 / tan;

  return {
    sin: sin,
    cos: cos,
    tan: tan,
    csc: csc,
    sec: sec,
    cot: cot,
  };
}

var angles = [0, 30, 45, 60, 90];
var ratios = [];

for (var i = 0; i < angles.length; i++) {
  var angle = angles[i];
  var ratios_obj = find_trig_ratios(angle);
  ratios.push(ratios_obj);
}

console.log("Angle | Sin | Cos | Tan | Csc | Sec | Cot");
for (var i = 0; i < ratios.length; i++) {
  var angle = angles[i];
  var ratios_obj = ratios[i];

  console.log(
    angle + " | " +
    ratios_obj.sin + " | " +
    ratios_obj.cos + " | " +
    ratios_obj.tan + " | " +
    ratios_obj.csc + " | " +
    ratios_obj.sec + " | " +
    ratios_obj.cot
  );
}
