//1. Fill in the code for the following function
function summation (n) {

	var sum=0;

    for (var i=1; i <= n; i++) {
    	sum+=i;
    }
	console.log('***** Function Summation *****');
    console.log('Sum of 1 to ' +n +' equals ' +sum);

	console.log(''); //print extra space 
    console.log('');
}

//2. Add even numbers
function addEven (n) {

	var sum=0;

    for (var i=1; i <= n; i++) {
    	if (i % 2 == 0)  { //use to identify even numbers
	    	sum+=i;
	    }
    }
	console.log('***** Function Add Evens *****');
    console.log('Sum of 1 to ' +n +' (evens only) equals ' +sum);

	console.log(''); //print extra space 
    console.log('');
}

//3. Get first word
function firstWord(words) {

	console.log('***** Function First Word *****');
    console.log('First word in array: ' +words[0]);

	console.log(''); //print extra space 
    console.log('');
}

//4. Combine all of the words with a dash between them
function addDashes(words) {

	var dashStr='';

    for (var i=0; i < words.length; i++) {
    	if (i==0) { //for first value
    		dashStr=words[i];
    	}
    	else {
	    	dashStr+= "-" +words[i];
    	}
	} 

	console.log('***** Function Add Dashes *****');
    console.log('Dashes added: ' +dashStr);

	console.log(''); //print extra space 
    console.log('');	
}

// 5. Fill in the code for the following function
function countUpAndDown(n) {

	var updownStr='';

    for (var i=1; i <= n; i++) { //string i to n
    	if (i==1) {  //for first value
	    		updownStr=i.toString();
	    }
	    else {
		    updownStr+=' ' +i.toString();  		
    	}
	}

	for (i=n-1; i>=1; i--) { //append n to i; do not add n to the string
	    updownStr+=' ' +i.toString();
	}

	console.log('***** Function Count Up and Down *****');
    console.log('Numbers: ' +updownStr);

	console.log(''); //print extra space 
    console.log('');
}

//6. Write a function that will tell you all of the words in the following array that contain the letter a
function arraytoStr(inArray) { //convert array items to string; return string

	var arrayStr='';

	for (var i=0; i<inArray.length; i++) {
    	if (i==0) {  //for first value
    		arrayStr=inArray[i].toString(); //convert to string
	    }
	    else {
		    arrayStr+=' ' +inArray[i].toString();
    	}		
	}

	return arrayStr;
}

function findA (words) {

	var aStr='';
	var aArray=[];

	for (var i=0; i<words.length; i++) {
		if (words[i].indexOf('a') !=-1) { //if array element contains letter 'a', push to new array
			aArray.push(words[i]);
		}
	}

	aStr=arraytoStr(aArray);  //convert to string from subsequent printing purposes

	console.log('***** Function Find \"a\" *****');
    console.log('Words with A: ' +aStr);

	console.log(''); //print extra space 
    console.log('');	
}

//7. Fill in the code for the following function
function reverseString(string) {

	var revStr='';
	var strLength=string.length;

	for (var i=strLength-1; i>=0; i--) {
		revStr+=string.charAt(i);
	}

	console.log('***** Function Reverse String *****');
    console.log('Reversed string: ' +revStr);

	console.log(''); //print extra space 
    console.log('');	
}

//8. Based on our shopping list from class, calculate total
function totnumArray(shopList) {

	var total=0.00;

	for (var i=0; i<shopList.length; i++) {
		total+=shopList[i].price*shopList[i].quantity;
	}

	console.log('***** Function Total Shopping List *****');
    console.log('Total: $' +total);

	console.log(''); //print extra space 
    console.log('');	
}

