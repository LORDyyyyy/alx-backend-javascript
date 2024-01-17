export default function getStudentIdsSum(stds) {
  if (!Array.isArray(stds)) {
    return [];
  }

  return stds.reduce((tot, curr) => tot + curr.id, 0);
}
