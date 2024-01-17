export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
        throw new Error('Cannot process');
    }

    return map.forEach((value, key, map) => value = value === 1 ? 100 : value)
}