//9. Based on our shopping list from class, write a function that tells you what the most expensive product is
function findExpensive(shopList) {

	var mostPrice=0.00;
	var mostExpensive=[];

	for (var i=0; i<shopList.length; i++) {
		if (mostPrice == shopList[i].price) {//if same price, add to mostExpensive array
			mostExpensive.push(shopList[i]);
		}
		else if (mostPrice < shopList[i].price){ //if greater price, overlay mostExpensive
			mostExpensive=[];
			mostExpensive.push(shopList[i]);
			mostPrice=shopList[i].price;
		}
	}

	console.log('***** Function Most Expensive Item(s) *****');
	if (mostExpensive.length > 1) {
		console.log('There are ' +mostExpensive.length +' items with the same price.');
	}
	for (var i=0; i<mostExpensive.length;i++){
		console.log('Most expensive item: ' +mostExpensive[i].item);
		console.log('Most expensive price: ' +mostExpensive[i].price);
	}

	console.log(''); //print extra space 
    console.log('');	
}


summation(3);
summation(10);

addEven(3);
addEven(10);

firstWord(['red', 'blue', 'green']);

addDashes(['test1', 'test2', 'test3']);

countUpAndDown(5);

findA(['cat', 'dog', 'mouse', 'hamster', 'rabbit', 'owl']);

reverseString('cat'); 

//array from class 7
var list = [{
	item: 'Salmon',
	price: 14.99,
	quantity: 2
},{
	item: 'Brown rice',
	price: 5.99,
	quantity: 20
}];

totnumArray(list);

findExpensive(list);

//for 10-14
var Task = function(name, category, status) {
    this.name = name;
    this.category = category;
    this.status = status;
};

var Category = function(name) {
    this.name = name;
};

var Status = {
    open: 0,
    inProgress: 1,
    complete: 2
};

var tasks = [];
var categories = [];

//10. Create two categories, each with a different name
var photoCat=new Category('Photo');
var albumCat=new Category('Album');

//11. Create two tasks, each with a name, category, and a status number
var addPhoto=new Task('Add photo',photoCat,0);
var delAlbum=new Task('Delete album',albumCat,1);

//12. Add your categories and tasks to the arrays above using the push() function
categories.push(photoCat);
categories.push(albumCat);
tasks.push(addPhoto);
tasks.push(delAlbum);

//13. Write some code that will loop through all of your tasks and write out the task name and category name for each
function printTasks(tasks) {

	console.log('***** Function Loop Through Tasks *****');
	for (var i=0; i<tasks.length; i++) {
		console.log(tasks[i].name);
		console.log(tasks[i].category);
		console.log(tasks[i].status);
	}

	console.log(''); //print extra space 
    console.log('');
}

// 14. Write some code that will log all tasks that match a certain status
function matchStatus(tasks,status) {

	console.log('***** Function Match Status *****');
	console.log('***** Status to match: ' +status);

	for (var i=0; i<tasks.length; i++) {
		if(tasks[i].status==status) {
			console.log(tasks[i].name);
			console.log(tasks[i].category);
			console.log(tasks[i].status);
		}
	}

	console.log(''); //print extra space 
    console.log('');	
}
printTasks(tasks);
matchStatus(tasks,1);

//15. Write out a structure
var photo =function(name,title,createDt, modifyDt,filesize,resolution,tags,photographer,album){
	this.filename=name;
	this.title=title;
	this.createDt=createDt;
	this.modifyDt=modifyDt;
	this.filesize=filesize;
	this.resolution=resolution;
	this.tags=tags;
	this.photographer=photographer;
	this.album=album;
}

var album=function(name,title,createDt,modifyDt,tags,photos){
	this.albumname=name;
	this.title=title;
	this.createDt=createDt;
	this.modifyDt=modifyDt;
	this.tags=tags;
	this.photos=photos;	
}

var resolution = {
    high: 2,
    medium: 1,
    low: 0
};

var object = {
	photo: 0,
	album: 1
};

var event = {
	add: 0,
	modify: 1,
	remove: 2
};

var taskType=function(object,event) { //delete is a JavaScript reserved word
	this.applyObject=object;
	this.applyEvent=event;
}