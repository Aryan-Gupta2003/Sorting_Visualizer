export const bubbleSort = (array) => {
    const animations = [];
    const auxArray = array.slice();
    for (let i = 0; i < auxArray.length - 1; i++) {
        for (let j = 0; j < auxArray.length - i - 1; j++) {
            animations.push([j, j + 1, null]);
            if (auxArray[j] > auxArray[j + 1]) {
                const temp = auxArray[j];
                auxArray[j] = auxArray[j + 1];
                auxArray[j + 1] = temp;
                animations.push([j, j + 1, auxArray[j]]);
                animations.push([j + 1, j, auxArray[j + 1]]);
            }
        }
    }
    return animations;
};
