import employeesListComponent from '../components/employees-list.ko';

class EmployeeList {

    constructor(params) {
        this.firstName = params.firstName;
        this.lastName = ko.observable('');
        this.friends = ko.observableArray([]);
        this.friends.push('Sreekanth');
        console.log(this.friends());
        this.friends.splice(0, this.friends().length);
        console.log(this.friends());
    }

}


ko.components.register('employees-list', {
    template: employeesListComponent,
    viewModel: EmployeeList
});
