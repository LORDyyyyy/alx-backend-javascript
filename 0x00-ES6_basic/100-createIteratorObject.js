export default function createIteratorObject(report) {
  const arr = [];
  for (const val of Object.values(report.allEmployees)) {
    for (const value of val) {
      arr.push(value);
    }
  }

  return arr;
}
