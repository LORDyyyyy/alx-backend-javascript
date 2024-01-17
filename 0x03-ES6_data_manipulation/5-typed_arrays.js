export default function createInt8TypedArray(len, pos, val) {
  if (pos < 0 || pos >= len) {
    throw new Error('Position outside range');
  }
  const buffer = new ArrayBuffer(len);
  const arr = new Int8Array(buffer);
  arr[pos] = val;

  return buffer;
}
