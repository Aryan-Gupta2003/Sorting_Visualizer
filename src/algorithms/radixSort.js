export const radixSort = (array) => {
    const animations = [];
    const getMax = (array) => {
        return Math.max(...array);
    };

    const countingSort = (array, exp) => {
        const output = new Array(array.length).fill(0);
        const count = new Array(10).fill(0);

        for (let i = 0; i < array.length; i++) {
            count[Math.floor(array[i] / exp) % 10]++;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (let i = array.length - 1; i >= 0; i--) {
            const index = Math.floor(array[i] / exp) % 10;
            output[count[index] - 1] = array[i];
            count[index]--;
        }

        for (let i = 0; i < array.length; i++) {
            array[i] = output[i];
            animations.push([i, null, array[i]]);
        }
    };
    const max = getMax(array);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(array, exp);
    }
    return animations;
};
