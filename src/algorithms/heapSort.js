export const heapSort = (array, setHighlightedLine) => {
    const animations = [];
    let n = array.length;

    const heapify = (array, n, i) => {
        setHighlightedLine(1);
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;

        if (l < n && array[l] > array[largest]) {
            largest = l;
        }
        if (r < n && array[r] > array[largest]) {
            largest = r;
        }

        if (largest !== i) {
            setHighlightedLine(8); // Highlight the line in the code
            [array[i], array[largest]] = [array[largest], array[i]];
            animations.push([i, largest, array[i]]);
            animations.push([largest, i, array[largest]]);
            heapify(array, n, largest);
        }
    };

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]];
        animations.push([0, i, array[0]]);
        animations.push([i, 0, array[i]]);
        heapify(array, i, 0);
    }
    return animations;
};
