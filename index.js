console.log("hello world");
/* ============================================================
   ARRAYS 1 — BASICS: THE CHEAT SHEET (teach this first)
   ------------------------------------------------------------
   Array = an ORDERED list. Each item has a position (index)
   starting at 0. Walk through these out loud, then do the 8.
   Run:  node 1-basics.js
   ============================================================ */

// CREATE — square brackets, items separated by commas
const fruits = ["apple", "banana", "cherry"];
//   index:        0         1         2

// READ — by index (starts at 0!)
// console.log(fruits[0]);            // "apple"
// console.log(fruits[2]);            // "cherry"
// console.log(fruits[99]);          // undefined  (no item there)

// LENGTH — how many items. Last index is always length - 1
// console.log(fruits.length);       // 3
// console.log(fruits[fruits.length - 1]); // "cherry"  (last item)

// UPDATE — assign to an index
fruits[1] = "blueberry";
// console.log(fruits);              // ["apple","blueberry","cherry"]

// ADD / REMOVE at the END  -> push / pop
fruits.push("date"); // add to end
fruits.pop(); // remove from end (and returns it)

// ADD / REMOVE at the START -> unshift / shift
fruits.unshift("kiwi"); // add to front
fruits.shift(); // remove from front (and returns it)

// IS IT IN THERE? -> includes / indexOf
// console.log(fruits.includes("cherry"));  // true / false
// console.log(fruits.indexOf("cherry"));   // position, or -1 if missing

/* ============================================================
   ARRAYS 1 — BUILD THE 8   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. Get one item (WORKED EXAMPLE) -----
// Write `secondItem(arr)` that RETURNS the item at index 1.
function secondItem(arr) {
  return arr[1];
}
console.log("-----1-----");

console.log(secondItem(["a", "b", "c"])); // "b"
console.log(secondItem([10, 20, 30]));
console.log(secondItem(["x", "y"]));

// TEST 1:  secondItem(["a","b","c"])   ->  "b"
// TEST 2:  secondItem([10, 20, 30])    ->  20
// TEST 3:  secondItem(["x", "y"])      ->  "y"

// ----- 2. How many items -----
// Write `howMany(arr)` that RETURNS the number of items.
// your code here
function howMany(arr) {
  return arr.length;
}
console.log("-------2------");
console.log(howMany([1, 2, 3, 4]));
console.log(howMany([]));
console.log(howMany(["onyl"]));

// console.log(howMany([1, 2, 3, 4]));
// TEST 1:  howMany([1,2,3,4])   ->  4
// TEST 2:  howMany([])          ->  0
// TEST 3:  howMany(["only"])    ->  1

// ----- 3. Last item -----
// Write `lastItem(arr)` that RETURNS the last item (any length).
// Hint: arr[arr.length - 1]
// your code here
function lastItem(arr) {
  return arr[arr.length - 1];
}
console.log("------3-----");
console.log(lastItem(["x", "y", "z"]));
console.log(lastItem([5]));
console.log(lastItem([1, 2, 3, 4]));

// console.log(lastItem(["x", "y", "z"]));
// TEST 1:  lastItem(["x","y","z"])   ->  "z"
// TEST 2:  lastItem([5])             ->  5
// TEST 3:  lastItem([1, 2, 3, 4])    ->  4

// ----- 4. Add to the end -----
// Write `addItem(arr, item)` that pushes item onto arr and RETURNS arr.
// your code here
function addItem(arr, item) {
  arr.push(item);
  return arr;
}
console.log("-----4-----");

console.log(addItem([1, 2], 3));
console.log(addItem([], "hi").length);
console.log(addItem(["a"], "b"));

// console.log(addItem([1, 2], 3));
// TEST 1:  addItem([1,2], 3)         ->  [1,2,3]
// TEST 2:  addItem([], "hi").length  ->  1
// TEST 3:  addItem(["a"], "b")       ->  ["a","b"]

// ----- 5. Remove the last -----
// Write `removeLast(arr)` that pops the last item off and RETURNS arr.
// your code here
function removeLast(arr) {
  arr.pop();
  return arr;
}
console.log("-----5-----");

console.log(removeLast([1, 2, 3]));
console.log(removeLast([9]).length);
console.log(removeLast([5, 6, 7, 8]));

// console.log(removeLast([1, 2, 3]));
// TEST 1:  removeLast([1,2,3])         ->  [1,2]
// TEST 2:  removeLast([9]).length      ->  0
// TEST 3:  removeLast([5,6,7,8])       ->  [5,6,7]

// ----- 6. Add to the front -----
// Write `addFront(arr, item)` that unshifts item to the front and RETURNS arr.
// your code here
function addFront(arr, item) {
  arr.unshift(item);
  return arr;
}
console.log("------6------");

console.log(addFront([2, 3], 1));
console.log(addFront([], "a"));
console.log(addFront(["b"], "a"));

// console.log(addFront([2, 3], 1));
// TEST 1:  addFront([2,3], 1)   ->  [1,2,3]
// TEST 2:  addFront([], "a")    ->  ["a"]
// TEST 3:  addFront(["b"], "a") ->  ["a","b"]

// ----- 7. Is it in there? -----
// Write `hasItem(arr, item)` that RETURNS true/false if item is in arr.
// Hint: arr.includes(item)
// your code here
function hasItem(arr, item) {
  return arr.includes(item);
}
console.log("------7------");

console.log(hasItem(["cat", "dog"], "dog"));
console.log(hasItem(["cat", "dog"], "fish"));
console.log(hasItem([], "cat"));

// console.log(hasItem(["cat", "dog"], "dog"));
// TEST 1:  hasItem(["cat","dog"], "dog")   ->  true
// TEST 2:  hasItem(["cat","dog"], "fish")  ->  false
// TEST 3:  hasItem([], "cat")              ->  false

// ----- 8. Where is it? -----
// Write `positionOf(arr, item)` that RETURNS the index, or -1 if missing.
// Hint: arr.indexOf(item)
// your code here
// function positionOf(arr, item) {
//   return arr.indexof(item);
// }
// console.log("-----8-----");

// console.log(positionOf(["a", "b", "c"], "c"));
// console.log(positionOf(["a", "b", "c"], "z"));
// console.log(positionOf(["a", "b", "c"], "a"));

// console.log(positionOf(["a", "b", "c"], "c"));
// TEST 1:  positionOf(["a","b","c"], "c")   ->  2
// TEST 2:  positionOf(["a","b","c"], "z")   ->  -1
// TEST 3:  positionOf(["a","b","c"], "a")   ->  0

/* ============================================================
   ARRAYS 2 — METHODS: THE CHEAT SHEET (teach this first)
   ------------------------------------------------------------
   These REPLACE writing a loop by hand. Each method takes a
   FUNCTION and runs it on every item for you.
   Run:  node 2-methods.js
   ============================================================ */

