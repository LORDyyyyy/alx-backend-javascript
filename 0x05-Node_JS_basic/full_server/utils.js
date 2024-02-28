const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    try {
      let data = fs.readFileSync(path, 'utf-8');
      data = data.split('\n').filter((line) => line.trim() !== '');
      data.shift();
      const fields = {};

      for (const i in data) { // eslint-disable-line guard-for-in
        const line = data[i].split(',');
        if (!fields[line[3]]) {
          fields[line[3]] = [];
        }
        fields[line[3]].push(line[0]);
      }
      // console.log(`Number of students: ${numberOfStd}`);
      // Object.keys(fields).forEach((field) => {
      //   console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      // });
      resolve(fields);
    } catch (err) {
      reject(err.message);
    }
  });
}

module.exports = readDatabase;
