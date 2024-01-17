export default function getListStudentIds(ids) {
  if (!Array.isArray(ids)) {
    return [];
  }

  return ids.map((std) => std.id);
}
