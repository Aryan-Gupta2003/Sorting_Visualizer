import React, { useState, useEffect } from 'react';
import { bubbleSort } from '../algorithms/bubbleSort';
import { countingSort } from '../algorithms/countingSort';
import { heapSort } from '../algorithms/heapSort';
import { insertionSort } from '../algorithms/insertionSort';
import { mergeSort } from '../algorithms/mergeSort';
import { quickSort } from '../algorithms/quickSort';
import { radixSort } from '../algorithms/radixSort';
import { selectionSort } from '../algorithms/selectionSort';
import { generateRandomArray } from '../utils/arrayUtils';
import './SortingVisualizer.css';

const SortingVisualizer = () => {
    const [array, setArray] = useState([]);
    const [algorithm, setAlgorithm] = useState('Bubble Sort');
    const [speed, setSpeed] = useState(50);
    const [highlightedLine, setHighlightedLine] = useState(null);

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
            case 'Bubble Sort':
                animations = bubbleSort(array, setHighlightedLine);
                break;
            case 'Insertion Sort':
                animations = insertionSort(array, setHighlightedLine);
                break;
            case 'Merge Sort':
                animations = mergeSort(array, setHighlightedLine);
                break;
            case 'Quick Sort':
                animations = quickSort(array, setHighlightedLine);
                break;
            case 'Selection Sort':
                animations = selectionSort(array, setHighlightedLine);
                break;
            case 'Heap Sort':
                animations = heapSort(array, setHighlightedLine);
                break;
            case 'Counting Sort':
                animations = countingSort(array, setHighlightedLine);
                break;
            case 'Radix Sort':
                animations = radixSort(array, setHighlightedLine);
                break;
            default:
                break;
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

    const getCodeForAlgorithm = () => {
        switch (algorithm) {
            case 'Bubble Sort':
                return `
                for (let i = 0; i < array.length - 1; i++) { 
                    for (let j = 0; j < array.length - i - 1; j++) {
                        if (array[j] > array[j + 1]) {
                            swap(array, j, j + 1);
                        }
                    }
                }`;
            case 'Insertion Sort':
                return `
                for (let i = 1; i < array.length; i++) {
                    let j = i;
                    while (j > 0 && array[j - 1] > array[j]) {
                        swap(array, j, j - 1);
                        j--;
                    }
                }`;
            case 'Merge Sort':
                return `
                function mergeSort(array) {
                    if (array.length <= 1)
                        return array;
                    
                    const mid = Math.floor(array.length / 2);
                    const left = mergeSort(array.slice(0, mid));
                    const right = mergeSort(array.slice(mid));
                    return merge(left, right);
                }`;
            case 'Quick Sort':
                return `
                function quickSort(array, low, high) {
                    if (low < high) {
                        const pi = partition(array, low, high);
                        quickSort(array, low, pi - 1);
                        quickSort(array, pi + 1, high);
                    }
                }`;
            case 'Selection Sort':
                return `
                for (let i = 0; i < array.length - 1; i++) {
                    let minIdx = i;
                    for (let j = i + 1; j < array.length; j++) {
                        if (array[j] < array[minIdx]) {
                            minIdx = j;
                        }
                    }
                    swap(array, i, minIdx);
                }`;
            case 'Heap Sort':
                return `
                function heapSort(array) {
                    buildMaxHeap(array);
                    for (let i = array.length - 1; i > 0; i--) {
                        swap(array, 0, i);
                        heapify(array, 0, i);
                    }
                }`;
            case 'Counting Sort':
                return `
                function countingSort(array) {
                    const max = Math.max(...array);
                    const min = Math.min(...array);
                    const range = max - min + 1;
                    const count = new Array(range).fill(0);
                    const output = new Array(array.length).fill(0);
        
                    for (let i = 0; i < array.length; i++) {
                        count[array[i] - min]++;
                    }
        
                    for (let i = 1; i < count.length; i++) {
                        count[i] += count[i - 1];
                    }
        
                    for (let i = array.length - 1; i >= 0; i--) {
                        output[count[array[i] - min] - 1] = array[i];
                        count[array[i] - min]--;
                    }
        
                    for (let i = 0; i < array.length; i++) {
                        array[i] = output[i];
                    }
                }`;
            case 'Radix Sort':
                return `
                function radixSort(array) {
                    const getMax = (array) => Math.max(...array);
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
                        }
                    };
                    const max = getMax(array);
        
                    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
                        countingSort(array, exp);
                    }
                }`;
            default:
                return '';
        }
    };

    const handleSwap = (index1, index2) => {
        const newArray = [...array];
        [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
        setArray(newArray);
    };

    return (
        <div className="visualizer">
            <div className="controls">
                <button onClick={resetArray}>Generate New Array</button>
                <select onChange={(e) => setAlgorithm(e.target.value)}>
                    <option>Bubble Sort</option>
                    <option>Counting Sort</option>
                    <option>Heap Sort</option>
                    <option>Insertion Sort</option>
                    <option>Merge Sort</option>
                    <option>Quick Sort</option>
                    <option>Radix Sort</option>
                    <option>Selection Sort</option>
                </select>
                <button onClick={handleSort}>Sort</button>
                <input type="range" min="1" max="100" value={speed} onChange={(e) => setSpeed(e.target.value)}/>
            </div>
            <div className="array-container">
                {array.map((value, idx) => (
                    <div className="array-bar" key={idx} style={{ height: `${value}px` }}
                        onClick={() => handleSwap(idx, (idx + 1) % array.length)}>
                    </div>
                ))}
            </div>
            <div className="code-container">
                <pre>
                    <code>
                        {getCodeForAlgorithm().split('\n').map((line, index) => (
                            <div key={index} className = { highlightedLine === index ? 'highlighted-line' : ''}>
                                {line}
                            </div>
                        ))}
                    </code>
                </pre>
            </div>
        </div>
    );
};

export default SortingVisualizer;
