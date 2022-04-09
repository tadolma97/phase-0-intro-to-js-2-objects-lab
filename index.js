// Write your solution in this file!
const employee = {};
employee.name = sarah;
employee.streetAddress = 45;

function updateEmployeeWithKeyAndValue(employee, name, streetAddress){
    const newEmployee= {...employee};
    newEmployee [name] = streetAddress;
    return newEmployee
}
 function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, streetAddress){
     employee.name= 'Sam';
     employee.streetAddress= '12 Broadway';
     return employee
 }
 function deleteFromEmployeeByKey(employee, name, streetAddress){
    const newEmployee= {...employee};
    delete newEmployee.name;
    return newEmployee
 }
function destructivelyDeleteFromEmployeeByKey(employee,name, streetAddress){
    delete employee.name 
    return employee
}