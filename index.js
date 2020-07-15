function updateObjectWithKeyAndValue(object, key, value){
  var newObj = object
  newObj[key] = value
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var fresh = object
  delete fresh[key]
  return fresh
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
