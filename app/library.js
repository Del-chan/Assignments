module.exports = {
	aritGeo: function(arr){

		var isArithmetic= true, isGeometric = true;
		var difference = arr[1] - arr[0];
		
		if (arr.length === 0){
	      	return 0;
	    }

		for (var i =2; i < arr.length; i++){

			if((arr[i] - arr[i-1]) !== difference){
				isArithmetic = false;
			}
		}
		if (isArithmetic){
			return 'Arithmetic';
		}
		else{
			difference = arr[1] / arr[0];
			for (var i = 2; i < arr.length; i++){
				if ((arr[i]/ arr[i-1]) !== difference ){
					isGeometric = false;
				}
			}
			if (isGeometric){
				return 'Geometric';
			} 
			else {
			  return -1;
			}
		}
	},

	findMinMax: function(arr){

		var largestElement = function(arr){
		var largest = arr[0];
		for(var i = 0; i < arr.length; i++){
		  if (arr[i] > largest){
		    largest = arr[i];
		  }
		}
		return largest;
		};

		var smallestElement = function(arr){
		var smallest = arr[0];
		for(var i = 0; i < arr.length; i++){
		  if (arr[i] < smallest){
		    smallest = arr[i];
		  }
		}
		return smallest; 
		}
		var smallest = smallestElement(arr), largest = largestElement(arr);
  		if (smallest === largest){
    		return [smallest];
    	}
		return [smallestElement(arr) , largestElement(arr)];
	},

	fizzBuzz: function(number){
		if (number % 3 === 0){
			return (number % 5 === 0) ? 'FizzBuzz' : 'Fizz';
		}
		else if (number % 5 === 0){
			return 'Buzz'
		}
		else{
			return number;
		}
	}
}
