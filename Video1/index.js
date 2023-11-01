const fruits = ["apple","mango","pineapple","pear"];
fruits.push("banana");
// console.log(fruits);

/* 
Here we can push into a const because we store the array in the heap memory and fruits here
store only the memory of that location. So as we push into it we are not selection new location
or new address to it we are just pushing into the current location only


If we do like fruits = [] something something then we are changing the location and this is not
acceptablable for the const

*/

//For of Loop
for(let fruit of fruits){
    // console.log(fruit);
}
// This is another way of traversing over array like python or C++


//For in Loop
for(let index in fruits){
    // console.log(index , fruits[index]);
}

// when we use "in" here then we are dealing with the index


const numbers = [1,2,3,5]

function myFunc(number ,index){
    // console.log(`The index is ${index} and number is ${number}`)
}

numbers.forEach(myFunc);



const user1 ={
    name:"harsh",
    age: 8,
    about:function(hobby , musician){
        console.log(hobby ,musician);
    }
}


const user2={
    name:"yash",
    age: 10
}

user1.about.apply(user2 ,[ 'violin', 'arijit']);

