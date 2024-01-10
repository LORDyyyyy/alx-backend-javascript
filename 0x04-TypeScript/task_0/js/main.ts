interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
};

let std1: Student = { firstName: "ali", lastName: "ahmed", age: 20, location: "cairo" };
let std2: Student = { firstName: "mohammed", lastName: "hany", age: 18, location: "cairo" };

let stds: Student[] = [std1, std2];


for (let i = 0; i < stds.length; i++) {
    console.log(`Name: ${stds[i].firstName} ${stds[i].lastName}, Age: ${stds[i].age}, location: ${stds[i].location}`);
}
