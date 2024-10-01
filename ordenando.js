const swap = (array, i, j) => {
    [array[i], array[j]] = [array[j], array[i]];
};

const shuffle = (array, swaps) => {
    for (let i = 0; i < swaps; i++) {
        const a = Math.floor(Math.random() * array.length);
        const b = Math.floor(Math.random() * array.length);
        swap(array, a, b);
    }
};

const bubble_sort = (array) => {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
            }
        }
    }
    return array;
};

const selection_sort = (array) => {
    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        swap(array, i, minIndex);
    }
    return array;
};

const quick_sort = (array, low, high) => {
    if (low < high) {
        let pi = particionamento(array, low, high);
        quick_sort(array, low, pi - 1);
        quick_sort(array, pi + 1, high);
    }
    return array;
};

const particionamento = (array, low, high) => {
    let pivot = array[high];
    let i = (low - 1);
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
};