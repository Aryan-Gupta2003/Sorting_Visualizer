import React from 'react';

const AlgorithmDescription = ({ algorithm }) => {
    const descriptions = {
        'Bubble Sort': 'Bubble Sort is a simple comparison-based sorting algorithm...',
        'Insertion Sort': 'Insertion Sort is an efficient algorithm for small datasets...',
        'Merge Sort': 'Merge Sort is a divide-and-conquer algorithm that splits the array...',
        'Quick Sort': 'Quick Sort is a highly efficient sorting algorithm that works...',
        'Selection Sort': 'Selection Sort repeatedly finds the minimum element...',
    };

    return (
        <div className="algorithm-description">
            <h3>{algorithm}</h3>
            <p>{descriptions[algorithm]}</p>
        </div>
    );
};

export default AlgorithmDescription;
