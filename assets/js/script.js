// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const employeeData = [];

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  const employee = createEmployee();
  employeeData.push(employee);

  while (confirm("Would you like to add another employee?")) {
    const employee = createEmployee();
    employeeData.push(employee);
  }
  return employeeData;
}

function createEmployee() {
  const employee = {
    firstName: ' ',
    lastName: ' ',
    salary: 0,
  };

  employee.firstName = prompt("Enter first name:");
  employee.lastName = prompt("Enter last name:");
  employee.salary = prompt("Enter salary:");

  if (isNaN(employee.salary)){
    employee.salary = 0;
  } else {
    employee.salary = parseInt(employee.salary);
  }

  return employee;
}
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary'
  let total = 0;
  
  for (let i = 0; i < employeeData.length; i++){
    const employee = employeesArray[i];
    total += employee.salary;
  }
  const average = total / employeeData.length;
  averageRounded =  Math.round(average*100)/100;
  // Rounded average for cleaner reading in console
  console.log(`The average employee salary between our ${employeeData.length} employee(s) is $${averageRounded}`);

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  const index = Math.floor(Math.random() * employeeData.length);
  const computerChoice = employeeData[index];
  console.log(`Congratulations to ${computerChoice.firstName} ${computerChoice.lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
