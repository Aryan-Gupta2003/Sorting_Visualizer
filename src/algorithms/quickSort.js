export const quickSort = (array) => {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
};

const quickSortHelper = (array, low, high, animations) => {
    if (low < high) {
        const pivotIndex = partition(array, low, high, animations);
        quickSortHelper(array, low, pivotIndex - 1, animations);
        quickSortHelper(array, pivotIndex + 1, high, animations);
    }
};

const partition = (array, low, high, animations) => {
    const pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        animations.push([j, high, null]);
        if (array[j] < pivot) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
            animations.push([i, j, array[i]]);
            animations.push([j, i, array[j]]);
        }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    animations.push([i + 1, high, array[i + 1]]);
    animations.push([high, i + 1, array[high]]);
    return i + 1;
};
