const path = require('path');
const Loki = require('lokijs');

const EMPLOYEES_COLLECTION = 'employees';

const dbFile = path.resolve(__dirname, '..', '..', 'data', 'emp.db');

const setupEmployeesCollection = () => {
    let employees = db.getCollection(EMPLOYEES_COLLECTION);
    if (!employees) {
        employees = db.addCollection(EMPLOYEES_COLLECTION, { indices: ['id'] });
    }
}

const db = new Loki(dbFile, {
    autoload: true,
    autoloadCallback: setupEmployeesCollection,
    autosave: true,
    autosaveInterval: 10
});


const addEmployee = (employee) => {
    const employees = db.getCollection(EMPLOYEES_COLLECTION);
    employees.insert(employee);
    db.saveDatabase();
};

const getEmployees = () => {
    const employees = db.getCollection(EMPLOYEES_COLLECTION);
    return employees.find({});
};

const getEmployee = (empId) => {
    const employees = db.getCollection(EMPLOYEES_COLLECTION);
    return employees.find({id: empId});
};


module.exports = {
    addEmployee,
    getEmployees,
    getEmployee
};
