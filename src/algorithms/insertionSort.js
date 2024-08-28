export const insertionSort = (array) => {
    const animations = [];
    const auxArray = array.slice();
    for (let i = 1; i < auxArray.length; i++) {
        let j = i;
        while (j > 0 && auxArray[j - 1] > auxArray[j]) {
            animations.push([j - 1, j, null]);
            const temp = auxArray[j];
            auxArray[j] = auxArray[j - 1];
            auxArray[j - 1] = temp;
            animations.push([j - 1, j, auxArray[j - 1]]);
            animations.push([j, j - 1, auxArray[j]]);
            j--;
        }
    }
    return animations;
};
