//Global Variables
var exerciseList=[];

var type = {  //Type of exercises
    number: 0,
    word: 1
};


var Exercise = function(classid,formid,title,type,instruct,label,placeholder) {//to store exercises; will build exercise form accordingly
    this.classid=classid,
    this.formid=formid,
    this.title=title,
    this.type=type,
    this.instruct=instruct,
    this.displayLabel=label,
    this.placeHolder=placeholder
};

exerciseList.push(new Exercise('one','summation','Exercise #1: Summation',0,'Enter a number (n) to sum from 1 to n','Integer','Enter integer'));
exerciseList.push(new Exercise('two','addEven','Exercise #2: Add Even',0,'Enter a number (n) for the sum of the evens','Integer','Enter integer'));
exerciseList.push(new Exercise('three','firstWord','Exercise #3: First Word',1,'Enter a string to get the first word','String','Enter string'));
exerciseList.push(new Exercise('four','addDashes','Exercise #4: Add Dashes',1,'Enter a string to return it with dashes','String','Enter string'));
exerciseList.push(new Exercise('five','countUpAndDown','Exercise #5: Count Up & Down',0,'Enter a number (n) to print up/down string','Integer','Enter integer'));
exerciseList.push(new Exercise('six','findA','Exercise #6: Find A',1,'Enter a string to return the "a"s','String','Enter string'));

// for (var i=0; i<exerciseList.length; i++) {
//     console.log('exerciseList[' +i +'].classid=' +exerciseList[i].classid);
//     console.log('exerciseList[' +i +'].formid=' +exerciseList[i].formid);
//     console.log('exerciseList[' +i +'].title=' +exerciseList[i].title);
//     console.log('exerciseList[' +i +'].type=' +exerciseList[i].type);
//     console.log('exerciseList[' +i +'].instruct=' +exerciseList[i].instruct);
//     console.log('exerciseList[' +i +'].displayLabel=' +exerciseList[i].displayLabel);
//     console.log('exerciseList[' +i +'].placeHolder=' +exerciseList[i].placeHolder);
// }

//Functions
//Number functions
//1. Fill in the code for the following function
function summation (n) {

	var sum=0;

    for (var i=1; i <= n; i++) {
    	sum+=i;
    }
	// console.log('***** Function Summation *****');
 //    console.log('Sum of 1 to ' +n +' equals ' +sum);

    return sum;
}

//2. Add even numbers
function addEven (n) {

	var sum=0;

    for (var i=1; i <= n; i++) {
    	if (i % 2 == 0)  { //use to identify even numbers
	    	sum+=i;
	    }
    }
	// console.log('***** Function Add Evens *****');
 //    console.log('Sum of 1 to ' +n +' (evens only) equals ' +sum);

    return sum;
}

//5. Fill in the code for the following function
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

    // console.log('***** Function Count Up and Down *****');
 //    console.log('Numbers: ' +updownStr);

    return updownStr;
}


//Word functions
//3. Get first word NOTE: Modified from homework #7 to return first word of input string
function firstWord(words) {
    var splitArray=[];

    splitArray=words.split(' ');

	// console.log('***** Function First Word *****');
 //    console.log('First word in array: ' +splitArray[0]);


    return splitArray[0];
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

	// console.log('***** Function Add Dashes *****');
 //    console.log('Dashes added: ' +dashStr);

    return dashStr;
}

//6. Write a function that will tell you all of the words in the following array that contain the letter a
//Corrected function to return words with "a" instead of just letters a
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
    var aArray=[];

	var wordArray=words.split(' ');


	for (var i=0; i<wordArray.length; i++) {
//        console.log('wordArray[' +i +']:' +wordArray[i]);
		if (wordArray[i].indexOf('a') !=-1) { //if array element contains letter 'a', push to new array
			aArray.push(wordArray[i]);
		}
	}

	aStr=arraytoStr(aArray);  //convert to string from subsequent printing purposes

	// console.log('***** Function Find \"a\" *****');
 //    console.log('Words with A: ' +aStr);

    return aStr;	
}

function displayText(title,instruct) { //use to display title and instructions

	//title
	$('.exerciseBox').append('<h1>' +title +'</h1>');

	//instructions
	$('.exerciseBox').append('<h2>' +instruct +'</h2>');
}

