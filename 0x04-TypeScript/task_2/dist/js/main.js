;
;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    return (typeof salary === 'number' && salary < 500 ? new Teacher() : new Director());
}
function isDirector(employee) {
    return (employee instanceof Director);
}
function executeWork(employee) {
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    }
    else {
        console.log(employee.workTeacherTasks());
    }
}
function teachClass(todayClass) {
    return (todayClass == "Math" ? 'Teaching Math' : 'Teaching History');
}
console.log(teachClass('Math'));
console.log(teachClass('History'));
//# sourceMappingURL=main.js.map