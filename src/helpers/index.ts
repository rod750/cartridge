export function calculateNewId(array: Array<any>) {
    return array.reduce((max, item) => Math.max(item.id || 1, max), 0) + 1;
}
