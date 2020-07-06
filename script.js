// default arrays
const names = ['Alex', 'John', 'Harry', 'Marcus', 'Luke'];
const nums = [1, 1, 1, 2, 2, 2, 3, 3, 3, 1, 1, 2, 5, 5, 5, 1, 3, 8, 8 ,8];
const copyNums = [1, 2, 8, 5, 4, 10];
const array = [false, 0, '', NaN, undefined, null, 1, 2, 3];

// sum the elements of an array
const sum = nums.reduce((a,b) => a+b);

// remove false value from array ---> [false, 0, '', NaN, undefined, null];
const newArray = array.filter(Boolean);

// convert array to object
const obj = {...names};

// remove duplicate elements from array
const uniqueArray = [...new Set(nums)];

const uniqueArray2 = Array.from(new Set(nums));

// replace a specific value in an array
names.splice(2, 0, 'Jamie');

// pass through the array without method map
const newNames = Array.from(names, name => name);

// clear array
array.splice(0, nums.length);
array.length = 0;

// intersection of two arrays
const newNums = [... new Set(nums)].filter(num => copyNums.includes(num));

// fill array data
const filledArray = new Array(10).fill('data');

// random element from array
const randomName = names[(Math.floor(Math.random() * names.length))];

// shuffle the array randomly
copyNums.sort(() => Math.random() - 0.5);
