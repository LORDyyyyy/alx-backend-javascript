export default function hasValuesFromArray(st, arr) {
  for (const i of arr) {
    if (!st.has(i)) {
      return false;
    }
  }
  return true;
}