function displayForm(id,displayLabel,placeHolder) { //use to generate title and instructions
	$('.exerciseBox').append('<form id="' +id +'" class="form-horizontal"><div class="form-group"><label for="' +id 
		+'" class="col-sm-2 control-label">' +displayLabel +'</label><div class="col-sm-10"><input type="text" class="form-control" id="' 
		+id +'" name="' +id +'" placeholder="' +placeHolder +'" required><button type="submit" class="btn btn-primary">Submit</button></div></div></form>');
}
 
function displayResult(result) { //display the result with a fadeIn
    $('.resultBox').append('<h2>' +result +'</h2>').hide().fadeIn(2000);
}

function displayRBorder() {
    $('.row').css({'border-right-style':'solid','border-width':'2px','border-color':'#3E4957'});
}

function clearExercise() {     //clear the exerciseBox
    $('.exerciseBox').empty();

    //clear row border
    $('.row').css({'border-right-style':'none','border-width':'0px','border-color':'#3E4957'});
}

function clearResult() {  //clear the exerciseBox
    $('.resultBox').empty();
}

function setSubmitForm(){
    $('.exerciseBox form').on('submit', function(e){  

        // stop the page from trying to reload
        e.preventDefault();

        //clear result just in case user reran an exercise
        clearResult();

        var formID=$(this).attr('id');
//        console.log('formID: ' +formID);

        //grab input
        var inputVal=$('input[name="' +formID +'"]').val();
//        console.log('inputVal: ' +inputVal);

        //find exerciseList.type to determine if inputVal needs to be converted to a number
        var functionType='';
        for (var i=0; i<exerciseList.length; i++) {
            if(exerciseList[i].formid===formID) {
                functionType=exerciseList[i].type;
                break;
            }
        }
        var dispRes=0; //use to identify whether or not to display results

        if (functionType==='') { //didn't find the function type for hte form ID, therefore generate alert
            alert('WARNING: Problem running exercise.  Please contact admin.');
        }
        else { //form ID is from the known values and its functionType is available
            if(functionType===0) { //encountered a number
                var inNum=parseInt(inputVal); //convert to number
                if (isNaN(inNum)) { //if inNum is not a number, generate error message
                    alert('WARNING: ' +inputVal +' is not a valid number. Please try again.');
                }
                else {    //display result
                    if (formID==='summation') {
                        var result=summation(inNum);
                        dispRes=1;
                    }
                    else if (formID==='addEven') {
                        var result=addEven(inNum);
                        dispRes=1;
                    }
                    else if (formID==='countUpAndDown') {
                        var result=countUpAndDown(inNum);
                        dispRes=1;
                    }
                }
            }
            else if(functionType===1) { //encountered a word
                var inStr=String(inputVal).trim(); //convert to string; otherwise dealing w/object and trim() will not work
                if((isNaN(inStr)) && (inStr.length>=1)) { //dealing with a string that is at least 1 character
                    if (formID==='firstWord') {
                        var result=firstWord(inStr);
                        dispRes=1;
                    }
                    else if(formID==='addDashes') {
                        var result=addDashes(inStr);
                        dispRes=1;
                    }
                    else if(formID==='findA') {
                        var result=findA(inStr);
                        dispRes=1;
                    }
                }
                else {
                    alert('WARNING: Input is not a valid string. Please try again.');
                }
            }
            if (dispRes===1) { //made it thorough the above if/else and result calculated, so do not display if generated error
                displayResult(result);
            }
        }

        //clear submit field  //QUESTION: How can I do this with reset?
        $('input[name="' +formID +'"]').val('');
    });
}

function displayExercise() { //user clicks on one of the color exercise boxes

    function generate_handler(j){ //went to overstackflow for help
        return function(e){
            // stop the page from trying to reload
            e.preventDefault();

            //clear the exerciseBox and resultBox
            clearExercise();
            clearResult();

            //create right border
            displayRBorder();

            //populate screen with title, instructions, and form
            displayText(exerciseList[j].title,exerciseList[j].instruct);
            displayForm(exerciseList[j].formid,exerciseList[j].displayLabel,exerciseList[j].placeHolder);
            setSubmitForm();
        }
    }
    for (var i=0; i<exerciseList.length; i++){ //loop through exerciseList array to assign the click event
        $('.'+exerciseList[i].classid).on('click', generate_handler(i));
    }
}

//EVENT:
$(window).bind('load', function(e){
    // stop the page from trying to reload
    e.preventDefault();
})

//assign click events
displayExercise();