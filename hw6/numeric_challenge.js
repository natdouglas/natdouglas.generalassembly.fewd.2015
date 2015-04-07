//Find largest number
function fOne (num1,num2) {

	var error="ERROR: Review input numbers";

	console.log("*****Function One*****");
    console.log("Find largest number");
    console.log("Inputs: " + num1 + " and " + num2);

    if (!isNaN(num1) && !isNaN(num2)) { //confirm both values are numbers
	    if (num1 == num2) { //checks if numbers are equal
  		    console.log("Numbers are identical");
    	}

	    else if (num1 > num2) { //num1 largest
  		    console.log(num1 + " is the largest number, therefore " +num1+ " is larger than " +num2);
	    }

	    else if (num1 < num2) { //num2 largest
  		    console.log(num2 + " is the largest number, therefore " +num2+ " is larger than " +num1);
	    }

	    else {
  		    console.log(error);
	    }
	}	

	else { //numeric comparison cannot be performed
		console.log(error);
	}

    console.log(""); //print extra space 
    console.log("");
}

//Capitalize strings
function fTwo (str1,str2) {

	var capstr1, capstr2;

	var error="ERROR: Review input numbers";

	console.log("*****Function Two*****");
    console.log("Print full name");
    console.log("Input first name and last name: " + str1 + " and " + str2);

    if (isNaN(str1) && isNaN(str2)) { //confirm both inputs are strings
	    capstr1=str1.substring(0,1).toUpperCase() + str1.substring(1,str1.length);
	    capstr2=str2.substring(0,1).toUpperCase() + str2.substring(1,str2.length);

	    console.log("Capitalized full name: " +capstr1 +" " +capstr2);
	}
	else { //capitalization cannot be performed
		console.log(error);
	}

    console.log(""); //print extra space 
    console.log("");
}

//Print numbers
function fThree (num1) {

	var numStr="";
	var itoStr="";
	var i=0;

	var error="ERROR: Review input number";

	console.log("*****Function Three*****");
    console.log("Print numbers 1 through " +num1);

    if (!isNaN(num1)) { //confirm num1 is a number
	    for (i=1; i <= num1; i++) {
	    	if (i==1) {
	    		numStr=i.toString();
	    	}
	    	else {
		    	itoStr= i.toString();  		
		    	numStr+= " " + itoStr;
	    	}
	    	console.log(numStr);   
		}
	}
	else {  //num1 is not a number
		console.log(error);
	}

    console.log(""); //print extra space 
    console.log("");
}

//Main
fOne(5,15);
fOne(1.0001,1.0001);
fOne(1,"funny");

fTwo("natalie","douglas");
fTwo("king", "kong");
fTwo("ping", 7);

fThree(4);
fThree(23);
fThree("ten");