import React from 'react';
import "./about.css"

// What is the Big O of the below function? (Hint, you may want to go line by line)
// const containsCommonItem = (arr1, arr2) => {
// 	for (let i = 0; i < arr1.length; i++) {
// 		for (let j = 0; j < arr2.length; j++) {
// 			if(arr1[i] === arr2[j]){
// 				return true;
// 			}			
// 		}		
// 	}
// 	return false;
// }
// console.log(containsCommonItem([1,2,3,5,6,4], [8,12,1]))
// 

const containsCommonItemObj = (arr1, arr2) => {
	// let newObj = {};
	// for (let i = 0; i < arr1.length; i++) {
	// 		newObj[arr1[i]] = true;
	// }

	// for (let j = 0; j < arr2.length; j++) {		
	// 		if(newObj[arr2[j]]){
	// 		return true;
	// 	}
	// }
	// return false;		
	return arr1.some(item => arr2.includes(item));
}
// console.log(containsCommonItemObj(['a', 'b', 'c', 'd'], ['z', 'x', 'y', 'p', 'a']))

const strings = ['a','b','c,','d'];
//push
strings.push('e'); //O(1)
strings.pop(); //O(1)
strings.unshift('x'); //O(n)
// strings.shift();
strings.splice(2,0,'alien')//O(n)

//----------Practice-------------------------------------

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index){
		return this.data[index]
	}	

	push(item){
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop(){
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}
	delete(index){
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}
	shiftItems(index){
		for(let i = index; i < this.length - 1; i++ ){
			this.data[i] = this.data[i+1]
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const newArray = new MyArray();
newArray.push('a');
newArray.push('b');
newArray.push('c');
newArray.push('d');
newArray.pop();
newArray.delete(0)
// console.log(newArray);

function reverse (str) {
	//check input
	if(!str || str.length < 2 || typeof str !== "string"){
		return 'hmm that is not good';
	}
	// let backward = []
	// for (let index = str.length-1; index >= 0; index--) {
	// 	backward.push(str[index])			
	// }
	// return backward.join('');
	return str.split('').reverse().join('');	 
}

const restA = [1,2,3,4,5,6,7];

const [one, two, ...rest] = restA;  //destructuring or rest operator
// console.log(`one: ${one}, two: ${two}, rest: ${rest}`)

// console.log(reverse("yulia"))
const sortedArr = (arr1, arr2) => {
	return [...arr1, ...arr2].sort((a,b) => a-b);
}

// console.log(sortedArr([0,3,4,31], [4,6,30]))

var maxSubArray = function(nums) {
	debugger;
    
    for(let i =1; i<nums.length;i++){
        nums[i] = Math.max(nums[i],nums[i]+nums[i-1])
    }
    return Math.max(...nums)
};

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

var containsDuplicate = function(nums) {	
	let obj = {};
    for (let i = 0; i < nums.length; i++) {
		if(nums[i] in obj){
			return true;
		}
		obj[nums[i]] = i;
		console.log("obj", obj)
	}
	return false;	
};

// console.log(containsDuplicate([1,2,5,5,3,1]))

var rotate = function(nums, k) {	
	if(k > nums.length) {
		return nums.reverse()
	}
	const items = nums.splice(nums.length - k, k); // 3 
	for (let i = items.length-1; i >= 0; i--) {
		nums.unshift(items[i])	
		
	}    
	return nums; 
};

// console.log(rotate([1,2,3], 4)) // []

//----------Hash function or objects in javaScript ----------------

class HashTable {
	constructor(size){
	  this.data = new Array(size);
	}
  
	_hash(key) {
	  let hash = 0;
	  for (let i =0; i < key.length; i++){
		  hash = (hash + key.charCodeAt(i) * i) % this.data.length
	  }
	  return hash;
	}

	set(key, value) {
		let address = this._hash(key);
		if(!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value])
		return this.data;
	}
	get(key){
		let address = this._hash(key);
		const currentBucket = this.data[address]
		if(currentBucket){
			for (let i = 0; i < currentBucket.length; i++) {				
				const [currentKey, value] = currentBucket[i];
				if(currentKey === key){
					return value;
				};				
			}
		}
		return "Not found"		
	}
	keys(){
		const keysArr = [];
		for(let i=0; i < this.data.length; i++){
			if(this.data[i]){
				keysArr.push(this.data[i][0][0])
			}
		}
		return keysArr;
	}
  }
  
  const myHashTable = new HashTable(50);
//  console.log(myHashTable._hash("grapes")) 
  myHashTable.set('grapes', 10000);
  myHashTable.set('apples', 54);
  myHashTable.set('oranges', 2);
//   console.log(myHashTable.keys());
//   myHashTable.set('apples', 9);
//   myHashTable.get('apples');

//-------LINKED LIST----------------
//10-->5-->16
// let myLinkedList1 = {
// 	head: {
// 		value: 10,
// 		next: {
// 			value: 5,
// 			next: {
// 				value: 16,
// 				next: null
// 			}
// 		}		
// 	}
// }
// console.log("myLinkedList1: ", cell)

class LinkedList {
	constructor(value){
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}
	append(value){		
		const newNode = {value, next: null};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value){	
		let newNode = {value, next: null};
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;		
	}
	printList(){
		const array = [];
		let currentNode = this.head;
		while(currentNode !== null){
			array.push(currentNode.value)
			currentNode = currentNode.next
		}
		return array;
	}
	insert(index, value){
		if(index >= this.length){
			this.append(value);
			return this.printList();
		}	
		const newNode = {value, next: null};
		const leader = this.traverseToIndex(index-1);
		const holdingPointer = leader.next;
		leader.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this.printList();		
	}
	remove(index){
		if(index >= this.length){			
			return this.printList();
		}		
		if(index === 0){
			const node = this.head;
			this.head = node.next;
			this.length--;
			return this.printList();
		}			
		const leader = this.traverseToIndex(index-1);
		const toDelete = leader.next;		
		leader.next = toDelete.next;
		this.length--;
		return this.printList();		
	}
	traverseToIndex(index){
		let counter = 0;
		let currentNode = this.head;
		while(counter !== index){
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
// console.log(myLinkedList.printList());
// console.log("myLinkedList", myLinkedList);
// console.log(myLinkedList.insert(3, 36));
// console.log(myLinkedList.insert(99, 36));
// console.log(myLinkedList.remove(99));
// console.log(myLinkedList);

// ----Binary Tree-----


const About = () => {
	return (
		<div className="about">
			This page under construction
		</div>
	)
}

export default About;