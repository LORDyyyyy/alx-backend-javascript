const fs = require('fs');

let data = null;
function countStudents(path) {
  try {
    data = fs.readFileSync(path, 'utf-8');
  } catch (err) {
    console.log('Cannot load the database');
    process.exit();
  }
  data = data.split('\n').filter((line) => line.trim() !== '');
  data.shift();
  const numberOfStd = data.length;
  const fields = {};

  for (const i in data) { // eslint-disable-line guard-for-in
    const line = data[i].split(',');
    if (!fields[line[3]]) {
      fields[line[3]] = [];
    }
    fields[line[3]].push(line[0]);
  }
  console.log(`Number of students: ${numberOfStd}`);
  Object.keys(fields).forEach((field) => {
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  });
}

module.exports = countStudents;
