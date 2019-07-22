function deepClone(object){
	var newObject = {};
	for(var key in object){
		if(typeof object[key] === 'object'  && object[key] !== null ){
		 newObject[key] = deepClone(object[key]);
		}else{
		 newObject[key] = object[key];
		}
	}
	return newObject;
}

var personalDetail = {
	name : 'Nishant',
	address : {
	  location: 'xyz',
	  zip : '123456',
	  phoneNumber : {
	    homePhone: 8797912345,
	    workPhone : 1234509876
	  }
    },
    array: [1,2,3]
}

let cloned = deepClone(personalDetail);
let assign = Object.assign({}, personalDetail);
console.log(cloned);
console.log(assign);

// note the code above won't work with array since typeof Array === 'object'
// Object.assign({}, obj) and {..., obj} works as shallow copy
