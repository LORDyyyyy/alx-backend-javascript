const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        const keyValueArray = Object.entries(data);
        keyValueArray.sort((a, b) => a[0].localeCompare(b[0]));
        data = Object.fromEntries(keyValueArray);
        let output = 'This is the list of our students\n'
        for (let field in data) {
          output += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`
        }
        res.status(200).send(output.trim());
      })
      .catch((err) => {
        res.status(500).send('Cannot load the database');
      });
  }
  static getAllStudentsByMajor(req, res) {
    const field = req.params.major;
    readDatabase(process.argv[2])
      .then((data) => {
        if (!(field in data)) {
          res.status(500).send('Major parameter must be CS or SWE');
        } else {
          res.status(200).send(`List: ${data[field].join(', ')}`);
        }
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
