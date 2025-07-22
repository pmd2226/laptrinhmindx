console.log("1.");
let names_1 = ["Alice", "Bob", "Charlie", "David", "Eve"];
console.log(names_1[0], names_1[4]);

console.log("2.");
let names_2 = ["John", "Jane", "Jim", "Jake"];
names_2 = "Mary";
console.log(names_2)

console.log("3.");
let names_3 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (let i = 0; i <6; i++) {
    console.log(names_3[i])
}

console.log("4.");
let names_4 = ["Alice", "Bob", "Charlie", "David"];
names_4[4] = "MindX"
console.log(names_4)

console.log("5.");
let numbers_5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 10; i++) {
    if (numbers_5[i] % 2 != 0) {
        console.log(numbers_5[i])
    }
}

console.log("6.");
let names_6 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (let i = 0; i <6; i++) {
    if (names_6[i] === "David") {
        console.log("David nằm ở vị trí số", i+1)
    }
}

console.log("7.");
let numbers_7 = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2]
let XuatHien = 0
for (let i = 0; i < 10; i++) {
    if (numbers_7[i] == 2) {
        XuatHien += 1
    }
}
console.log("Số lần số 2 xuất hiện là", XuatHien);

console.log("8.");
let numbers_8 = [5, 2, 9, 3, 7, 11, 8];
let SoLonNhat = -999
for (let i = 0; i < 7; i++) {
    if (numbers_8[i] > SoLonNhat) {
        SoLonNhat = numbers_8[i]
    }
}
console.log("So lon nhat la", SoLonNhat);

console.log("9.");
const array_9 = [1, 2, 3, 4, 5];
let reversedArray = array_9.reverse();
console.log(reversedArray)

console.log("10.");
const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
let nodupArray = [...new Set(duplicatesArray)]
console.log(nodupArray)

console.log("11.");
let numbers_11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Tong = 0
for (let i = 0; i < 10; i++) {
    Tong += numbers_11[i]
}
console.log(Tong)