import Building from './5-building.js';

// const b = new Building(100);
// console.log(b);

class TestBuilding extends Building {}

try {
    const e = new TestBuilding(200);
    e.evacuationWarningMessage();
}
catch(err) {
    console.log("e");
}
