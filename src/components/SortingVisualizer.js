import React, { useState, useEffect } from 'react';
import { bubbleSort } from '../algorithms/bubbleSort';
import { insertionSort } from '../algorithms/insertionSort';
import { mergeSort } from '../algorithms/mergeSort';
import { quickSort } from '../algorithms/quickSort';
import { selectionSort } from '../algorithms/selectionSort';
import { generateRandomArray } from '../utils/arrayUtils';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
    const [algorithm, setAlgorithm] = useState('Bubble Sort');
    const [speed, setSpeed] = useState(50);

    useEffect(() => {
        resetArray();
    }, []);

    const resetArray = () => {
        const newArray = generateRandomArray(50);
        setArray(newArray);
    };

    const handleSort = () => {
        let animations;
        switch (algorithm) {
            case 'Bubble Sort': animations = bubbleSort(array);
                                break;
            case 'Insertion Sort':  animations = insertionSort(array);
                                    break;
            case 'Merge Sort':  animations = mergeSort(array);
                                break;
            case 'Quick Sort':  animations = quickSort(array);
                                break;
            case 'Selection Sort':  animations = selectionSort(array);
                                    break;
            default:    break;
        }
        animateSorting(animations);
    };

    const animateSorting = (animations) => {
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx, newHeight] = animations[i];
            setTimeout(() => {
                if (newHeight !== null) {
                    arrayBars[barOneIdx].style.height = `${newHeight}px`;
                }
                else {
                    arrayBars[barOneIdx].style.backgroundColor = 'red';
                    arrayBars[barTwoIdx].style.backgroundColor = 'red';
                }
            }, i * speed);
        }
    };

    return (
        <div className="visualizer">
            <div className="controls">
                <button onClick={resetArray}>Generate New Array</button>
                <select onChange={(e) => setAlgorithm(e.target.value)}>
                    <option>Bubble Sort</option>
                    <option>Insertion Sort</option>
                    <option>Merge Sort</option>
                    <option>Quick Sort</option>
                    <option>Selection Sort</option>
                </select>
                <button onClick={handleSort}>Sort</button>
                <input type="range" min="1" max="100" value={speed}
                    onChange={(e) => setSpeed(e.target.value)} />
            </div>
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                    className="array-bar"
                    key={idx}
                    style={{ height: `${value}px` }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default SortingVisualizer;
