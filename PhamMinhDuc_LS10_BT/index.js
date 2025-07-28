function ptbn(x) {
    let A = 3;
    let B = 4;
    let value = A*x + B;
    return value;
}

function chuvi(width, length) {
    let chuvi = (width + length)*2;
    return chuvi;
}

function dien_tich_hinh_tron(r) {
    let area = 3.14*r^2;
    return area.toFixed(2);
}

function kiem_tra_so_nguyen_to(n) {
    n = parseInt(n);
    if (n<2) return false;
    for (let i = 2; i < n/2; i++) {
        if (n % i == 0) {
            return false;
        }
    return true
    }
}

function sum(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

function sum_2(start, end) {
    start = parseInt(start);
    end = parseInt(end);
    let so_so_hang = end - start + 1;
    let total = (end + start)*so_so_hang/2;
    return total;
}

function doixung(str) {
    str = str.toLowerCase();
    let reversed = str.split('').reversed().join('');
    return str === reversed;
}

function ktra_so_chan(arr) {
    for (let i =0; i < arr.length; i++) {
        if (arr[i] %2 !== 0) {
            return false;
        }
    }
    return true
}

function sum_3(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        if (args[i] >0) {
            total += args[i];
        } else {
            continue
        }
    }
    return total;
}

function TimGiaTriLonNhat(...numbers) {
    return Math.max(...numbers);
}

function sap_xep_nho_den_lon(arr) {
    return [...arr].sort((a, b) => a - b);
}

function function_12(Arr, k) {
    noDupArray = [...new Set(Arr)];
    let subArr = Arr.slice(0, k);
    return Math.max(...subArr);
}

function countAppearance(Arr, target) {
    let count = 0;
  for (let num of Arr) {
    if (num === target) {
      count++;
    }
  }
  return count;
}

function function_13(Arr) {
    let maxCount = 0
    let result = null
    let freq = {};
    for (let num of Arr) {
        freq[num] = (freq[num] || 0) + 1;
    }
    for (let key in freq) {
        let count = freq[key];
        let number = parseInt(key);
        if (count > maxCount || (count === maxCount && number > result)) {
            maxCount = count;
            result = number;
        }
    }
    return result
}

function splitWords(str) {
    return str.trim().split(/\s+/);
}

function tongCacSo(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            sum += obj[key];
        }
    }
    return sum
}