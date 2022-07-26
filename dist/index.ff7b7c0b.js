function star1() {
    for(let i = 0; i < 5; i++)console.log("*".repeat(i + 1));
    console.log("");
}
function star2() {
    for(let i = 5; i > 0; i--)console.log("*".repeat(i));
    console.log("");
}
function star3() {
    for(let i = 1; i < 10; i = i + 2)console.log("*".repeat(i));
    console.log("");
}
function star4() {
    for(let i = 0; i < 5; i++)console.log(" ".repeat(i) + "*".repeat(5 - i));
    console.log("");
}
function star5() {
    for(let i = 1; i <= 5; i++)console.log(" ".repeat(5 - i) + "*".repeat(2 * i - 1));
    console.log("");
}
star1();
star2();
star3();
star4();
star5();

//# sourceMappingURL=index.ff7b7c0b.js.map
