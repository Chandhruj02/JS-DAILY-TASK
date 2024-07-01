// Start of Task
// TASK - 1
function getNationBird(){
    return(" The national bird of India is the Peacock");
}
console.log(getNationBird()); 

// TASK - 2
function greet() {
    return "Hello! Have a nice day";
}
console.log(greet()); 

// TASK - 3
function Sum(num1,num2) {
    return(num1+num2);
}
console.log(Sum(25,10)); 

// TASK - 4
function Avg(num1,num2) {
    return((num1+num2)/2);
}
console.log(Avg(25,5)); 

// TASK - 5
function greetwithname(name) {
    return("Hi "+name+"!");
}
console.log(greetwithname("Chandhru")); 

// TASK - 6
function MinToSec(min) {
    var sec = min * 60;
    return(sec);
}
console.log(MinToSec(5)); 

// TASK - 7
function findLargest(n1,n2,n3) {
    if(n1>n2 && n1>n3)
    {
        console.log("Largest number is "+n1);
    }
    else if(n2>n3)
    {
        console.log("Largest number is "+n2);
    }
    else
    {
        console.log("Largest number is "+n3);
    }
}
console.log(findLargest(122,2,19)); 

// TASK - 8
function findTriangleType(s1,s2,s3)
{
    if(s1==s2 && s2==s3)
        {
            console.log("Hence the given triangle is Equilateral");
        }
        else if(s1==s2 || s2==s3)
        {
            console.log("Hence the given triangle is Isosceles");
        }
        else
        {
            console.log("Hence the given triangle is Scalene");
        }
}
console.log(findTriangleType(1,2,3)); 
console.log(findTriangleType(1,3,3)); 
console.log(findTriangleType(3,3,3)); 

// TASK - 9
function checkInRange(number,start,end){
    if(number>=start && number<=end)
        {
            console.log("The given number is within range");
        }
        else
        {
            console.log("The given number is not within range");
        }    
}
console.log(checkInRange(15,11,30));
console.log(checkInRange(15,20,30));

// TASK - 10
function evalNumbers(num1, num2, operation) {
    switch(operation) {
      case 'add':
        console.log(num1 + num2);
        break;
      case 'subtract':
        console.log(num1 - num2);
        break;
      case 'multiply':
        console.log(num1 * num2);
        break;
      case 'divide':
        if (num2 !== 0) {
          console.log(num1 / num2);
        } else {
          console.log('Cannot divide by zero');
        }
        break;
      case 'modulus':
        if (num2 !== 0) {
          console.log(num1 % num2);
        } else {
          console.log('Cannot perform modulus by zero');
        }
        break;
      default:
        console.log('Invalid operation');
    }
  }
  evalNumbers(10, 5, 'add');       
  evalNumbers(10, 5, 'subtract');  
  evalNumbers(10, 5, 'multiply');  
  evalNumbers(10, 5, 'divide');   
  evalNumbers(10, 5, 'modulus');  
  evalNumbers(10, 5, 'invalid');   
  
  //   TASK - 11
function checkLeapYear(year){
    if(year%4===0 && year%100 !=0 || year % 400 === 0)
    {
        console.log("The given year "+year+" is leap year");
    }
    else
    {
        console.log("The given year "+year+" is not a leap year");
    }
  }
console.log(checkLeapYear(2005));
console.log(checkLeapYear(2004));

// TASK - 12
function findGrade(marks) {
    if (marks >= 90 && marks <= 100) {
      console.log("S grade");
    } else if (marks >= 80 && marks < 90) {
      console.log("A grade");
    } else if (marks >= 70 && marks < 80) {
      console.log("B grade");
    } else if (marks >= 60 && marks < 70) {
      console.log("C grade");
    } else if (marks >= 50 && marks < 60) {
      console.log("D grade");
    } else if (marks >= 40 && marks < 50) {
      console.log("E grade");
    } else if (marks >= 0 && marks < 40) {
      console.log("Student has failed");
    } else {
      console.log("Invalid marks");
    }
  }
findGrade(95);  
findGrade(85);  
findGrade(75); 
findGrade(35);  
findGrade(105);

// END OF TASK
  