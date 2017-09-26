var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object[key] = value;
return object;
}

function Objects deleteFromObjectByKey(object, key){
  var anotherObj = Object.assign({}, object);
  delete anotherObj[key];
  return anotherObj;
}