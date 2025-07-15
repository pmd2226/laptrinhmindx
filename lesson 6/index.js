
let width = 10;
let length = 20;
let area = width*length;
console.log('1. Dien tich hinh chu nhat la', area);

console.log('2. S = 21273');
let S = 21273;
let gio=(S - S%3600)/3600;
let phut=((S %3600)-(S % 3600) % 60)/60;
let giay=S - phut*60-gio*3600;
console.log('->' + gio + 'h ' + phut + 'm ' + giay + 's');

console.log('3.');
let luyThua = 2;
let coSo = 5;
console.log(5**2);

console.log("4.");
let so1 = 18;
let so2 = 29;
let so3 = 128;
console.log('3 so theo thu tu la:', so1, so2, so3);
let average = (so1 + so2 + so3)/3;
console.log('trung binh cong cua 3 so:', average);

console.log("5.");
let x1 = 58;
let y1 = 23;
let x2 = 68;
let y2 = 44;
let distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
console.log(distance);

console.log('6.');
solonnhat = Math.max(so1, so2, so3);
if (solonnhat == so1) {
    console.log('true')
} else {
    console.log('false')
}

console.log('7.');
let chuoi1 = 'Xin chao';
let chuoi2 = 'Hello';
if (chuoi1 == chuoi2) {
    console.log('true')
} else {
    console.log('false')
}

console.log('8.');
let number8 = 5;
if (number8>0) {
    console.log(number8 +' true')
} else {
    console.log(number8 + ' flase')
}

console.log('9.')
let nam = 2024;
if (nam % 400 == 0) {
    console.log(nam+ ' true')
} else if (nam%100 == 0) {
    console.log(nam + ' false')
} else if (nam % 4 == 0) {
    console.log(nam+ ' true')
} else {
    console.log(nam + ' false')
}

console.log('10.')
let h1 = 18
let m1 = 21
let h2 = 19
let m2 = 22
if (h1>h2) {
    console.log('true')
} else if (h1 == h2 && m1 > m2) {
    console.log('true')
} else {
    console.log('false')
}