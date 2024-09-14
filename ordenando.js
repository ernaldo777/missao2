// ordenando.js - Arquivo para funções de ordenação

// Função swap: troca os valores de duas posições em um vetor
const swap = (array, pos1, pos2) => {
    [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

// Função shuffle: embaralha os elementos de um vetor
const shuffle = (array, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const pos1 = Math.floor(Math.random() * array.length);
        const pos2 = Math.floor(Math.random() * array.length);
        swap(array, pos1, pos2);
    }
};

// Função bubble_sort: ordena um vetor de inteiros usando o algoritmo Bubble Sort
const bubble_sort = (array) => {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
};

// Função selection_sort: ordena um vetor de inteiros usando o algoritmo Selection Sort
const selection_sort = (array) => {
    let len = array.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
};

// Função quick_sort: ordena um vetor de inteiros usando o algoritmo Quick Sort
const quick_sort = (array, start = 0, end = array.length - 1) => {
    if (start >= end) return;

    const pivotIndex = partition(array, start, end);
    quick_sort(array, start, pivotIndex - 1);
    quick_sort(array, pivotIndex + 1, end);
};

// Função auxiliar partition para o Quick Sort
const partition = (array, start, end) => {
    const pivotValue = array[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(array, pivotIndex, end);
    return pivotIndex;
};

// Função particionamento: utilizada para o algoritmo Quick Sort
const particionamento = (array, start, end, pivotValue) => {
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }
    swap(array, pivotIndex, end);
    return pivotIndex;
};
