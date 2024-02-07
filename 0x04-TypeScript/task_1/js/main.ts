interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    yearsOfExperience?: number,
    [key: string]: any;
};

interface Directors extends Teacher {
    numberOfReports: number;
};

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

interface printTeacherFunction {
    (first: string, last: string): string;
};

const printTeacher: printTeacherFunction = (first: string, last: string): string => `${first[0]}. ${last}`;

console.log(printTeacher("John", "Doe"));


console.log(director1);
