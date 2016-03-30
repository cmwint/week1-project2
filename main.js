// Array for Days!!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!

// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!

// ==========================================================================

// 1. Declare a variable whose value is an empty Array. 
//    Use any method you choose to add at least 4 items to it.

var emptyArray = [];
console.log(emptyArray);

// 2. Add an additional item to the beginning of your Array.

emptyArray.push('pancakes', 'eggs', 'sausage', 'orange juice');
console.log(emptyArray);

// 3. Remove the second and third items.

emptyArray.splice(1, 2);
console.log(emptyArray);

// 4. Add two new items after the second item.

emptyArray.splice(2, 0, 'bacon', 'oatmeal');
console.log(emptyArray);

// 5. Write 'The current length of the array is....' using the .length method

console.log('The current length of the array is ' + emptyArray.length);

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

// 6. Change 'mouse' to 'keyboard'

things[2] = 'keyboard';
console.log(things);

// 7. Combine all of the elements of the array into a string.
console.log(things.toString());

// 8. Declare a variable called lastItem whose using .pop() 
//    Add two new items to lastItem, one at the beginning and one at the end.

var lastItem = things.pop();
console.log(things);
console.log(lastItem);

lastItem = [lastItem];
lastItem.unshift('charger');
lastItem.push('cat');
console.log(lastItem);

// 9. Create a new Array called itemLast. 
//    The items should be the same as lastItem, only in reverse order.

itemLast = lastItem.reverse();
console.log(itemLast);

// 10. Remove the first item of itemLast.

removeFirst = itemLast.shift();
console.log(removeFirst);
console.log(itemLast);

// 11. Remove all items from itemLast 
//     (No need to write to the document. Just console.log to test your results)

itemLast = [];
console.log(itemLast);

// 12. Using the Arrays below, create a single Array 
//     called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']

var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];

var numberPets = firstArray.concat(secondArray);
console.log(numberPets);


// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'

people.splice(5, 0, 'Andy', 'Mark');
console.log(people);

// 14. Remove everybody except 'Andrea' and 'Ted'

var newPeople = [];
for (var i=0; i < people.length; i++){
	if( (people[i] == 'Andrea') || (people[i] == 'Ted') ){
		newPeople += people[i];
		newPeople += ' ';
	}
}
var people = newPeople.split(" ");
people.pop();
console.log(people);

// 15. Add a new person to the beginning of the Array

people.unshift('Michelle');
console.log(people);

// 16. Arrange the items alphabetically. Store this Array as orderedPeople

orderedPeople = people.sort();
console.log(orderedPeople);



// 17. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

var array4 = [];
array4.push(array1, array2, array3);
console.log(array4);

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

// 18. Remove "Sparky" and "White" from the above array of arrays.

var remove = array4[0].pop();
var remove = array4[2].shift();
console.log(array4);


// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]
// Explain why it doesn't sort as expected.
sortingNumbers.sort(function(a, b) {
  return a - b
});
console.log (sortingNumbers);


// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];
array1.sort();
var newArray = array1.reverse();
console.log(newArray);
// Goal:
var array2 = ['plant', 17, 2, 'Bill', 'dog'];
