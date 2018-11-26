import './viewmodels/EmployeeList';

const viewModel = {
    personName: ko.observable('Bob')
};

ko.applyBindings(viewModel, document.querySelector('#app'));

