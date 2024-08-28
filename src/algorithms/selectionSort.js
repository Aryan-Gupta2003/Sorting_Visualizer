export const selectionSort = (array) => {
    const animations = [];
    const auxArray = array.slice();
    for (let i = 0; i < auxArray.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < auxArray.length; j++) {
            animations.push([minIdx, j, null]); // Compare
            if (auxArray[j] < auxArray[minIdx]) {
            minIdx = j;
            }
        }
        [auxArray[i], auxArray[minIdx]] = [auxArray[minIdx], auxArray[i]];
        animations.push([i, minIdx, auxArray[i]]);
        animations.push([minIdx, i, auxArray[minIdx]]);
    }
    return animations;
};
