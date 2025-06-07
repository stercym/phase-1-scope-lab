// Write your solution in this file!
//global variable customerName declared using var 
var customerName = 'bob';

// Function that uppercases the global variable customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function setBestCustomer that declares a global variable bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Function that overwrites the global variable bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope
const leastFavoriteCustomer = 'jane';

// Function that attempts to change the constant variable
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'mutua';
}
