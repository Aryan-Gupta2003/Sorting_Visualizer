# Sort Visualizer

Sort Visualizer is an interactive web application that visually demonstrates various sorting algorithms. The tool is designed to help users understand sorting processes step-by-step, making it an excellent educational tool for students, educators, and anyone interested in data structures and algorithms (DSA).

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Available Sorting Algorithms](#available-sorting-algorithms)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- **Visualize Sorting Algorithms**: Step-by-step visualization of popular sorting algorithms.
- **Code Highlighting**: Shows which part of the algorithm is being executed in real-time.
- **Responsive Design**: Works on desktops, tablets, and mobile devices.
- **User Interaction**: Allows users to manually swap and compare elements.
- **Complexity Display**: Displays time and space complexity of the selected algorithm.

## Demo

Check out the live demo of the project [here](#).

## Technologies Used

- **React**: Frontend JavaScript library for building interactive UIs.
- **JavaScript**: Core language for implementing algorithms.
- **CSS**: Styling for responsive and interactive designs.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [Node.js Official Website](https://nodejs.org/).

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/sort-visualizer.git
   cd sort-visualizer
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the application**:

   ```bash
   npm start
   ```

4. **Open the application in your browser**:
   ```bash
   http://localhost:3000
   ```

## Available Sorting Algorithms

- Bubble Sort
- Counting Sort
- Heap Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Radix Sort
- Selection Sort

## Usage

1. **Generate New Array**: Click the button to generate a random array.
2. **Select Algorithm**: Choose a sorting algorithm from the dropdown menu.
3. **Adjust Speed**: Use the slider to adjust the sorting speed.
4. **Sort**: Click the Sort button to see the algorithm in action.
5. **View Code**: The code being executed is highlighted in real-time on the left side of the screen.
6. **Complexity Display**: Once sorting is completed, view the sorted array along with time and space complexity.

## Project Structure

    ```plaintest
    sort-visualizer/
    │
    ├── public/                  # Static files
    │   ├── index.html
    │   └── favicon.ico
    │
    ├── src/
    │   ├── algorithms/          # Sorting algorithms
    │   ├── utils/               # Utility functions
    │   ├── components/          # React components
    │   ├── App.js               # Main App component
    │   ├── index.js             # Main entry point
    │   └── index.css            # Global styles
    │
    ├── .gitignore               # Git ignore file
    ├── package.json             # NPM package configuration
    ├── package-lock.json        # Lock file for dependencies
    └── README.md                # Project readme with instructions and details
    ```

## Contributing

Contributions are welcome! If you have suggestions for new features, bug fixes, or improvements, feel free to open an issue or submit a pull request.

### Steps to Contribute

1. Fork the project.
2. Create your feature branch (git checkout -b feature/YourFeature).
3. Commit your changes (git commit -m 'Add YourFeature').
4. Push to the branch (git push origin feature/YourFeature).
5. Open a Pull Request.
