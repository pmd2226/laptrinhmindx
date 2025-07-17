console.log("1.");
let tong = 0;
for (let i = 1; i<101; i++ ) {
    tong += i
}
console.log(tong);

console.log ("2.")
for (let i = 0; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i)
    }
}

console.log("3.");
let luythua = 1;
let n = 7;
for (let i = n; i >= 1; i--) {
    luythua = luythua*i
}
console.log(luythua);

console.log("4.")
for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(i + " x " + j + " = " + (i * j));
    }
    console.log("");
}

console.log("5.");
let SoNguyen = 35;
let NhiPhan = ";";
while (SoNguyen>0) {
    NhiPhan = (SoNguyen %2 ) + NhiPhan
    SoNguyen = Math.floor(SoNguyen / 2)
}
console.log(NhiPhan)

console.log("6.")
let n1 = 5
let dapan1 = 0
for (let i = 1; i <= n1; i++) {
    dapan1 = Math.sqrt(i + dapan1)
}
console.log(dapan1)

console.log("7.")
let n2 = 7
let dapan2 = 0
for (let i = n2; i >= 1; i--) {
    dapan2 = Math.sqrt(i + dapan2)
}
console.log(dapan2)