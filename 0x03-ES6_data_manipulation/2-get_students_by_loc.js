export default function getStudentsByLocation(stds, loc) {
  if (!Array.isArray(stds)) {
    return [];
  }

  return stds.filter((std) => std.location === loc);
}