const nums = [1, 2, 3, 4, 5, 6];

// map — TRANSFORM every item -> NEW array, same length
// console.log(nums.map((n) => n * 2));          // [2,4,6,8,10,12]

// filter — KEEP items that pass the test -> NEW array, shorter
// console.log(nums.filter((n) => n % 2 === 0)); // [2,4,6]

// find — FIRST item that passes (one item, not an array)
// console.log(nums.find((n) => n > 3));         // 4
// console.log(nums.find((n) => n > 99));        // undefined

// reduce — BOIL the whole array down to ONE value (sum, max...)
// acc = running result, n = current item, 0 = starting value
// console.log(nums.reduce((acc, n) => acc + n, 0));  // 21

// some / every — return true/false
// console.log(nums.some((n) => n > 5));         // true  (at least one)
// console.log(nums.every((n) => n > 0));        // true  (all of them)

// sort — order the array. For NUMBERS you MUST give (a,b)=>a-b
// console.log([3, 1, 2].sort((a, b) => a - b)); // [1,2,3]
// console.log([3, 1, 2].sort((a, b) => b - a)); // [3,2,1]

// CHAIN — filter then map, left to right
// console.log(nums.filter((n) => n % 2 === 0).map((n) => n * 10)); // [20,40,60]

/* ============================================================
   ARRAYS 2 — BUILD THE 8   (3 cases each — all must pass)
   ============================================================ */

// ----- 1. map (WORKED EXAMPLE) -----
// Write `withTax(prices)` that RETURNS a NEW array with each price * 1.1.
function withTax(prices) {
  const newarr = prices.map((p) => p * 1.1);
  return newarr;
}
console.log("------map1------");

console.log(withTax([10, 20])); // [11, 22]
console.log(withTax([]));
console.log(withTax([100]));

// TEST 1:  withTax([10,20])   ->  [11, 22]
// TEST 2:  withTax([])        ->  []
// TEST 3:  withTax([100])     ->  [110]

// ----- 2. filter -----
// Write `cheap(prices)` that RETURNS a NEW array of prices under 20.
// your code here
function cheap(price) {
  return price.filter((price) => price < 20);
}
console.log("------2-----");

