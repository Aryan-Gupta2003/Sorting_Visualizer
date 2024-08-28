export const generateRandomArray = (size) => {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * 500) + 5);
    }
    return array;
};
