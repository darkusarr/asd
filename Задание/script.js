function areaOfTriangle(obj) {
  var a = 1 * obj.st1.value;
  var b = 1 * obj.st2.value;
  var c = 1 * obj.st3.value;
  var p = (a + b + c) / 2;
  var s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  obj.res1.value = s.toFixed(2);
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomint(obj){
  obj.res2.value = getRandomInt(min = 1* obj.min.value, max = 1* obj.max.value);  
}
