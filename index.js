const employee = {
    name: "Heath",
    streetAdress: "Broadway",
}

function  updateEmployeeWithKeyAndValue(object, key, value){
    const newobj = {...object}
    newobj[key] = value;
    return newobj;
}

function  destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value
    return object
}







function  deleteFromEmployeeByKey(object, key){
   const newobj = {...object}
    delete newobj[key]
    return newobj
}

// console.log(deleteFromEmployeeByKey(luisobj, "favoriteMovie"))
// console.log(luisobj)
function destructivelyDeleteFromEmployeeByKey(object, key){
    delete object[key]
    return object
}