console.log(cheap([10, 25, 5, 40, 15]));
console.log(cheap([100, 200]));
console.log(cheap([19, 20, 21]));
function onlyEven(arr) {
  return arr.filter((num) => num % 2 === 0);
}
// console.log(cheap([10, 25, 5, 40, 15]));
// TEST 1:  cheap([10,25,5,40,15])   ->  [10,5,15]
// TEST 2:  cheap([100,200])         ->  []
// TEST 3:  cheap([19,20,21])        ->  [19]

// ----- 3. find -----
// Write `firstExpensive(prices)` that RETURNS the first price over 30.
// your code here
function firstExpensive(price) {
  return price.find((price) => price > 30);
}
console.log("-----3-----");

console.log(firstExpensive([10, 25, 5, 40, 15]));
console.log(firstExpensive([1, 2, 3]));
console.log(firstExpensive([50, 99]));

// console.log(firstExpensive([10, 25, 5, 40, 15]));
// TEST 1:  firstExpensive([10,25,5,40,15])   ->  40
// TEST 2:  firstExpensive([1,2,3])           ->  undefined
// TEST 3:  firstExpensive([50,99])           ->  50

// ----- 4. reduce (sum) -----
// Write `total(prices)` that RETURNS the sum using reduce.
// your code here
function total(price) {
  return price.reduce((sum, price) => sum + price, 0);
}
console.log("------4-----");

console.log(total([10, 25, 5, 40, 15]));
console.log(total([]));
console.log([7]);

// console.log(total([10, 25, 5, 40, 15]));
// TEST 1:  total([10,25,5,40,15])   ->  95
// TEST 2:  total([])                ->  0
// TEST 3:  total([7])               ->  7

// ----- 5. some / every -----
// Write `anyFree(prices)` -> true if ANY price is 0.
// Write `allPositive(prices)` -> true if EVERY price is > 0.
// your code here
function anyFree(prices) {
  return prices.some((prices) => prices === 0);
}
function allPositive(price) {
  return price.every((price) => price > 0);
}
console.log("-------5-----");

console.log(anyFree([10, 0, 5]));
console.log(allPositive([10, 0, 5]));
console.log(allPositive([10, 5]));

// console.log(anyFree([10, 0, 5]), allPositive([10, 0, 5]));
// TEST 1:  anyFree([10,0,5])       ->  true
// TEST 2:  allPositive([10,0,5])   ->  false
// TEST 3:  allPositive([10,5])     ->  true

// ----- 6. sort -----
// Write `lowToHigh(prices)` that RETURNS the prices sorted ascending.
// Hint: numbers need .sort((a,b) => a - b)
// your code here
function lowToHigh(prices) {
  return prices.sort((a, b) => a - b);
}
console.log("------6-----");

console.log(lowToHigh([10, 25, 40, 15]));
console.log(lowToHigh([3, 1, 2]));
console.log(lowToHigh([2]));

// console.log(lowToHigh([10, 25, 5, 40, 15]));
// TEST 1:  lowToHigh([10,25,5,40,15])   ->  [5,10,15,25,40]
// TEST 2:  lowToHigh([3,1,2])           ->  [1,2,3]
// TEST 3:  lowToHigh([2])               ->  [2]

// ----- 7. chain: filter then map -----
// Write `cheapDoubled(prices)` -> keep prices under 20, then double each.
// your code here
function cheapDoubled(prices) {
  return prices.filter((prices) => prices < 20).map((prices) => prices * 2);
}
console.log("------7------");

console.log(cheapDoubled([10, 25, 5, 40, 15]));
console.log(cheapDoubled([100]));
console.log(cheapDoubled([5, 5]));

// console.log(cheapDoubled([10, 25, 5, 40, 15]));
// TEST 1:  cheapDoubled([10,25,5,40,15])   ->  [20,10,30]
// TEST 2:  cheapDoubled([100])             ->  []
// TEST 3:  cheapDoubled([5,5])             ->  [10,10]

// ----- 8. methods on objects -----
// Write `inStockNames(items)` -> array of the .name of every item where .stock > 0.
// (filter by stock, then map to name — arrays + objects + methods together)

const inventory = [
  { name: "pen", stock: 5 },
  { name: "book", stock: 0 },
  { name: "bag", stock: 3 },
  { name: "cup", stock: 0 },
];
// your code here
function inStockNames(items) {
  return items.filter((items) => items.stock > 0).map((items) => items.name);
}
console.log("------8------");

console.log(inStockNames(inventory));
console.log(inStockNames([]));
console.log(inStockNames([{ name: "x", stock: 1 }]));

// console.log(inStockNames(inventory));
// TEST 1:  inStockNames(inventory)                        ->  ["pen","bag"]
// TEST 2:  inStockNames([])                               ->  []
// TEST 3:  inStockNames([{name:"x",stock:1}])             ->  ["x"]
