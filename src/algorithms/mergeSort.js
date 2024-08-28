export const mergeSort = (array) => {
    const animations = [];
    if (array.length <= 1)
        return array;
    const auxArray = array.slice();
    mergeSortHelper(auxArray, 0, auxArray.length - 1, array, animations);
    return animations;
};

const mergeSortHelper = (auxArray, startIdx, endIdx, mainArray, animations) => {
    if (startIdx === endIdx)
        return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(mainArray, startIdx, middleIdx, auxArray, animations);
    mergeSortHelper(mainArray, middleIdx + 1, endIdx, auxArray, animations);
    doMerge(auxArray, startIdx, middleIdx, endIdx, mainArray, animations);
};

const doMerge = (mainArray, startIdx, middleIdx, endIdx, auxArray, animations) => {
    let i = startIdx;
    let j = middleIdx + 1;
    let k = startIdx;
    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j, null]);
        if (auxArray[i] <= auxArray[j]) {
            animations.push([k, null, auxArray[i]]);
            mainArray[k++] = auxArray[i++];
        }
        else {
            animations.push([k, null, auxArray[j]]);
            mainArray[k++] = auxArray[j++];
        }
    }
    while (i <= middleIdx) {
        animations.push([i, i, null]);
        animations.push([k, null, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
    }
    while (j <= endIdx) {
        animations.push([j, j, null]);
        animations.push([k, null, auxArray[j]]);
        mainArray[k++] = auxArray[j++];
    }
};
