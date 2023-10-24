var angka1 = parseInt(prompt('Pilih angka pertama'));

var operator = prompt('Pilih operator');

var angka2 = parseInt(prompt('Pilih angka kedua'));
    
if (operator === '+') {
    document.writeln(`hasilnya adalah ${angka1+angka2}`)
}else if (operator === '-'){
    document.writeln(`hasilnya adalah ${angka1-angka2}`)
}else if (operator === '*') {
    document.write(`hasilnya adalah ${angka1*angka2}`)
}else if (operator === '/') {
    document.write(`hasilnya adalah ${angka1/angka2}`)
}else{
    document.write(`error`)
}