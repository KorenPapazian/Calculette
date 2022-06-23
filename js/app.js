let chiffres = "0";
let chiffres2 = "0";
let signes;
let nombreEcran = document.getElementById("nombreEcran").innerText = chiffres;
let signesEcran = document.getElementById("signesEcran");

const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

const plus = document.getElementById("plus");
const moins = document.getElementById("moins");
const fois = document.getElementById("fois");
const diviser = document.getElementById("diviser");

one.addEventListener("click", () => {
    if (chiffres == "0") {
        chiffres = "1";
        document.getElementById("nombreEcran").innerText = chiffres;
    }
    else if (chiffres > "0") {
        chiffres2 = "1";
        chiffres += chiffres2;
        document.getElementById("nombreEcran").innerText = chiffres;
    }
});

two.addEventListener("click", () => {
    if (chiffres == "0") {
        chiffres = "2";
        document.getElementById("nombreEcran").innerText = chiffres;
    }
    else if (chiffres > "0") {
        chiffres2 = "2";
        chiffres += chiffres2;
        document.getElementById("nombreEcran").innerText = chiffres;
    }
});

three.addEventListener("click", () => {
    if (chiffres == "0") {
        chiffres = "3";
        document.getElementById("nombreEcran").innerText = chiffres;
    }
    else if (chiffres > "0") {
        chiffres2 = "3";
        chiffres += chiffres2;
        document.getElementById("nombreEcran").innerText = chiffres;
    }
});

four.addEventListener("click", () => {
    if (chiffres == "0") {
        chiffres = "4";
        document.getElementById("nombreEcran").innerText = chiffres;
    }
    else if (chiffres > "0") {
        chiffres2 = "4";
        chiffres += chiffres2;
        document.getElementById("nombreEcran").innerText = chiffres;
    }
});

five.addEventListener("click", () => {
    if (chiffres == "0") {
        chiffres = "5";
        document.getElementById("nombreEcran").innerText = chiffres;
    }
    else if (chiffres > "0") {
        chiffres2 = "5";
        chiffres += chiffres2;
        document.getElementById("nombreEcran").innerText = chiffres;
    }
});

six.addEventListener("click", () => {
    if (chiffres == "0") {
        chiffres = "6";
        document.getElementById("nombreEcran").innerText = chiffres;
    }
    else if (chiffres > "0") {
        chiffres2 = "6";
        chiffres += chiffres2;
        document.getElementById("nombreEcran").innerText = chiffres;
    }
});

seven.addEventListener("click", () => {
    if (chiffres == "0") {
        chiffres = "7";
        document.getElementById("nombreEcran").innerText = chiffres;
    }
    else if (chiffres > "0") {
        chiffres2 = "7";
        chiffres += chiffres2;
        document.getElementById("nombreEcran").innerText = chiffres;
    }
});

eight.addEventListener("click", () => {
    if (chiffres == "0") {
        chiffres = "8";
        document.getElementById("nombreEcran").innerText = chiffres;
    }
    else if (chiffres > "0") {
        chiffres2 = "8";
        chiffres += chiffres2;
        document.getElementById("nombreEcran").innerText = chiffres;
    }
});

nine.addEventListener("click", () => {
    if (chiffres == "0") {
        chiffres = "9";
        document.getElementById("nombreEcran").innerText = chiffres;
    }
    else if (chiffres > "0") {
        chiffres2 = "9";
        chiffres += chiffres2;
        document.getElementById("nombreEcran").innerText = chiffres;
    }
});

zero.addEventListener("click", () => {
    if (chiffres == "0") {
        chiffres = "0";
        document.getElementById("nombreEcran").innerText = chiffres;
    }
    else if (chiffres > "0") {
        chiffres2 = "0";
        chiffres += chiffres2;
        document.getElementById("nombreEcran").innerText = chiffres;
    }
});

plus.addEventListener("click", () => {
    signes = "+";
    signesEcran.innerText = signes;
});

moins.addEventListener("click", () => {
    signes = "-";
    signesEcran.innerText = signes;
});

fois.addEventListener("click", () => {
    signes = "*";
    signesEcran.innerText = signes;
});

diviser.addEventListener("click", () => {
    signes = "/";
    signesEcran.innerText = signes;
});