// Table Generator
num = +prompt("Enter any number to see its multiplication table: " , "0")
document.write("<h3>Multiplication table of " + num + "</h3>")
for (let i = 1; i <= 10; i++) {
    document.write(num + " x " + i + " = " + num * i + '<br>')
}