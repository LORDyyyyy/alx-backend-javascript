export default function (set, str) {
  return Array.from(set).filter((e) => e.startsWith(str) && str !== '').map((e) => e.slice(str.length)).join('-');
}
